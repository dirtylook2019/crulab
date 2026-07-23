import './globals.css';
import './story.css';
import './premium.css';
import './visuals.css';

export const metadata = {
  title: 'CRU LAB — 先為自己打造，再分享給同樣困擾的人',
  description: '從自己的真實困擾開始，選擇更好的原料、打造專屬配方；當 MOQ 超過個人所需，再建立品牌分享給有相同困擾的人。'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}