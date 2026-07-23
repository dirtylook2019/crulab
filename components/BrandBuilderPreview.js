'use client';

import { useState } from 'react';

const palettes = [
  {name:'森林墨綠', bg:'#132019', fg:'#c9d5ca'},
  {name:'暖白礦石', bg:'#e7e2d8', fg:'#19211c'},
  {name:'氧化陶土', bg:'#684439', fg:'#eee2d3'}
];

export default function BrandBuilderPreview() {
  const [brand, setBrand] = useState('日常儀式');
  const [tagline, setTagline] = useState('為更好的每一天而設計。');
  const [palette, setPalette] = useState(palettes[0]);
  return <div className="brandBuilderPreview">
    <div className="brandForm">
      <span className="eyebrow eyebrow--dark">品牌方向預覽</span><h2>讓產品自然長成一個品牌。</h2><p>先確認產品值得被使用，再把名稱、包裝與故事整理成一致、能被長期使用的品牌體驗。</p>
      <label>品牌名稱<input value={brand} maxLength={20} onChange={e=>setBrand(e.target.value)}/></label>
      <label>一句品牌主張<input value={tagline} maxLength={52} onChange={e=>setTagline(e.target.value)}/></label>
      <label>視覺色系<div className="paletteButtons">{palettes.map(item=><button key={item.name} onClick={()=>setPalette(item)} className={palette.name===item.name?'active':''}><i style={{background:item.bg}}/><span>{item.name}</span></button>)}</div></label>
    </div>
    <div className="brandStage" style={{'--package-bg':palette.bg,'--package-fg':palette.fg}}>
      <div className="packageBox"><small>由 CRU LAB 協助打造</small><strong>{brand || '你的品牌'}</strong><p>{tagline || '一句值得被記住的主張。'}</p><span>健康補充產品</span></div>
      <div className="packageBottle"><i/><small>{brand || '你的品牌'}</small><strong>每日<br/>配方</strong><p>{tagline || '為你的日常而設計。'}</p><span>60 粒膠囊</span></div>
      <div className="brandCard"><small>{brand || '你的品牌'}</small><p>{tagline || '一句值得被記住的主張。'}</p></div>
    </div>
  </div>;
}
