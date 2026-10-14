const D=window.COURSES;let sortK='name',asc=true,openId=null;
const $=s=>document.querySelector(s);
const fmtT=m=>{const h=Math.floor(m/60);return h?`${h} hr ${m%60} min`:`${m} min`};
function gmapsUrl(c){const o=window.DRIVE&&DRIVE.origin;const d=c.lat!=null?`${c.lat},${c.lng}`:encodeURIComponent(c.address);return'https://www.google.com/maps/dir/?api=1'+(o?'&origin='+encodeURIComponent(o):'')+'&destination='+d}
window.rerender=()=>render();
const f=v=>v==null||v===''?'<span class="na">—</span>':v;
const badge=c=>c.gd100_rank?`<span class="gd100" title="Golf Digest America's 100 Greatest Golf Courses (${c.gd100_edition}): #${c.gd100_rank}">GD100 #${c.gd100_rank}</span>`:'';
for(const t of [...new Set(D.map(c=>c.type))].sort())$('#type').innerHTML+=`<option>${t}</option>`;
for(const r of [...new Set(D.map(c=>c.region).filter(Boolean))].sort())$('#region').innerHTML+=`<option>${r}</option>`;
function rows(){const q=$('#q').value.toLowerCase(),ty=$('#type').value,rg=$('#region').value,ho=$('#holes').value,rk=$('#ranked').checked;
 let L=D.filter(c=>(!q||[c.name,c.city,c.architect].join(' ').toLowerCase().includes(q))&&(!ty||c.type==ty)&&(!rg||c.region==rg)&&(!rk||c.gd_co_rank)
  &&(!ho||(ho=='27'?c.holes>=27:c.holes==+ho)));
 L.sort((a,b)=>{let x=a[sortK],y=b[sortK];
  if(x==null&&y==null)return a.name.localeCompare(b.name);if(x==null)return 1;if(y==null)return -1;
  return (typeof x=='string'?x.localeCompare(y):x-y)*(asc?1:-1)||a.name.localeCompare(b.name)});return L}
function detail(c){const kv=(k,v)=>`<div class="kv"><span>${k}</span><span>${f(v)}</span></div>`;
 return`<tr class="detail"><td colspan="13"><div class="grid">
 <div><h4>Course</h4>${kv('Address',c.address?`<a href="${gmapsUrl(c)}" target="_blank" rel="noopener">${c.address}</a>`:null)}${kv('Drive',c.drive_min!=null?`${fmtT(c.drive_min)} · ${c.drive_mi} mi`:null)}${kv('Region',c.region)}${kv('Type (source)',c.type_raw)}${kv('Holes / Par',(c.holes||'—')+' / '+(c.par||'—'))}${kv('Yardage (max)',c.yardage&&c.yardage.toLocaleString())}${kv('Elevation',c.elevation_ft&&c.elevation_ft.toLocaleString()+' ft')}${kv('Architect',c.architect)}${kv('Opened',c.year_opened)}</div>
 <div><h4>Rankings &amp; tee data</h4>${kv('GD Best in Colorado',c.gd_co_rank?`#${c.gd_co_rank} <span class="tag">(${c.gd_co_edition})</span>`:null)}${kv("GD America's 100 Greatest",c.gd100_rank?`#${c.gd100_rank} <span class="tag">(${c.gd100_edition})</span>`:null)}${kv('Listed by GD as',c.gd_co_name)}${kv('Back tee',c.back_tee?c.back_tee+' · '+c.rating+'/'+c.slope+' · par '+c.back_par:null)}</div>
 <div><h4>Rates & contact</h4>${c.green_fees_text?kv('Green fees (course-published)',c.green_fees_text):''}${c.twilight_text?kv('Twilight (course-published)',c.twilight_text):''}${kv('Phone',c.phone)}${kv('Website',c.website?`<a href="${c.website}" target="_blank">${c.website.replace(/https?:\/\/(www\.)?/,'').replace(/\/$/,'')}</a>`:null)}${kv('Amenities',(c.amenities||[]).join(', '))}</div>
 <div><h4>Tees</h4><table class="tees"><tr><th>Tee</th><th>Yds</th><th>Rating</th><th>Slope</th></tr>${(c.tees||[]).map(t=>`<tr><td>${t.tee_name} ${t.gender?'('+t.gender[0]+')':''}</td><td>${f(t.yardage)}</td><td>${f(t.course_rating)}</td><td>${f(t.slope)}</td></tr>`).join('')||'<tr><td colspan=4 class=tag>No tee data</td></tr>'}</table></div>
 <div><h4>Sources</h4>${[...c.sources,c.gd_co_source,c.gd100_source].filter(Boolean).map(u=>`<div><a href="${u.split(' ')[0]}" target="_blank">${u.replace(/https?:\/\//,'').slice(0,60)}</a></div>`).join('')}</div>
 </div></td></tr>`}
function render(){const L=rows();$('#count').textContent=`${L.length} of ${D.length} courses · ${D.filter(c=>c.gd_co_rank).length} ranked by Golf Digest (CO, 2025-26)`;
 document.querySelectorAll('th[data-k]').forEach(th=>{th.classList.toggle('sorted',th.dataset.k==sortK);th.classList.toggle('asc',asc)});
 $('#t tbody').innerHTML=L.map(c=>`<tr class="row ${openId==c.id?'open':''}" data-id="${c.id}"><td class="name" title="${c.name.replace(/"/g,'&quot;')}">${c.name}${badge(c)}</td><td>${f(c.city)}</td><td class="tag">${f(c.region)}</td><td class="tag">${c.type}</td>
 <td class="num">${c.gd_co_rank?`<span class="rk">${c.gd_co_rank}</span>`:f(null)}</td><td class="num">${f(c.holes)}</td><td class="num">${f(c.par)}</td><td class="num">${c.yardage?c.yardage.toLocaleString():f(null)}</td>
 <td class="num">${f(c.rating)}</td><td class="num">${f(c.slope)}</td><td class="num">${c.elevation_ft?c.elevation_ft.toLocaleString():f(null)}</td><td class="num">${f(c.drive_min)}</td></tr>${openId==c.id?detail(c):''}`).join('')}
document.querySelectorAll('th[data-k]').forEach(th=>th.onclick=()=>{const k=th.dataset.k;if(sortK==k)asc=!asc;else{sortK=k;asc=['name','city','region','type','gd_co_rank','drive_min'].includes(k)}render()});
$('#t tbody').onclick=e=>{const r=e.target.closest('tr.row');if(!r||e.target.closest('a'))return;openId=openId==r.dataset.id?null:r.dataset.id;render()};
['#q','#type','#region','#holes','#ranked'].forEach(s=>$(s).oninput=render);
const P=new URLSearchParams(location.search);if(P.get('sort')){sortK=P.get('sort');asc=P.get('dir')!='desc'}
if(P.get('open')){const o=D.find(c=>c.name==P.get('open'));if(o)openId=o.id}
render();
