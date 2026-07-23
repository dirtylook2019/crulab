import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function SiteShell({ children }) {
  return <>
    <SiteHeader/>
    <main>{children}</main>
    <SiteFooter/>
  </>;
}
