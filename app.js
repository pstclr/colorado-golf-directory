// === AFFILIATE CONFIG ===========================================
// Set once GolfNow (or its network) approves us. Leave null for plain links.
// Example: (url)=>`https://TRACKING-DOMAIN/c/PUBLISHER_ID/AD_ID?u=${encodeURIComponent(url)}`
const GOLFNOW_AFFILIATE_WRAP = null;
const TEEOFF_AFFILIATE_WRAP = null;   // same idea for TeeOff once approved
// Preferred booking provider: 'golfnow' or 'teeoff'. Falls back to the other if a course lacks that URL.
const BOOKING_PROVIDER = 'golfnow';
// === SPONSOR BANNER ==============================================
// Swap image/link/text here. href:null = not clickable. credit is optional (HTML).
const SPONSOR_BANNER = {
  image: 'images/banner.webp',
  alt: 'Golf green with a red flag framed by sculpted bunkers',
  href: null,
  label: 'Sponsored placement',
  text: 'Your course here',
  credit: ''   // optional credit HTML; empty = none (banner image is AI-generated, no attribution needed)
};
// ==================================================================
const wrap=(u,w)=>u?(w?w(u):u):null;
const PROVIDERS={golfnow:['GolfNow','golfnow_url',GOLFNOW_AFFILIATE_WRAP],teeoff:['TeeOff','teeoff_url',TEEOFF_AFFILIATE_WRAP]};
const pick=c=>{const o=[BOOKING_PROVIDER,...Object.keys(PROVIDERS).filter(k=>k!=BOOKING_PROVIDER)];
  for(const k of o){const[l,f,w]=PROVIDERS[k];if(c[f])return[l,wrap(c[f],w)]}return null};
const bookBtn=(c,big)=>{const p=pick(c);if(p){const[l,u]=p;
  return`<a class="book${big?' big':''}" href="${u}" target="_blank" rel="sponsored noopener" title="Book tee times on ${l} (we may earn a commission)">${big?'Book on '+l+' ↗':'Book'}</a>${big?'<div class="bkdisc" style="color:var(--mut);font-size:11px;margin-top:4px">We may earn a commission on bookings, at no extra cost to you. <a href="affiliate-disclosure.html">Disclosure</a></div>':''}`}
  if(c.booking_url)return`<a class="book site${big?' big':''}" href="${c.booking_url}" target="_blank" rel="noopener" title="Book on the course's own tee-time page (${c.booking_vendor})">${big?'Book on course site ↗':'Book'}</a>`;return''};
(()=>{const B=SPONSOR_BANNER,el=document.getElementById('banner');if(!B||!el)return;
 const inner=`<img src="${B.image}" alt="${B.alt}" fetchpriority="high"><div class="bn-ov"><span class="bn-lbl">${B.label}</span><span class="bn-txt">${B.text}</span></div>`;
 el.innerHTML=(B.href?`<a href="${B.href}" target="_blank" rel="sponsored noopener">${inner}</a>`:inner)+(B.credit?`<div class="bn-cr">${B.credit}</div>`:'')})();
const D=window.COURSES;
const isPriv=c=>/private/i.test((c.type||'')+' '+(c.type_raw||''));let sortK='name',asc=true,openId=null;
const $=s=>document.querySelector(s);
function gmapsUrl(c){const q=c.lat!=null?`${c.lat},${c.lng}`:[c.name,c.address].filter(Boolean).join(', ');return'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q)}
const f=v=>v==null||v===''?'<span class="na">—</span>':v;
const badge=c=>c.gd100_rank?`<span class="gd100" title="Golf Digest America's 100 Greatest Golf Courses (${c.gd100_edition}): #${c.gd100_rank}">GD100 #${c.gd100_rank}</span>`:'';
for(const t of [...new Set(D.map(c=>c.type))].sort())$('#type').innerHTML+=`<option>${t}</option>`;
for(const n of [...new Set(D.flatMap(c=>c.networks||[]))].sort())$('#network').innerHTML+=`<option>${n}</option>`;
for(const s of [...new Set(D.map(c=>c.state).filter(Boolean))].sort())$('#state').innerHTML+=`<option>${s}</option>`;
// Regions are per state: options are grouped by state and values are "STATE|Region".
function fillRegions(){const st=$('#state').value,nw=$('#network').value,cur=$('#region').value;const by={};
 D.forEach(c=>{if(c.region&&(!st||c.state==st)&&(!nw||(nw=='*'?c.networks:(c.networks||[]).includes(nw))))(by[c.state]=by[c.state]||new Set).add(c.region)});
 const ks=Object.keys(by).sort();$('#region').innerHTML='<option value="">All regions</option>'+ks.map(s=>{const o=[...by[s]].sort().map(r=>`<option value="${s}|${r}">${ks.length>1?s+' · ':''}${r}</option>`).join('');return o}).join('');
 if([...$('#region').options].some(o=>o.value==cur))$('#region').value=cur}
fillRegions();
function rows(){const q=$('#q').value.toLowerCase(),ty=$('#type').value,rg=$('#region').value,st=$('#state').value,ho=$('#holes').value,rk=$('#ranked').checked,pp=$('#popular').checked;
 let L=D.filter(c=>(!q||[c.name,c.city,c.architect].join(' ').toLowerCase().includes(q))&&(!ty||c.type==ty)&&(!st||c.state==st)&&(!rg||c.state+'|'+c.region==rg)&&(!rk||c.gd_state_rank||c.gd100_rank)&&(!pp||c.popular_rank)
  &&(!ho||(ho=='27'?c.holes>=27:c.holes==+ho)));
 L.sort((a,b)=>{let x=a[sortK],y=b[sortK];
  if(x==null&&y==null)return a.name.localeCompare(b.name);if(x==null)return 1;if(y==null)return -1;
  return (typeof x=='string'?x.localeCompare(y):x-y)*(asc?1:-1)||a.name.localeCompare(b.name)});return L}
function detail(c){const kv=(k,v)=>`<div class="kv${v!=null&&String(v).replace(/<[^>]+>/g,'').length>34?' stack':''}"><span>${k}</span><span>${f(v)}</span></div>`;
 const ph=c.photo?`<figure class="cphoto"><img loading="lazy" decoding="async" src="${c.photo.path}" alt="${c.name}"><figcaption>Photo: ${c.photo.author} · <a href="${c.photo.source_url}" target="_blank" rel="noopener">Wikimedia Commons</a> · ${c.photo.license_url?`<a href="${c.photo.license_url}" target="_blank" rel="noopener">${c.photo.license}</a>`:c.photo.license}</figcaption></figure>`:'';
 return`<tr class="detail"><td colspan="16"><div class="grid">
 <div><h4>Course</h4>${kv('Address',c.address?`<a href="${gmapsUrl(c)}" target="_blank" rel="noopener">${c.address}</a>`:null)}${kv('State',c.state)}${kv('Region',c.region)}${kv('Type (source)',c.type_raw)}${kv('Holes / Par',(c.holes||'—')+' / '+(c.par||'—'))}${kv('Yardage (max)',c.yardage&&c.yardage.toLocaleString())}${kv('Elevation',c.elevation_ft&&c.elevation_ft.toLocaleString()+' ft')}${kv('Architect',c.architect_parts?c.architect_parts.map(([t,u])=>u?`<a href="${u}" target="_blank" rel="noopener">${t}</a>`:t).join(''):null)}${kv('Opened',c.year_opened)}</div>
 <div><h4>Rankings &amp; tee data</h4>${c.status_note?kv('Status',`<span class="closed">${c.status_note}</span> <a href="${c.status_source}" target="_blank" rel="noopener" title="Source">[src]</a>`):''}${kv("GD America's 100 Greatest",c.gd100_rank?`<span class="rk100">#${c.gd100_rank}</span> <span class="tag">(${c.gd100_edition})</span>`:null)}${kv(`GD Best in State (${c.state})`,c.gd_state_rank?`#${c.gd_state_rank} <span class="tag">(${c.gd_state_edition})</span>`:null)}${kv('Listed by GD as',c.gd_state_name)}${kv('Back tee',c.back_tee?c.back_tee+' · '+c.rating+'/'+c.slope+' · par '+c.back_par:null)}${isPriv(c)?kv('Network',c.networks?c.networks.join(', '):null)+kv('Reciprocal play',c.reciprocal?c.reciprocal+' '+c.access_sources.map((u,k)=>`<a href="${u}" target="_blank" rel="noopener" title="Source">[${k+1}]</a>`).join(''):null):''}</div>
 <div><h4>Rates & contact</h4>${pick(c)?`<div class="bkrow">${bookBtn(c,true)}</div>`:''}${c.green_fees_text?kv('Green fees (course-published)',c.green_fees_text):''}${c.twilight_text?kv('Twilight (course-published)',c.twilight_text):''}${kv('Phone',c.phone)}${kv('Website',c.website?`<a href="${c.website}" target="_blank">${c.website.replace(/https?:\/\/(www\.)?/,'').replace(/\/$/,'')}</a>`:null)}${kv('Amenities',(c.amenities||[]).join(', '))}</div>
 <div><h4>Tees</h4><table class="tees"><tr><th>Tee</th><th>Yds</th><th>Rating</th><th>Slope</th></tr>${(c.tees||[]).map(t=>`<tr><td>${t.tee_name} ${t.gender?'('+t.gender[0]+')':''}</td><td>${f(t.yardage)}</td><td>${f(t.course_rating)}</td><td>${f(t.slope)}</td></tr>`).join('')||'<tr><td colspan=4 class=tag>No tee data</td></tr>'}</table></div>
 <div><h4>Sources</h4>${[...c.sources,c.gd_state_source,c.gd100_source].filter(Boolean).map(u=>`<div><a href="${u.split(' ')[0]}" target="_blank">${u.replace(/https?:\/\//,'').slice(0,60)}</a></div>`).join('')}</div>${ph?`<div class="phslot">${ph}</div>`:''}
 </div></td></tr>`}
function render(){const L=rows();$('#count').textContent=`${L.length} of ${D.length} courses · ${D.filter(c=>c.gd_state_rank).length} ranked by Golf Digest (CO, 2025-26)`;
 document.querySelectorAll('th[data-k]').forEach(th=>{th.classList.toggle('sorted',th.dataset.k==sortK);th.classList.toggle('asc',asc)});
 $('#t tbody').innerHTML=L.map(c=>`<tr class="row ${openId==c.id?'open':''}" data-id="${c.id}"><td class="name" title="${c.name.replace(/"/g,'&quot;')}">${c.popular_rank?`<span class="nm">${c.name}</span>`:c.name}${c.popular_rank?'<span class="pop" title="Among the 10 most-discussed Colorado courses online">Popular</span>':''}</td><td>${f(c.state)}</td><td>${f(c.city)}</td><td class="tag">${f(c.region)}</td><td class="tag">${c.type}</td>
 <td class="num">${c.gd100_rank?`<span class="rk100">${c.gd100_rank}</span>`:f(null)}</td><td class="num">${c.gd_state_rank?`<span class="rk">${c.gd_state_rank}</span>`:f(null)}</td><td class="num">${f(c.holes)}</td><td class="num">${f(c.par)}</td><td class="num">${c.yardage?c.yardage.toLocaleString():f(null)}</td>
 <td class="num">${f(c.rating)}</td><td class="num">${f(c.slope)}</td><td class="num">${c.elevation_ft?c.elevation_ft.toLocaleString():f(null)}</td><td class="num">${bookBtn(c)}</td></tr>${openId==c.id?detail(c):''}`).join('')}
document.querySelectorAll('th[data-k]').forEach(th=>th.onclick=()=>{const k=th.dataset.k;if(sortK==k)asc=!asc;else{sortK=k;asc=['name','state','city','region','type','gd_state_rank','gd100_rank'].includes(k)}render()});
$('#t tbody').onclick=e=>{const r=e.target.closest('tr.row');if(!r||e.target.closest('a'))return;openId=openId==r.dataset.id?null:r.dataset.id;render()};
['#q','#type','#region','#holes','#ranked','#popular','#network'].forEach(s=>$(s).oninput=render);
$('#state').oninput=()=>{fillRegions();render()};
const P=new URLSearchParams(location.search);if(P.get('sort')){sortK=P.get('sort');asc=P.get('dir')!='desc'}
if(P.get('open')){const o=D.find(c=>c.name==P.get('open'));if(o)openId=o.id}
render();
