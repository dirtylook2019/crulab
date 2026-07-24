const sources = {
  home: '/images/home-hero.webp',
  formula: '/images/formula-hero.webp',
  ingredients: '/images/ingredients-hero.webp',
  research: '/images/research-hero.webp',
  brand: '/images/brand-hero.webp',
  shop: '/images/shop-hero.webp'
};

export default function LuxuryMedia({ scene = 'home', alt = '', className = '' }) {
  const safeScene = Object.hasOwn(sources, scene) ? scene : 'home';
  return (
    <span className={`luxuryMedia luxuryMedia--${safeScene} ${className}`.trim()}>
      <img
        src={sources[safeScene]}
        alt={alt}
        loading={safeScene === 'home' ? 'eager' : 'lazy'}
        fetchPriority={safeScene === 'home' ? 'high' : 'auto'}
        decoding="async"
      />
    </span>
  );
}
