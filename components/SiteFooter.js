import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerBrand">
        <strong>CRU LAB</strong>
        <p>先為自己打造，<br/>再分享給有同樣困擾的人。</p>
      </div>
      <div className="footerColumns">
        <div><span>探索</span><Link href="/about">關於我們</Link><Link href="/ingredients">原料資料庫</Link><Link href="/research">研究中心</Link></div>
        <div><span>打造</span><Link href="/formula">配方設計</Link><Link href="/brand-builder">品牌建立</Link><Link href="/shop">品牌商城</Link></div>
        <div><span>我們的原則</span><p>先理解研究。<br/>有理由地打造。<br/>用證據負責任地分享。</p></div>
      </div>
      <div className="footerBottom">
        <small>© 2026 CRU LAB｜版權所有</small>
        <small>網站內容僅供一般知識與產品開發參考；正式產品仍須依台灣法規、標示、原料規格與製造流程確認。</small>
      </div>
    </footer>
  );
}
