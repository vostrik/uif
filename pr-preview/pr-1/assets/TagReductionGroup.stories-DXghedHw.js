import{M as p,b as l,R as t}from"./iframe-BPWAyQGL.js";import{a as b}from"./StoryComponents-BLyMRmVd.js";import{B as f}from"./Button-CQWa6EYf.js";import{T as w}from"./Textbox-BHhM7EQ-.js";import{o as E}from"./Placeholder-oZWN3qNI.js";import{M as x}from"./meta-DZKYBjFY.js";import{T as n}from"./TagReductionGroup-DupLfvwO.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-B-aKaC8j.js";import"./Tag-CLdMII2D.js";import"./TextReducer-eAZWrg4x.js";import"./index-DVFdTPQg.js";import"./omit-DXgDXInf.js";import"./type-maMiwprh.js";import"./colors-kJjG_WhN.js";import"./wave-EISCTe2f.js";import"./Group-DuhoQwP5.js";import"./Divider-UsJkeAB_.js";import"./Dropdown-lv8Gw8_U.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-YytDoSjm.js";import"./useMergedState-g6WViP84.js";import"./focus-DFc-nYJ4.js";import"./ArrowRight-B3jVM-Au.js";import"./Toggle-DuE0rxkq.js";import"./AdditionalContent-BJ7Szo00.js";import"./HelpMessage-CD1QG__s.js";import"./Loader-DFUBe3p9.js";import"./index-dBktDYt3.js";import"./v4-BoP187Zn.js";import"./button-B1Scf5B3.js";import"./useGlobalStyles-vof3p1Uv.js";import"./InputMasked-DUtpnYD4.js";import"./input-CoHkwCY4.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Rrj0SyKM.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-hzPyAOnM.js";import"./InputNumber-yEWAmw0H.js";import"./index-Caav-DZ5.js";import"./SearchOutlined-BFls0Wly.js";import"./InputPassword-BS9yIELW.js";import"./StatusOkSolid-BxJYhgs5.js";import"./useTranslation-DQyKnvau.js";import"./IconResolver-CCt_PimO.js";import"./useImmutableRef-Df-o6uL8.js";const dt={title:"Hexa UI Components/Tag/Stories/Reduction",tags:["!autodocs"],component:n,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[p.stable,p.reviewedByDesign],design:x.pixsoView},decorators:[(r,e)=>t.createElement("div",{style:{width:400}},t.createElement(r,{...e}))]},o={render:({items:r,...e})=>{const[i,g]=l.useState(r),[a,s]=l.useState(""),T=()=>{a!==""&&(g(m=>[...m,{label:a}]),s(""))};return t.createElement(b,null,t.createElement(w,{value:a,onChange:s}),t.createElement(f,{onClick:T},"Добавить тег"),t.createElement(n,{items:i,...e}),t.createElement(n,{items:i.map(m=>({...m,icon:t.createElement(E,null)})),...e}))}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
