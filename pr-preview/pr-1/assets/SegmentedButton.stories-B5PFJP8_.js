import{U as s,M as r,b as a,R as m}from"./iframe-C5ywg3yF.js";import{e as P,g as h,c as x}from"./propPresentation-BBbAkRBO.js";import{w as B}from"./withMeta-bWUFpinF.js";import{o as z}from"./Placeholder-DD0S7nvg.js";import{S as g}from"./SegmentedButton-CZ2vUHLh.js";import{s as V}from"./resolveDesignControls-CFhBuB_d.js";const T={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},k="SegmentedButton",w="Framework-agnostic компонент с функциями single- и multi-выбора в виде группы кнопок",C="Выбор одного или нескольких однотипных опций, например, дней недели",O="",E="",i={dod:T,component:k,description:w,usage:C,designLink:O,pixsoView:E},_=[s.Medium,s.Large],u=(e,n={})=>P(V[e],n),M={size:"medium",disabled:!1,isStretch:!1},p={size:u("size",{options:[..._]}),disabled:u("disabled",{description:"Переводит все элементы в недоступное состояние"}),isStretch:{control:{type:"boolean"},description:"Растягивает компонент на всю ширину контейнера"}},S={argTypes:x(p),args:{...M,value:["opt2"],items:[{text:"Option 1",value:"opt1"},{text:"Option 2",value:"opt2",componentsBefore:[m.createElement(z,{key:"icon"})]},{text:"Option 3",value:"opt3"},{text:"Option 4",value:"opt4",disabled:!0}],onChange:()=>{}},parameters:{badges:[r.stable,r.reviewedByDesign],docs:{page:B(i)},design:i.pixsoView}},I={title:"Hexa UI Components/SegmentedButton",component:g,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["segmentedButtonStorySettings"],...S},t={name:"Playground",render:({value:e,disabled:n,size:f,isStretch:b,items:y})=>{const[v,o]=a.useState(e);return a.useEffect(()=>{o(e)},[e]),m.createElement(g,{items:y,value:v,onChange:o,disabled:n,size:f,isStretch:b})},parameters:{controls:{include:h(p),sort:"none"}}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    value: defaultValue,
    disabled,
    size,
    isStretch,
    items
  }) => {
    const [value, setValue] = useState<string[]>(defaultValue);
    useEffect(() => {
      setValue(defaultValue);
    }, [defaultValue]);
    return <SegmentedButton items={items} value={value} onChange={setValue} disabled={disabled} size={size} isStretch={isStretch} />;
  },
  parameters: {
    controls: {
      include: getControlsInclude(segmentedButtonPropPresentation),
      sort: 'none'
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const L=["segmentedButtonStorySettings","Playground"],F=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:L,default:I,segmentedButtonStorySettings:S},Symbol.toStringTag,{value:"Module"}));export{F as S};
