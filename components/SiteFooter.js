import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerBrand">
        <strong>CRU LAB</strong>
        <p>先為自己打造，<br/>再分享給有同樣困擾的人。</p>
      </div>
      <div className="footerColumns">
        <div><span>EXPLORE</span><Link href="/about">關於我們</Link><Link href="/ingredients">原料資料庫</Link><Link href="/research">研究中心</Link></div>
        <div><span>CREATE</span><Link href="/formula">AI 配方設計</Link><Link href="/brand-builder">品牌建立</Link><Link href="/shop">CRU SHOP</Link></div>
        <div><span>PRINCIPLE</span><p>Research first.<br/>Build with purpose.<br/>Share with evidence.</p></div>
      </div>
      <div className="footerBottom">
        <small>© 2026 CRU LAB. All rights reserved.</small>
        <small>產品資訊僅供一般知識與產品開發參考；正式產品仍須依台灣法規、標示與製造流程確認。</small>
      </div>
    </footer>
  );
}
