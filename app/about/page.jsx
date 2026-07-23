const steps=[
  ['01','遇到問題','睡眠、體態、腸道、肌膚或熟齡需求，往往先從自己的生活開始。'],
  ['02','開始研究','閱讀研究、比較原料、理解劑量與限制，而不是只看廣告。'],
  ['03','選擇原料','從來源、規格、有效劑量與實際應用，建立真正相信的配方基礎。'],
  ['04','打造原型','把需要的成分放進產品，先做出一款自己願意每天使用的版本。'],
  ['05','跨過 MOQ','當起訂量超過個人需求，一個產品才開始有機會成為品牌。'],
  ['06','分享出去','讓有相同困擾的人，也能找到一款為真實問題而生的產品。']
];

const beliefs=[
  ['RESEARCH FIRST','先理解，再選擇','不追逐熱門名詞；先看研究、來源、劑量與使用限制。'],
  ['CREATE FOR YOURSELF','先為自己打造','產品的第一位使用者不是市場，而是創造它的人。'],
  ['SHARE WITH PURPOSE','有理由才分享','當產品真正解決問題，品牌才有存在的價值。']
];

export default function AboutPage(){
  return <main className="v5Page v5Dark">
    <header className="v5Nav">
      <a className="v5Logo" href="/">CRU LAB<small>Create for Yourself.</small></a>
      <nav><a href="/about">關於 CRU LAB</a><a href="/formula">AI 配方設計</a><a href="/ingredients">原料資料庫</a><a href="/research">研究中心</a><a href="/brand-builder">品牌建立</a><a href="/shop">CRU SHOP</a></nav>
      <a className="v5NavCta" href="/formula">開始打造</a>
    </header>

    <section className="v5Hero aboutV5Hero" style={{minHeight:'88vh',position:'relative',overflow:'hidden'}}>
      <div style={{position:'relative',zIndex:2,maxWidth:680}}>
        <span className="v5Kicker">WHY CRU LAB EXISTS</span>
        <h1>不是先想著<br/>要賣什麼。</h1>
        <p>而是先問：我真正遇到的問題是什麼？CRU LAB 從個人需求、研究與配方開始，讓一款產品先對自己有價值。</p>
        <a className="v5GoldButton" href="/formula">開始我的配方</a>
      </div>
      <div style={{position:'absolute',right:'-4%',bottom:'-8%',width:'58%',minWidth:520,opacity:.82,filter:'drop-shadow(0 40px 70px rgba(0,0,0,.65))'}}>
        <img src="/images/home-hero-luxury.svg?v=about-20260723" alt="CRU LAB 配方研究與品牌誕生場景" style={{width:'100%',height:'auto',display:'block'}}/>
      </div>
      <div className="aboutStatement" style={{position:'relative',zIndex:3}}><small>OUR BELIEF</small><strong>先為自己打造，<br/>再分享給有同樣困擾的人。</strong></div>
    </section>

    <section className="v5LightSection">
      <div className="v5SectionIntro"><span>THE JOURNEY</span><h2>每個品牌，都始於一個想幫助自己的故事。</h2><p>從一個困擾開始，經過研究、選料、測試與製造，最後才成為值得分享的產品。</p></div>
      <div className="journeyGrid">{steps.map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="aboutSplit">
      <div><span className="v5Kicker">THE PROBLEM</span><h2>很多真正好的想法，停在 MOQ。</h2><p>當一個人找到自己相信的原料與配方，工廠卻可能要求數百或數千盒。CRU LAB 的角色，就是把研究、配方、製造、包裝與分享重新連成一條可執行的路。</p><a className="v5GoldButton" href="/brand-builder">了解品牌建立流程</a></div>
      <div className="moqNumber"><strong>500+</strong><span>常見起訂量</span><small>一個人用不完，卻可能剛好能幫助更多人。</small></div>
    </section>

    <section className="v5LightSection" style={{paddingTop:'8rem',paddingBottom:'8rem'}}>
      <div className="v5SectionIntro"><span>WHAT WE BELIEVE</span><h2>品牌不是包裝出來的，<br/>而是被相信出來的。</h2></div>
      <div className="journeyGrid">{beliefs.map(([k,t,d],i)=><article key={k}><b>0{i+1}</b><small>{k}</small><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="v5Manifesto"><small>CRU LAB MANIFESTO</small><h2>不要先建立品牌。<br/>先打造一款值得被分享的產品。</h2><p>從你的困擾、研究或一種真正相信的原料開始。</p><a href="/formula">從自己的需求開始 →</a></section>
  </main>
}