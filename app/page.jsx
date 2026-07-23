'use client';

import { useMemo, useState } from 'react';

const journey = [
  ['01','遇到問題','睡眠、體態、肌膚或日常營養需求，先從自己的真實困擾開始。','problem'],
  ['02','開始研究','理解原料來源、研究證據、建議劑量與使用限制。','research'],
  ['03','打造配方','選擇真正需要的成分，由 AI 整理成可討論的配方方向。','formula'],
  ['04','親自使用','先做自己願意每天使用、願意長期相信的產品。','use'],
  ['05','MOQ 量產','與專業製造夥伴完成檢驗、包裝與量產。','production'],
  ['06','分享給更多人','當數量超過個人需要，就分享給有同樣困擾的人。','share']
];

const ingredients = [
  ['Morosil®','義大利西西里血橙萃取','體態管理','morosil'],
  ['Verisol®','專利膠原蛋白胜肽','肌膚保養','verisol'],
  ['Epax®','高規格 Omega-3 魚油','日常健康','epax'],
  ['Cerebiome®','腸腦軸益生菌','睡眠與情緒','cerebiome'],
  ['Setria®','專利穀胱甘肽','抗氧化','setria'],
  ['Sinetrol®','柑橘多酚複方','代謝支持','sinetrol']
];

export default function Home(){
  const [goal,setGoal]=useState('睡眠品質');
  const formula=useMemo(()=> goal==='睡眠品質' ? [['Cerebiome®','200 mg'],['GABA','100 mg'],['Magnesium','150 mg'],['L-Theanine','100 mg']] : goal==='體態管理' ? [['Morosil®','400 mg'],['Sinetrol®','300 mg'],['Chromax®','200 mcg'],['Psyllium','1000 mg']] : [['Verisol®','2500 mg'],['Setria®','250 mg'],['Vitamin C','200 mg'],['Ceramide','30 mg']],[goal]);
  return <main className="luxHome">
    <header className="luxNav">
      <a className="luxLogo" href="#top"><b>CRU LAB</b><small>Create for Yourself.<br/>Share with the World.</small></a>
      <nav><a href="/about">關於 CRU LAB</a><a href="/formula">AI 配方設計</a><a href="/ingredients">原料資料庫</a><a href="/research">研究中心</a><a href="/brand-builder">品牌建立</a><a href="/shop">CRU SHOP</a></nav>
      <a className="luxJoin" href="/formula">免費開始</a>
    </header>

    <section className="luxHero" id="top">
      <div className="luxHeroCopy"><span>為自己打造 · 都是一個人的故事</span><h1>先為自己打造，<br/><em>再分享給有同樣困擾的人。</em></h1><p>因為自己遇到了問題，所以打造一款真正適合自己的產品。當 MOQ 超過個人需要，就分享給更多有相同困擾的人。</p><div className="luxActions"><a href="/formula">開始打造我的配方 <b>→</b></a><a href="/about">了解 CRU LAB</a></div></div>
      <div className="luxHeroScene"><div className="labGlow"/><div className="labBottle"><i/><small>CREATED WITH</small><strong>CRU LAB</strong><span>PROTOTYPE 01</span></div><div className="labBox"><b>CRU LAB</b><small>Create for Yourself.<br/>Share with the World.</small></div><div className="labNotebook">Sleep<br/>Weight<br/>Stress<br/><b>✓</b></div><div className="labScreen"><small>FORMULA BUILDER</small><div/><div/><div/></div></div>
      <div className="heroStats"><div><b>10,000+</b><span>配方組合</span></div><div><b>500+</b><span>專利原料</span></div><div><b>200+</b><span>合作工廠</span></div><div><b>98%</b><span>客戶滿意度</span></div></div>
    </section>

    <section className="journeySection"><header><span>OUR APPROACH</span><h2>每一個品牌，都始於一個想幫助自己的故事</h2></header><div className="journeyGrid">{journey.map(([no,title,text,type])=><article key={no}><b>{no}</b><div className={'journeyImage '+type}/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="costSection"><div className="costCopy"><span>BETTER FORMULA</span><h2>把花在品牌上的錢，<br/>用在<span>更好的成分</span>上</h2><p>傳統保健品的大量成本用於通路、廣告與包裝。CRU LAB 將更多預算投入優質原料、研究、檢驗與實際製造。</p><a href="/ingredients">查看原料資料庫 →</a></div><div className="costCards"><div><h3>市場保健品成本分配</h3>{[['行銷廣告',35],['通路抽成',30],['包裝設計',15],['研發成本',10],['原料成本',10]].map(([n,v])=><p key={n}><span>{n}</span><i><u style={{width:v+'%'}}/></i><b>{v}%</b></p>)}</div><strong>VS</strong><div className="goldCost"><h3>CRU LAB 成本分配</h3>{[['優質原料',60],['研究配方',20],['包裝設計',10],['製造生產',5],['品牌服務',5]].map(([n,v])=><p key={n}><span>{n}</span><i><u style={{width:v+'%'}}/></i><b>{v}%</b></p>)}</div></div></section>

    <section className="ingredientShowcase"><div className="sectionTitle"><span>PREMIUM INGREDIENTS</span><h2>嚴選全球頂級原料，<br/>只為更好的配方。</h2><p>每一種原料都整理來源、專利、研究摘要、建議劑型與應用限制。</p></div><div className="ingredientLuxGrid">{ingredients.map(([name,note,tag,kind])=><a href="/ingredients" className={'ingredientLux '+kind} key={name}><div className="ingredientArt"/><small>{tag}</small><h3>{name}</h3><p>{note}</p><span>查看原料 →</span></a>)}</div></section>

    <section className="aiSection"><div className="aiCopy"><span>AI FORMULA DESIGN</span><h2>AI 配方設計，<br/>為你量身打造。</h2><p>輸入自己的目標與需求，AI 即時整理適合的配方方向、原料組合與概念劑量。</p><a href="/formula">開始 AI 配方設計 →</a></div><div className="aiBuilder"><div className="aiSteps"><b>01 告訴我們你的目標</b><div className="goalBtns">{['睡眠品質','體態管理','肌膚保養'].map(x=><button className={goal===x?'active':''} onClick={()=>setGoal(x)} key={x}>{x}</button>)}</div></div><div className="aiSteps"><b>02 AI 推薦配方</b>{formula.map(([n,d])=><p key={n}><span>{n}</span><strong>{d}</strong></p>)}</div><div className="aiSteps productPreview"><b>03 配方詳情</b><div className="miniBottle">CRU<br/>LAB</div><h3>{goal}</h3><small>專屬概念配方</small></div><div className="aiSteps"><b>04 開始製作</b><ul><li>選擇劑型</li><li>確認原料</li><li>檢視 MOQ</li><li>安排生產</li></ul><a href="/formula">下一步 →</a></div></div></section>

    <section className="moqSection"><div><span>FROM FORMULA TO BRAND</span><h2>MOQ 用不完？<br/>我們幫你分享出去。</h2><p>完成自己的產品後，可以建立專屬品牌、商品頁與商城，把多出的數量分享給有相同需求的人。</p><a href="/brand-builder">建立我的品牌 →</a></div><div className="moqFlow"><article><div className="flowVisual bottles"/><h3>完成配方</h3><p>選擇 MOQ 數量</p></article><b>→</b><article><div className="flowVisual package"/><h3>建立品牌</h3><p>名稱、故事與包裝</p></article><b>→</b><article><div className="flowVisual phone"/><h3>專屬商城</h3><p>商品頁與結帳服務</p></article><b>→</b><article><div className="flowVisual people"/><h3>分享給更多人</h3><p>找到相同需求的人</p></article></div></section>

    <section className="proofBand"><div><span>科學研究 · 真實數據</span><h2>研究不是裝飾，<br/>而是每個配方的起點。</h2><a href="/research">進入研究中心 →</a></div><div className="proofNumbers"><p><b>10,000+</b><span>研究資料</span></p><p><b>500+</b><span>專利原料</span></p><p><b>200+</b><span>合作工廠</span></p><p><b>100%</b><span>資訊透明</span></p></div></section>

    <footer className="luxFooter"><div><b>CRU LAB</b><p>Create for Yourself.<br/>Share with the World.</p></div><nav><a href="/about">關於我們</a><a href="/formula">AI 配方設計</a><a href="/ingredients">原料資料庫</a><a href="/research">研究中心</a><a href="/brand-builder">品牌建立</a><a href="/shop">CRU SHOP</a></nav><div><h4>訂閱 CRU LAB 電子報</h4><p>獲取最新研究與原料資訊</p><label><input placeholder="輸入你的 Email"/><button>→</button></label></div></footer>
  </main>
}