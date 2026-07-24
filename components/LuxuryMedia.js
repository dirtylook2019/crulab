const sources = {
  home: '/images/luxury/home.webp',
  formula: '/images/luxury/formula.webp',
  ingredients: '/images/luxury/ingredients.webp',
  research: '/images/luxury/research.webp',
  brand: '/images/luxury/brand.webp',
  shop: '/images/luxury/shop.webp'
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
