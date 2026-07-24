import { luxuryAtlas } from '@/lib/luxuryAtlas';

export default function LuxuryMedia({ scene = 'home', alt = '', className = '' }) {
  return (
    <span className={`luxuryMedia luxuryMedia--${scene} ${className}`.trim()} role="img" aria-label={alt}>
      <img src={luxuryAtlas} alt="" aria-hidden="true" />
    </span>
  );
}
