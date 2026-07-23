'use client';

import { useState } from 'react';

const stages = [
  ['01','我遇到了問題','睡不好、體態卡關、腸胃不穩，或找不到真正想長期吃的產品。'],
  ['02','我開始為自己研究','從需求出發，查原料、看研究，選擇真正想放進自己身體的成分。'],
  ['03','我做出自己的配方','AI 協助整理方向，再由專業團隊確認劑量、相容性、法規與製造條件。'],
  ['04','我親自持續使用','產品先是為自己打造。使用經驗與感受，成為這個故事最真實的起點。'],
  ['05','MOQ 超過自己所需','製造有最低數量。自己吃不完的部分，不必浪費，也不必囤在家裡。'],
  ['06','我分享給同樣困擾的人','CRU LAB 幫你建立品牌、商品頁與商店，把多出的產品分享出去。']
];

const tools = [
  ['AI 配方設計','把自己的困擾轉成清楚的配方方向。','/formula'],
  ['原料資料庫','看懂來源、專利、研究、限制與應用。','/ingredients'],
  ['研究中心','把艱深論文整理成可理解的內容。','/research'],
  ['品牌建立','把真實故事變成品牌名稱、包裝與商品頁。','/brand-builder'],
  ['OEM 製造','由平台統一承接打樣、生產與品質流程。','#process'],
  ['CRU SHOP','建立自己的商店，分享給有相同困擾的人。','#share']
];

export default function Home(){
  const [story,setStory]=useState('我一直睡不好，也不想再買固定配方。');
  return <main>
    <header className="nav">
      <a className="logo" href="#top">CRU LAB</a>
      <nav><a href="#story">品牌故事</a><a href="/formula">AI 配方</a><a href="/ingredients">原料資料庫</a><a href="/research">研究中心</a><a href="/brand-builder">品牌建立</a></nav>
      <a className="navButton" href="/formula">開始為自己打造</a>
    </header>

    <section className="storyHero" id="top">
      <div className="storyHeroCopy">
        <span className="eyebrow gold">CREATE FOR YOURSELF. SHARE WITH PEOPLE LIKE YOU.</span>
        <h1>先為自己打造，<br/>再分享給有同樣困擾的人。</h1>
        <p>不是因為想賣，所以做產品。是因為自己真的遇到問題，想做出一款真正願意長期吃的保健品。當 MOQ 超過自己的需要，再把多出的產品分享給和你有相同困擾的人。</p>
        <div className="heroActions"><a className="buttonLink" href="/formula">開始打造我的配方</a><a className="buttonLink secondary" href="#story">看看一個品牌如何誕生</a></div>
        <div className="principleRow"><span>從真實困擾開始</span><span>先做給自己吃</span><span>親自持續使用</span><span>再分享剩餘 MOQ</span></div>
      </div>
      <div className="storyProduct"><div className="storyGlow"/><div className="storyBottle"><small>MY STORY</small><strong>MY FORMULA</strong><span>MADE FOR ME</span></div><div className="storyBox"><small>CREATED BY</small><b>YOU</b><span>SHARED WITH PEOPLE LIKE YOU</span></div></div>
    </section>

    <section className="origin" id="story">
      <div className="sectionHeading"><span className="eyebrow gold">EVERY BRAND STARTS WITH A REAL PROBLEM</span><h2>每一個品牌，都始於一個想幫助自己的故事。</h2><p>品牌不是起點。你的困擾、選擇、使用經驗與想分享的理由，才是品牌真正的起點。</p></div>
      <div className="originGrid">{stages.map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="costStory">
      <div><span className="eyebrow gold">BETTER INGREDIENTS FOR YOURSELF</span><h2>把更多成本，用在自己真正重視的原料上。</h2><p>市售產品的售價可能包含品牌、廣告、平台與通路成本。CRU LAB 讓你更清楚地決定預算要放在哪裡，優先選擇你真正想使用的原料、規格與劑量。</p><a className="textLink" href="/ingredients">探索原料資料庫 →</a></div>
      <div className="costCompare"><article><small>一般購買</small><div className="costBar"><i style={{width:'38%'}}/><span>品牌／通路／廣告</span></div><div className="costBar"><i style={{width:'24%'}}/><span>包裝與營運</span></div><div className="costBar active"><i style={{width:'38%'}}/><span>原料與製造</span></div></article><article className="highlight"><small>CRU LAB 自己打造</small><div className="costBar active"><i style={{width:'68%'}}/><span>更重視原料與製造</span></div><div className="costBar"><i style={{width:'20%'}}/><span>必要包裝與服務</span></div><div className="costBar"><i style={{width:'12%'}}/><span>品牌呈現</span></div></article></div>
    </section>

    <section className="storyInput" id="process">
      <div><span className="eyebrow gold">START WITH YOUR WHY</span><h2>先說出你的困擾。</h2><p>AI 不會取代你。它只是幫你把模糊的需求整理成可以開始討論的配方方向。</p></div>
      <div className="storyComposer"><label htmlFor="story">我為什麼想做這款產品？</label><textarea id="story" value={story} onChange={e=>setStory(e.target.value)}/><div className="storyPreview"><small>你的品牌起點</small><p>「{story}」</p><span>下一步：選擇目標、原料方向與劑型</span></div><a className="buttonLink" href="/formula">用這個故事建立配方</a></div>
    </section>

    <section className="moqStory" id="share">
      <div className="sectionHeading light"><span className="eyebrow gold">WHEN MOQ IS MORE THAN YOU NEED</span><h2>自己吃不完，不代表只能浪費。</h2><p>當你已經為自己打造產品並持續使用，CRU LAB 可以把超過個人需求的 MOQ，轉成一個可以被理解、被信任、被分享的品牌。</p></div>
      <div className="shareFlow"><article><b>1</b><h3>先留給自己</h3><p>保留自己的使用量，產品仍然以照顧自己為第一目的。</p></article><span>→</span><article><b>2</b><h3>說清楚你的故事</h3><p>分享你遇到的問題、為什麼選這些原料，以及你的使用歷程。</p></article><span>→</span><article><b>3</b><h3>建立自己的品牌</h3><p>由平台完成名稱、包裝、商品頁、商店與分售工具。</p></article><span>→</span><article><b>4</b><h3>分享給同樣困擾的人</h3><p>不是把所有人都當客戶，而是找到真正理解這個產品的人。</p></article></div>
      <a className="buttonLink lightButton" href="/brand-builder">把我的故事變成品牌</a>
    </section>

    <section className="section">
      <div className="sectionHeading"><span className="eyebrow gold">CRU LAB TOOLKIT</span><h2>你的故事是主角，平台負責完成其他事。</h2></div>
      <div className="toolGrid">{tools.map(([t,d,h])=><a href={h} key={t}><small>CRU LAB</small><h3>{t}</h3><p>{d}</p><span>開始使用 →</span></a>)}</div>
    </section>

    <section className="finalCta"><span className="eyebrow gold">YOUR PROBLEM. YOUR FORMULA. YOUR STORY.</span><h2>先幫助自己。<br/>然後，幫助更多人。</h2><p>從第一個真實困擾開始，打造你的第一款產品。</p><a className="buttonLink" href="/formula">開始打造</a></section>

    <footer><div className="logo">CRU LAB</div><p>Create for yourself. Share with people like you.</p><small>產品實際體感因人而異；個人使用經驗不得取代科學證據、醫療診斷或功效保證。所有正式產品仍需經配方、法規、標示與製造流程確認。</small></footer>
  </main>
}