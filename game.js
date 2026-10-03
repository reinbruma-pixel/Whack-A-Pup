const BIOMES=[
 {n:'Sunny Meadow',bg:'linear-gradient(#8fd8ff,#c8f2a8 60%,#7fcf6a)',gr:'#58b04a',ho:'#5a3b24',ac:'#ffcf3a',tx:'#1e4a1e',dec:'🌼🌳☁️🦋🌷',candy:'🍬'},
 {n:'Sandy Beach',bg:'linear-gradient(#7fe0ff,#bff0ff 40%,#f6e3a9 41%,#f2d489)',gr:'#e7c46a',ho:'#8a6a2c',ac:'#ff6f91',tx:'#0d4a63',dec:'🌴🐚🦀⛱️🌊',candy:'🍦'},
 {n:'Dusty Desert',bg:'linear-gradient(#ffcf9a,#f5a766 55%,#d9824a)',gr:'#cf7a43',ho:'#4a2411',ac:'#fff1a8',tx:'#5a2306',dec:'🌵☀️🦂🏜️🌵',candy:'🍫'},
 {n:'Autumn Forest',bg:'linear-gradient(#ffd9a0,#e9a45a 60%,#a45a2a)',gr:'#8a4b22',ho:'#2e170a',ac:'#ffe06a',tx:'#4a210a',dec:'🍂🍁🌰🦔🍄',candy:'🍪'},
 {n:'Snowy Peaks',bg:'linear-gradient(#bfe6ff,#eaf7ff 60%,#ffffff)',gr:'#cfe4f2',ho:'#6b8aa6',ac:'#5b8def',tx:'#1b3a5c',dec:'❄️⛄🏔️🌨️🎿',candy:'🧁'},
 {n:'Jungle Hollow',bg:'linear-gradient(#5fcf8a,#2e9c5a 60%,#1e6b3c)',gr:'#1f7a3d',ho:'#12301c',ac:'#ffe066',tx:'#f0ffe8',dec:'🌴🦜🐒🌺🍃',candy:'🍌'},
 {n:'Push Pop Land',bg:'linear-gradient(#ffc2e4,#ffe0f2 55%,#ffb3d9)',gr:'#ff8fc6',ho:'#8f2a60',ac:'#7be0ff',tx:'#7a1e55',dec:'🍭🍬🍡🎀🧁',candy:'🍭',cn:'a push pop'},
 {n:'Lava Caves',bg:'linear-gradient(#5a1f2a,#a8321f 60%,#ff7a2e)',gr:'#4a2a2a',ho:'#150808',ac:'#ffd23f',tx:'#ffeedd',dec:'🔥🌋💎🪨🔥',candy:'🍯'},
 {n:'Coral Deep',bg:'linear-gradient(#4fc3f7,#1a78c2 60%,#0d3b78)',gr:'#e58a7a',ho:'#2a1020',ac:'#fff27a',tx:'#e8f8ff',dec:'🐠🪸🐙🫧🐚',candy:'🍧'},
 {n:'Cosmic Kennel',bg:'linear-gradient(#1b1442,#3a2478 60%,#6a3fa8)',gr:'#4a3a8a',ho:'#0a0620',ac:'#ff9ae0',tx:'#f0e8ff',dec:'⭐🪐🌙🛸✨',candy:'🌟'},
 {n:'Bamboo Garden',bg:'linear-gradient(#d8f5c0,#9fdc8a 60%,#5fae5a)',gr:'#4f9a4a',ho:'#2c4a22',ac:'#ffd23f',tx:'#1f4a22',dec:'🎋🐼🍃🌿🏮',candy:'🍡'},
 {n:'Mushroom Grove',bg:'linear-gradient(#e0c8ff,#b58ae0 60%,#7a4fae)',gr:'#8a5cb8',ho:'#2a1240',ac:'#ff9ae0',tx:'#2a1240',dec:'🍄🐌🌙✨🌸',candy:'🍓'},
 {n:'Haunted Hollow',bg:'linear-gradient(#2a1f3d,#4a3366 60%,#6a4a8a)',gr:'#3a2a50',ho:'#0c0614',ac:'#ff9a3c',tx:'#f2e8ff',dec:'🎃👻🦇🕸️🌙',candy:'🍭'},
 {n:'Pirate Cove',bg:'linear-gradient(#8fd0ff,#4fa0d8 45%,#e8c985 46%,#d9b36a)',gr:'#c99a52',ho:'#4a2f12',ac:'#ffd23f',tx:'#0d3a5c',dec:'⚓🦜🗺️💰🚢',candy:'🍮'},
 {n:'Cloud Kingdom',bg:'linear-gradient(#a8d8ff,#e8f4ff 55%,#ffffff)',gr:'#f2f8ff',ho:'#8aa8c8',ac:'#ffb347',tx:'#2a4a78',dec:'☁️🌈🕊️🎈🪁',candy:'🍨'},
 {n:'Neon City',bg:'linear-gradient(#1a0a38,#35106a 60%,#5a1a8a)',gr:'#2a2060',ho:'#08041a',ac:'#3dffd0',tx:'#f0e8ff',dec:'🌃🚕🎧💿🕹️',candy:'🍿'},
 {n:'Crystal Cave',bg:'linear-gradient(#bfe8f5,#7fc4e0 60%,#4a8aba)',gr:'#5a7aa8',ho:'#14284a',ac:'#ff9ae0',tx:'#0f2a4a',dec:'💎🔮🪨✨❄️',candy:'🍬'},
 {n:'Farm Yard',bg:'linear-gradient(#aee0ff,#f6e8a0 55%,#9bd070)',gr:'#7ab648',ho:'#4a2f12',ac:'#ff6f6f',tx:'#3a2a10',dec:'🐄🌾🚜🐔🌻',candy:'🥧'},
 {n:'Toy Workshop',bg:'linear-gradient(#ffe0a8,#ffb86b 60%,#ff8f6b)',gr:'#e8704a',ho:'#5a2210',ac:'#5be0ff',tx:'#5a2210',dec:'🧸🚂🎲🪀🎨',candy:'🍩'},
 {n:'Rainbow Peak',bg:'linear-gradient(#ff9ad0,#ffd86b 40%,#7be0b0 70%,#6bb0ff)',gr:'#8a6bff',ho:'#2a1a60',ac:'#ffffff',tx:'#3a1a60',dec:'🌈⭐🦄🎆🏆',candy:'🍰'}
];
const $=id=>document.getElementById(id);
/* ---- sound effects (synthesized, no audio files) ---- */
let AC=null,muted=false;
try{muted=localStorage.getItem('whackmute')==='1'}catch(e){}
function ac(){
  if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}
  if(AC&&AC.state==='suspended')AC.resume();
  return AC;
}
function tone(f,d,type,vol,t0,f2){
  if(muted)return;const a=ac();if(!a)return;
  const t=a.currentTime+(t0||0),o=a.createOscillator(),g=a.createGain();
  o.type=type||'sine';o.frequency.setValueAtTime(f,t);
  if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);
  g.gain.setValueAtTime(vol||.12,t);g.gain.exponentialRampToValueAtTime(.001,t+d);
  o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d+.02);
}
const SFX={
  pop:()=>tone(520,.1,'sine',.07,0,780),
  hit:()=>{tone(180,.14,'square',.13,0,60);tone(900,.09,'triangle',.1,.03,500)},
  hit2:()=>tone(300,.08,'square',.09,0,200),
  combo:n=>tone(500+Math.min(n,12)*60,.16,'triangle',.12,.1),
  cat:()=>{tone(750,.4,'sawtooth',.08,0,280);tone(740,.4,'sine',.08,.04,270)},
  ready:()=>tone(440,.18,'triangle',.12),
  go:()=>{tone(660,.1,'triangle',.12);tone(990,.3,'triangle',.12,.1)},
  tick:()=>tone(1000,.05,'square',.05),
  win:()=>[523,659,784,1047,1319].forEach((f,i)=>tone(f,.28,'triangle',.13,i*.1)),
  candy:()=>[1568,2093,2637,3136].forEach((f,i)=>tone(f,.18,'sine',.08,i*.07)),
  lvup:()=>[392,523,659,784,1047,1319].forEach((f,i)=>tone(f,.22,'square',.07,i*.08)),
  lose:()=>[400,330,260,180].forEach((f,i)=>tone(f,.3,'sine',.13,i*.18)),
  click:()=>tone(660,.06,'triangle',.08)
};
const MV=['f','f','f','d','d','f','d','r','r','t','d','t','f','f','f','t','t','f','d','r'];
const emo=b=>[...b.dec.match(/\p{Extended_Pictographic}\uFE0F?/gu)];
function theme(l){
  const b=biomeOf(l),r=document.documentElement.style;
  r.setProperty('--bg',b.bg);r.setProperty('--gr',b.gr);r.setProperty('--ho',b.ho);r.setProperty('--ac',b.ac);r.setProperty('--tx',b.tx);
  const p=$('posters');p.innerHTML='';const e=emo(b);
  [[2,12],[84,52],[3,64],[86,8]].forEach((c,i)=>{const s=document.createElement('span');s.textContent=e[i%e.length];
    s.style.left=c[0]+'%';s.style.top=c[1]+'%';s.style.animationDelay=(-i*1.7)+'s';p.appendChild(s)});
  return b;
}
let S={lvl:1,exp:0,plvl:1,candy:0,best:1,name:'Pup',breed:0,hue:0,own:[],eq:{}};
try{Object.assign(S,JSON.parse(localStorage.getItem('whackpup')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('whackpup',JSON.stringify(S))}catch(e){}};
const need=p=>60+p*25;
const bidx=l=>Math.floor((l-1)/25);
const biomeOf=l=>BIOMES[bidx(l)];
const bnm=l=>biomeOf(l).n;

function hud(){
  $('av').innerHTML=pupHTML(22);$('pl').textContent=S.name+' Lv '+S.plvl;
  $('xb').style.width=Math.min(100,S.exp/need(S.plvl)*100)+'%';
  $('cd').textContent='🍬 '+S.candy;
}
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id))}

function buildMenu(){
  const top=S.best>500;
  $('mnote').textContent=top?'You cleared all 500 levels. Replay any of them.':'Next up: level '+S.best+' in '+bnm(S.best)+'.';
  $('playBtn').textContent=top?'Replay level 500':'Play level '+S.best;
  const p=$('pick');p.innerHTML='';
  BIOMES.forEach((b,i)=>{
    const lo=i*25+1,sec=document.createElement('div');sec.className='bsec'+(lo>S.best?' lock':'');
    sec.style.background=b.bg;sec.style.color=b.tx;
    const h=document.createElement('h2');h.textContent=(i+1)+'. '+b.n+' '+emo(b)[0]+(lo>S.best?' 🔒':'');sec.appendChild(h);
    const t=document.createElement('p');t.textContent=S.best>lo+24?'Treat box claimed '+b.candy:'Clear all 25 levels for a treat box of 5 '+b.candy;sec.appendChild(t);
    const g=document.createElement('div');g.className='lvgrid';
    for(let k=0;k<25;k++){const l=lo+k,btn=document.createElement('button');
      btn.className='lv'+(l<S.best?' done':'')+(l===S.best?' cur':'');btn.textContent=l;btn.disabled=l>S.best;
      btn.onclick=()=>start(l);g.appendChild(btn)}
    sec.appendChild(g);p.appendChild(sec);
  });
}

let G=null;
const holes=[];
function start(l){
  clearGame();
  const b=theme(l),mv=MV[bidx(l)],em=emo(b);
  $('mq').textContent=bnm(l);
  const d=$('decor');d.innerHTML='';d.className='decor '+mv;
  for(let i=0;i<16;i++){const s=document.createElement('span');
    s.textContent=em[i%em.length];s.style.left=(Math.random()*92)+'%';
    s.style.top=mv==='d'?'-10%':mv==='r'?'100%':(Math.random()*88)+'%';
    s.style.fontSize=(18+Math.random()*28)+'px';
    s.style.animationDuration=(4+Math.random()*6)+'s';s.style.animationDelay=(-Math.random()*8)+'s';d.appendChild(s)}
  const f=$('field');f.innerHTML='';holes.length=0;
  for(let i=0;i<9;i++){
    const h=document.createElement('button');h.className='hole';h.setAttribute('aria-label','hole '+(i+1));
    h.innerHTML='<span class="dog"></span>';
    const o={el:h,dog:h.firstChild,on:false,hp:0,decoy:false,t:0};
    h.addEventListener('pointerdown',e=>{e.preventDefault();hit(o,e)});
    f.appendChild(h);holes.push(o);
  }
  const boss=l%50===0,goal=Math.ceil(Math.min(40,5+Math.floor(l*.1))*(boss?1.25:1)),time=Math.min(35,20+Math.floor(l/30));
  G={l,goal,boss,score:0,time,max:time,stay:Math.max(280,1400*Math.pow(.9965,l)),gap:Math.max(260,950*Math.pow(.997,l)),
     multi:Math.min(5,1+Math.floor(l/70)),decoy:l>=10?Math.min(.35,(boss?.1:.06)+l*.0006):0,over:false};
  $('gl').textContent='Level '+l;$('gb').textContent=bnm(l);$('gt').textContent=time+'s';
  $('pg').style.width='0';$('tmb').style.width='100%';
  show('play');G.combo=0;
  const bn=$('ban');bn.textContent=G.boss?'Boss level!':'Ready…';bn.className='ban on';SFX.ready();
  G.st=setTimeout(()=>{bn.textContent='GO!';bn.className='ban on go';SFX.go();
    G.spawn=setInterval(spawn,G.gap);G.clock=setInterval(tick,100);spawn();
    setTimeout(()=>{bn.className='ban'},600)},900);
}
function clearGame(){
  if(!G)return;clearTimeout(G.st);clearInterval(G.spawn);clearInterval(G.clock);
  holes.forEach(o=>clearTimeout(o.t));G.over=true;
}
function spawn(){
  if(!G||G.over)return;
  for(let k=0;k<G.multi;k++){
    const free=holes.filter(o=>!o.on);if(!free.length)return;
    const o=free[Math.floor(Math.random()*free.length)],l=G.l,r=Math.random();
    o.decoy=r<G.decoy;o.hp=1;let stay=G.stay;
    const pw=l>=150?Math.min(.2,(l-150)*.0006):0,pt=l>=30?Math.min(.45,.15+(l-30)*.001):0,r2=Math.random();
    if(o.decoy)o.dog.textContent='🐱';
    else if(r2<pw){o.dog.textContent='🐺';o.hp=3}
    else if(r2<pw+pt){o.dog.textContent='🐕‍🦺';o.hp=2}
    else if(l>=60&&Math.random()<.25){o.dog.textContent='🦮';stay*=.7}
    else o.dog.textContent=DG[Math.floor(Math.random()*(2+Math.min(2,Math.floor(l/60))))];
    o.dog.dataset.hat=o.decoy?'':HAT[bidx(l)];o.dog.style.filter=o.decoy?'none':'hue-rotate('+HUE(bidx(l))+'deg)';
    o.on=true;o.dog.className='dog up';SFX.pop();
    o.t=setTimeout(()=>{if(o.on&&!o.decoy)G.combo=0;down(o)},stay*(.8+Math.random()*.4));
  }
}
function down(o){o.on=false;o.dog.className='dog dive'}
function mallet(o){const m=document.createElement('span');m.className='mal';m.textContent='🔨';
  m.style.left=(o.el.offsetLeft+o.el.offsetWidth/2-24)+'px';m.style.top=(o.el.offsetTop-6)+'px';
  $('field').appendChild(m);setTimeout(()=>m.remove(),320)}
function sparks(o,n,ch){const em=ch?[ch]:['⭐','✨',biomeOf(G.l).candy];
  for(let i=0;i<n;i++){const s=document.createElement('span'),a=Math.random()*6.28,d=40+Math.random()*40;
    s.className='sp';s.textContent=em[i%em.length];
    s.style.left=(o.el.offsetLeft+o.el.offsetWidth/2-10)+'px';s.style.top=(o.el.offsetTop+o.el.offsetHeight*.35)+'px';
    s.style.setProperty('--dx',Math.cos(a)*d+'px');s.style.setProperty('--dy',(Math.sin(a)*d-20)+'px');
    $('field').appendChild(s);setTimeout(()=>s.remove(),600)}}
function fx(o,txt){
  const s=document.createElement('span');s.className='fx';s.textContent=txt;
  s.style.left=(o.el.offsetLeft+o.el.offsetWidth/2-14)+'px';s.style.top=(o.el.offsetTop+o.el.offsetHeight*.2)+'px';
  $('field').appendChild(s);setTimeout(()=>s.remove(),700);
}
function hit(o){
  if(!G||G.over||!o.on)return;
  if(o.decoy){
    SFX.cat();mallet(o);G.combo=0;clearTimeout(o.t);down(o);G.time=Math.max(0,G.time-3);fx(o,'-3s');sparks(o,5,'💢');
    $('game').classList.remove('shake');void $('game').offsetWidth;$('game').classList.add('shake');return;
  }
  mallet(o);o.hp--;
  if(o.hp>0){fx(o,'💥');sparks(o,2);SFX.hit2();return}
  clearTimeout(o.t);o.on=false;o.dog.className='dog bonk';G.combo++;
  fx(o,G.combo>=3?'x'+G.combo+'!':'+1');sparks(o,7);SFX.hit();if(G.combo>=3)SFX.combo(G.combo);
  G.score++;$('pg').style.width=(G.score/G.goal*100)+'%';
  if(G.score>=G.goal)win();
}
function tick(){
  if(!G||G.over)return;
  G.time=Math.max(0,G.time-.1);
  $('gt').textContent=Math.ceil(G.time)+'s';$('tmb').style.width=(G.time/G.max*100)+'%';
  $('tmb').parentNode.classList.toggle('low',G.time<6);
  const sec=Math.ceil(G.time);if(G.time<6&&sec!==G.ls){G.ls=sec;SFX.tick()}
  if(G.time<=0)lose();
}
function lose(){SFX.lose();
  const l=G.l;clearGame();
  modal(`<div class="big">😴</div><h2>The pups got away</h2><p>You bonked ${G.score} of ${G.goal}. Try level ${l} again.</p>
   <button class="btn" onclick="closeM();start(${l})">Retry</button><br><button class="btn alt" onclick="closeM();toMenu()">Menu</button>`);
}
function win(){
  const l=G.l;clearGame();
  const gain=20+l*3;
  const bc=l%25===0;S.candy+=bc?6:1;if(l===S.best)S.best=l+1;
  S.exp+=gain;let ups=0;
  while(S.exp>=need(S.plvl)){S.exp-=need(S.plvl);S.plvl++;ups++}
  save();burst(bc?1.8:1);SFX.win();setTimeout(SFX.candy,500);
  const b=biomeOf(l),final=l===500;
  modal(`<div class="big">${final?'🏆':b.candy}</div>
   <h2>${final?'You cleared all 500 levels!':bc?b.n+' complete!':'Level '+l+' cleared!'}</h2>
   <p>${final?'Candy Champion of every biome. Take a mountain of treats.':bc?'Treat box: 5 bonus candies '+b.candy.repeat(5):'Reward: '+(b.cn||'a candy')+' '+b.candy}</p>
   <p><b>+${gain} EXP</b></p><div class="bar xp"><i id="mx" style="width:0"></i></div>
   <div class="lvup" id="lu"></div>
   ${final?'':`<button class="btn" onclick="closeM();start(${l+1})">Next level</button><br>`}
   <button class="btn alt" onclick="closeM();toMenu()">Menu</button>`);
  if(final)for(let i=1;i<=5;i++)setTimeout(()=>burst(1.4),i*500);
  setTimeout(()=>{$('mx').style.width=Math.min(100,S.exp/need(S.plvl)*100)+'%';hud();
    if(ups){$('lu').textContent='Level up! You are Pup Lv '+S.plvl+' 🎉';SFX.lvup();setTimeout(()=>burst(1.2),400)}},350);
  hud();
}
function modal(h){$('card').innerHTML=h;$('modal').classList.add('on')}
function closeM(){$('modal').classList.remove('on')}
function toMenu(){clearGame();theme(Math.min(S.best,500));buildMenu();hud();show('menu')}
$('playBtn').onclick=()=>start(Math.min(S.best,500));
$('quit').onclick=toMenu;

/* confetti */
const cv=$('cf'),cx=cv.getContext('2d');let P=[],raf=0;
function size(){cv.width=innerWidth*devicePixelRatio;cv.height=innerHeight*devicePixelRatio}
addEventListener('resize',size);size();
function burst(k){
  const cols=['#ff5d8f','#ffd23f','#5b8def','#47d18c','#ff9a3c','#b86bff'],n=Math.round(110*k),dpr=devicePixelRatio;
  for(const sx of [.25,.75])for(let i=0;i<n/2;i++){
    const a=-Math.PI/2+(Math.random()-.5)*1.8,v=(9+Math.random()*12)*dpr;
    P.push({x:cv.width*sx,y:cv.height*.55,vx:Math.cos(a)*v,vy:Math.sin(a)*v,w:(6+Math.random()*7)*dpr,h:(4+Math.random()*6)*dpr,
      r:Math.random()*6,vr:(Math.random()-.5)*.4,c:cols[i%cols.length],life:1})}
  if(!raf)loop();
}
function loop(){
  cx.clearRect(0,0,cv.width,cv.height);
  P=P.filter(p=>p.life>0&&p.y<cv.height+40);
  for(const p of P){
    p.vy+=.35*devicePixelRatio;p.vx*=.99;p.vy*=.992;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.life-=.007;
    cx.save();cx.globalAlpha=Math.max(0,p.life);cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.fillRect(-p.w/2,-p.h/2,p.w,p.h);cx.restore();
  }
  raf=P.length?requestAnimationFrame(loop):0;
}

const DG=['🐶','🐩','🐕','🦮'],HUE=i=>i?(i*47)%360:0;
const HAT=['🌼','🕶️','🤠','🍂','🧣','🌺','🎀','🔥','🫧','⭐','🎋','🍄','🎃','⚓','☁️','🎧','💎','🌻','🧸','👑'];
const BREEDS=['🐶','🐩','🐕','🦮','\u{1F415}\u200D\u{1F9BA}','🐺'],FURS=[0,50,140,200,280,330];
const ITEMS=[['h1','hat','🎩','Top hat',8],['h2','hat','🧢','Cap',6],['h3','hat','🤠','Cowboy hat',12],['h4','hat','🎓','Grad cap',15],['h5','hat','👑','Crown',40],
 ['f1','face','🕶️','Shades',10],['f2','face','👓','Glasses',8],['f3','face','🥽','Goggles',14],
 ['n1','neck','🎀','Bow',7],['n2','neck','🧣','Scarf',9],['n3','neck','📿','Beads',12],['n4','neck','🏅','Gold medal',30]];
function pupHTML(px){
  const g=k=>{const it=ITEMS.find(x=>x[0]===S.eq[k]);return it?it[2]:''};
  return '<span class="pup" style="font-size:'+px+'px"><b style="filter:hue-rotate('+S.hue+'deg)">'+BREEDS[S.breed]+'</b><i class="ph">'+g('hat')+'</i><i class="pf">'+g('face')+'</i><i class="pn">'+g('neck')+'</i></span>';
}
function pick(box,list,fn){box.innerHTML='';list.forEach(x=>{const b=document.createElement('button');fn(b,x);box.appendChild(b)})}
function renderPup(){
  $('pupbig').innerHTML=pupHTML(100);$('pname').value=S.name;$('bal').textContent='You have '+S.candy+' candy 🍬';
  pick($('breeds'),BREEDS.map((e,i)=>[e,i]),(b,x)=>{b.className='lv'+(x[1]===S.breed?' cur':'');b.style.fontSize='26px';b.textContent=x[0];b.onclick=()=>{S.breed=x[1];save();renderPup();hud()}});
  pick($('furs'),FURS,(b,h)=>{b.className='lv'+(h===S.hue?' cur':'');b.style.fontSize='26px';b.innerHTML='<span style="filter:hue-rotate('+h+'deg)">'+BREEDS[S.breed]+'</span>';b.onclick=()=>{S.hue=h;save();renderPup();hud()}});
  pick($('shop'),ITEMS,(b,it)=>{
    const own=S.own.includes(it[0]),eq=S.eq[it[1]]===it[0];
    b.className='item'+(eq?' eq':own?' own':'');b.innerHTML='<span>'+it[2]+'</span>'+it[3]+'<br>'+(eq?'Wearing':own?'Wear it':it[4]+' 🍬');
    b.onclick=()=>{
      if(!own){if(S.candy<it[4]){SFX.cat();b.classList.add('shake');return}S.candy-=it[4];S.own.push(it[0]);S.eq[it[1]]=it[0];SFX.candy()}
      else if(eq)delete S.eq[it[1]];else S.eq[it[1]]=it[0];
      save();renderPup();hud()};
  });
}
const goPup=w=>{renderPup();show('pup');$(w).scrollIntoView()};
$('meBtn').onclick=()=>goPup('mepan');$('shopBtn').onclick=()=>goPup('shoppan');$('av').onclick=()=>goPup('mepan');$('pback').onclick=toMenu;
$('pname').oninput=e=>{S.name=e.target.value.trim().slice(0,12)||'Pup';save();hud()};
const mb=$('mute');
const mset=()=>{mb.textContent=muted?'🔇':'🔊';mb.setAttribute('aria-label',muted?'Unmute sound':'Mute sound')};
mb.onclick=()=>{muted=!muted;try{localStorage.setItem('whackmute',muted?'1':'0')}catch(e){};mset();if(!muted){ac();SFX.click()}};
mset();
addEventListener('pointerdown',()=>{ac()},{once:true});
document.addEventListener('click',e=>{if(e.target.closest('.btn,.lv,.item'))SFX.click()});
theme(Math.min(S.best,500));buildMenu();hud();

/* offline support: saves the game on the device after the first visit */
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))
  addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
