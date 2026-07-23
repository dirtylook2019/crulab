import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import BrandBuilderPreview from '@/components/BrandBuilderPreview';
import { media } from '@/lib/media';

export default function BrandPage(){return <SiteShell>
  <PageHero eyebrow="品牌建立" title={<>品牌不是包裝出來的。<br/>是被理解與相信出來的。</>} description="先讓產品有清楚的理由、原料與使用價值，再把命名、包裝、故事與商品頁整理成一致的品牌體驗。" image={media.packaging} imageAlt="保健產品瓶身、外盒與品牌視覺" actionHref="#builder" actionLabel="開始建立品牌方向" tone="cream"/>
  <section className="brandSteps"><div className="sectionIntro"><span className="eyebrow">從產品走向品牌</span><h2>每一個視覺決定，<br/>都應該回到產品本身。</h2><p>名稱、色彩與包裝不是裝飾，而是協助使用者理解這款產品為何存在。</p></div><div>{[['01','品牌定位','這款產品為誰而做，想解決什麼問題，以及為什麼值得相信。'],['02','名稱與語言','用名稱、標語與故事，清楚承接產品的理由與品牌語氣。'],['03','視覺識別','字體、色彩、攝影與包裝形成一致、可持續使用的系統。'],['04','完整體驗','商品頁、開箱、使用方式與售後內容延續同一個品牌承諾。']].map(([n,t,d])=><article key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="brandBuilderSection" id="builder"><BrandBuilderPreview/></section>
  <section className="brandDeliverables"><div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">你會完成的品牌資產</span><h2>不只是一個 Logo。<br/>是一套能被持續使用的品牌系統。</h2><p>讓未來每一次包裝延伸、內容溝通與產品上架，都有一致的依據。</p></div><div>{['品牌定位與命名方向','Logo 與文字使用標準','瓶身與外盒包裝系統','品牌故事與產品文案','商品頁與商城視覺','社群與品牌發表素材'].map((item,i)=><article key={item}><small>{String(i+1).padStart(2,'0')}</small><h3>{item}</h3></article>)}</div></section>
</SiteShell>}
