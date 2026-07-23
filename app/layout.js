import './globals.css';

export const metadata = {
  title: 'CRU LAB｜為自己打造真正相信的產品',
  description: '從研究、原料、AI 配方、製造到品牌建立，完成一款真正屬於你的健康產品。'
};

export default function RootLayout({ children }) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
