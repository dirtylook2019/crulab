'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['/about', '關於 CRU LAB'],
  ['/formula', 'AI 配方設計'],
  ['/ingredients', '原料資料庫'],
  ['/research', '研究中心'],
  ['/brand-builder', '品牌建立'],
  ['/shop', 'CRU SHOP']
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="siteHeader">
      <Link className="wordmark" href="/" aria-label="CRU LAB 首頁">
        <strong>CRU LAB</strong>
        <span>Create for Yourself.</span>
      </Link>
      <nav className={`siteNav ${open ? 'isOpen' : ''}`} aria-label="主要導覽">
        {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <div className="headerActions">
        <Link className="headerLink" href="/about">品牌故事</Link>
        <Link className="headerCta" href="/formula">開始打造</Link>
        <button className="menuButton" type="button" aria-label="開啟選單" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span/><span/>
        </button>
      </div>
    </header>
  );
}
