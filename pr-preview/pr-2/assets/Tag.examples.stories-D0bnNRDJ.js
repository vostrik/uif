import{M as g,R as t,S as N,b,T as V,H as F}from"./iframe-D5i9Ygdo.js";import{S as $}from"./StatesMatrix-DlArfiqX.js";import{a as U}from"./StoryComponents-CEeqpkjr.js";import{B as _}from"./Button-CXL83VB_.js";import{T as j}from"./Textbox-DmC8mJtS.js";import{o as A}from"./Placeholder-DkijJV4P.js";import{M as q}from"./meta-DZKYBjFY.js";import{t as J,T as r}from"./Tag-C8lIf1tQ.js";import{T}from"./TagReductionGroup-zSaHMIHw.js";import"./preload-helper-Dp1pzeXC.js";import"./i18n-DOyLrdWg.js";import"./FormLabel-c2Q2BrM3.js";import"./Divider-BeaQgGYc.js";import"./Dropdown-Ch8JK4fs.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CaW8sGOK.js";import"./useMergedState-BRnWrkwv.js";import"./focus-BNJDX2dF.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BAmBzp_S.js";import"./Toggle-DLx7OJGm.js";import"./AdditionalContent-DV7YHkAD.js";import"./HelpMessage-BikZb-K7.js";import"./type-CpBfXgi8.js";import"./wave-CAHKjKs-.js";import"./Loader-Dy3Ztxbv.js";import"./index-CqaKVEiO.js";import"./v4-BoP187Zn.js";import"./button-D-Oiy998.js";import"./useGlobalStyles-BDgH4xnZ.js";import"./InputMasked-D5lxln8b.js";import"./input-DSbZT73f.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Dl-Tm7pH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BKLnJg9s.js";import"./InputNumber-RQbuw8Bm.js";import"./index-xCiVKA0M.js";import"./SearchOutlined-DkaJltl-.js";import"./InputPassword-BM3g8Pk1.js";import"./StatusOkSolid-BK2TPeG4.js";import"./useTranslation-DsfYxNia.js";import"./IconResolver-C8r5gqjC.js";import"./TextReducer-Dagp5bHw.js";import"./index-CjdVh8OV.js";import"./colors-TzwrEhrS.js";import"./Group-m0-YpTU1.js";import"./useImmutableRef-Dfal5Z5X.js";const Qe={title:"Hexa UI Components/Tag/Stories",component:r,tags:["!autodocs"],parameters:{badges:[g.stable,g.reviewedByDesign],design:q.pixsoView}},K=[{key:"default",label:"Default"},{key:"hover",label:"Hover"},{key:"active",label:"Active"},{key:"disabled",label:"Disabled",disabled:!0},{key:"readonly",label:"ReadOnly",readOnly:!0}],L=[{key:"filled",label:"Filled",mode:"emerald",interactive:!0},{key:"outlined",label:"Outlined",mode:"emerald",outlined:!0,interactive:!0},{key:"icon",label:"Icon",mode:"emerald",icon:!0,interactive:!0},{key:"closable",label:"Closable",mode:"emerald",closable:!0,interactive:!0}],Q=(e,o)=>t.createElement(r,{mode:o.mode,size:o.size,outlined:o.outlined,icon:o.icon?t.createElement(A,null):void 0,closable:o.closable,interactive:o.interactive,disabled:e.disabled,readOnly:e.readOnly},o.label),W=[{key:"filled",label:"Filled",outlined:!1},{key:"outlined",label:"Outlined",outlined:!0}],X=["neutral","purple","grey","marina","red","marengo","emerald","orange","yellow","violet","grass","ai"],Y=X.map(e=>({key:`color-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)}`,mode:e})),Z=(e,o)=>t.createElement(r,{mode:o.mode,outlined:e.outlined},o.label),a={parameters:{controls:{include:[]}},render:()=>t.createElement($,{rows:K,columns:L,renderCell:Q})},n={parameters:{controls:{include:[]}},render:()=>t.createElement($,{rows:W,columns:Y,renderCell:Z})},s={render:e=>t.createElement(N,{gap:4,direction:"horizontal"},t.createElement(r,{...e},`I'm a ${e.mode} tag`),t.createElement(r,{...e,onClose:()=>alert("outlined tag"),outlined:!0},`I'm a ${e.mode} outlined tag`)),args:{mode:"neutral"},argTypes:{mode:{options:J,control:{type:"select"}}}},l={args:{children:"This is a looooong long looooong long looooong long tag content that should be truncated on maxChars prop.",onClick:()=>alert("tag!"),closable:!0,onClose:()=>alert("Max chars tag"),size:"medium",truncation:{maxChars:30,tooltipPosition:"bottom",truncationSymbol:"..."}}},ee=F.div`
  width: 30%;
  padding: 20px;
`,i={render:e=>t.createElement("div",{style:{width:"100%"}},t.createElement(V,null,"Try to change (↔️) browser width and look at tag reaction"),t.createElement(ee,null,t.createElement(r,{...e},e.children))),args:{children:"Some medium size and responsive tag",size:"medium",isResponsive:!0}},m={render:({items:e,...o})=>{const[p,D]=b.useState(e),[d,u]=b.useState(""),H=()=>{d!==""&&(D(c=>[...c,{label:d}]),u(""))};return t.createElement(U,null,t.createElement(j,{value:d,onChange:u}),t.createElement(_,{onClick:H},"Добавить тег"),t.createElement(T,{items:p,...o}),t.createElement(T,{items:p.map(c=>({...c,icon:t.createElement(A,null)})),...o}))},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},decorators:[(e,o)=>t.createElement("div",{style:{width:400}},t.createElement(e,{...o}))]};var h,C,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => <StatesMatrix rows={stateRows} columns={variantColumns} renderCell={renderStateCell} />
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var S,v,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => <StatesMatrix rows={colorRows} columns={colorColumns} renderCell={renderColorStateCell} />
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,E,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: TagProps) => <Space gap={4} direction="horizontal">
      <Tag {...args}>
        {\`I'm a \${args.mode} tag\`}
      </Tag>
      <Tag {...args} onClose={() => alert('outlined tag')} outlined>
        {\`I'm a \${args.mode} outlined tag\`}
      </Tag>
    </Space>,
  args: {
    mode: 'neutral'
  },
  argTypes: {
    mode: {
      options: tagModes,
      control: {
        type: 'select'
      }
    }
  }
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var k,R,M;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'This is a looooong long looooong long looooong long tag content that should be truncated on maxChars prop.',
    onClick: () => alert('tag!'),
    closable: true,
    onClose: () => alert('Max chars tag'),
    size: 'medium',
    truncation: {
      maxChars: 30,
      tooltipPosition: 'bottom',
      truncationSymbol: '...'
    }
  }
}`,...(M=(R=l.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var I,z,O;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: TagProps) => {
    return <div style={{
      width: '100%'
    }}>
        <Text>Try to change (↔️) browser width and look at tag reaction</Text>
        <Container>
          <Tag {...args}>
            {args.children}
          </Tag>
        </Container>
      </div>;
  },
  args: {
    children: 'Some medium size and responsive tag',
    size: 'medium',
    isResponsive: true
  }
}`,...(O=(z=i.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var B,G,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
  },
  args: {
    items: [{
      label: 'Восточно-Сибирская жд'
    }, {
      label: 'Забайкальская жд'
    }, {
      label: 'Северо-Кавказская жд'
    }, {
      label: 'Московская окружная жд'
    }, {
      label: 'Южно-Уральская жд'
    }, {
      label: 'Октябрьская жд'
    }],
    isMultiline: false,
    reductionTag: {
      size: 'medium',
      outlined: false
    }
  },
  decorators: [(Story, context) => <div style={{
    width: 400
  }}><Story {...context} /></div>]
}`,...(P=(G=m.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const We=["States","ModeVariants","Basic","MaxCharsTag","ResponsiveTag","ReductionGroup"];export{s as Basic,l as MaxCharsTag,n as ModeVariants,m as ReductionGroup,i as ResponsiveTag,a as States,We as __namedExportsOrder,Qe as default};
