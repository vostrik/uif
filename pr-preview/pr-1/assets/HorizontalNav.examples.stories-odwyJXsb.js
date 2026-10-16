import{C as E}from"./Warnings-B48ejef0.js";import{R as e,b as S,S as C,H}from"./iframe-CMq2KAbH.js";import{o as I}from"./Placeholder-DvpzdgNV.js";import{H as n}from"./HorizontalNav-DQGGcvIG.js";import"./Tag-jK9gdpxg.js";import"./TextReducer-Dpv34lw7.js";import"./index-BVVx-a9X.js";import"./omit-DXgDXInf.js";import"./type-D3DD6-1D.js";import"./colors-CLR_yiO4.js";import"./wave-3WO31ZRq.js";import"./Group-BToCNK5g.js";import"./preload-helper-Dp1pzeXC.js";const g=H.div`
  flex: 1;
  nav {
    width: 100%;
  }
`,t=[{label:"One",key:"one",componentsAfter:[e.createElement(I,{key:"placeholder-icon"}),e.createElement("span",{key:"badge",style:{fontSize:12,color:"var(--hexa-ui-color-control-neutral-default)"}},"9")]},{label:"Two",key:"two"},{label:"Three",key:"three"},{label:"Four",key:"four"},{label:"Five",key:"five"},{label:"Six",key:"six",disabled:!0},{label:"Seven Eleven",key:"sevenEleven"}],j={title:"Other/HorizontalNav/Stories",component:n,tags:["!autodocs"],parameters:{controls:{exclude:/(componentType|theme|klId)/}}},a={name:"HorizontalNav",render:r=>e.createElement(g,null,e.createElement(n,{...r,items:t})),args:{items:t}},o={render:r=>e.createElement(g,null,e.createElement(n,{...r,items:t,borderless:!0})),args:{borderless:!0,items:t},parameters:{controls:{exclude:/(borderless|componentType|theme|klId)/}}},s={name:"Controllable Active Key",render:r=>{const[K,k]=S.useState("two"),f=t.map(l=>({...l,selected:!1,onClick:()=>k(l.key)}));return e.createElement(C,{gap:"separated",direction:"vertical"},e.createElement(E,null),e.createElement(n,{...r,activeKey:K,items:f}))},args:{items:t,activeKey:"two"},parameters:{controls:{include:["activeKey"]}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'HorizontalNav',
  render: args => <Wrapper>
      <HorizontalNavComponent {...args} items={baseItems} />
    </Wrapper>,
  args: {
    items: baseItems
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Wrapper>
      <HorizontalNavComponent {...args} items={baseItems} borderless />
    </Wrapper>,
  args: {
    borderless: true,
    items: baseItems
  },
  parameters: {
    controls: {
      exclude: /(borderless|componentType|theme|klId)/
    }
  }
}`,...(v=(d=o.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var u,y,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Controllable Active Key',
  render: args => {
    const [activeKey, setActiveKey] = useState('two');
    const items = baseItems.map(item => ({
      ...item,
      selected: false,
      onClick: () => setActiveKey(item.key)
    }));
    return <Space gap="separated" direction="vertical">
        <ControllableActiveKeyInfo />
        <HorizontalNavComponent {...args} activeKey={activeKey} items={items} />
      </Space>;
  },
  args: {
    items: baseItems,
    activeKey: 'two'
  },
  parameters: {
    controls: {
      include: ['activeKey']
    }
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const q=["HorizontalNavBasic","Borderless","ControllableActiveKey"];export{o as Borderless,s as ControllableActiveKey,a as HorizontalNavBasic,q as __namedExportsOrder,j as default};
