'use client';

import { useEffect, useState } from 'react';

const stages = [
  ['01','遇到自己的問題','睡不好、體態卡關、腸胃不穩，或一直找不到真正願意長期使用的產品。'],
  ['02','開始研究','從需求出發，查看原料來源、研究資料與配方差異，找出真正重視的選擇。'],
  ['03','打造自己的配方','AI 協助整理方向，再由專業團隊確認劑量、相容性、法規與製造條件。'],
  ['04','親自持續使用','這款產品先是為自己打造。持續記錄自己的使用感受與生活變化。'],
  ['05','面對 MOQ 數量','製造有最低數量。超過自己所需的部分，不必浪費，也不用全部囤在家裡。'],
  ['06','分享給同樣困擾的人','說清楚自己的故事，把產品分售給真正理解、也有相同需求的人。']
];

const tools = [
  ['AI 配方設計','把自己的困擾轉成清楚的配方方向。','/formula','FORMULA'],
  ['原料資料庫','看懂來源、專利、研究、限制與應用。','/ingredients','INGREDIENTS'],
  ['研究中心','把艱深論文整理成容易理解的內容。','/research','RESEARCH'],
  ['品牌建立','把真實故事變成品牌名稱、包裝與商品頁。','/brand-builder','BRAND'],
  ['製造管理','由平台統一承接打樣、生產與品質流程。','#process','MANUFACTURE'],
  ['CRU SHOP','建立自己的商店，分享給有相同困擾的人。','#share','SHOP']
];

export default function Home(){
  const [story,setStory]=useState('我一直睡不好，也不想再買只能接受固定配方的產品。');
  const [mouse,setMouse]=useState({x:0,y:0});

  useEffect(()=>{
    const reveal=()=>document.querySelectorAll('.reveal').forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight * .88) el.classList.add('visible');
    });
    reveal();
    window.addEventListener('scroll',reveal,{passive:true});
    return()=>window.removeEventListener('scroll',reveal);
  },[]);

  const move=e=>{
    const r=e.currentTarget.getBoundingClientRect();
    setMouse({x:(e.clientX-r.left-r.width/2)/r.width,y:(e.clientY-r.top-r.height/2)/r.height});
  };

  return <main>
    <header className="nav homeNav">
      <a className="logo" href="#top">CRU LAB</a>
      <nav><a href="#story">為自己打造</a><a href="/formula">AI 配方設計</a><a href="/ingredients">原料資料庫</a><a href="/research">研究中心</a><a href="/brand-builder">品牌建立</a><a href="#share">CRU SHOP</a></nav>
      <a className="navButton goldButton" href="/formula">免費開始</a>
    </header>

    <section className="storyHero" id="top" onMouseMove={move}>
      <div className="heroNoise"/><div className="cursorGlow" style={{transform:`translate(${mouse.x*90}px,${mouse.y*70}px)`}}/>
      <div className="storyHeroCopy reveal visible">
        <span className="eyebrow gold">每一款產品，都是一個人的故事</span>
        <h1>先為自己打造，<br/>再分享給有同樣困擾的人。</h1>
        <p>因為自己遇到了問題，所以想做出一款真正願意給自己長期使用的產品。當 MOQ 超過個人需要，再把多出的數量分享、分售給和你有相同困擾的人。</p>
        <div className="heroActions"><a className="buttonLink goldButton" href="/formula">開始為自己打造</a><a className="buttonLink secondary glassButton" href="#story">了解品牌如何誕生</a></div>
        <div className="principleRow"><span>真實困擾</span><span>更好的原料</span><span>親自使用</span><span>MOQ 分享</span></div>
      </div>
      <div className="storyProduct reveal visible" style={{transform:`translate3d(${mouse.x*18}px,${mouse.y*12}px,0)`}}>
        <div className="storyGlow"/>
        <div className="orbit orbitOne"/><div className="orbit orbitTwo"/>
        <div className="storyBottle"><small>CREATED FOR</small><strong>MY FORMULA</strong><span>MADE FOR ME</span></div>
        <div className="storyBox"><small>CREATED BY</small><b>YOU</b><span>SHARE WITH PEOPLE LIKE YOU</span></div>
        <div className="floatingTag tagOne">AI FORMULA</div><div className="floatingTag tagTwo">MY STORY</div>
        <div className="heroStats"><span><b>AI</b> 配方整理</span><span><b>專業</b> 製造確認</span><span><b>一站</b> 品牌上線</span></div>
      </div>
    </section>

    <section className="origin" id="story">
      <div className="sectionHeading centered reveal"><span className="eyebrow gold">EVERY BRAND STARTS WITH A REAL PROBLEM</span><h2>每個品牌，都始於一個想幫助自己的故事。</h2><p>不是先想賣什麼，而是先解決自己真正遇到的問題。產品、故事與品牌，依序自然發生。</p></div>
      <div className="originGrid">{stages.map(([n,t,d],i)=><article className="reveal" style={{transitionDelay:`${i*70}ms`}} key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="costStory">
      <div className="reveal"><span className="eyebrow gold">BETTER INGREDIENTS FOR YOURSELF</span><h2>把花在品牌上的錢，用在更好的成分上。</h2><p>市售產品的售價可能包含品牌、廣告、平台與通路成本。CRU LAB 讓你更清楚地決定預算要放在哪裡，優先選擇自己真正想使用的原料、規格與劑量。</p><a className="textLink" href="/ingredients">查看原料資料庫 →</a></div>
      <div className="costCompare reveal">
        <article className="glassPanel"><small>一般市售產品示意</small><div className="costBar"><i style={{width:'38%'}}/><span>品牌、廣告與通路</span></div><div className="costBar"><i style={{width:'24%'}}/><span>包裝與營運</span></div><div className="costBar active"><i style={{width:'38%'}}/><span>原料與製造</span></div></article>
        <article className="highlight glassPanel"><small>CRU LAB 成本方向示意</small><div className="costBar active"><i style={{width:'68%'}}/><span>優先投入原料與製造</span></div><div className="costBar"><i style={{width:'20%'}}/><span>必要包裝與服務</span></div><div className="costBar"><i style={{width:'12%'}}/><span>品牌呈現</span></div></article>
      </div>
    </section>

    <section className="storyInput" id="process">
      <div className="reveal"><span className="eyebrow gold">AI FORMULA FOR YOU</span><h2>AI 配方設計，為你量身打造。</h2><p>先說出自己的困擾與目標。AI 幫你整理需求與原料方向，再交由專業團隊確認產品是否適合製造。</p><div className="aiSteps"><span className="active">01 說出困擾</span><span>02 選擇方向</span><span>03 生成配方</span></div></div>
      <div className="storyComposer reveal"><div className="composerTop"><span>CRU LAB AI</span><i>ONLINE</i></div><label htmlFor="story">我為什麼想做這款產品？</label><textarea id="story" value={story} onChange={e=>setStory(e.target.value)}/><div className="storyPreview"><small>AI 正在整理你的產品起點</small><p>「{story}」</p><div className="typingLine"><i/><i/><i/></div><span>下一步：選擇目標、原料方向、劑型與預計數量</span></div><a className="buttonLink goldButton fullButton" href="/formula">用這個故事建立配方</a></div>
    </section>

    <section className="moqStory" id="share">
      <div className="sectionHeading light reveal"><span className="eyebrow gold">WHEN MOQ IS MORE THAN YOU NEED</span><h2>MOQ 吃不完？把它分享出去。</h2><p>先保留自己需要的數量。當你已經持續使用，也願意分享自己的真實歷程，CRU LAB 再協助把多出的 MOQ 建立成品牌與商店。</p></div>
      <div className="shareFlow">{[['1','完成生產','製造符合 MOQ 的產品數量，並保留自己的長期使用份量。'],['2','記錄自己的歷程','分享真實需求、選料理由與個人使用感受，不把體感包裝成保證。'],['3','一鍵建立品牌','由平台完成名稱、包裝、商品頁、專屬商店與分售工具。'],['4','分享給更多人','讓有相同困擾的人理解這款產品為什麼被創造。']].map(([n,t,d],i)=><><article className="reveal" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>{i<3&&<span>→</span>}</>)}</div>
      <a className="buttonLink lightButton reveal" href="/brand-builder">建立我的品牌</a>
    </section>

    <section className="section toolkitSection">
      <div className="sectionHeading reveal"><span className="eyebrow gold">CRU LAB TOOLKIT</span><h2>從配方到分享，一個平台完成。</h2></div>
      <div className="toolGrid">{tools.map(([t,d,h,k],i)=><a className="reveal" style={{transitionDelay:`${i*60}ms`}} href={h} key={t}><small>{k}</small><div className="toolIcon">↗</div><h3>{t}</h3><p>{d}</p><span>開始使用 →</span></a>)}</div>
    </section>

    <section className="finalCta reveal"><span className="eyebrow gold">YOUR PROBLEM. YOUR FORMULA. YOUR STORY.</span><h2>先幫助自己。<br/>然後，幫助更多人。</h2><p>從第一個真實困擾開始，打造你的第一款產品。</p><a className="buttonLink goldButton" href="/formula">開始打造</a></section>

    <footer><div className="logo">CRU LAB</div><p>Create for yourself. Share with people like you.</p><small>產品實際體感因人而異；個人使用經驗不得取代科學證據、醫療診斷或功效保證。所有正式產品仍需經配方、法規、標示與製造流程確認。</small></footer>
  </main>
}