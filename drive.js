(function(){
const KEY='cgd_drive_v2',D=window.COURSES,q=s=>document.querySelector(s);
window.DRIVE=JSON.parse(localStorage.getItem(KEY)||'null')||{origin:null,times:{}};
let busy=false;
function apply(){for(const c of D){const t=DRIVE.times[c.id];c.drive_min=t?t[0]:null;c.drive_mi=t?t[1]:null}window.rerender()}
const status=(t,err)=>{const s=q('#dstatus');s.textContent=t;s.style.color=err?'#e0796a':''};
async function geocode(text){
  const r=await fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=us&viewbox=-109.1,41.1,-102.0,36.9&q='+encodeURIComponent(text));
  if(!r.ok)throw new Error('Location lookup failed ('+r.status+')');const j=await r.json();
  if(!j.length)throw new Error('Couldn’t find that place — try a city or ZIP.');return{lat:+j[0].lat,lng:+j[0].lon,label:j[0].display_name}}
async function table(o){
  const pts=D.filter(c=>c.lat!=null),times={};let failed=0;
  for(let i=0;i<pts.length;i+=100){const ch=pts.slice(i,i+100);
    status(`Calculating drive times… ${i}/${pts.length}`);
    const coords=[`${o.lng.toFixed(5)},${o.lat.toFixed(5)}`,...ch.map(c=>`${c.lng.toFixed(5)},${c.lat.toFixed(5)}`)].join(';');
    try{const r=await fetch(`https://router.project-osrm.org/table/v1/driving/${coords}?sources=0&annotations=duration,distance`);
      const j=await r.json();if(j.code!='Ok')throw 0;
      ch.forEach((c,k)=>{const d=j.durations[0][k+1],m=j.distances[0][k+1];if(d!=null)times[c.id]=[Math.round(d/60),Math.round(m/1609.34)]});
    }catch(e){failed+=ch.length}}
  return{times,failed}}
async function run(text,pt){
  if(busy)return;busy=true;q('#dgo').disabled=true;
  try{status('Finding location…');const o=pt||await geocode(text);
    const {times,failed}=await table(o);
    if(!Object.keys(times).length)throw new Error('Drive-time service unavailable — try again later.');
    window.DRIVE={origin:text,label:o.label,times,at:Date.now()};localStorage.setItem(KEY,JSON.stringify(DRIVE));apply();
    status(`${Object.keys(times).length} drive times from ${o.label.split(',').slice(0,2).join(',')}`+(failed?` · ${failed} failed`:''));
  }catch(e){status(e.message||'Something went wrong.',true)}
  finally{busy=false;q('#dgo').disabled=false}}
q('#dform').onsubmit=e=>{e.preventDefault();const v=q('#dorigin').value.trim();if(!v)return;
  if(v==DRIVE.origin&&Object.keys(DRIVE.times).length){status('Using saved drive times');return}run(v)};
q('#dgeo').onclick=()=>{if(!navigator.geolocation)return status('Location not available in this browser.',true);status('Getting your location…');
  navigator.geolocation.getCurrentPosition(p=>{const o={lat:p.coords.latitude,lng:p.coords.longitude,label:'your location'};q('#dorigin').value=`${o.lat.toFixed(4)},${o.lng.toFixed(4)}`;run(q('#dorigin').value,o)},
    ()=>status('Location permission denied — type an address instead.',true),{timeout:10000})};
if(DRIVE.origin){q('#dorigin').value=DRIVE.origin;status(`Saved: ${Object.keys(DRIVE.times).length} drive times`)}
apply();
const P=new URLSearchParams(location.search);if(P.get('from')){q('#dorigin').value=P.get('from');q('#dform').requestSubmit()}
})();
