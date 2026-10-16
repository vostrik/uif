import{M as p,b as l,R as t}from"./iframe-BfQ7ApZt.js";import{a as b}from"./StoryComponents-DXy8kn5n.js";import{B as f}from"./Button-CqaIK97I.js";import{T as w}from"./Textbox-_SnLGc5a.js";import{o as E}from"./Placeholder-d70tBTS3.js";import{M as x}from"./meta-DZKYBjFY.js";import{T as n}from"./TagReductionGroup-DsVjlNEM.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-Djf96u0n.js";import"./Tag-CNKGekQl.js";import"./TextReducer-CUYXVfXw.js";import"./index-BrzaXK4u.js";import"./omit-DXgDXInf.js";import"./type-BB57qeSp.js";import"./colors-DNfPmHyW.js";import"./wave-DHr58TaD.js";import"./Group-D5E9cFoC.js";import"./Divider-6ip5VOzi.js";import"./Dropdown-CHDWb0q5.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-n2s7gkAb.js";import"./useMergedState-C69lNlPn.js";import"./focus-CLSyxWMD.js";import"./ArrowRight-IWPA832A.js";import"./Toggle-DWqz3Goe.js";import"./AdditionalContent-BlBDkelx.js";import"./HelpMessage-BluS93iW.js";import"./Loader-mu8dA5fb.js";import"./index-D5SjVOUn.js";import"./v4-BoP187Zn.js";import"./button-COUo-Xn0.js";import"./useGlobalStyles-DUVx8yfE.js";import"./InputMasked-cz3KYqUR.js";import"./input-CqcN6SoF.js";import"./index-Chjiymov.js";import"./useThemedTextbox-f8i9Awdp.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-B3iZgQry.js";import"./InputNumber-CrWCqJVt.js";import"./index-BjaOwfmt.js";import"./SearchOutlined-TsDRpOJr.js";import"./InputPassword-Dr2XJqDe.js";import"./StatusOkSolid-CmlnsS-F.js";import"./useTranslation-49YpKz4U.js";import"./IconResolver-CH_jQeWr.js";import"./useImmutableRef-DrCG7dTd.js";const dt={title:"Hexa UI Components/Tag/Stories/Reduction",tags:["!autodocs"],component:n,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[p.stable,p.reviewedByDesign],design:x.pixsoView},decorators:[(r,e)=>t.createElement("div",{style:{width:400}},t.createElement(r,{...e}))]},o={render:({items:r,...e})=>{const[i,g]=l.useState(r),[a,s]=l.useState(""),T=()=>{a!==""&&(g(m=>[...m,{label:a}]),s(""))};return t.createElement(b,null,t.createElement(w,{value:a,onChange:s}),t.createElement(f,{onClick:T},"Добавить тег"),t.createElement(n,{items:i,...e}),t.createElement(n,{items:i.map(m=>({...m,icon:t.createElement(E,null)})),...e}))}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    items,
    ...rest
  }: TagReductionGroupProps) => {
    const [tagItems, setTagItems] = useState(items);
    const [newTag, setNewTag] = useState('');
    const handleOnTagAdd = () => {
      if (newTag !== '') {
        setTagItems(prev => [...prev, {
          label: newTag
        }]);
        setNewTag('');
      }
    };
    return <StoryColumn>
        <Textbox value={newTag} onChange={setNewTag} />
        <Button onClick={handleOnTagAdd}>Добавить тег</Button>
        <TagReductionGroup items={tagItems} {...rest} />
        <TagReductionGroup items={tagItems.map(item => ({
        ...item,
        icon: <Placeholder />
      }))} {...rest} />
      </StoryColumn>;
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const gt=["ReductionGroup"];export{o as ReductionGroup,gt as __namedExportsOrder,dt as default};
