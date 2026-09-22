function dayNumber() {
  const start = new Date(2026,0,1);
  const now = new Date();
  const utcStart = Date.UTC(start.getFullYear(),start.getMonth(),start.getDate());
  const utcNow = Date.UTC(now.getFullYear(),now.getMonth(),now.getDate());
  return Math.floor((utcNow-utcStart)/86400000);
}
const p = players[((dayNumber()%players.length)+players.length)%players.length];
const fmt = new Intl.DateTimeFormat('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
document.getElementById('playerName').textContent=p.name;
document.getElementById('cardName').textContent=p.name.toUpperCase();
document.getElementById('playerSummary').textContent=p.summary;
document.getElementById('playerYears').textContent=p.years;
document.getElementById('playerPos').textContent=p.pos;
document.getElementById('playerTeam').textContent=p.team;
document.getElementById('cardMeta').textContent=`${p.pos} • ${p.years}`;
document.getElementById('dateLine').textContent=fmt.format(new Date()) + " • Today's feature";
const oafReasons = [
  "For making the kind of basketball decision that lives forever on VHS.",
  "For bringing vintage hardwood energy and absolutely no chill.",
  "For turning a routine possession into a full-blown basketball adventure.",
  "For elite hustle, questionable shot selection, and unforgettable vibes.",
  "For being the human equivalent of a loose ball in the final minute."
];
const oaf = players[(dayNumber()+Math.floor(dayNumber()/players.length)+3)%players.length];
document.getElementById('oafName').textContent=oaf.name.toUpperCase();
document.getElementById('oafText').textContent=`Today's Oaf is ${oaf.name}. ${oafReasons[dayNumber()%oafReasons.length]} ${oaf.summary}`;

const img=document.getElementById('playerImage');
img.src=p.image; img.alt=p.name;
img.onerror=()=>{img.src='https://placehold.co/600x800/efe5d0/2b241d?text='+encodeURIComponent(p.name);};

const grid=document.getElementById('archiveGrid');
players.forEach((x,i)=>{
 const el=document.createElement('article');
 el.className='mini-card';
 el.innerHTML=`<div class="mini-photo"><img src="${x.image}" alt="${x.name}"></div>
 <div><b>${x.name}</b><span>${x.pos} • ${x.years}</span></div>`;
 el.querySelector('img').onerror=function(){this.src='https://placehold.co/300x400/efe5d0/2b241d?text='+encodeURIComponent(x.name)};
 grid.appendChild(el);
});