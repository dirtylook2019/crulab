import './globals.css';

export const metadata = {
  title: 'CRU LAB｜先為自己打造，再分享給有同樣困擾的人',
  description: '從真實需求出發，透過研究、原料資料、配方設計、製造與品牌建立，完成一款自己真正相信的健康產品。',
  metadataBase: new URL('https://crulab.vercel.app')
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
