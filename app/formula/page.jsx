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
  return <main className="appPage formulaPage">
    <header className="nav"><a className="logo" href="/">CRU LAB</a><nav><a href="/about">關於</a><a href="/formula">AI 配方</a><a href="/ingredients">原料資料庫</a><a href="/research">研究中心</a><a href="/brand-builder">品牌建立</a><a href="/shop">CRU SHOP</a></nav><a className="navButton" href="/brand-builder">建立品牌</a></header>
    <section className="pageHero formulaHero"><div><span className="eyebrow gold">FORMULA, WITH A REASON</span><h1>每一個配方，<br/>都應該先有一個理由。</h1><p>先說出自己的困擾，再理解原料、劑型、數量與成本。AI 只負責整理方向，最後的選擇仍然屬於你。</p></div><figure className="pageVisual editorialPhoto"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90" alt="極簡工作桌與配方筆記"/><figcaption>Every formula starts with a reason.</figcaption></figure></section>
    <section className="valueStrip"><article><b>先理解</b><span>看懂來源、研究與使用限制</span></article><article><b>再選擇</b><span>依自己的需求建立方向</span></article><article><b>最後確認</b><span>由專業流程完成法規與製造評估</span></article></section>
    <section className="workspace"><div className="workspaceMain"><div className="stepLabel">01 選擇主要需求</div><div className="choiceGrid">{goals.map(x=><button className={goal===x?'selected':''} onClick={()=>{setGoal(x);setSelected([])}} key={x}>{x}</button>)}</div><div className="stepLabel">02 選擇你想投入的原料</div><div className="ingredientGrid">{options[goal].map(x=><button className={selected.includes(x)?'selected':''} onClick={()=>toggle(x)} key={x}><b>{x}</b><span>{goal}</span><small>加入或移除</small></button>)}</div><div className="twoFields"><label>劑型<select value={form} onChange={e=>setForm(e.target.value)}><option>膠囊</option><option>錠劑</option><option>粉包</option><option>沖泡飲</option><option>果凍</option></select></label><label>預計數量<input type="number" min="100" step="100" value={quantity} onChange={e=>setQuantity(Number(e.target.value)||100)}/></label></div></div><aside className="estimate"><small>個人配方摘要</small><h3>{goal}配方</h3><div><span>已選原料</span><b>{selected.length} 項</b></div><div><span>產品劑型</span><b>{form}</b></div><div><span>預計數量</span><b>{quantity.toLocaleString()} 盒</b></div><strong>NT$ {Math.round(cost).toLocaleString()}</strong><p>此為概念估價；正式價格仍需依劑量、原料規格、檢驗與法規確認。</p><a className="buttonLink lightButton" href="/ingredients">先比較原料</a></aside></section>
  </main>;
}