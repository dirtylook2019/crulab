import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import FormulaBuilder from '@/components/FormulaBuilder';
import { media } from '@/lib/media';

export default function FormulaPage(){return <SiteShell>
  <PageHero eyebrow="配方設計" title={<>不是填一張表。<br/>是把產品的理由整理清楚。</>} description="從想改善的問題、偏好的原料、劑型、預算與首批數量開始，建立一個可以繼續研究、估價與製造的配方方向。" image={media.notebook} imageAlt="配方筆記、粉末原料與精密秤" actionHref="#builder" actionLabel="開始建立配方"/>
  <section className="formulaPrinciples"><div><span>01</span><h3>需求先於成分</h3><p>先理解生活情境與真正困擾，再決定配方需要扮演的角色。</p></div><div><span>02</span><h3>每一個劑量都有理由</h3><p>不是成分越多越好，而是每一項都有研究、規格與配伍依據。</p></div><div><span>03</span><h3>成本拆開看，選擇才透明</h3><p>原料、研究、製造、檢驗、包裝與首批數量應該被分開理解。</p></div></section>
  <section className="builderSection" id="builder"><div className="sectionIntro"><span className="eyebrow">建立你的配方方向</span><h2>從一個真實目標開始。</h2><p>這是概念設計工具，用來整理產品方向與初步成本；正式配方仍需由專業團隊依原料規格、法規、穩定性與製造條件確認。</p></div><FormulaBuilder/></section>
  <section className="formulaFlow"><div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">配方建立之後</span><h2>配方不是終點。<br/>它是產品開發的起點。</h2><p>當方向變得清楚，接下來才進入審查、估價、原型與正式生產。</p></div><div>{[['01','配方審查','確認成分角色、劑量範圍、配伍與應用限制。'],['02','概念估價','整理原料、劑型、檢驗、包裝與首批數量的成本。'],['03','原型製作','試作產品，確認使用感、穩定性與包裝方向。'],['04','正式生產','完成法規、檢驗與品質流程後，進入正式生產。']].map(([n,t,d])=><article key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>
</SiteShell>}
