import home from '@/lib/luxury-scenes/home';
import formula from '@/lib/luxury-scenes/formula';
import ingredients from '@/lib/luxury-scenes/ingredients';
import research from '@/lib/luxury-scenes/research';
import brand from '@/lib/luxury-scenes/brand';
import shop from '@/lib/luxury-scenes/shop';

const sources = { home, formula, ingredients, research, brand, shop };

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
