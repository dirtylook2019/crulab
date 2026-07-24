import { media } from '@/lib/media';

const sources = {
  home: media.home,
  formula: media.pipette,
  ingredients: media.orange,
  research: media.microscope,
  brand: media.packaging,
  shop: media.whiteBottle
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
        referrerPolicy="no-referrer"
      />
    </span>
  );
}
