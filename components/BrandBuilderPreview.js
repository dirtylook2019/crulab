'use client';

import { useState } from 'react';

const palettes = [
  {name:'Obsidian', bg:'#0b0b0a', fg:'#d5b97a'},
  {name:'Ivory', bg:'#e9e1d4', fg:'#16130f'},
  {name:'Oxide', bg:'#5b201d', fg:'#eadac3'}
];

export default function BrandBuilderPreview() {
  const [brand, setBrand] = useState('YOUR RITUAL');
  const [tagline, setTagline] = useState('For better days, every day.');
  const [palette, setPalette] = useState(palettes[0]);
  return <div className="brandBuilderPreview">
    <div className="brandForm">
      <span className="eyebrow">BRAND BUILDER</span><h2>讓產品自然長成一個品牌。</h2><p>先確認產品值得被使用，再把名稱、包裝與故事整理成一致的品牌體驗。</p>
      <label>品牌名稱<input value={brand} maxLength={20} onChange={e=>setBrand(e.target.value.toUpperCase())}/></label>
      <label>一句品牌主張<input value={tagline} maxLength={52} onChange={e=>setTagline(e.target.value)}/></label>
      <label>視覺方向<div className="paletteButtons">{palettes.map(item=><button key={item.name} onClick={()=>setPalette(item)} className={palette.name===item.name?'active':''}><i style={{background:item.bg}}/><span>{item.name}</span></button>)}</div></label>
    </div>
    <div className="brandStage" style={{'--package-bg':palette.bg,'--package-fg':palette.fg}}>
      <div className="packageBox"><small>CREATED WITH CRU LAB</small><strong>{brand}</strong><p>{tagline}</p><span>DIETARY SUPPLEMENT</span></div>
      <div className="packageBottle"><i/><small>{brand}</small><strong>DAILY<br/>FORMULA</strong><p>{tagline}</p><span>60 CAPSULES</span></div>
      <div className="brandCard"><small>{brand}</small><p>{tagline}</p></div>
    </div>
  </div>;
}
