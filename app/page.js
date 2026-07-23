import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

const flow = [
  ['01','定義需求','從睡眠、體態、美容、養髮或長壽目標開始。'],
  ['02','探索原料','比較專利原料、研究資料、劑量與成本。'],
  ['03','建立配方','把需求整理成可打樣、可估價的產品規格。'],
  ['04','製造上市','串接 OEM、包裝、法規與品牌上架流程。']
];

const ingredients = [
  ['MOROSIL®','西西里血橙','體態管理'],
  ['CEREBIOME®','腸腦軸益生菌','睡眠與情緒'],
  ['VERISOL®','專利膠原胜肽','肌膚彈性'],
  ['EPAX®','高純度魚油','心血管支持'],
  ['SETRIA®','還原型穀胱甘肽','亮白抗氧化'],
  ['AKKERMANSIA','新世代益生菌','代謝與腸道']
];

export default function Home(){
  return <SiteShell>
    <section className="v2Hero">
      <div className="v2HeroCopy">
        <p className="eyebrow">CRU LAB — WELLNESS CREATION PLATFORM</p>
        <h1>把一個真實需求，<br/>做成值得被相信的產品。</h1>
        <p className="heroLead">從原料研究、AI 配方、OEM 製造到品牌上市，CRU LAB 讓健康產品的開發流程變得透明、可比較，也真正做得出來。</p>
        <div className="heroActions">
          <Link href="/formula" className="primaryAction">開始建立配方</Link>
          <Link href="/ingredients" className="textAction">探索原料資料庫 <span>↗</span></Link>
        </div>
        <div className="heroMeta">
          <div><strong>2,000+</strong><span>原料資料</span></div>
          <div><strong>50+</strong><span>研究主題</span></div>
          <div><strong>15+</strong><span>產品劑型</span></div>
        </div>
      </div>
      <div className="v2HeroVisual" aria-label="CRU LAB 產品研究場景">
        <img src="/images/home-hero.webp" alt="CRU LAB 產品研究與配方開發" />
        <div className="visualShade"/>
        <div className="visualCaption"><span>Prototype No.01</span><b>Research before branding.</b></div>
      </div>
    </section>

    <section className="statement">
      <p className="eyebrow dark">WHY CRU LAB EXISTS</p>
      <h2>市場不缺更多商品。<br/>缺的是你真正願意每天使用的產品。</h2>
      <p>我們相信，品牌不該從包裝或廣告開始，而該從一個真實困擾、一份研究，以及一個願意長期使用的配方開始。</p>
    </section>

    <section className="processSection">
      <div className="sectionTitleRow">
        <div><p className="eyebrow">FROM IDEA TO MARKET</p><h2>四個步驟，完成一款產品。</h2></div>
        <p>把複雜的健康產品開發，整理成清楚、可追蹤的流程。</p>
      </div>
      <div className="processGrid">
        {flow.map(([n,t,d])=><article key={n}><span>{n}</span><div className="processMark"/><h3>{t}</h3><p>{d}</p></article>)}
      </div>
    </section>

    <section className="editorialSplit">
      <div className="editorialImage"><img src="/images/story.webp" alt="CRU LAB 研究與產品開發"/></div>
      <div className="editorialCopy">
        <p className="eyebrow dark">RESEARCH FIRST</p>
        <h2>先理解原料，<br/>再決定產品。</h2>
        <p>熱門成分不等於適合。CRU LAB 把來源、規格、臨床研究、建議劑量、成本與應用限制放在同一個決策框架中。</p>
        <Link href="/research" className="inkLink">進入研究中心 <span>↗</span></Link>
      </div>
    </section>

    <section className="ingredientSection">
      <div className="sectionTitleRow lightText">
        <div><p className="eyebrow">INGREDIENT INDEX</p><h2>原料不是名單，<br/>而是產品的核心。</h2></div>
        <Link href="/ingredients" className="textAction">查看全部原料 <span>↗</span></Link>
      </div>
      <div className="ingredientV2Grid">
        {ingredients.map(([name,origin,use],i)=><Link href="/ingredients" className="ingredientV2" key={name}>
          <span className="ingredientNo">0{i+1}</span>
          <div className={`ingredientOrb ingredientOrb${i+1}`}/>
          <p>{origin}</p><h3>{name}</h3><b>{use}</b>
        </Link>)}
      </div>
    </section>

    <section className="formulaStage">
      <div className="formulaIntro">
        <p className="eyebrow">FORMULA BUILDER</p>
        <h2>把想法整理成，<br/>可以開始打樣的規格。</h2>
        <p>選擇目標、劑型、預算與偏好的原料，系統協助建立配方方向、成本區間與下一步建議。</p>
        <Link href="/formula" className="primaryAction">開始我的配方</Link>
      </div>
      <div className="formulaPanel">
        <div className="panelTop"><span>CRU LAB / FORMULA 001</span><b>82%</b></div>
        <h3>體態管理 × 睡眠支持</h3>
        <div className="formulaChips"><span>Morosil®</span><span>Cerebiome®</span><span>L-Theanine</span></div>
        <dl><div><dt>建議劑型</dt><dd>膠囊</dd></div><div><dt>預估 MOQ</dt><dd>300 盒</dd></div><div><dt>預估成本</dt><dd>NT$ 380–520 / 盒</dd></div></dl>
        <div className="meter"><i/></div>
        <small>配方方向已建立，可進入 OEM 評估</small>
      </div>
    </section>

    <section className="finalCta">
      <p className="eyebrow">CREATE FOR YOURSELF</p>
      <h2>先做一款，<br/>你自己真正相信的產品。</h2>
      <Link href="/formula" className="primaryAction">開始建立我的產品</Link>
    </section>
  </SiteShell>
}
