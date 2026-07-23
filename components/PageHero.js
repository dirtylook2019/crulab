import Link from 'next/link';

export default function PageHero({ eyebrow, title, description, image, imageAlt, imagePosition='center', actionHref='/formula', actionLabel='開始建立', tone='dark', children }) {
  return (
    <section className={`pageHero pageHero--${tone}`}>
      <div className="pageHeroCopy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="textLink" href={actionHref}>{actionLabel}<i>↗</i></Link>
        {children}
      </div>
      <figure className="pageHeroVisual">
        <img src={image} alt={imageAlt} style={{objectPosition:imagePosition}} loading="eager" fetchPriority="high" decoding="async"/>
      </figure>
    </section>
  );
}
