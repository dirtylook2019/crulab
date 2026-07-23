import './globals.css';

export const metadata = {
  title: 'CRU LAB — Stop Buying. Start Creating.',
  description: 'AI-powered supplement formulation, research, manufacturing and storefront platform.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
