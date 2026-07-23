import Link from 'next/link';

export default function PageHero({eyebrow,title,description,image,primary='/formula',primaryLabel='開始打造',secondary='/about',secondaryLabel='了解更多'}){
  return <section className="pageHero"><div className="pageHeroCopy"><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p><div className="actions"><Link className="btn gold" href={primary}>{primaryLabel}</Link><Link className="btn ghost" href={secondary}>{secondaryLabel}</Link></div></div><div className="pageHeroImage"><img src={image} alt="CRU LAB 品牌視覺" loading="eager"/></div></section>
}
