import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import { media } from '@/lib/media';

const process = [
  ['01','Observe','從睡眠、體態、肌膚或日常狀態，看見真正困擾。'],
  ['02','Research','閱讀研究、理解原料來源、劑量與使用限制。'],
  ['03','Formulate','把需求整理成一款自己願意長期使用的配方。'],
  ['04','Manufacture','以透明估價、小量 MOQ 與品質流程做出產品。'],
  ['05','Share','當產品真的有價值，再分享給有同樣困擾的人。']
];

export default function Home() {
  return <SiteShell>
    <section className="homeHero">
      <div className="homeHeroCopy">
        <span className="eyebrow">CREATE FOR YOURSELF</span>
        <h1>先為自己打造，<br/><em>再分享給有同樣困擾的人。</em></h1>
        <p>不是先想著要賣什麼，而是先把研究、原料、配方與製造整理成一款自己真正相信的產品。</p>
        <div className="heroActions"><Link className="solidButton" href="/formula">開始打造我的配方</Link><Link className="outlineButton" href="/about">閱讀品牌故事</Link></div>
        <div className="heroNumbers"><div><b>50+</b><span>研究主題</span></div><div><b>2,000+</b><span>原料資料</span></div><div><b>300</b><span>盒起訂方向</span></div></div>
      </div>
      <figure className="homeHeroVisual"><img src={media.home} alt="CRU LAB 配方研究與原型產品場景"/><figcaption><span>PROTOTYPE 001</span><p>Research, formula and a product worth sharing.</p></figcaption></figure>
      <a className="scrollCue" href="#origin"><span>SCROLL</span><i/></a>
    </section>

    <section className="originSection" id="origin">
      <div className="originStatement"><span className="eyebrow eyebrow--dark">WHY CRU LAB EXISTS</span><h2>市場不缺更多商品。<br/>缺的是你真正願意每天使用的產品。</h2><p>CRU LAB 的起點很簡單：有人遇到問題，開始查研究、比較原料、做出一款給自己使用的產品。當 MOQ 超過個人所需，分享才成為品牌。</p><Link className="textLink textLink--dark" href="/about">了解 CRU LAB 的誕生 <i>↗</i></Link></div>
      <figure className="originImage"><img src={media.researchDesk} alt="閱讀研究與整理配方的過程"/><figcaption>Most brands begin with a market.<br/><em>We begin with a problem.</em></figcaption></figure>
    </section>

    <section className="processSection">
      <div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">THE PROCESS</span><h2>從一個困擾，<br/>到一款值得被分享的產品。</h2></div>
      <div className="processRail">{process.map(([n,title,desc])=><article key={n}><small>{n}</small><i/><h3>{title}</h3><p>{desc}</p></article>)}</div>
    </section>

    <section className="platformSection">
      <div className="sectionIntro"><span className="eyebrow">ONE CONNECTED PLATFORM</span><h2>研究、原料、配方、製造與品牌，<br/>不應該是五個互不相連的流程。</h2><p>CRU LAB 把每一個決策放回同一條產品路徑，讓你知道自己為什麼選擇、花費在哪裡，以及下一步是什麼。</p></div>
      <div className="platformGrid">
        <Link href="/research" className="platformCard platformCard--wide"><span>01 / RESEARCH</span><h3>Evidence before claims.</h3><p>研究目的、方法、結果與限制，一起被看見。</p><img src={media.researchDesk} alt="研究文獻與營養科學資料"/></Link>
        <Link href="/ingredients" className="platformCard platformCard--cream"><span>02 / INGREDIENTS</span><h3>Only what deserves to be in your body.</h3><p>理解來源、規格、建議劑量與應用情境。</p><img src={media.orange} alt="血橙原料"/></Link>
        <Link href="/formula" className="platformCard"><span>03 / FORMULA</span><h3>Your needs. Our system.</h3><p>把需求與預算整理成可開始的配方方向。</p><div className="miniFormulaUi"><small>FORMULA / 001</small><b>Sleep & Metabolic Support</b><div><i style={{width:'82%'}}/><i style={{width:'62%'}}/><i style={{width:'74%'}}/></div></div></Link>
        <Link href="/brand-builder" className="platformCard platformCard--visual"><span>04 / BRAND</span><h3>A product first. A brand second.</h3><p>從包裝、命名到商品頁，建立一致的品牌語言。</p><img src={media.packaging} alt="CRU LAB 品牌產品包裝"/></Link>
      </div>
    </section>

    <section className="formulaFeature">
      <div className="formulaFeatureCopy"><span className="eyebrow">AI FORMULA BUILDER</span><h2>把模糊的需求，<br/>整理成可以開始的配方。</h2><p>選擇目標、原料、劑型、預算與數量。系統協助建立配方架構、概念成本與下一步，不用從空白開始。</p><ul><li>研究與原料資料連動</li><li>配方劑量與成本概念</li><li>MOQ、包裝與製造路徑</li></ul><Link className="solidButton" href="/formula">進入 AI 配方設計</Link></div>
      <div className="formulaFeatureUi"><div className="uiHeader"><span>CRU LAB / FORMULA 001</span><i/><i/><i/></div><div className="uiBody"><aside><small>GOAL</small><b>睡眠支持</b><b>體態管理</b><small>FORMAT</small><b>Capsule</b></aside><div className="uiMain"><span>RECOMMENDED FORMULA</span><h3>Night Reset / Metabolic Support</h3>{[['Cerebiome®','200 mg'],['L-Theanine','150 mg'],['Magnesium','180 mg'],['Morosil®','400 mg']].map(([a,b])=><p key={a}><span>{a}</span><b>{b}</b></p>)}<div className="uiProgress"><i/></div><small>Formula confidence 82%</small></div></div></div>
    </section>

    <section className="ingredientSpotlight">
      <figure><img src={media.orange} alt="Morosil 血橙萃取"/></figure>
      <div><span className="eyebrow eyebrow--dark">FEATURED INGREDIENT</span><h2>Morosil®</h2><h3>西西里血橙萃取</h3><p>不是只看熱門名稱，而是一起理解來源、規格、研究設計、建議劑量與適用情境。</p><dl><div><dt>來源</dt><dd>義大利・西西里</dd></div><div><dt>研究</dt><dd>12 項臨床資料</dd></div><div><dt>方向</dt><dd>體態管理・代謝支持</dd></div></dl><Link className="textLink textLink--dark" href="/ingredients">探索原料資料庫 <i>↗</i></Link></div>
    </section>

    <section className="researchJournal">
      <div className="sectionIntro"><span className="eyebrow">RESEARCH JOURNAL</span><h2>不替原料製造神話。<br/>只整理值得被理解的證據。</h2></div>
      <div className="journalGrid">{[
        ['Clinical Study','血橙萃取與體態管理','研究設計、受試條件、使用劑量與結果摘要。'],
        ['Ingredient Note','益生菌與腸腦軸','菌株差異、研究方向與產品應用限制。'],
        ['Formulation','有效劑量不是越多越好','理解劑量、配伍、劑型與實際使用情境。']
      ].map(([tag,title,copy],i)=><article key={title}><small>{String(i+1).padStart(2,'0')} / {tag}</small><h3>{title}</h3><p>{copy}</p><Link href="/research">閱讀研究 <i>↗</i></Link></article>)}</div>
    </section>

    <section className="finalCta"><span className="eyebrow">CREATE FOR YOURSELF</span><h2>先做出一款，<br/>你自己真正相信的產品。</h2><p>從一個困擾、一項研究，或一種你真正想使用的原料開始。</p><div><Link className="solidButton" href="/formula">開始打造我的配方</Link><Link className="outlineButton" href="/ingredients">探索原料</Link></div></section>
  </SiteShell>;
}
