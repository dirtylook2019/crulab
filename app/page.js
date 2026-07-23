'use client';

import { useEffect, useState } from 'react';

const problems = ['睡不好','體態卡關','掉髮困擾','腸胃不穩','找不到真正想長期使用的產品'];
const system = [
  ['01','說出你的困擾','從真實需求開始，不從市場熱門品項開始。'],
  ['02','理解原料與證據','比較來源、研究、限制與真正適合自己的選擇。'],
  ['03','建立專屬配方','AI 先整理方向，再由專業流程確認可行性。'],
  ['04','完成製造','把想法變成一款真正願意給自己長期使用的產品。'],
  ['05','留下自己的份量','產品首先是為了照顧自己，而不是為了賣給所有人。'],
  ['06','分享多出的 MOQ','把剩餘數量分享給真正有相同困擾的人。']
];

export default function Home(){
  const [active,setActive]=useState(0);

  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('is-visible');
    }),{threshold:.18});
    document.querySelectorAll('.story-reveal').forEach(el=>observer.observe(el));
    return()=>observer.disconnect();
  },[]);

  useEffect(()=>{
    const id=setInterval(()=>setActive(v=>(v+1)%problems.length),1800);
    return()=>clearInterval(id);
  },[]);

  return <main className="originSite">
    <header className="originNav">
      <a className="originWordmark" href="#top">CRU LAB</a>
      <nav><a href="#why">為何存在</a><a href="#method">如何完成</a><a href="#platform">平台工具</a><a href="#start">開始故事</a></nav>
      <a className="originNavCta" href="/formula">開始我的故事</a>
    </header>

    <section className="opening" id="top">
      <div className="openingLine story-reveal">
        <span>EVERY GREAT BRAND BEGINS WITH A REAL PROBLEM.</span>
        <h1>每一個偉大的品牌，<br/>都始於一個想解決自己問題的人。</h1>
      </div>
      <div className="scrollCue">SCROLL TO BEGIN <i/></div>
    </section>

    <section className="problemStory" id="why">
      <div className="problemIndex story-reveal">01 — THE PROBLEM</div>
      <div className="problemCopy story-reveal">
        <p>很多人並不是想創業。</p>
        <h2>他只是遇到了一個，<br/>一直沒有被好好解決的問題。</h2>
      </div>
      <div className="problemStage story-reveal">
        <span>可能是</span>
        <strong key={active}>{problems[active]}</strong>
      </div>
    </section>

    <section className="researchStory">
      <div className="researchNumber story-reveal">02</div>
      <div className="researchCopy story-reveal">
        <span>THE SEARCH</span>
        <h2>所以，他開始研究。</h2>
        <p>看文章、查論文、比較配方、理解原料、詢問專業人士。越研究，越清楚自己真正想要的是什麼。</p>
      </div>
      <div className="researchLines story-reveal">
        <div><small>SEARCH 01</small><b>這個原料從哪裡來？</b></div>
        <div><small>SEARCH 02</small><b>真的有研究依據嗎？</b></div>
        <div><small>SEARCH 03</small><b>為什麼市售產品都不是我想要的組合？</b></div>
      </div>
    </section>

    <section className="decisionStory">
      <div className="decisionInner story-reveal">
        <span>03 — THE DECISION</span>
        <p>最後，他發現：</p>
        <h2>沒有一款產品，<br/>是自己真正想給自己吃的。</h2>
        <strong>所以，他決定自己做。</strong>
      </div>
    </section>

    <section className="moqConflict">
      <div className="moqWord story-reveal">MOQ</div>
      <div className="moqCopy story-reveal">
        <span>04 — THE OBSTACLE</span>
        <h2>工廠說：<br/><b>最低三千盒。</b></h2>
        <p>一個人不可能吃完三千盒。很多真正好的想法，就停在這裡。</p>
      </div>
    </section>

    <section className="birthStory">
      <div className="birthGlow"/>
      <div className="birthInner story-reveal">
        <span>THIS IS WHY WE EXIST</span>
        <div className="birthLogo">CRU LAB</div>
        <h2>這就是 CRU LAB<br/>誕生的原因。</h2>
        <p>我們不是因為世界缺少更多保健品而成立。<br/>而是因為太多人，找不到真正想給自己使用的產品。</p>
      </div>
    </section>

    <section className="manifesto">
      <div className="manifestoLabel story-reveal">OUR BELIEF</div>
      <div className="manifestoText story-reveal">
        <p>CRU LAB 並不是一家 OEM 公司。</p>
        <h2>我們相信，最好的產品，<br/>不是先從市場分析開始。</h2>
        <h2>而是從一個人，<br/>真正想改善自己的生活開始。</h2>
        <p>所以我們打造一個平台，讓每個人都有能力創造自己真正相信的產品。當它值得被分享，再讓更多有相同困擾的人找到它。</p>
      </div>
    </section>

    <section className="method" id="method">
      <div className="methodHead story-reveal"><span>HOW CRU LAB HELPS</span><h2>你的故事是主角。<br/>平台只負責讓它成真。</h2></div>
      <div className="methodRows">
        {system.map(([n,t,d])=><article className="story-reveal" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}
      </div>
    </section>

    <section className="platform" id="platform">
      <div className="platformIntro story-reveal"><span>THE PLATFORM</span><h2>從困擾，到一款值得分享的產品。</h2></div>
      <div className="platformRail">
        <a className="story-reveal" href="/formula"><small>01</small><h3>AI 配方設計</h3><p>把模糊需求整理成可以開始討論的方向。</p><b>進入工具 ↗</b></a>
        <a className="story-reveal" href="/ingredients"><small>02</small><h3>原料資料庫</h3><p>理解來源、證據、專利與應用限制。</p><b>探索原料 ↗</b></a>
        <a className="story-reveal" href="/research"><small>03</small><h3>研究中心</h3><p>把艱深資料變成可理解的判斷依據。</p><b>查看研究 ↗</b></a>
        <a className="story-reveal" href="/brand-builder"><small>04</small><h3>品牌建立</h3><p>讓名稱、包裝與故事從產品自然延伸。</p><b>建立品牌 ↗</b></a>
      </div>
    </section>

    <section className="shareStory">
      <div className="shareCopy story-reveal">
        <span>FROM MOQ TO MEANING</span>
        <h2>做太多，不必浪費。<br/>也不必硬賣給所有人。</h2>
        <p>留下自己需要的份量，再把其餘產品分享給真正理解它為什麼被創造的人。</p>
      </div>
      <div className="shareEquation story-reveal"><span>MY PRODUCT</span><i>＋</i><span>MY STORY</span><i>＝</i><strong>A BRAND WORTH SHARING</strong></div>
    </section>

    <section className="finalOrigin" id="start">
      <div className="finalOriginInner story-reveal">
        <span>DON'T BUILD A BRAND.</span>
        <h2>不是先建立品牌。<br/>而是先打造一款，值得分享的產品。</h2>
        <a href="/formula">開始我的故事</a>
      </div>
    </section>

    <footer className="originFooter"><div className="originWordmark">CRU LAB</div><p>Create for yourself. Share with people like you.</p><small>產品實際體感因人而異；個人使用經驗不得取代科學證據、醫療診斷或功效保證。正式產品仍需經配方、法規、標示與製造流程確認。</small></footer>
  </main>;
}
