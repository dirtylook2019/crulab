import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import BrandBuilderPreview from '@/components/BrandBuilderPreview';
import { media } from '@/lib/media';

export default function BrandPage(){return <SiteShell>
  <PageHero eyebrow="BRAND BUILDER" title={<>品牌不是包裝出來的。<br/>是被相信出來的。</>} description="先讓產品有清楚的理由、原料與使用價值，再把命名、包裝、故事與商品頁整理成一致的品牌體驗。" image={media.packaging} imageAlt="保健品瓶身與外盒包裝" actionHref="#builder" actionLabel="建立品牌方向" tone="cream"/>
  <section className="brandSteps"><div className="sectionIntro"><span className="eyebrow">FROM PRODUCT TO BRAND</span><h2>每個視覺決定，<br/>都應該回到產品本身。</h2></div><div>{[['01','Position','這款產品為誰而做，解決什麼問題。'],['02','Name','名稱要能承接產品理由與品牌語氣。'],['03','Identity','字體、色彩、攝影與包裝形成一致感。'],['04','Experience','商品頁、開箱與使用方式延續品牌承諾。']].map(([n,t,d])=><article key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="brandBuilderSection" id="builder"><BrandBuilderPreview/></section>
  <section className="brandDeliverables"><div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">WHAT YOU BUILD</span><h2>不只是一個 Logo。<br/>是一套能被持續使用的品牌系統。</h2></div><div>{['品牌定位與命名方向','Logo 與文字標準','瓶身與外盒設計','品牌故事與產品文案','商品頁與商城視覺','社群與發表素材'].map((item,i)=><article key={item}><small>{String(i+1).padStart(2,'0')}</small><h3>{item}</h3></article>)}</div></section>
</SiteShell>}
