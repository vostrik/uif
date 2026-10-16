import{M as p,b as l,R as t}from"./iframe-D64doaOG.js";import{a as b}from"./StoryComponents-BPvyLU8J.js";import{B as f}from"./Button-TmF0MD_-.js";import{T as w}from"./Textbox-DG8LriK_.js";import{o as E}from"./Placeholder-CPZh2A8H.js";import{M as x}from"./meta-DZKYBjFY.js";import{T as n}from"./TagReductionGroup-Qiguzui7.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-_EAno6xN.js";import"./Tag-D6DOgDGV.js";import"./TextReducer-D9EoPo-Z.js";import"./index-BUFoDfzb.js";import"./omit-DXgDXInf.js";import"./type-BhjCrcP5.js";import"./colors-CZlhbD2k.js";import"./wave-D0moY5T7.js";import"./Group-g0kG_cFj.js";import"./Divider-CHq-NCgF.js";import"./Dropdown-CakLMIuG.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DOaPQPHU.js";import"./useMergedState-D_-bsn6_.js";import"./focus-DobIVKtg.js";import"./ArrowRight-3NiJ6X-U.js";import"./Toggle-DKzag4k9.js";import"./AdditionalContent-Dm003yIA.js";import"./HelpMessage-D9PDbKUA.js";import"./Loader-DHdWRNjN.js";import"./index-B5M9_ZQL.js";import"./v4-BoP187Zn.js";import"./button-Xku0lj0N.js";import"./useGlobalStyles-BHDTOddm.js";import"./InputMasked-mR9gPOBu.js";import"./input-BGaYNdUH.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CSuDfsxH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-E0BmDxS6.js";import"./InputNumber-BgiYnHn5.js";import"./index-M7uLrcpx.js";import"./SearchOutlined-XfEsUDsT.js";import"./InputPassword-CF4iGcsj.js";import"./StatusOkSolid-BICad4Wy.js";import"./useTranslation-CtdtsiRO.js";import"./IconResolver-B-B8tWu_.js";import"./useImmutableRef-COuKn2-q.js";const dt={title:"Hexa UI Components/Tag/Stories/Reduction",tags:["!autodocs"],component:n,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[p.stable,p.reviewedByDesign],design:x.pixsoView},decorators:[(r,e)=>t.createElement("div",{style:{width:400}},t.createElement(r,{...e}))]},o={render:({items:r,...e})=>{const[i,g]=l.useState(r),[a,s]=l.useState(""),T=()=>{a!==""&&(g(m=>[...m,{label:a}]),s(""))};return t.createElement(b,null,t.createElement(w,{value:a,onChange:s}),t.createElement(f,{onClick:T},"Добавить тег"),t.createElement(n,{items:i,...e}),t.createElement(n,{items:i.map(m=>({...m,icon:t.createElement(E,null)})),...e}))}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
