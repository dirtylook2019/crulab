const SCENES = new Set(['home', 'formula', 'ingredients', 'research', 'brand', 'shop']);

export default function LuxuryMedia({ scene = 'home', alt = '', className = '' }) {
  const safeScene = SCENES.has(scene) ? scene : 'home';
  return (
    <span className={`luxuryMedia luxuryMedia--${safeScene} ${className}`.trim()}>
      <img
        src={`/images/luxury/${safeScene}.webp`}
        alt={alt}
        loading={safeScene === 'home' ? 'eager' : 'lazy'}
        fetchPriority={safeScene === 'home' ? 'high' : 'auto'}
        decoding="async"
      />
    </span>
  );
}
