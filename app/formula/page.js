import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import FormulaBuilder from '@/components/FormulaBuilder';
import { media } from '@/lib/media';

export default function FormulaPage(){return <SiteShell>
  <PageHero eyebrow="AI FORMULA BUILDER" title={<>不是填一張表。<br/>是整理產品的理由。</>} description="從目標、原料、劑型、預算與首批數量開始，建立一個可以繼續研究、估價與製造的配方方向。" image={media.notebook} imageAlt="配方筆記、粉末原料與精密秤" actionHref="#builder" actionLabel="開始建立配方"/>
  <section className="formulaPrinciples"><div><span>01</span><h3>需求先於成分</h3><p>先理解生活情境，再決定配方角色。</p></div><div><span>02</span><h3>劑量要能被解釋</h3><p>不是成分越多越好，而是每一項都有理由。</p></div><div><span>03</span><h3>成本透明</h3><p>原料、研究、製造、檢驗與包裝分開理解。</p></div></section>
  <section className="builderSection" id="builder"><div className="sectionIntro"><span className="eyebrow">BUILD YOUR FORMULA</span><h2>從一個真實目標開始。</h2><p>這是概念設計工具，用來整理產品方向；正式配方仍需由專業團隊依原料規格、法規與製造條件確認。</p></div><FormulaBuilder/></section>
  <section className="formulaFlow"><div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">WHAT HAPPENS NEXT</span><h2>配方不是終點。<br/>它是產品開發的起點。</h2></div><div>{[['01','配方審查','確認成分角色、劑量範圍與應用限制。'],['02','概念估價','整理原料、劑型、檢驗、包裝與首批數量。'],['03','原型製作','試作產品、確認使用感與包裝方向。'],['04','正式生產','完成法規、檢驗與品質流程後進入生產。']].map(([n,t,d])=><article key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>
</SiteShell>}
