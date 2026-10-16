import{M as p,b as l,R as t}from"./iframe-DNVAFsND.js";import{a as b}from"./StoryComponents-eJOs43SN.js";import{B as f}from"./Button-Cmmczys_.js";import{T as w}from"./Textbox-DtZRjkLt.js";import{o as E}from"./Placeholder-CTw9X4Hx.js";import{M as x}from"./meta-DZKYBjFY.js";import{T as n}from"./TagReductionGroup-3YX0TRTS.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-DZAlZE9m.js";import"./Tag-CWq2qS_r.js";import"./TextReducer-CcQuVU5v.js";import"./index-Bdb3sctg.js";import"./omit-DXgDXInf.js";import"./type-0ivux5bP.js";import"./colors-C_cfvQV4.js";import"./wave-BJ1hX2v5.js";import"./Group-DazgOZHb.js";import"./Divider-AC6gIdGc.js";import"./Dropdown-JGfdkU0i.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D4FdOSTr.js";import"./useMergedState-ynS__ke0.js";import"./focus-DFzoFYVL.js";import"./ArrowRight-GlR7Ouxo.js";import"./Toggle-B1y7zhcL.js";import"./AdditionalContent-D9yWR_3E.js";import"./HelpMessage-C_F_6WkG.js";import"./Loader-DssZ-VPI.js";import"./index-DMLUsSjF.js";import"./v4-BoP187Zn.js";import"./button-BVzDJ1xK.js";import"./useGlobalStyles-B9ioAtoA.js";import"./InputMasked-DtOxLUJQ.js";import"./input-ThTede3e.js";import"./index-Chjiymov.js";import"./useThemedTextbox-JibM730T.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DY9JG4_L.js";import"./InputNumber-BgZFiRwU.js";import"./index-kDjmKyHE.js";import"./SearchOutlined-ujROV_cz.js";import"./InputPassword-Ca1Y1uhk.js";import"./StatusOkSolid-kiUV4rGA.js";import"./useTranslation-Dg1XEziH.js";import"./IconResolver-COitkxCH.js";import"./useImmutableRef-DvbrSK7A.js";const dt={title:"Hexa UI Components/Tag/Stories/Reduction",tags:["!autodocs"],component:n,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[p.stable,p.reviewedByDesign],design:x.pixsoView},decorators:[(r,e)=>t.createElement("div",{style:{width:400}},t.createElement(r,{...e}))]},o={render:({items:r,...e})=>{const[i,g]=l.useState(r),[a,s]=l.useState(""),T=()=>{a!==""&&(g(m=>[...m,{label:a}]),s(""))};return t.createElement(b,null,t.createElement(w,{value:a,onChange:s}),t.createElement(f,{onClick:T},"Добавить тег"),t.createElement(n,{items:i,...e}),t.createElement(n,{items:i.map(m=>({...m,icon:t.createElement(E,null)})),...e}))}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
