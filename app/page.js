'use client';

import { useEffect } from 'react';

const services = [
  ['/formula','AI 配方設計','從真實困擾出發，把需求整理成清楚的產品方向。','01'],
  ['/ingredients','原料資料庫','理解原料來源、專利、研究與應用限制。','02'],
  ['/research','研究中心','把艱深資料整理成容易理解的決策依據。','03'],
  ['/brand-builder','品牌建立','讓名稱、包裝與故事從產品自然延伸。','04'],
  ['/shop','CRU SHOP','讓有相同困擾的人找到值得被分享的產品。','05']
];

export default function Home(){
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('is-visible');
    }),{threshold:.16});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    return()=>observer.disconnect();
  },[]);

  return <main className="site">
    <header className="siteNav">
      <a className="wordmark" href="/">CRU LAB</a>
      <nav><a href="/about">關於 CRU LAB</a><a href="/formula">AI 配方</a><a href="/ingredients">原料資料庫</a><a href="/research">研究中心</a><a href="/brand-builder">品牌建立</a><a href="/shop">CRU SHOP</a></nav>
      <a className="navCta" href="/formula">開始打造</a>
    </header>

    <section className="homeHero">
      <div className="homeHeroCopy reveal is-visible">
        <span>CREATE FOR YOURSELF</span>
        <h1>先為自己打造，<br/>再分享給有同樣困擾的人。</h1>
        <p>CRU LAB 的存在，不是因為市場缺少更多商品，而是因為很多人始終找不到一款真正想給自己長期使用的產品。</p>
        <div className="heroActions"><a href="/about">了解我們為何存在</a><a className="secondary" href="/formula">開始我的配方</a></div>
      </div>
      <div className="homeHeroVisual reveal is-visible"><div className="visualFrame"><small>CRU LAB / 001</small><div className="visualProduct"><i/><b>MY FORMULA</b><span>CREATED FOR ME</span></div><p>不是先建立品牌。<br/>而是先打造值得分享的產品。</p></div></div>
    </section>

    <section className="homeWhy reveal">
      <span>WHY CRU LAB</span>
      <h2>每一個品牌，都應該先有一個值得被相信的理由。</h2>
      <p>有人因為睡不好開始查資料；有人因為掉髮研究成分；有人想改善體態，卻找不到真正認同的配方。CRU LAB 讓這些真實需求，有機會變成真正屬於自己的產品。</p>
      <a href="/about">閱讀完整品牌故事 →</a>
    </section>

    <section className="homePrinciples">
      <article className="reveal"><small>01</small><h3>先解決自己的問題</h3><p>產品先服務真實需求，而不是先追逐市場熱門題目。</p></article>
      <article className="reveal"><small>02</small><h3>把預算放在重要的地方</h3><p>原料、規格、劑量與製造，由你決定優先順序。</p></article>
      <article className="reveal"><small>03</small><h3>值得分享，品牌才誕生</h3><p>當產品真正被使用與相信，再分享給有相同困擾的人。</p></article>
    </section>

    <section className="serviceIntro reveal"><span>THE CRU LAB SYSTEM</span><h2>一個平台，完成一款產品的全部旅程。</h2><p>每一項功能都有自己的完整分頁，不再塞在首頁裡。</p></section>

    <section className="serviceList">{services.map(([href,title,desc,num])=><a className="serviceRow reveal" href={href} key={href}><small>{num}</small><h3>{title}</h3><p>{desc}</p><b>進入分頁 ↗</b></a>)}</section>

    <section className="homeFinal reveal"><span>DON'T BUILD A BRAND FIRST.</span><h2>先打造一款，<br/>你自己真正相信的產品。</h2><a href="/formula">開始我的故事</a></section>

    <footer className="siteFooter"><div className="wordmark">CRU LAB</div><p>Create for yourself. Share with people like you.</p><small>產品實際體感因人而異；正式產品仍需經配方、法規、標示與製造流程確認。</small></footer>
  </main>;
}
