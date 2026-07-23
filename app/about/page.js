import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import { media } from '@/lib/media';

const chapters = [
  ['01','遇到自己的問題','睡眠、體態、腸道、肌膚或日常營養需求，往往先從自己的生活開始。'],
  ['02','開始理解研究','不只看廣告或熱門話題，而是比較研究、原料規格、有效劑量與限制。'],
  ['03','做出第一個原型','把真正需要的成分放進產品，先完成一款自己願意每天使用的版本。'],
  ['04','親自使用與調整','產品的第一位使用者不是市場，而是創造它、理解它的人。'],
  ['05','面對首批數量','當工廠首批數量超過個人所需，一個產品才開始有機會成為品牌。'],
  ['06','分享給需要的人','自己使用並確認價值後，再讓有相同困擾的人找到它。']
];

export default function AboutPage(){return <SiteShell>
  <PageHero eyebrow="CRU LAB 為何誕生" title={<>不是先想著<br/>要賣什麼。</>} description="而是先問：我真正遇到的問題是什麼？CRU LAB 從個人需求、研究與配方開始，讓一款產品先對創造它的人有價值。" image={media.researchDesk} imageAlt="CRU LAB 從研究與配方開始的品牌起點" imagePosition="center 58%" actionLabel="從自己的需求開始"/>
  <section className="aboutBelief"><span>我們相信</span><blockquote>先為自己打造，<br/>再分享給有同樣困擾的人。</blockquote><p>品牌不是起點。被使用、被理解、被相信，才是。</p></section>
  <section className="chapterSection"><div className="sectionIntro sectionIntro--dark"><span className="eyebrow eyebrow--dark">品牌誕生的過程</span><h2>每個值得被相信的品牌，<br/>都始於一個想幫助自己的故事。</h2><p>不是從 Logo 或市場報告開始，而是從一個真實困擾，慢慢走過研究、原型、使用與分享。</p></div><div className="chapterGrid">{chapters.map(([n,t,d])=><article key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="moqStory"><div><span className="eyebrow">首批數量的現實</span><h2>很多真正好的想法，<br/>停在第一批數量。</h2><p>找到相信的原料與配方後，工廠可能要求數百甚至數千盒。CRU LAB 的角色，是把研究、配方、製造、包裝與分享重新連成一條可以執行、也能被理解的路。</p><Link className="solidButton" href="/brand-builder">了解品牌建立流程</Link></div><aside><strong>300+</strong><span>常見首批數量方向</span><p>一個人用不完，卻可能剛好能幫助更多有相同困擾的人。</p></aside></section>
  <section className="beliefCards">{[
    ['先理解證據','先理解，再選擇','不追逐熱門名詞；先看研究、來源、規格、劑量與使用限制。'],
    ['先為自己打造','產品先對自己有價值','第一位使用者不是市場，而是創造它、願意長期使用它的人。'],
    ['有理由地分享','分享不是銷售起點','當產品真正解決問題，而且能清楚說明理由，品牌才有存在的價值。']
  ].map(([e,t,d],i)=><article key={e}><small>0{i+1}</small><span>{e}</span><h3>{t}</h3><p>{d}</p></article>)}</section>
  <section className="finalCta finalCta--light"><span className="eyebrow eyebrow--dark">CRU LAB 品牌宣言</span><h2>不要先建立品牌。<br/>先打造一款值得被分享的產品。</h2><p>讓產品的理由、研究與實際使用價值，成為品牌最穩固的起點。</p><Link className="solidButton" href="/formula">開始建立我的配方</Link></section>
</SiteShell>}
