'use client';

import { useEffect } from 'react';

const pillars = [
  ['01','科學驗證','嚴選全球臨床研究與專利原料，讓每個配方決策都有清楚依據。'],
  ['02','AI 配方設計','從需求、劑型、預算與限制出發，快速建立專屬配方方向。'],
  ['03','彈性製造','以小量 MOQ 與透明估價，降低第一次打造產品的門檻。'],
  ['04','品牌建立','從名稱、包裝到品牌故事，讓產品自然長成一個完整品牌。']
];

const ingredients = [
  ['Morosil®','西西里血橙萃取','體態管理'],
  ['Cerebiome®','腸腦軸益生菌','情緒與睡眠'],
  ['Verisol®','專利膠原胜肽','肌膚彈性'],
  ['Epax®','挪威高純度魚油','心血管支持'],
  ['Setria®','還原型穀胱甘肽','亮顏抗氧化'],
  ['Chromax®','專利吡啶甲酸鉻','代謝支持']
];

export default function Home(){
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    },{threshold:.12});
    document.querySelectorAll('.reveal').forEach((el)=>observer.observe(el));
    return ()=>observer.disconnect();
  },[]);

  return <main className="luxSite">
    <header className="luxNav">
      <a className="luxLogo" href="/"><span>CRU LAB</span><small>CREATE FOR YOURSELF</small></a>
      <nav>
        <a href="/about">關於 CRU LAB</a><a href="/formula">AI 配方設計</a><a href="/ingredients">原料資料庫</a><a href="/research">研究中心</a><a href="/brand-builder">品牌建立</a><a href="/shop">CRU SHOP</a>
      </nav>
      <div className="navTools"><a href="/login">登入</a><a className="goldOutline" href="/formula">免費註冊</a></div>
    </header>

    <section className="luxHero">
      <div className="heroGlow"/>
      <div className="heroCopy reveal is-visible">
        <span className="kicker">CRU LAB / CREATE FOR YOURSELF</span>
        <h1>先為自己打造，<br/>再分享給有同樣困擾的人。</h1>
        <i className="goldLine"/>
        <p>CRU LAB 將研究、原料、AI 配方、製造與品牌建立，整合成一套真正可以完成產品的平台。</p>
        <div className="luxActions"><a className="goldButton" href="/formula">開始打造我的配方 <b>→</b></a><a className="ghostButton" href="/ingredients">探索原料資料庫</a></div>
        <div className="heroStats">
          <div><strong>50+</strong><span>臨床研究</span></div><div><strong>2,000+</strong><span>活性原料</span></div><div><strong>15+</strong><span>專利技術</span></div><div><strong>95%</strong><span>研究文獻支持</span></div>
        </div>
      </div>

      <div className="heroScene reveal is-visible" aria-label="CRU LAB 配方研究情境" style={{display:'flex',alignItems:'center',justifyContent:'center',overflow:'visible'}}>
        <img
          src="/images/home-hero-luxury.svg"
          alt="CRU LAB 黑金保健品配方研究場景"
          width="1200"
          height="800"
          loading="eager"
          style={{width:'118%',maxWidth:'none',height:'auto',objectFit:'contain',filter:'drop-shadow(0 34px 65px rgba(0,0,0,.65))',transform:'translateX(2%)'}}
        />
      </div>
      <a className="scrollHint" href="#mission">SCROLL <i/></a>
    </section>

    <section id="mission" className="missionSection">
      <div className="missionIntro reveal"><span>OUR MISSION</span><h2>解決市場沒有的問題，<br/>打造你真正需要的產品。</h2><p>市場上的產品，往往不是為了解決你的問題而存在。我們相信，最好的產品，來自於真實需求與科學驗證。</p></div>
      <div className="pillarGrid">{pillars.map(([num,title,desc])=><article className="reveal" key={num}><small>{num}</small><div className="lineIcon"/><h3>{title}</h3><p>{desc}</p><a href={num==='01'?'/research':num==='02'?'/formula':num==='03'?'/formula':'/brand-builder'}>深入了解 →</a></article>)}</div>
    </section>

    <section className="storyBand">
      <div className="storyImage reveal"><div className="storyBottle">CRU LAB<small>MY FORMULA</small></div><div className="storyNotes">RESEARCH<br/>FORMULA<br/>PROTOTYPE</div></div>
      <div className="storyCopy reveal"><span>WHY CRU LAB</span><h2>不是先建立品牌，<br/>而是先打造值得分享的產品。</h2><p>有人因為睡不好開始查資料；有人因為掉髮研究成分；有人想改善體態，卻找不到真正認同的配方。CRU LAB 讓這些真實需求，有機會變成真正屬於自己的產品。</p><a href="/about">閱讀完整品牌故事 →</a></div>
    </section>

    <section className="ingredientSection">
      <div className="sectionTitle reveal"><span>INGREDIENT DATABASE</span><h2>每一種原料，<br/>都應該被真正理解。</h2><p>不是只看熱門名稱，而是理解來源、規格、研究、建議劑量與應用限制。</p></div>
      <div className="ingredientCards">{ingredients.map(([name,source,use],index)=><a className="ingredientCard reveal" href="/ingredients" key={name}><small>0{index+1}</small><div className={`ingredientArt art${index+1}`}/><span>{use}</span><h3>{name}</h3><p>{source}</p><b>查看原料資料 ↗</b></a>)}</div>
    </section>

    <section className="formulaShowcase">
      <div className="formulaCopy reveal"><span>AI FORMULA BUILDER</span><h2>把真實需求，<br/>整理成可以開始的配方。</h2><p>選擇目標、原料、劑型與預算，AI 協助整理配方架構、成本範圍與下一步。</p><div className="formulaSteps"><b>01 描述困擾</b><b>02 選擇原料</b><b>03 查看估價</b><b>04 建立產品</b></div><a className="goldButton" href="/formula">開始我的配方 →</a></div>
      <div className="builderPanel reveal"><div className="panelTop"><span>CRU LAB FORMULA / 001</span><i/><i/><i/></div><h3>體態管理・睡眠支持</h3><div className="selectedTags"><span>Morosil®</span><span>Cerebiome®</span><span>L-Theanine</span></div><div className="costRows"><p><span>建議劑型</span><b>膠囊</b></p><p><span>預估 MOQ</span><b>300 盒</b></p><p><span>配方完成度</span><b>82%</b></p></div><div className="progress"><i/></div><button>生成完整配方建議</button></div>
    </section>

    <section className="researchBand">
      <div className="sectionTitle light reveal"><span>RESEARCH CENTER</span><h2>我們不替原料製造神話，<br/>只整理值得被理解的證據。</h2></div>
      <div className="researchGrid"><article className="reveal"><small>CLINICAL STUDY</small><h3>血橙萃取與體態管理</h3><p>研究設計、受試條件、使用劑量與結果摘要。</p><a href="/research">閱讀研究 →</a></article><article className="reveal"><small>INGREDIENT NOTE</small><h3>益生菌與腸腦軸</h3><p>菌株差異、研究方向與產品應用限制。</p><a href="/research">閱讀研究 →</a></article><article className="reveal"><small>FORMULATION</small><h3>有效劑量不是越多越好</h3><p>理解劑量、配伍、劑型與使用情境。</p><a href="/research">閱讀研究 →</a></article></div>
    </section>

    <section className="finalCta reveal"><span>CREATE FOR YOURSELF</span><h2>先打造一款，<br/>你自己真正相信的產品。</h2><p>從一個困擾、一項研究，或一種你真正想使用的原料開始。</p><div><a className="goldButton" href="/formula">開始打造我的配方 →</a><a className="ghostButton" href="/about">認識 CRU LAB</a></div></section>

    <footer className="luxFooter"><div><a className="luxLogo" href="/"><span>CRU LAB</span><small>CREATE FOR YOURSELF</small></a><p>研究、原料、配方、製造與品牌建立。</p></div><div><b>EXPLORE</b><a href="/about">關於我們</a><a href="/ingredients">原料資料庫</a><a href="/research">研究中心</a></div><div><b>CREATE</b><a href="/formula">AI 配方設計</a><a href="/brand-builder">品牌建立</a><a href="/shop">CRU SHOP</a></div><small>產品資訊僅供一般知識與產品開發參考；正式產品仍須依台灣法規、標示與製造流程確認。</small></footer>
  </main>;
}
