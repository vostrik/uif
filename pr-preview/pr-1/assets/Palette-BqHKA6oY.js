import{b as _,R as r,a6 as p,H as d,Z as u,J as w,T as y}from"./iframe-D7vGURqZ.js";const $=e=>/^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e),v=(e,i)=>e.match(new RegExp(`.{${i}}`,"g")),B=e=>parseInt(e.repeat(2/e.length),16),C=e=>typeof e<"u"?e/255:1,g=e=>{if(!$(e))return"";const i=Math.floor((e.length-1)/3),c=v(e.slice(1),i),[n,t,l,o]=c.map(B);return`rgba(${n}, ${t}, ${l}, ${String(C(o)).slice(0,3)})`},h=(e,i)=>Object.keys(e).find(c=>e[c]===i&&c.includes("_")),N=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${e=>e.margin&&`margin-left: ${e.margin}px;`};
`,s=d(y)`
  ${e=>e.width&&`width: ${e.width}px;`};
  ${e=>e.margin&&`margin-left: ${e.margin}px;`};
`,x=d.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  min-width: 450px;

  .ds-colorBox {
    background-color: ${e=>e.color};
    width: 48px;
    height: 32px;
  }

  ${e=>e.theme===u.Dark&&`
    background-color: ${p.coldgrey_900};
    color: ${p.neutral_0};
  `}
`,P=d.div`
  margin: 0 8px;

  .ds-colorBox {
    background-color: ${e=>e.color};
    width: 150px;
    height: 50px;
  }
`,V=d.div`
  padding: 10px 10px 20px 10px;
  display: flex;
`,T=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 1200px;
`,A=e=>{const i={};return Object.keys(e).forEach(c=>{const n=c.split("_").slice(0,-1).join("_");i[n]||(i[n]={}),i[n][c]=e[c]}),i},f=({source:e})=>{const i=A(e);return r.createElement(T,null,Object.entries(i).map(([c,n])=>r.createElement(V,{key:c},Object.entries(n).map(([t,l])=>r.createElement(P,{color:l,key:t},t,r.createElement("div",{className:"ds-colorBox"}))))))},m={1:{textType:"H5",margin:0},2:{textType:"H6",margin:8},3:{textType:"BTM2",margin:16},4:{textType:"BTM3",margin:32},5:{textType:"BTM4",margin:64}},E=({source:e})=>{const i=_.useMemo(()=>{const n=(t,l=1)=>Object.keys(t).reduce((o,a)=>(typeof t[a]=="object"&&!("light"in t[a]&&"dark"in t[a])?o[a]=n(t[a],l+1):o[a]={light:{value:t[a].light,alias:h(p,t[a].light)},dark:{value:t[a].dark,alias:h(p,t[a].dark)}},o),{});return n(e)},[e]),c=(n,t=1)=>Object.keys(n).map(l=>{var o;if(typeof n[l]=="object"&&"dark"in n[l]&&"light"in n[l]){const a=n[l];return r.createElement(N,{margin:((o=m[t])==null?void 0:o.margin)??m[1],key:l},r.createElement(s,{width:128},l),r.createElement(x,{color:a.light.value},r.createElement("div",{className:"ds-colorBox"}),r.createElement(s,{width:120},a.light.alias),r.createElement(s,{width:90},a.light.value),r.createElement(s,{width:160},g(a.light.value))),r.createElement(x,{className:w("",u.Dark),color:a.dark.value,theme:u.Dark},r.createElement("div",{className:"ds-colorBox"}),r.createElement(s,{width:120},a.dark.alias),r.createElement(s,{width:90},a.dark.value),r.createElement(s,{width:160},g(a.dark.value))))}else return r.createElement("div",{key:l},r.createElement(s,{type:m[t].textType||"BTM4",margin:m[t].margin},l,c(n[l],t+1)))});return r.createElement(T,null,c(i))};try{f.displayName="StaticPalette",f.__docgenInfo={description:"",displayName:"StaticPalette",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"StaticPalette"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{E.displayName="ThemedPalette",E.__docgenInfo={description:"",displayName:"ThemedPalette",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"PaletteWithValues"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{f as S,E as T};
