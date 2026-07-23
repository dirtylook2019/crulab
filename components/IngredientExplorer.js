'use client';

import { useMemo, useState } from 'react';
import { media } from '@/lib/media';

const data = [
  {name:'Morosil®', type:'體態管理', origin:'義大利・西西里', note:'血橙萃取', studies:12, visual:'orange'},
  {name:'Cerebiome®', type:'情緒與睡眠', origin:'法國', note:'腸腦軸益生菌', studies:9, visual:'capsule'},
  {name:'Verisol®', type:'肌膚保養', origin:'德國', note:'專利膠原胜肽', studies:18, visual:'powder'},
  {name:'EPAX®', type:'日常健康', origin:'挪威', note:'高純度 Omega-3', studies:22, visual:'softgel'},
  {name:'Setria®', type:'亮顏抗氧化', origin:'日本', note:'還原型穀胱甘肽', studies:11, visual:'crystal'},
  {name:'Sinetrol®', type:'代謝支持', origin:'法國', note:'柑橘多酚複方', studies:8, visual:'citrus'}
];

export default function IngredientExplorer() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('全部');
  const filters = ['全部', '體態管理', '情緒與睡眠', '肌膚保養', '日常健康'];
  const items = useMemo(() => data.filter(item => (filter === '全部' || item.type === filter) && `${item.name}${item.note}${item.origin}`.toLowerCase().includes(query.toLowerCase())), [query, filter]);
  return <div className="ingredientExplorer">
    <div className="explorerToolbar"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜尋原料、來源或功能…"/><div>{filters.map(item => <button className={filter===item?'active':''} key={item} onClick={()=>setFilter(item)}>{item}</button>)}</div></div>
    <div className="ingredientCatalog">{items.map((item,index)=><article key={item.name}>
      <div className={`ingredientVisual ingredientVisual--${item.visual}`}>{item.visual==='orange' && <img src={media.orange} alt="血橙原料"/>}<span>{String(index+1).padStart(2,'0')}</span></div>
      <small>{item.type}</small><h3>{item.name}</h3><p>{item.note}</p>
      <dl><div><dt>來源</dt><dd>{item.origin}</dd></div><div><dt>研究</dt><dd>{item.studies} 項</dd></div></dl>
      <button>查看原料檔案 <i>↗</i></button>
    </article>)}</div>
  </div>;
}
