import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import IngredientExplorer from '@/components/IngredientExplorer';
import { media } from '@/lib/media';

export default function IngredientsPage(){return <SiteShell>
  <PageHero eyebrow="INGREDIENT DATABASE" title={<>每一種原料，<br/>都應該被真正理解。</>} description="不只看熱門名稱，也理解來源、規格、研究、建議劑量與應用限制。選擇原料，是產品設計中最重要的決策之一。" image={media.orange} imageAlt="西西里血橙原料" actionHref="#database" actionLabel="探索原料資料庫" tone="cream"/>
  <section className="ingredientStandards"><div className="sectionIntro"><span className="eyebrow">HOW WE READ INGREDIENTS</span><h2>來源、規格、研究、劑量，<br/>缺一不可。</h2></div><div>{[['SOURCE','原料從哪裡來，如何被製造與標準化。'],['SPECIFICATION','有效成分含量、純度、菌株或分子規格。'],['EVIDENCE','研究對象、使用劑量、時間與結果限制。'],['APPLICATION','適合哪種產品、劑型與實際使用情境。']].map(([t,d],i)=><article key={t}><small>0{i+1}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="databaseSection" id="database"><div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">CURATED LIBRARY</span><h2>從名字開始，<br/>但不只停在名字。</h2><p>資料庫示範目前以核心原料為主；後續可擴充搜尋、比較、研究摘要與配方關聯。</p></div><IngredientExplorer/></section>
  <section className="ingredientEvidence"><figure><img src={media.researchDesk} alt="原料研究文獻"/></figure><div><span className="eyebrow">EVIDENCE LEVEL</span><h2>研究數量不是全部。<br/>研究品質才是。</h2><p>我們會一起看研究設計、樣本、劑量、時間、統計結果與限制，不把相關性寫成保證，也不把單一研究放大成神話。</p></div></section>
</SiteShell>}
