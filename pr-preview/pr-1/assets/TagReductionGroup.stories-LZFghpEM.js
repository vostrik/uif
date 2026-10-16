import{M as p,b as l,R as t}from"./iframe-CWTW431d.js";import{a as b}from"./StoryComponents-z3jtU0VG.js";import{B as f}from"./Button-Dtt-8qQC.js";import{T as w}from"./Textbox-DZ5J0BFU.js";import{o as E}from"./Placeholder-Bw0WR4Xn.js";import{M as x}from"./meta-DZKYBjFY.js";import{T as n}from"./TagReductionGroup-CB48G81y.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-CGcobH17.js";import"./Tag-a0Ju7I2Y.js";import"./TextReducer-BKSOrAn7.js";import"./index-D-MPt99R.js";import"./omit-DXgDXInf.js";import"./type-DnwzfU9Y.js";import"./colors-CDrajaLR.js";import"./wave-DKblzsMF.js";import"./Group-BXfAcZfu.js";import"./Divider-BNE7kxRe.js";import"./Dropdown-CpY4_2yP.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C6z_ExK5.js";import"./useMergedState-DIWBApoD.js";import"./focus-bRTu4OQx.js";import"./ArrowRight-MEBjPGWY.js";import"./Toggle-COf30Rrf.js";import"./AdditionalContent-eqvFhAFS.js";import"./HelpMessage-Bq5rlA1f.js";import"./Loader-Dwsr2p9J.js";import"./index-Cg7pBzQK.js";import"./v4-BoP187Zn.js";import"./button-BC2KCpzw.js";import"./useGlobalStyles-DzGsrGop.js";import"./InputMasked-B6k5DGN3.js";import"./input-B9zvPYiu.js";import"./index-Chjiymov.js";import"./useThemedTextbox-bbxWP79c.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-C7BYVjFh.js";import"./InputNumber-DtGOqesW.js";import"./index-v60Pz8jA.js";import"./SearchOutlined-ChTgzuYk.js";import"./InputPassword-DRyt_73p.js";import"./StatusOkSolid-DAGo7cyd.js";import"./useTranslation-BA-QSkbB.js";import"./IconResolver-Bigm6rDE.js";import"./useImmutableRef-CiiwWcBX.js";const dt={title:"Hexa UI Components/Tag/Stories/Reduction",tags:["!autodocs"],component:n,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[p.stable,p.reviewedByDesign],design:x.pixsoView},decorators:[(r,e)=>t.createElement("div",{style:{width:400}},t.createElement(r,{...e}))]},o={render:({items:r,...e})=>{const[i,g]=l.useState(r),[a,s]=l.useState(""),T=()=>{a!==""&&(g(m=>[...m,{label:a}]),s(""))};return t.createElement(b,null,t.createElement(w,{value:a,onChange:s}),t.createElement(f,{onClick:T},"Добавить тег"),t.createElement(n,{items:i,...e}),t.createElement(n,{items:i.map(m=>({...m,icon:t.createElement(E,null)})),...e}))}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
