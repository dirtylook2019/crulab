const unsplash = (id, width = 2400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&fm=webp&q=94&w=${width}`;

export const media = {
  home: unsplash('photo-1697273245326-1a3736f6f428', 2800),
  orange: unsplash('photo-1618449625138-62cb2b8a343a', 2400),
  microscope: unsplash('photo-1631816285219-c6af3851e360', 2400),
  researchDesk: unsplash('photo-1748280317551-affaec88027d', 2600),
  pipette: unsplash('photo-1748261348346-9ef0f83b9ab3', 2400),
  packaging: unsplash('photo-1702475139208-f2ddabb4fc80', 2600),
  notebook: unsplash('photo-1633304557382-979afee9f9a2', 2400),
  whiteBottle: unsplash('photo-1664216294580-079bc527ae49', 2600)
};
