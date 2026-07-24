import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import IngredientExplorer from '@/components/IngredientExplorer';
import { media } from '@/lib/media';

export default function IngredientsPage(){return <SiteShell>
  <PageHero eyebrow="原料資料庫" title={<>每一種原料，<br/>都應該被真正理解。</>} description="不只看熱門名稱，也理解來源、有效規格、研究條件、建議劑量與應用限制。選擇原料，是產品設計中最重要的決策之一。" scene="ingredients" imageAlt="CRU LAB 高質感天然原料、植萃、粉末與實驗器材" actionHref="#database" actionLabel="開始探索原料" tone="cream"/>
  <section className="ingredientStandards"><div className="sectionIntro"><span className="eyebrow">我們如何理解一種原料</span><h2>來源、規格、研究、劑量，<br/>缺一不可。</h2><p>同一個名稱，可能代表完全不同的品質與研究基礎。真正的比較，必須回到原料本身。</p></div><div>{[['來源','原料從哪裡來，如何被萃取、培養、製造與標準化。'],['有效規格','有效成分含量、純度、菌株、分子量或其他關鍵規格。'],['研究證據','研究對象、使用劑量、時間、結果與不能被過度解讀的限制。'],['產品應用','適合哪種產品、劑型、配伍與實際使用情境。']].map(([t,d],i)=><article key={t}><small>0{i+1}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="databaseSection" id="database"><div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">精選原料資料</span><h2>從名字開始，<br/>但不只停在名字。</h2><p>搜尋原料、來源與應用方向，快速建立第一層理解；後續可再連結研究摘要、劑量比較與配方關聯。</p></div><IngredientExplorer/></section>
  <section className="ingredientEvidence"><figure><img src={media.researchDesk} alt="原料研究文獻與配方資料"/></figure><div><span className="eyebrow">研究證據的層次</span><h2>研究數量不是全部。<br/>研究品質才是。</h2><p>我們會一起看研究設計、樣本條件、原料規格、使用劑量、研究時間、統計結果與限制，不把相關性寫成保證，也不把單一研究放大成神話。</p></div></section>
</SiteShell>}
