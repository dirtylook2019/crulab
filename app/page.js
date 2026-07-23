import Link from 'next/link';
import { images } from '@/imageData';
import SiteShell from '@/components/SiteShell';

const pillars=[['01','科學驗證','整理臨床研究、原料規格與應用限制，讓每個選擇都有依據。'],['02','AI 配方設計','從需求、預算與劑型出發，快速建立可執行的產品方向。'],['03','彈性製造','以透明估價與小量起訂，降低第一次開發產品的門檻。'],['04','品牌建立','從命名、包裝到商品頁，讓一款好產品自然長成品牌。']];
const ingredients=[['Morosil®','西西里血橙萃取'],['Cerebiome®','腸腦軸益生菌'],['Verisol®','專利膠原胜肽'],['Epax®','挪威高純度魚油'],['Setria®','還原型穀胱甘肽'],['Chromax®','專利鉻原料']];

export default function Home(){return <SiteShell>
<section className="homeHero"><div className="homeCopy"><span>CRU LAB / CREATE FOR YOURSELF</span><h1>先為自己打造，<br/>再分享給有同樣困擾的人。</h1><p>CRU LAB 將研究、原料、AI 配方、製造與品牌建立整合成一套真正可以完成產品的平台。</p><div className="actions"><Link className="btn gold" href="/formula">開始打造我的配方</Link><Link className="btn ghost" href="/ingredients">探索原料資料庫</Link></div><div className="stats"><div><b>50+</b><small>研究主題</small></div><div><b>2,000+</b><small>原料資料</small></div><div><b>15+</b><small>產品類型</small></div><div><b>1</b><small>完整平台</small></div></div></div><div className="homeVisual"><img src={images.home_hero} alt="CRU LAB 配方研究與產品設計情境" loading="eager"/></div></section>
<section className="intro"><span>OUR MISSION</span><h2>市場不缺更多商品，<br/>缺的是你真正願意長期使用的產品。</h2><p>我們相信，好的品牌不是從行銷口號開始，而是從一個真實困擾、一份研究與一款被使用者真正相信的配方開始。</p></section>
<section className="pillars">{pillars.map(([n,t,d])=><article key={n}><small>{n}</small><i/><h3>{t}</h3><p>{d}</p></article>)}</section>
<section className="split"><div className="media"><img src={images.story} alt="CRU LAB 研究與產品開發" loading="lazy"/></div><div className="splitCopy"><span>WHY CRU LAB</span><h2>不是先建立品牌，<br/>而是先打造值得分享的產品。</h2><p>有人因為睡不好開始查資料；有人因為掉髮研究成分；有人想改善體態，卻找不到真正認同的配方。CRU LAB 讓這些真實需求，有機會成為真正屬於自己的產品。</p><Link href="/about">閱讀完整品牌故事 →</Link></div></section>
<section className="lightSection"><div className="sectionHead"><span>INGREDIENT DATABASE</span><h2>每一種原料，<br/>都應該被真正理解。</h2><p>不只看熱門名稱，也理解來源、規格、研究、建議劑量與應用限制。</p></div><div className="ingredientGrid">{ingredients.map(([name,desc],i)=><Link href="/ingredients" className="ingredient" key={name}><small>0{i+1}</small><div className={`orb orb${i+1}`}/><h3>{name}</h3><p>{desc}</p><b>查看資料 ↗</b></Link>)}</div></section>
<section className="formulaPreview"><div><span>AI FORMULA BUILDER</span><h2>把真實需求，<br/>整理成可以開始的配方。</h2><p>描述目標、選擇劑型與預算，系統協助整理配方架構、成本範圍與下一步。</p><Link className="btn gold" href="/formula">開始我的配方</Link></div><div className="uiCard"><small>CRU LAB FORMULA / 001</small><h3>體態管理・睡眠支持</h3><div className="tags"><span>Morosil®</span><span>Cerebiome®</span><span>L-Theanine</span></div><p><span>建議劑型</span><b>膠囊</b></p><p><span>預估 MOQ</span><b>300 盒</b></p><p><span>完成度</span><b>82%</b></p><div className="progress"><i/></div></div></section>
<section className="cta"><span>CREATE FOR YOURSELF</span><h2>先打造一款，<br/>你自己真正相信的產品。</h2><p>從一個困擾、一項研究，或一種你真正想使用的原料開始。</p><Link className="btn gold" href="/formula">開始打造我的配方</Link></section>
</SiteShell>}
