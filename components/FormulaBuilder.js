'use client';

import { useMemo, useState } from 'react';

const goals = ['睡眠支持', '體態管理', '肌膚保養', '腸道健康'];
const materials = [
  ['Morosil®', '血橙萃取', 400],
  ['Cerebiome®', '腸腦軸益生菌', 200],
  ['Verisol®', '膠原胜肽', 2500],
  ['L-Theanine', '茶胺酸', 150],
  ['Magnesium', '甘胺酸鎂', 180],
  ['Setria®', '穀胱甘肽', 250]
];

export default function FormulaBuilder() {
  const [goal, setGoal] = useState(goals[0]);
  const [selected, setSelected] = useState(['Cerebiome®', 'L-Theanine']);
  const [quantity, setQuantity] = useState(300);
  const estimate = useMemo(() => 98000 + selected.length * 12600 + Math.round(quantity * 92), [selected, quantity]);
  const toggle = (name) => setSelected((now) => now.includes(name) ? now.filter(v => v !== name) : [...now, name]);

  return (
    <div className="formulaBuilder">
      <div className="builderControls">
        <div className="builderStep"><span>01</span><div><small>YOUR GOAL</small><h3>先從真實需求開始。</h3></div></div>
        <div className="goalTabs">{goals.map(item => <button key={item} className={goal === item ? 'active' : ''} onClick={() => setGoal(item)}>{item}</button>)}</div>
        <div className="builderStep builderStep--spaced"><span>02</span><div><small>INGREDIENTS</small><h3>選擇你真正相信的原料。</h3></div></div>
        <div className="materialList">{materials.map(([name, note, dose]) => <button key={name} className={selected.includes(name) ? 'selected' : ''} onClick={() => toggle(name)}><i/><b>{name}</b><span>{note}</span><small>{dose} mg</small></button>)}</div>
        <label className="quantityLabel"><span>預計首批數量</span><b>{quantity} 盒</b></label>
        <input className="range" type="range" min="100" max="1500" step="50" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/>
      </div>
      <aside className="formulaSummary">
        <div className="summaryTop"><span>CRU LAB FORMULA</span><small>LIVE PREVIEW</small></div>
        <h3>{goal}</h3>
        <p>一款從你的生活需求開始、以研究與原料規格整理出的產品方向。</p>
        <div className="summaryBottle"><span>CRU LAB</span><b>MY<br/>FORMULA</b><small>{goal}</small></div>
        <div className="summaryRows"><div><span>選擇原料</span><b>{selected.length} 項</b></div><div><span>建議劑型</span><b>膠囊</b></div><div><span>預估 MOQ</span><b>{quantity} 盒</b></div></div>
        <div className="summaryPrice"><small>概念估價</small><strong>NT$ {estimate.toLocaleString()}</strong><span>正式價格依原料規格、劑量、檢驗及包裝確認。</span></div>
        <button className="solidButton">儲存配方方向</button>
      </aside>
    </div>
  );
}
