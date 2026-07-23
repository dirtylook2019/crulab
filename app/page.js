import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import { media } from '@/lib/media';

const process = [
  ['01','看見問題','從睡眠、體態、肌膚或日常狀態，辨認真正想改善的困擾。'],
  ['02','理解證據','閱讀研究，理解原料來源、有效規格、建議劑量與使用限制。'],
  ['03','建立配方','把需求整理成一款自己願意長期使用、也能說明理由的產品。'],
  ['04','完成製造','以透明估價、合適的首批數量與品質流程，完成產品原型與生產。'],
  ['05','有理由地分享','先親自使用與確認價值，再分享給有相同困擾的人。']
];

export default function Home() {
  return <SiteShell>
    <section className="homeHero">
      <div className="homeHeroCopy">
        <span className="eyebrow">CRU LAB｜為自己打造</span>
        <h1>先做出自己真正需要的產品，<br/><em>再分享給有同樣困擾的人。</em></h1>
        <p>CRU LAB 把研究、原料、配方、製造與品牌建立整合成一條清楚的產品路徑。不是先想著要賣什麼，而是先把一個真實問題好好解決。</p>
        <div className="heroActions"><Link className="solidButton" href="/formula">開始建立我的配方</Link><Link className="outlineButton" href="/about">了解 CRU LAB 為何誕生</Link></div>
        <div className="heroNumbers"><div><b>50+</b><span>研究主題</span></div><div><b>2,000+</b><span>原料資料</span></div><div><b>300</b><span>盒首批方向</span></div></div>
      </div>
      <figure className="homeHeroVisual"><img src={media.home} alt="CRU LAB 研究、配方與產品原型情境"/><figcaption><span>產品原型 001</span><p>先理解問題，再做出值得被分享的產品。</p></figcaption></figure>
      <a className="scrollCue" href="#origin"><span>向下探索</span><i/></a>
    </section>

    <section className="originSection" id="origin">
      <div className="originStatement"><span className="eyebrow eyebrow--dark">CRU LAB 的起點</span><h2>市場不缺更多商品。<br/>缺的是你真正願意每天使用的產品。</h2><p>有人因為睡不好開始查研究；有人因為體態、腸道或肌膚困擾開始比較原料。當一個人做出自己真正相信的產品，而工廠首批數量超過個人所需，分享才自然成為品牌。</p><Link className="textLink textLink--dark" href="/about">閱讀完整品牌故事 <i>↗</i></Link></div>
      <figure className="originImage"><img src={media.researchDesk} alt="閱讀研究、比較原料與整理配方的過程"/><figcaption>多數品牌從市場開始。<br/><em>CRU LAB 從一個真實問題開始。</em></figcaption></figure>
    </section>

    <section className="processSection">
      <div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">產品誕生的五個階段</span><h2>從一個困擾，<br/>到一款值得被分享的產品。</h2><p>把原本分散又難以理解的開發流程，整理成每一步都有理由、成本與下一步的產品路徑。</p></div>
      <div className="processRail">{process.map(([n,title,desc])=><article key={n}><small>{n}</small><i/><h3>{title}</h3><p>{desc}</p></article>)}</div>
    </section>

    <section className="platformSection">
      <div className="sectionIntro"><span className="eyebrow">一套完整的產品開發平台</span><h2>研究、原料、配方、製造與品牌，<br/>不該是五個互不相連的流程。</h2><p>CRU LAB 把每一個決策放回同一條路徑，讓你知道為什麼選擇、預算花在哪裡，以及下一步要做什麼。</p></div>
      <div className="platformGrid">
        <Link href="/research" className="platformCard platformCard--wide"><span>01｜研究中心</span><h3>先看完整證據，再談產品承諾。</h3><p>研究目的、方法、結果與限制，都應該一起被理解。</p><img src={media.researchDesk} alt="研究文獻與產品決策資料"/></Link>
        <Link href="/ingredients" className="platformCard platformCard--cream"><span>02｜原料資料庫</span><h3>真正值得使用的原料，應該經得起理解。</h3><p>比較來源、規格、建議劑量、研究與實際應用情境。</p><img src={media.orange} alt="血橙與天然原料研究"/></Link>
        <Link href="/formula" className="platformCard"><span>03｜配方設計</span><h3>把你的需求，整理成可以開始的產品方向。</h3><p>從目標、劑型、預算與首批數量，建立配方與成本概念。</p><div className="miniFormulaUi"><small>配方方向 001</small><b>睡眠與代謝支持</b><div><i style={{width:'82%'}}/><i style={{width:'62%'}}/><i style={{width:'74%'}}/></div></div></Link>
        <Link href="/brand-builder" className="platformCard platformCard--visual"><span>04｜品牌建立</span><h3>先有值得被相信的產品，再建立品牌。</h3><p>把命名、包裝、故事與商品頁整理成一致的品牌體驗。</p><img src={media.packaging} alt="CRU LAB 產品包裝與品牌設計"/></Link>
      </div>
    </section>

    <section className="formulaFeature">
      <div className="formulaFeatureCopy"><span className="eyebrow">AI 配方設計</span><h2>把模糊的需求，<br/>整理成可以開始的配方。</h2><p>選擇目標、原料、劑型、預算與數量，系統協助建立配方架構、概念成本與下一步，讓你不用從空白開始。</p><ul><li>研究資料與原料規格連動</li><li>配方劑量與成本概念整理</li><li>首批數量、包裝與製造路徑</li></ul><Link className="solidButton" href="/formula">進入配方設計</Link></div>
      <div className="formulaFeatureUi"><div className="uiHeader"><span>CRU LAB｜配方 001</span><i/><i/><i/></div><div className="uiBody"><aside><small>主要目標</small><b>睡眠支持</b><b>體態管理</b><small>建議劑型</small><b>膠囊</b></aside><div className="uiMain"><span>建議配方方向</span><h3>夜間修復與代謝支持</h3>{[['Cerebiome®','200 毫克'],['L-Theanine','150 毫克'],['甘胺酸鎂','180 毫克'],['Morosil®','400 毫克']].map(([a,b])=><p key={a}><span>{a}</span><b>{b}</b></p>)}<div className="uiProgress"><i/></div><small>配方方向完整度 82%</small></div></div></div>
    </section>

    <section className="ingredientSpotlight">
      <figure><img src={media.orange} alt="Morosil 血橙萃取原料"/></figure>
      <div><span className="eyebrow eyebrow--dark">本月焦點原料</span><h2>Morosil®</h2><h3>西西里血橙萃取</h3><p>不只認識熱門名稱，也一起理解原料來源、有效規格、研究設計、建議劑量與適用情境。</p><dl><div><dt>原料來源</dt><dd>義大利・西西里</dd></div><div><dt>研究資料</dt><dd>12 項臨床資料</dd></div><div><dt>應用方向</dt><dd>體態管理・代謝支持</dd></div></dl><Link className="textLink textLink--dark" href="/ingredients">探索原料資料庫 <i>↗</i></Link></div>
    </section>

    <section className="researchJournal">
      <div className="sectionIntro"><span className="eyebrow">研究筆記</span><h2>不替原料製造神話。<br/>只整理值得被理解的證據。</h2><p>從研究設計、使用劑量到實際產品應用，讓每一個配方決定都有清楚依據。</p></div>
      <div className="journalGrid">{[
        ['臨床研究','血橙萃取與體態管理','研究設計、受試條件、使用劑量與結果摘要。'],
        ['原料筆記','益生菌與腸腦軸','菌株差異、研究方向與產品應用限制。'],
        ['配方方法','有效劑量不是越多越好','理解劑量、配伍、劑型與實際使用情境。']
      ].map(([tag,title,copy],i)=><article key={title}><small>{String(i+1).padStart(2,'0')}｜{tag}</small><h3>{title}</h3><p>{copy}</p><Link href="/research">閱讀研究 <i>↗</i></Link></article>)}</div>
    </section>

    <section className="finalCta"><span className="eyebrow">從自己的需求開始</span><h2>先做出一款，<br/>你自己真正相信的產品。</h2><p>從一個困擾、一項研究，或一種你真正想使用的原料開始。</p><div><Link className="solidButton" href="/formula">開始建立我的配方</Link><Link className="outlineButton" href="/ingredients">探索原料資料庫</Link></div></section>
  </SiteShell>;
}
