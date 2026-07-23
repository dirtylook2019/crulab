import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import { media } from '@/lib/media';

const chapters = [
  ['01','遇到問題','睡眠、體態、腸道、肌膚或日常營養需求，往往先從自己的生活開始。'],
  ['02','開始研究','不是看一個廣告，而是閱讀研究、比較原料、理解劑量與限制。'],
  ['03','打造原型','把真正需要的成分放進產品，先做出一款自己願意使用的版本。'],
  ['04','親自使用','產品的第一位使用者不是市場，而是創造它的人。'],
  ['05','面對 MOQ','當工廠起訂量超過個人需求，產品才有機會開始成為品牌。'],
  ['06','分享出去','讓有相同困擾的人，也能找到一款為真實問題而生的產品。']
];

export default function AboutPage(){return <SiteShell>
  <PageHero eyebrow="WHY CRU LAB EXISTS" title={<>不是先想著<br/>要賣什麼。</>} description="而是先問：我真正遇到的問題是什麼？CRU LAB 從個人需求、研究與配方開始，讓一款產品先對自己有價值。" image={media.researchDesk} imageAlt="CRU LAB 研究配方的起點" actionLabel="從自己的需求開始"/>
  <section className="aboutBelief"><span>OUR BELIEF</span><blockquote>“先為自己打造，<br/>再分享給有同樣困擾的人。”</blockquote><p>品牌不是起點。被使用、被驗證、被相信，才是。</p></section>
  <section className="chapterSection"><div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">THE ORIGIN</span><h2>每個品牌，都始於一個想幫助自己的故事。</h2></div><div className="chapterGrid">{chapters.map(([n,t,d])=><article key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="moqStory"><div><span className="eyebrow">THE MOQ PROBLEM</span><h2>很多真正好的想法，<br/>停在第一批數量。</h2><p>找到相信的原料與配方後，工廠可能要求數百甚至數千盒。CRU LAB 的角色，是把研究、配方、製造、包裝與分享重新連成一條可以執行的路。</p><Link className="solidButton" href="/brand-builder">了解品牌建立流程</Link></div><aside><strong>300+</strong><span>常見首批數量方向</span><p>一個人用不完，卻可能剛好能幫助更多人。</p></aside></section>
  <section className="beliefCards">{[
    ['RESEARCH FIRST','先理解，再選擇','不追逐熱門名詞；先看研究、來源、劑量與使用限制。'],
    ['CREATE FOR YOURSELF','先為自己打造','產品的第一位使用者不是市場，而是創造它的人。'],
    ['SHARE WITH PURPOSE','有理由才分享','當產品真正解決問題，品牌才有存在的價值。']
  ].map(([e,t,d],i)=><article key={e}><small>0{i+1}</small><span>{e}</span><h3>{t}</h3><p>{d}</p></article>)}</section>
  <section className="finalCta finalCta--light"><span className="eyebrow eyebrow--dark">CRU LAB MANIFESTO</span><h2>不要先建立品牌。<br/>先打造一款值得被分享的產品。</h2><Link className="solidButton" href="/formula">開始我的配方</Link></section>
</SiteShell>}
