import{M as p,b as l,R as t}from"./iframe-CMq2KAbH.js";import{a as b}from"./StoryComponents-CJn5qyLn.js";import{B as f}from"./Button-CthyJnKL.js";import{T as w}from"./Textbox-C3XwSVev.js";import{o as E}from"./Placeholder-DvpzdgNV.js";import{M as x}from"./meta-DZKYBjFY.js";import{T as n}from"./TagReductionGroup-BIpbwMuQ.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-lYRdE9pS.js";import"./Tag-jK9gdpxg.js";import"./TextReducer-Dpv34lw7.js";import"./index-BVVx-a9X.js";import"./omit-DXgDXInf.js";import"./type-D3DD6-1D.js";import"./colors-CLR_yiO4.js";import"./wave-3WO31ZRq.js";import"./Group-BToCNK5g.js";import"./Divider-C_lHVbvw.js";import"./Dropdown-DNOjr3f3.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D5s7vtpu.js";import"./useMergedState-9g38g9C2.js";import"./focus-CwA7FrxM.js";import"./ArrowRight-BzdZu4G4.js";import"./Toggle-B21kP8-p.js";import"./AdditionalContent-hq5GWz_N.js";import"./HelpMessage-ibDnZnKg.js";import"./Loader-B5BFds4o.js";import"./index-Ev0QlY--.js";import"./v4-BoP187Zn.js";import"./button-D46-rz2F.js";import"./useGlobalStyles-e7QAzIdB.js";import"./InputMasked-BJJRFGYn.js";import"./input-oCYnQPV0.js";import"./index-Chjiymov.js";import"./useThemedTextbox-0WxJoH-t.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-CJseRoSV.js";import"./InputNumber-B55XAJ_M.js";import"./index-uP0Vmx41.js";import"./SearchOutlined-Bkdm0CAd.js";import"./InputPassword-BpE4fLB8.js";import"./StatusOkSolid-DvHSb1lq.js";import"./useTranslation-DM_UuMFJ.js";import"./IconResolver-Cpezmei0.js";import"./useImmutableRef-DQ6bQ0sn.js";const dt={title:"Hexa UI Components/Tag/Stories/Reduction",tags:["!autodocs"],component:n,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[p.stable,p.reviewedByDesign],design:x.pixsoView},decorators:[(r,e)=>t.createElement("div",{style:{width:400}},t.createElement(r,{...e}))]},o={render:({items:r,...e})=>{const[i,g]=l.useState(r),[a,s]=l.useState(""),T=()=>{a!==""&&(g(m=>[...m,{label:a}]),s(""))};return t.createElement(b,null,t.createElement(w,{value:a,onChange:s}),t.createElement(f,{onClick:T},"Добавить тег"),t.createElement(n,{items:i,...e}),t.createElement(n,{items:i.map(m=>({...m,icon:t.createElement(E,null)})),...e}))}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
