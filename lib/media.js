const unsplash = (id, width = 1800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&fm=jpg&q=86&w=${width}`;

export const media = {
  home: unsplash('photo-1697273245326-1a3736f6f428', 2200),
  orange: unsplash('photo-1618449625138-62cb2b8a343a', 1800),
  microscope: unsplash('photo-1631816285219-c6af3851e360', 1800),
  researchDesk: unsplash('photo-1748280317551-affaec88027d', 1800),
  pipette: unsplash('photo-1748261348346-9ef0f83b9ab3', 1800),
  packaging: unsplash('photo-1702475139208-f2ddabb4fc80', 1800),
  notebook: unsplash('photo-1633304557382-979afee9f9a2', 1800),
  whiteBottle: unsplash('photo-1664216294580-079bc527ae49', 1800)
};
