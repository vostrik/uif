import{a as u}from"./StoryComponents-CY7aiZf6.js";import{T as p}from"./Tag-CV4RJqlE.js";import{R as e}from"./iframe-D7vGURqZ.js";import{a}from"./Checkbox-D2B00BGu.js";import{c as b}from"./CheckboxGroup.stories-DUt0NKv4.js";import"./FormLabel-BgNNh3NE.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-51vw4bax.js";import"./TextReducer-yX199pg5.js";import"./index-kV8384LW.js";import"./omit-DXgDXInf.js";import"./type-DgSh0ByZ.js";import"./colors-C-4HMPnB.js";import"./wave-Bh4c9RUC.js";import"./Group-DqJlf-Gx.js";import"./AdditionalContent-hp1u3Epd.js";import"./HelpMessage-Dr7uz5o3.js";import"./useId-cILExZ2P.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./index-pgh_DLMr.js";import"./index-6pHAbIny.js";import"./propPresentation-BkV-ZQpa.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./withMeta-AvforKRz.js";import"./DocPageLayout-COy0blt1.js";import"./SubComponents-DsXyPHVa.js";import"./TextWithTruncation-DCb05iIM.js";import"./ArrowDownSolid-DlynUjOu.js";import"./ArrowRightSolid-BtdCqW53.js";import"./Badge-CJ1lMX1D.js";import"./Indicator-CQNXQNlG.js";import"./StatusOkOutline-BvinxEvP.js";import"./Grid-C62gR1jB.js";import"./Markdown-CRrCZtGQ.js";import"./index-6XHrBjkF.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./meta-hCnUNwms.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const re={title:"Hexa UI Components/CheckboxGroup/Stories",component:a.Group,tags:["!autodocs"],...b},d=t=>{console.log("checked = ",t)},r={render:t=>e.createElement(u,null,e.createElement(a.Group,{testId:"test-cb4",direction:"vertical",...t}),e.createElement(a.Group,{testId:"test-cb5",direction:"horizontal",...t})),args:{onChange:d,options:[{label:"One",value:1},{label:"Two",value:2},{label:"Three",value:3,description:"Description in checkbox group"},{label:e.createElement("div",null,e.createElement(p,null,"Four"),"React Element",e.createElement("br",null),"with multiple lines"),value:4}]}},l={render:t=>e.createElement(a.Group,{...t}),args:{testId:"test-cb6",defaultValue:[4,5,7],onChange:d,options:[{label:e.createElement("div",null,"First React Element is enabled"),value:1},{label:e.createElement("div",null,"Second React Element is enabled"),value:2},{label:e.createElement("div",null,"Third React Element is DISABLED"),value:3,disabled:!0},{label:e.createElement("div",null,"Fourth React Element is DISABLED and checked"),value:4,disabled:!0},{label:e.createElement("div",null,"Fifth React Element is enabled and checked, but can be unchecked by user"),value:5},{label:e.createElement("div",null,"Sixth React Element is READONLY"),value:6,readonly:!0},{label:e.createElement("div",null,"Seventh React Element is READONLY and checked"),value:7,readonly:!0}]}};var n,o,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
