import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import { media } from '@/lib/media';

const papers = [
  ['臨床研究','Morosil® 血橙萃取與體態管理','研究目的、受試條件、原料規格、使用劑量、結果與限制摘要。','2026.07'],
  ['原料筆記','Cerebiome®、壓力與腸腦軸','理解菌株組合、研究設計與產品應用情境。','2026.06'],
  ['配方方法','膠原胜肽的有效劑量與產品設計','從研究劑量、分子規格到每日使用體驗。','2026.05'],
  ['研究閱讀','如何閱讀一篇保健原料研究','從樣本數、對照組、終點指標到研究限制。','2026.04'],
  ['安全性','原料安全性不只是一張證書','來源、製程、污染物、穩定性與可能交互作用。','2026.03'],
  ['證據整理','有效，不等於適合每一個人','研究證據如何轉化為負責任的產品設計與溝通。','2026.02']
];

export default function ResearchPage(){return <SiteShell>
  <PageHero eyebrow="研究中心" title={<>證據先於承諾。<br/>理解先於選擇。</>} description="我們不替原料製造神話，而是把研究目的、方法、結果、原料規格與限制整理成品牌與使用者都能理解的內容。" image={media.researchDesk} imageAlt="研究文獻、筆記與營養科學資料" imagePosition="center 48%" actionHref="#journal" actionLabel="進入研究筆記"/>
  <section className="researchMethod"><div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">我們如何閱讀研究</span><h2>不是只看結論。<br/>而是看它如何得到結論。</h2><p>一個看似漂亮的結果，必須放回研究問題、對象、原料規格、劑量與限制中理解。</p></div><div>{[['01','研究問題','這項研究真正想回答什麼問題。'],['02','研究方法','受試者、原料規格、劑量、時間與對照設計。'],['03','研究結果','統計差異與實際效果是否一致，以及效果有多大。'],['04','研究限制','研究不能告訴我們什麼，也不能延伸保證什麼。']].map(([n,t,d])=><article key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="journalSection" id="journal"><div className="journalHeader"><span className="eyebrow eyebrow--dark">最新研究筆記</span><h2>研究筆記</h2><p>把複雜研究轉成可以被理解、比較，並實際用於產品決策的知識。</p></div><div className="paperList">{papers.map(([tag,title,copy,date],i)=><article key={title}><div className="paperNumber">{String(i+1).padStart(2,'0')}</div><div><small>{tag}｜{date}</small><h3>{title}</h3><p>{copy}</p></div><Link href="#">閱讀摘要 <i>↗</i></Link></article>)}</div></section>
  <section className="researchVisual"><img src={media.microscope} alt="研究中心的顯微鏡與實驗環境"/><div><span className="eyebrow">研究是一種工作方法</span><h2>研究不是裝飾品牌的語言。<br/>它是產品決策的方法。</h2><p>從原料選擇、配方劑量到溝通內容，每一步都應該知道證據在哪裡，也知道證據的邊界。</p></div></section>
</SiteShell>}
