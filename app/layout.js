import './globals.css';

export const metadata = {
  title: 'CRU LAB｜先為自己打造，再分享給有同樣困擾的人',
  description: '從研究、原料、AI 配方、製造到品牌建立，完成一款真正屬於你的健康產品。',
  metadataBase: new URL('https://crulab.vercel.app')
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
