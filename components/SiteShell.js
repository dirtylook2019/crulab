import Link from 'next/link';

const links=[['/about','關於 CRU LAB'],['/formula','AI 配方'],['/ingredients','原料資料庫'],['/research','研究中心'],['/brand-builder','品牌建立'],['/shop','CRU SHOP']];

export function Header(){return <header className="nav"><Link href="/" className="brand"><b>CRU LAB</b><small>CREATE FOR YOURSELF</small></Link><nav>{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav><Link href="/formula" className="navCta">開始打造</Link></header>}
export function Footer(){return <footer><div><div className="brand"><b>CRU LAB</b><small>CREATE FOR YOURSELF</small></div><p>研究、原料、配方、製造與品牌建立。</p></div><div className="footerLinks">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</div><small>網站內容僅供一般知識與產品開發參考；正式產品仍須依台灣法規、標示與製造流程確認。</small></footer>}
export default function SiteShell({children}){return <><Header/><main>{children}</main><Footer/></>}
