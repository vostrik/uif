import{M as g,R as t,S as N,b,T as V,H as F}from"./iframe-CMq2KAbH.js";import{S as $}from"./StatesMatrix-Cms58oQB.js";import{a as U}from"./StoryComponents-CJn5qyLn.js";import{B as _}from"./Button-CthyJnKL.js";import{T as j}from"./Textbox-C3XwSVev.js";import{o as A}from"./Placeholder-DvpzdgNV.js";import{M as q}from"./meta-DZKYBjFY.js";import{t as J,T as r}from"./Tag-jK9gdpxg.js";import{T}from"./TagReductionGroup-BIpbwMuQ.js";import"./preload-helper-Dp1pzeXC.js";import"./i18n-BoI2V5IV.js";import"./FormLabel-lYRdE9pS.js";import"./Divider-C_lHVbvw.js";import"./Dropdown-DNOjr3f3.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D5s7vtpu.js";import"./useMergedState-9g38g9C2.js";import"./focus-CwA7FrxM.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BzdZu4G4.js";import"./Toggle-B21kP8-p.js";import"./AdditionalContent-hq5GWz_N.js";import"./HelpMessage-ibDnZnKg.js";import"./type-D3DD6-1D.js";import"./wave-3WO31ZRq.js";import"./Loader-B5BFds4o.js";import"./index-Ev0QlY--.js";import"./v4-BoP187Zn.js";import"./button-D46-rz2F.js";import"./useGlobalStyles-e7QAzIdB.js";import"./InputMasked-BJJRFGYn.js";import"./input-oCYnQPV0.js";import"./index-Chjiymov.js";import"./useThemedTextbox-0WxJoH-t.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-CJseRoSV.js";import"./InputNumber-B55XAJ_M.js";import"./index-uP0Vmx41.js";import"./SearchOutlined-Bkdm0CAd.js";import"./InputPassword-BpE4fLB8.js";import"./StatusOkSolid-DvHSb1lq.js";import"./useTranslation-DM_UuMFJ.js";import"./IconResolver-Cpezmei0.js";import"./TextReducer-Dpv34lw7.js";import"./index-BVVx-a9X.js";import"./colors-CLR_yiO4.js";import"./Group-BToCNK5g.js";import"./useImmutableRef-DQ6bQ0sn.js";const Qe={title:"Hexa UI Components/Tag/Stories",component:r,tags:["!autodocs"],parameters:{badges:[g.stable,g.reviewedByDesign],design:q.pixsoView}},K=[{key:"default",label:"Default"},{key:"hover",label:"Hover"},{key:"active",label:"Active"},{key:"disabled",label:"Disabled",disabled:!0},{key:"readonly",label:"ReadOnly",readOnly:!0}],L=[{key:"filled",label:"Filled",mode:"emerald",interactive:!0},{key:"outlined",label:"Outlined",mode:"emerald",outlined:!0,interactive:!0},{key:"icon",label:"Icon",mode:"emerald",icon:!0,interactive:!0},{key:"closable",label:"Closable",mode:"emerald",closable:!0,interactive:!0}],Q=(e,o)=>t.createElement(r,{mode:o.mode,size:o.size,outlined:o.outlined,icon:o.icon?t.createElement(A,null):void 0,closable:o.closable,interactive:o.interactive,disabled:e.disabled,readOnly:e.readOnly},o.label),W=[{key:"filled",label:"Filled",outlined:!1},{key:"outlined",label:"Outlined",outlined:!0}],X=["neutral","purple","grey","marina","red","marengo","emerald","orange","yellow","violet","grass","ai"],Y=X.map(e=>({key:`color-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)}`,mode:e})),Z=(e,o)=>t.createElement(r,{mode:o.mode,outlined:e.outlined},o.label),a={parameters:{controls:{include:[]}},render:()=>t.createElement($,{rows:K,columns:L,renderCell:Q})},n={parameters:{controls:{include:[]}},render:()=>t.createElement($,{rows:W,columns:Y,renderCell:Z})},s={render:e=>t.createElement(N,{gap:4,direction:"horizontal"},t.createElement(r,{...e},`I'm a ${e.mode} tag`),t.createElement(r,{...e,onClose:()=>alert("outlined tag"),outlined:!0},`I'm a ${e.mode} outlined tag`)),args:{mode:"neutral"},argTypes:{mode:{options:J,control:{type:"select"}}}},l={args:{children:"This is a looooong long looooong long looooong long tag content that should be truncated on maxChars prop.",onClick:()=>alert("tag!"),closable:!0,onClose:()=>alert("Max chars tag"),size:"medium",truncation:{maxChars:30,tooltipPosition:"bottom",truncationSymbol:"..."}}},ee=F.div`
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
