'use client';

import { useEffect, useState } from 'react';

const timeline = [
  ['01','問題','先從自己真正遇到的困擾開始。'],
  ['02','研究','理解原料、來源、證據與選擇。'],
  ['03','配方','用 AI 把需求整理成可討論的方向。'],
  ['04','使用','產品先為自己打造，再持續記錄。'],
  ['05','MOQ','保留自己的份量，多出的不必浪費。'],
  ['06','分享','建立品牌，分享給有相同困擾的人。']
];

const ingredients = [
  ['Morosil®','體態管理','血橙多酚'],
  ['Cerebiome®','情緒與睡眠','腸腦軸益生菌'],
  ['Verisol®','美容保養','膠原蛋白胜肽'],
  ['Epax®','心血管保養','高規格魚油'],
  ['Setria®','抗氧化','穀胱甘肽'],
  ['Chromax®','代謝管理','專利鉻']
];

export default function Home(){
  const [story,setStory]=useState('我一直睡不好，想做一款真正願意長期吃的產品。');
  const [mouse,setMouse]=useState({x:0,y:0});

  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('show');
    }),{threshold:.12});
    document.querySelectorAll('.v2Reveal').forEach(el=>observer.observe(el));
    return()=>observer.disconnect();
  },[]);

  const move=e=>{
    const r=e.currentTarget.getBoundingClientRect();
    setMouse({x:(e.clientX-r.left-r.width/2)/r.width,y:(e.clientY-r.top-r.height/2)/r.height});
  };

  return <main className="v2">
    <header className="v2Nav">
      <a className="v2Logo" href="#top">CRU LAB</a>
      <nav><a href="#story">故事</a><a href="#formula">AI 配方</a><a href="#ingredients">原料</a><a href="#brand">品牌</a><a href="#shop">CRU SHOP</a></nav>
      <a className="v2NavCta" href="/formula">開始打造</a>
    </header>

    <section className="v2Hero" id="top" onMouseMove={move}>
      <div className="v2Grid"/><div className="v2Glow" style={{transform:`translate(${mouse.x*110}px,${mouse.y*90}px)`}}/>
      <div className="v2HeroCopy">
        <span className="v2Kicker">CREATE FOR YOURSELF · SHARE WITH PEOPLE LIKE YOU</span>
        <h1>不是因為想賣，<br/>而是因為自己真的需要。</h1>
        <p>CRU LAB 幫你從一個真實困擾出發，研究原料、建立配方、完成製造。當 MOQ 超過個人所需，再把多出的產品分享給有相同困擾的人。</p>
        <div className="v2Actions"><a href="/formula">開始建立我的配方</a><a className="ghost" href="#story">看一個品牌如何誕生</a></div>
        <div className="v2Proof"><span>AI 配方整理</span><span>專業製造確認</span><span>一站品牌上線</span></div>
      </div>
      <div className="v2Scene" style={{transform:`translate3d(${mouse.x*20}px,${mouse.y*14}px,0)`}}>
        <div className="v2Halo"/><div className="v2Ring r1"/><div className="v2Ring r2"/>
        <div className="v2Bottle"><small>CREATED FOR</small><strong>MY FORMULA</strong><span>MADE FOR ME</span></div>
        <div className="v2Pack"><small>CREATED BY</small><b>YOU</b><span>SHARED WITH PEOPLE LIKE YOU</span></div>
        <div className="v2Chip chipA">AI FORMULA</div><div className="v2Chip chipB">MY STORY</div><div className="v2Chip chipC">REAL INGREDIENTS</div>
      </div>
    </section>

    <section className="v2Statement v2Reveal" id="story">
      <span>EVERY BRAND BEGINS WITH A REAL PROBLEM</span>
      <h2>每一個品牌，都始於一個想幫助自己的故事。</h2>
      <p>品牌不是起點。困擾、研究、選擇、使用經驗與想分享的理由，才是品牌真正的起點。</p>
    </section>

    <section className="v2Timeline">
      {timeline.map(([n,t,d],i)=><article className="v2Reveal" style={{transitionDelay:`${i*70}ms`}} key={n}><b>{n}</b><div><small>{t}</small><p>{d}</p></div></article>)}
    </section>

    <section className="v2Formula" id="formula">
      <div className="v2FormulaCopy v2Reveal">
        <span>AI FORMULA ENGINE</span>
        <h2>先說出你的困擾。<br/>剩下的，從這裡開始。</h2>
        <p>AI 不取代專業，而是把模糊需求整理成清楚方向，包含目標、原料、劑型與下一步。</p>
        <div className="v2StepRow"><i>01 需求</i><i>02 原料</i><i>03 配方</i><i>04 製造</i></div>
      </div>
      <div className="v2Console v2Reveal">
        <div className="v2ConsoleTop"><span>CRU LAB AI</span><em>ONLINE</em></div>
        <label htmlFor="story">你想解決什麼問題？</label>
        <textarea id="story" value={story} onChange={e=>setStory(e.target.value)}/>
        <div className="v2Result"><small>AI 正在整理你的產品起點</small><p>「{story}」</p><div className="v2Dots"><i/><i/><i/></div><span>建議下一步：選擇目標、原料方向、劑型與預計數量</span></div>
        <a href="/formula">用這個故事建立配方</a>
      </div>
    </section>

    <section className="v2Ingredients" id="ingredients">
      <div className="v2SectionHead v2Reveal"><span>INGREDIENT EXPLORER</span><h2>把預算，用在你真正重視的原料上。</h2><p>你決定產品裡要放什麼，也決定預算應該花在哪裡。</p></div>
      <div className="v2IngredientGrid">{ingredients.map(([n,c,d],i)=><article className="v2Reveal" style={{transitionDelay:`${i*60}ms`}} key={n}><small>{c}</small><h3>{n}</h3><p>{d}</p><a href="/ingredients">查看資料 →</a></article>)}</div>
    </section>

    <section className="v2Brand" id="brand">
      <div className="v2BrandVisual v2Reveal"><div className="v2MiniBrowser"><div/><span>MY BRAND</span><h3>Created from a real story.</h3><button>SHOP NOW</button></div></div>
      <div className="v2BrandCopy v2Reveal"><span>BRAND BUILDER</span><h2>產品先屬於你，<br/>品牌才因此誕生。</h2><p>當產品已經被你真正使用、理解與相信，CRU LAB 再幫你完成名稱、包裝、商品頁與專屬商店。</p><a href="/brand-builder">把我的故事變成品牌</a></div>
    </section>

    <section className="v2Shop" id="shop">
      <div className="v2SectionHead light v2Reveal"><span>CRU SHOP</span><h2>不是把所有人都當客戶，<br/>而是找到真正理解這個產品的人。</h2></div>
      <div className="v2ShopFlow">
        {['保留自己的份量','記錄自己的歷程','建立品牌與商店','分享給同樣困擾的人'].map((t,i)=><article className="v2Reveal" key={t}><b>0{i+1}</b><h3>{t}</h3></article>)}
      </div>
      <a className="v2LightCta v2Reveal" href="/brand-builder">建立我的品牌</a>
    </section>

    <section className="v2Final v2Reveal"><span>YOUR PROBLEM · YOUR FORMULA · YOUR STORY</span><h2>先幫助自己。<br/>然後，幫助更多人。</h2><a href="/formula">開始打造第一款產品</a></section>

    <footer className="v2Footer"><div className="v2Logo">CRU LAB</div><p>Create for yourself. Share with people like you.</p><small>產品實際體感因人而異；個人使用經驗不得取代科學證據、醫療診斷或功效保證。正式產品仍需經配方、法規、標示與製造流程確認。</small></footer>
  </main>;
}
