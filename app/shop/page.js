import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import { media } from '@/lib/media';

const products = [
  ['NIGHT RESET','睡眠與日常修復','NT$ 1,980','night'],
  ['METABOLIC RITUAL','體態與代謝支持','NT$ 2,280','amber'],
  ['SKIN MATRIX','肌膚與膠原保養','NT$ 2,480','ivory'],
  ['GUT SIGNAL','腸道與情緒平衡','NT$ 2,180','green']
];

export default function ShopPage(){return <SiteShell>
  <PageHero eyebrow="CRU SHOP" title={<>每一款產品，<br/>都有一個被創造的理由。</>} description="CRU SHOP 展示由研究、原料與真實需求開始的產品。不是更多選擇，而是更清楚的選擇。" image={media.whiteBottle} imageAlt="CRU LAB 精品產品陳列" actionHref="#products" actionLabel="探索產品"/>
  <section className="shopPhilosophy"><span className="eyebrow eyebrow--dark">CURATED, NOT CROWDED</span><h2>商城不需要塞滿商品。<br/>每一款，都應該值得被理解。</h2><p>產品頁會清楚呈現創作原因、原料來源、配方角色、使用方式與研究限制。</p></section>
  <section className="productSection" id="products"><div className="productGrid">{products.map(([name,note,price,theme],i)=><article key={name}><div className={`productVisual productVisual--${theme}`}><div className="shopBottle"><small>CRU LAB</small><strong>{name}</strong><span>60 CAPSULES</span></div><i>{String(i+1).padStart(2,'0')}</i></div><small>CRU FORMULA</small><h3>{name}</h3><p>{note}</p><div><b>{price}</b><button>查看產品 ↗</button></div></article>)}</div></section>
  <section className="shopPromise"><div><span>01</span><h3>完整原料資訊</h3><p>來源、規格、配方角色與研究摘要。</p></div><div><span>02</span><h3>負責任的產品溝通</h3><p>不誇大研究，不把相關性寫成保證。</p></div><div><span>03</span><h3>清楚的使用設計</h3><p>劑量、時機、週期與使用提醒。</p></div></section>
</SiteShell>}
