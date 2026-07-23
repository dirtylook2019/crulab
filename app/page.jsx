'use client';

import { useMemo, useState } from 'react';

const ingredients = [
  { name: 'Sinetrol®', tag: '體態管理', note: '柑橘多酚複方' },
  { name: 'Verisol®', tag: '肌膚保養', note: '膠原蛋白胜肽' },
  { name: 'Epax®', tag: '日常健康', note: '高純度 Omega-3' },
  { name: 'Cerebiome®', tag: '情緒與睡眠', note: '腸腦軸益生菌' },
  { name: 'Setria®', tag: '抗氧化', note: '穀胱甘肽原料' },
  { name: 'Chromax®', tag: '代謝支持', note: '專利吡啶甲酸鉻' }
];

const stories = [
  ['Sinetrol®', '從地中海柑橘，到現代體態管理配方。', '/ingredients'],
  ['Verisol®', '用更容易理解的方式，看懂膠原胜肽研究。', '/research'],
  ['Epax®', '從海洋來源、純化規格到實際產品應用。', '/ingredients']
];

const papers = [
  ['體態管理', '柑橘多酚複方研究摘要', '研究目的、方法、結果、限制，一頁看懂。'],
  ['肌膚保養', '膠原蛋白胜肽與皮膚狀態', '把艱深論文轉為品牌可以使用的知識。'],
  ['腸腦軸', '益生菌、壓力與睡眠品質', '保留研究限制，不把相關性寫成保證。']
];

export default function Home() {
  const [mode, setMode] = useState('self');
  const [selected, setSelected] = useState(['Sinetrol®', 'Cerebiome®']);
  const [quantity, setQuantity] = useState(500);

  const estimate = useMemo(() => {
    const base = mode === 'business' ? 98000 : 28000;
    const ingredientCost = selected.length * 12800;
    const production = Math.max(1, quantity / 500) * 22000;
    return Math.round(base + ingredientCost + production);
  }, [mode, selected, quantity]);

  function toggleIngredient(name) {
    setSelected((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  }

  return (
    <main>
      <header className="nav">
        <a className="logo" href="#top">CRU LAB</a>
        <nav>
          <a href="/formula">AI 配方</a>
          <a href="/ingredients">原料資料庫</a>
          <a href="/research">研究中心</a>
          <a href="/brand-builder">品牌建立</a>
          <a href="#shop">CRU SHOP</a>
        </nav>
        <a className="navButton" href="/brand-builder">免費開始</a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <span className="eyebrow">保健品牌創作平台</span>
          <h1>停止購買，<br />開始創造。</h1>
          <p>從需求、配方與研究，到製造、包裝與品牌商城。把保健品開發，變成任何人都能開始的創作流程。</p>
          <div className="heroActions">
            <a className="buttonLink" href="/formula">為自己客製配方</a>
            <a className="buttonLink secondary" href="/brand-builder">建立品牌販售</a>
          </div>
        </div>
        <div className="heroVisual" aria-label="CRU LAB signature packaging concept">
          <div className="orb" />
          <div className="signatureBox"><small>CREATED WITH</small><strong>CRU LAB</strong><span>FORMULA 01</span></div>
        </div>
      </section>

      <section className="manifesto" id="why">
        <span className="eyebrow gold">為什麼需要 CRU LAB</span>
        <h2>你不需要先成為一間保健品公司，才能創造自己的產品。</h2>
        <p>傳統開發流程分散在原料、代工、設計、法規與通路之間。CRU LAB 把它們重新整理成一條清楚、可理解、可執行的路徑。</p>
        <div className="beliefGrid">
          <article><b>01</b><h3>更多掌控</h3><p>不再只能接受固定配方。從功能方向、原料與劑型開始選擇。</p></article>
          <article><b>02</b><h3>更少阻力</h3><p>不必自己逐一尋找原料、包裝與製造資源，平台統一承接流程。</p></article>
          <article><b>03</b><h3>為上市而生</h3><p>完成產品後，直接建立自己的 CRU SHOP 商城並開始販售。</p></article>
        </div>
      </section>

      <section className="paths">
        <article><span>FOR MYSELF</span><h2>為自己打造。</h2><p>從生活需求出發，透過 AI 建議找到適合的配方方向，查看預估成本並進入製作。</p><ol><li>描述需求</li><li>AI 配方建議</li><li>選擇原料</li><li>成本估算</li><li>製造與收貨</li></ol></article>
        <article><span>FOR BUSINESS</span><h2>為市場創造。</h2><p>適合創作者、教練、營養師、美容診所與品牌主，從產品一路建立到自己的商店。</p><ol><li>建立配方</li><li>選擇包裝</li><li>安排生產</li><li>開啟 CRU SHOP</li><li>銷售與分潤</li></ol></article>
      </section>

      <section className="section" id="ingredients">
        <div className="sectionHeading"><span className="eyebrow gold">原料故事</span><h2>每一項原料，都值得被真正理解。</h2><p>不是只有成分名稱。CRU LAB 將來源、專利、研究、限制與應用整理成品牌與消費者都看得懂的內容。</p></div>
        <div className="cardGrid">{stories.map(([name, text, href]) => <article className="storyCard" key={name}><small>專利原料</small><h3>{name}</h3><p>{text}</p><a className="textLink" href={href}>查看完整資料 →</a></article>)}</div>
      </section>

      <section className="experts">
        <div className="sectionHeading light"><span className="eyebrow gold">營養師精選</span><h2>由專業觀點，建立配方靈感。</h2><p>正式合作前，人物與推薦內容將以示意資料呈現；平台不會把未確認的合作關係包裝成代言。</p></div>
        <div className="expertGrid">{[['林營養師','體態管理','配方應該從生活型態開始，而不是從流行成分開始。'],['周營養師','腸道健康','原料選擇之外，劑量、搭配與使用方式同樣重要。'],['陳營養師','女性保養','好的產品需要兼顧研究依據與長期使用體驗。'],['許營養師','熟齡健康','不是成分越多越好，而是每一項都要有清楚角色。']].map(([name, specialty, quote]) => <article key={name}><div className="avatar">{name[0]}</div><small>{specialty}</small><h3>{name}</h3><blockquote>「{quote}」</blockquote><span>合作專家示意資料</span></article>)}</div>
      </section>

      <section className="section research" id="research">
        <div className="sectionHeading"><span className="eyebrow gold">研究中心</span><h2>PubMed 的深度，人人都能理解的語言。</h2><p>每篇研究都拆解為目的、方法、結果、限制與 AI 摘要，避免只截取對銷售有利的片段。</p></div>
        <div className="cardGrid">{papers.map(([tag, title, text]) => <article className="paperCard" key={title}><small>{tag}</small><h3>{title}</h3><p>{text}</p><div className="paperMeta"><span>研究目的</span><span>研究方法</span><span>研究限制</span></div><a className="textLink" href="/research">查看研究摘要 →</a></article>)}</div>
      </section>

      <section className="builder" id="builder">
        <div className="builderMain"><span className="eyebrow gold">AI 配方建立器</span><h2>從一個想法，開始建立。</h2><div className="modeSwitch"><button className={mode === 'self' ? 'active' : ''} onClick={() => setMode('self')}>為自己客製</button><button className={mode === 'business' ? 'active' : ''} onClick={() => setMode('business')}>建立品牌</button></div><label>選擇配方方向</label><div className="ingredientGrid">{ingredients.map((item) => <button key={item.name} className={selected.includes(item.name) ? 'selected' : ''} onClick={() => toggleIngredient(item.name)}><b>{item.name}</b><span>{item.tag}</span><small>{item.note}</small></button>)}</div><label htmlFor="quantity">預計數量：{quantity.toLocaleString()} 盒</label><input id="quantity" type="range" min="100" max="3000" step="100" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} /></div>
        <aside className="estimate"><small>即時概念估價</small><h3>{mode === 'self' ? '個人配方' : '品牌上市方案'}</h3><div><span>已選原料</span><b>{selected.length} 項</b></div><div><span>生產數量</span><b>{quantity.toLocaleString()} 盒</b></div><div><span>包裝方案</span><b>Signature</b></div><strong>NT$ {estimate.toLocaleString()}</strong><p>此為概念估價，正式價格將依劑量、原料規格、檢驗與包裝確認。</p><a className="buttonLink lightButton" href="/formula">繼續建立配方</a></aside>
      </section>

      <section className="shop" id="shop">
        <div><span className="eyebrow gold">CRU SHOP</span><h2>產品完成，商店也準備好了。</h2><p>每位品牌建立者都能擁有自己的首頁、商品頁、結帳、會員、優惠券、推薦與分潤工具。</p><code>shop.crulab.com.tw/yourbrand</code><a className="buttonLink" href="/brand-builder">建立我的商店</a></div>
        <div className="browser"><div className="browserBar"><i/><i/><i/><span>shop.crulab.com.tw/mia</span></div><div className="storeHero"><small>MIA WELLNESS</small><h3>Designed for your everyday ritual.</h3></div><div className="products">{['PURE','NOIR','ROSE'].map((name) => <article key={name}><div>{name}</div><h4>Daily Formula</h4><span>NT$ 1,980</span></article>)}</div></div>
      </section>

      <footer><div className="logo">CRU LAB</div><p>Build the formula. Tell the story. Launch the brand.</p><small>CRU LAB 為獨立的保健品創作與品牌建立平台，與 CRU 官方網站及其電商服務分開營運。</small></footer>
    </main>
  );
}