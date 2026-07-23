'use client';

import { useMemo, useState } from 'react';

const goals = ['體態管理','睡眠與壓力','腸道健康','肌膚保養','熟齡活力','日常營養'];
const options = {
  '體態管理': ['Sinetrol®','Chromax®','洋車前子','綠茶兒茶素'],
  '睡眠與壓力': ['Cerebiome®','GABA','鎂','L-茶胺酸'],
  '腸道健康': ['益生菌','益生元','洋車前子','消化酵素'],
  '肌膚保養': ['Verisol®','Setria®','神經醯胺','維生素 C'],
  '熟齡活力': ['NR','輔酶 Q10','維生素 D3','Omega-3'],
  '日常營養': ['綜合維生素','維生素 D3','Omega-3','鎂']
};

export default function FormulaPage(){
  const [goal,setGoal]=useState('體態管理');
  const [selected,setSelected]=useState(['Sinetrol®','洋車前子']);
  const [form,setForm]=useState('膠囊');
  const [quantity,setQuantity]=useState(500);
  const cost=useMemo(()=>68000+selected.length*13500+(quantity/500)*26000,[selected,quantity]);
  function toggle(name){setSelected(v=>v.includes(name)?v.filter(x=>x!==name):[...v,name])}
  return <main className="appPage">
    <header className="nav"><a className="logo" href="/">CRU LAB</a><nav><a href="/formula">AI 配方</a><a href="/ingredients">原料資料庫</a><a href="/research">研究中心</a><a href="/brand-builder">品牌建立</a></nav><a className="navButton" href="/brand-builder">建立品牌</a></header>
    <section className="pageHero"><span className="eyebrow gold">FOR MYSELF · BETTER INGREDIENTS</span><h1>把預算，花在更好的成分。</h1><p>不是為品牌溢價、通路抽成與大量廣告買單。你可以先看懂原料，再依自己的需求選擇更透明、更有依據的配方方向。</p></section>
    <section className="valueStrip"><article><b>看懂原料</b><span>來源、專利、研究與限制透明呈現</span></article><article><b>自己選擇</b><span>不再只能接受市場上的固定配方</span></article><article><b>預算回到配方</b><span>把更多成本投入原料、規格與檢驗</span></article></section>
    <section className="workspace">
      <div className="workspaceMain">
        <div className="stepLabel">01 選擇主要需求</div><div className="choiceGrid">{goals.map(x=><button className={goal===x?'selected':''} onClick={()=>{setGoal(x);setSelected([])}} key={x}>{x}</button>)}</div>
        <div className="stepLabel">02 選擇你想投入的原料</div><div className="ingredientGrid">{options[goal].map(x=><button className={selected.includes(x)?'selected':''} onClick={()=>toggle(x)} key={x}><b>{x}</b><span>{goal}</span><small>查看後加入或移除</small></button>)}</div>
        <div className="twoFields"><label>劑型<select value={form} onChange={e=>setForm(e.target.value)}><option>膠囊</option><option>錠劑</option><option>粉包</option><option>沖泡飲</option><option>果凍</option></select></label><label>預計數量<input type="number" min="100" step="100" value={quantity} onChange={e=>setQuantity(Number(e.target.value)||100)}/></label></div>
      </div>
      <aside className="estimate"><small>個人配方摘要</small><h3>{goal}配方</h3><div><span>已選原料</span><b>{selected.length} 項</b></div><div><span>產品劑型</span><b>{form}</b></div><div><span>預計數量</span><b>{quantity.toLocaleString()} 盒</b></div><strong>NT$ {Math.round(cost).toLocaleString()}</strong><p>概念估價會優先呈現原料、規格、檢驗與生產成本；正式價格仍需依劑量與法規確認。</p><a className="buttonLink lightButton" href="/ingredients">先比較原料</a></aside>
    </section>
  </main>
}