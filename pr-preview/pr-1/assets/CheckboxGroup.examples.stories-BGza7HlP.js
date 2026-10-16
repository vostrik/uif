import{a as u}from"./StoryComponents-CfV16-7w.js";import{T as p}from"./Tag-DYf45Xcw.js";import{R as e}from"./iframe-BC0sauTx.js";import{a}from"./Checkbox-0v2wFjNL.js";import{c as b}from"./CheckboxGroup.stories-a0wUSKxD.js";import"./FormLabel-DvUxTPYn.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-BINKUE5V.js";import"./TextReducer-B-H2cHGE.js";import"./index-Bazlc50n.js";import"./omit-DXgDXInf.js";import"./type-ceO20y0I.js";import"./colors-BlEKYhgo.js";import"./wave-CeOhQ2OJ.js";import"./Group-CuTH3Q6e.js";import"./AdditionalContent-tnuN7Mwd.js";import"./HelpMessage-DztK078o.js";import"./useId-2E_W_Qyw.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./index-r5fD96Zl.js";import"./index-Cr_hWViW.js";import"./propPresentation-DqHLXn9o.js";import"./blocks-BgOqIGqq.js";import"./index-o0-Kef5A.js";import"./withMeta-BRvA4BlU.js";import"./DocPageLayout-CarEzdaF.js";import"./SubComponents-DrIlL0Al.js";import"./TextWithTruncation-DOatzAnE.js";import"./ArrowDownSolid-CAJ9wxew.js";import"./ArrowRightSolid-DmJilGE2.js";import"./Badge-BeYddg-s.js";import"./Indicator-C6NMvhP-.js";import"./StatusOkOutline-nyfZfHQX.js";import"./Grid-Kb2vKuef.js";import"./Markdown-DQohGWul.js";import"./index-Ca2avi9Z.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./meta-hCnUNwms.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const re={title:"Hexa UI Components/CheckboxGroup/Stories",component:a.Group,tags:["!autodocs"],...b},d=t=>{console.log("checked = ",t)},r={render:t=>e.createElement(u,null,e.createElement(a.Group,{testId:"test-cb4",direction:"vertical",...t}),e.createElement(a.Group,{testId:"test-cb5",direction:"horizontal",...t})),args:{onChange:d,options:[{label:"One",value:1},{label:"Two",value:2},{label:"Three",value:3,description:"Description in checkbox group"},{label:e.createElement("div",null,e.createElement(p,null,"Four"),"React Element",e.createElement("br",null),"with multiple lines"),value:4}]}},l={render:t=>e.createElement(a.Group,{...t}),args:{testId:"test-cb6",defaultValue:[4,5,7],onChange:d,options:[{label:e.createElement("div",null,"First React Element is enabled"),value:1},{label:e.createElement("div",null,"Second React Element is enabled"),value:2},{label:e.createElement("div",null,"Third React Element is DISABLED"),value:3,disabled:!0},{label:e.createElement("div",null,"Fourth React Element is DISABLED and checked"),value:4,disabled:!0},{label:e.createElement("div",null,"Fifth React Element is enabled and checked, but can be unchecked by user"),value:5},{label:e.createElement("div",null,"Sixth React Element is READONLY"),value:6,readonly:!0},{label:e.createElement("div",null,"Seventh React Element is READONLY and checked"),value:7,readonly:!0}]}};var n,o,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
