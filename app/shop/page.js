import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import { media } from '@/lib/media';

const products = [
  ['夜間修復','睡眠與日常恢復支持','NT$ 1,980','night'],
  ['代謝日常','體態與代謝支持','NT$ 2,280','amber'],
  ['肌膚基質','肌膚與膠原保養','NT$ 2,480','ivory'],
  ['腸道訊號','腸道與情緒平衡','NT$ 2,180','green']
];

export default function ShopPage(){return <SiteShell>
  <PageHero eyebrow="品牌商城" title={<>每一款產品，<br/>都有一個被創造的理由。</>} description="CRU SHOP 展示從真實需求、研究與原料開始的產品。不是更多選擇，而是讓每一個選擇都更清楚。" image={media.whiteBottle} imageAlt="CRU LAB 精品健康產品陳列" imagePosition="center 54%" actionHref="#products" actionLabel="探索產品"/>
  <section className="shopPhilosophy"><span className="eyebrow eyebrow--dark">精選，而不是堆滿</span><h2>商城不需要塞滿商品。<br/>每一款，都應該值得被理解。</h2><p>產品頁會清楚呈現創作原因、原料來源、配方角色、使用方式、研究依據與不能被過度承諾的限制。</p></section>
  <section className="productSection" id="products"><div className="productGrid">{products.map(([name,note,price,theme],i)=><article key={name}><div className={`productVisual productVisual--${theme}`}><div className="shopBottle"><small>CRU LAB</small><strong>{name}</strong><span>60 粒膠囊</span></div><i>{String(i+1).padStart(2,'0')}</i></div><small>CRU LAB 精選配方</small><h3>{name}</h3><p>{note}</p><div><b>{price}</b><button>查看產品 ↗</button></div></article>)}</div></section>
  <section className="shopPromise"><div><span>01</span><h3>完整原料資訊</h3><p>清楚呈現來源、有效規格、配方角色與研究摘要。</p></div><div><span>02</span><h3>負責任的產品溝通</h3><p>不誇大研究，不把相關性寫成保證，也不隱藏證據的限制。</p></div><div><span>03</span><h3>清楚的使用設計</h3><p>說明建議劑量、使用時機、使用週期與必要提醒。</p></div></section>
</SiteShell>}
