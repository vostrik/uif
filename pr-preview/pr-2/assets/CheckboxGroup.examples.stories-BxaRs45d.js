import{a as u}from"./StoryComponents-BPvyLU8J.js";import{T as p}from"./Tag-D6DOgDGV.js";import{R as e}from"./iframe-D64doaOG.js";import{a}from"./Checkbox-CQJUKqA0.js";import{c as b}from"./CheckboxGroup.stories-De_3M_Zd.js";import"./FormLabel-_EAno6xN.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-CHq-NCgF.js";import"./TextReducer-D9EoPo-Z.js";import"./index-BUFoDfzb.js";import"./omit-DXgDXInf.js";import"./type-BhjCrcP5.js";import"./colors-CZlhbD2k.js";import"./wave-D0moY5T7.js";import"./Group-g0kG_cFj.js";import"./AdditionalContent-Dm003yIA.js";import"./HelpMessage-D9PDbKUA.js";import"./useId-DuQtMQjK.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./index-BxD9VrI3.js";import"./index-CSRrHaEE.js";import"./propPresentation-Bd1LfInE.js";import"./blocks-Mkmu72nY.js";import"./index-g4UEVAJN.js";import"./withMeta-BASmJkxv.js";import"./DocPageLayout-hKNknvQM.js";import"./SubComponents-CmPDyBhW.js";import"./TextWithTruncation-OcBO6EIa.js";import"./ArrowDownSolid-b0Mul1k0.js";import"./ArrowRightSolid-BZ2MxU-F.js";import"./Badge-tlJSCzR8.js";import"./Indicator-BWF03Jjq.js";import"./StatusOkOutline-3Qqm9vRx.js";import"./Grid-1I9G4hH2.js";import"./Markdown-BoWm1Hej.js";import"./index-BayBP1qJ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./meta-hCnUNwms.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const re={title:"Hexa UI Components/CheckboxGroup/Stories",component:a.Group,tags:["!autodocs"],...b},d=t=>{console.log("checked = ",t)},r={render:t=>e.createElement(u,null,e.createElement(a.Group,{testId:"test-cb4",direction:"vertical",...t}),e.createElement(a.Group,{testId:"test-cb5",direction:"horizontal",...t})),args:{onChange:d,options:[{label:"One",value:1},{label:"Two",value:2},{label:"Three",value:3,description:"Description in checkbox group"},{label:e.createElement("div",null,e.createElement(p,null,"Four"),"React Element",e.createElement("br",null),"with multiple lines"),value:4}]}},l={render:t=>e.createElement(a.Group,{...t}),args:{testId:"test-cb6",defaultValue:[4,5,7],onChange:d,options:[{label:e.createElement("div",null,"First React Element is enabled"),value:1},{label:e.createElement("div",null,"Second React Element is enabled"),value:2},{label:e.createElement("div",null,"Third React Element is DISABLED"),value:3,disabled:!0},{label:e.createElement("div",null,"Fourth React Element is DISABLED and checked"),value:4,disabled:!0},{label:e.createElement("div",null,"Fifth React Element is enabled and checked, but can be unchecked by user"),value:5},{label:e.createElement("div",null,"Sixth React Element is READONLY"),value:6,readonly:!0},{label:e.createElement("div",null,"Seventh React Element is READONLY and checked"),value:7,readonly:!0}]}};var n,o,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: CheckboxGroupProps) => <StoryColumn>
      <CheckboxComponent.Group testId="test-cb4" direction="vertical" {...args} />
      <CheckboxComponent.Group testId="test-cb5" direction="horizontal" {...args} />
    </StoryColumn>,
  args: {
    onChange,
    options: [{
      label: 'One',
      value: 1
    }, {
      label: 'Two',
      value: 2
    }, {
      label: 'Three',
      value: 3,
      description: 'Description in checkbox group'
    }, {
      label: <div>
            <Tag>Four</Tag>
            React Element<br />with multiple lines
          </div>,
      value: 4
    }]
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,m,s;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: CheckboxGroupProps) => <CheckboxComponent.Group {...args} />,
  args: {
    testId: 'test-cb6',
    defaultValue: [4, 5, 7],
    onChange,
    options: [{
      label: <div>First React Element is enabled</div>,
      value: 1
    }, {
      label: <div>Second React Element is enabled</div>,
      value: 2
    }, {
      label: <div>Third React Element is DISABLED</div>,
      value: 3,
      disabled: true
    }, {
      label: <div>Fourth React Element is DISABLED and checked</div>,
      value: 4,
      disabled: true
    }, {
      label: <div>Fifth React Element is enabled and checked, but can be unchecked by user</div>,
      value: 5
    }, {
      label: <div>Sixth React Element is READONLY</div>,
      value: 6,
      readonly: true
    }, {
      label: <div>Seventh React Element is READONLY and checked</div>,
      value: 7,
      readonly: true
    }]
  }
}`,...(s=(m=l.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const le=["Basic","Customizing"];export{r as Basic,l as Customizing,le as __namedExportsOrder,re as default};
