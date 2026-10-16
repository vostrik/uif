import{B as g}from"./Button-CqaIK97I.js";import{F as k}from"./index-Dfe2EMhB.js";import{b as p,R as o}from"./iframe-BfQ7ApZt.js";import{W as a}from"./Wizard-KE1HY95r.js";import"./Dropdown-CHDWb0q5.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-n2s7gkAb.js";import"./useMergedState-C69lNlPn.js";import"./focus-CLSyxWMD.js";import"./omit-DXgDXInf.js";import"./ArrowRight-IWPA832A.js";import"./Toggle-DWqz3Goe.js";import"./AdditionalContent-BlBDkelx.js";import"./HelpMessage-BluS93iW.js";import"./type-BB57qeSp.js";import"./wave-DHr58TaD.js";import"./FormLabel-Djf96u0n.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CNKGekQl.js";import"./TextReducer-CUYXVfXw.js";import"./index-BrzaXK4u.js";import"./colors-DNfPmHyW.js";import"./Group-D5E9cFoC.js";import"./Divider-6ip5VOzi.js";import"./Loader-mu8dA5fb.js";import"./index-D5SjVOUn.js";import"./v4-BoP187Zn.js";import"./button-COUo-Xn0.js";import"./Field-CPCXgk0W.js";import"./Help-bxjh6XsH.js";import"./Markdown-Dktqg8l-.js";import"./index-BKOZdw_L.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-_SnLGc5a.js";import"./useGlobalStyles-DUVx8yfE.js";import"./InputMasked-cz3KYqUR.js";import"./input-CqcN6SoF.js";import"./index-Chjiymov.js";import"./useThemedTextbox-f8i9Awdp.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-B3iZgQry.js";import"./InputNumber-CrWCqJVt.js";import"./index-BjaOwfmt.js";import"./SearchOutlined-TsDRpOJr.js";import"./InputPassword-Dr2XJqDe.js";import"./StatusOkSolid-CmlnsS-F.js";import"./useTranslation-49YpKz4U.js";import"./IconResolver-CH_jQeWr.js";import"./Placeholder-d70tBTS3.js";import"./ToggleButtonGroup-D051OtBb.js";import"./ToggleButton-CHOwo9MC.js";import"./generateId-BXJELych.js";import"./imaskDateOptionsGenerator-BZlP8ByA.js";import"./Uploader-CXvFofK5.js";import"./regeneratorRuntime-DQK8uPKk.js";import"./pickAttrs-CinTxY6V.js";import"./Upload-Dl5WI0zI.js";import"./Delete-CXmz0zvC.js";import"./Download2-Dj5Lp7ay.js";import"./Menu2-BWEv87Tg.js";import"./Reload-CSzM4aZx.js";import"./FileItem-BG56_kSL.js";import"./Status-DUvLRR4z.js";import"./Indicator-B08Z_iCO.js";import"./Checkbox-CPaZXU-T.js";import"./useId-FctK62Z4.js";import"./index-BYnWSJMK.js";import"./index-mQqiuGbz.js";import"./SegmentedButton-CzpAYXBg.js";import"./CodeViewer-BAjaTU9Z.js";import"./ResizeInput-DBUzp4Fs.js";import"./StatusWarningSolid-CuqT19Mi.js";import"./TimeInput-88t_GWTe.js";import"./RangePicker-Du1pJR8Z.js";import"./RangeSeparator-BCjkFB6m.js";import"./WithGlobalStyles-CXOS8GGe.js";import"./dateFns-DRXrhMtU.js";import"./useThemedPicker-B81km6-T.js";import"./ArrowRightMini-13l6glmU.js";import"./index-DikAOKhQ.js";import"./addEventListener-CachLH6z.js";import"./Portal-Cw76o96G.js";import"./Calendar-Dpz21og4.js";import"./Select-CoUNbT5-.js";import"./List-BIv0r3Yz.js";import"./IconSearch-kMFgwgR1.js";import"./Radio-B2RN6-5B.js";import"./index-3aMGXXK7.js";import"./Search-ChgJE_Vv.js";import"./StatusOkSolid-CnoYS94v.js";import"./Modal-CVl4Hesg.js";import"./PortalWrapper-sq_WBr2X.js";import"./StatusOkOutline-D_gga3lz.js";import"./Sidebar-D5YG7dxs.js";import"./useForceUpdate-DaxUnCGr.js";import"./TextWithTruncation-CzEIiJw0.js";const m=o.createElement("div",{style:{textAlign:"right"}},"Footer Text Element"),c=e=>{const[r,n]=p.useState(!0),[s,t]=p.useState(""),[l,i]=p.useState(),B=b=>{/^\d+$/.test(b)?(n(!0),i(void 0)):(n(!1),i("Should contain only numbers")),t(b)};return[{name:"Step 1",onNext:()=>r,render:()=>o.createElement("div",null,"Step 1 content",o.createElement(k,{labelPosition:"before",items:[{label:"textbox with validation",message:l,control:{component:"textbox",placeholder:"hello",value:s,onChange:B,validationStatus:r?"default":"error"}},{label:"textbox-password",control:{component:"textbox-password"}}]}))},{name:"Step 2",render:()=>o.createElement("div",null,"Step 2 content")},{name:"Step 3",description:"Long long long long long long long long description",render:()=>o.createElement("div",null,"Step 3 content")},{name:"Step 4",description:"Description",render:()=>o.createElement("div",null,"Step 4 content")}].filter((b,M)=>e?e.includes(M):!0)},wt={title:"Hexa UI Components/Wizard/Stories",component:a,tags:["!autodocs"]},d={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}},h={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,isVertical:!0,onFinish:n,onCancel:s,footerAdditionalElement:m})}},u={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"sidebar",...e,steps:s,sidebar:{title:"Wizard in sidebar",onClose:()=>n(!1),visible:r,zIndex:e["sidebar.zIndex"]},onFinish:t,onCancel:l,footerAdditionalElement:m}))},argTypes:{"sidebar.zIndex":{control:{type:"number"}}}},C={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"modal",...e,steps:s,modal:{title:"My title",visible:r},onFinish:t,onCancel:l,footerAdditionalElement:m}))}},F={render:e=>{const r=c([0]),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}};var f,S,E;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      alert('Finished');
    };
    const handleCancel = () => {
      args.onCancel?.();
      alert('Cancelled');
    };
    return <WizardComponent view="page" {...args} steps={steps} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />;
  }
}`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var x,v,V;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      alert('Finished');
    };
    const handleCancel = () => {
      args.onCancel?.();
      alert('Cancelled');
    };
    return <WizardComponent view="page" {...args} steps={steps} isVertical onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />;
  }
}`,...(V=(v=h.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var z,w,W;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(false);
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      setVisible(false);
    };
    const handleCancel = () => {
      args.onCancel?.();
      setVisible(false);
    };
    return <>
        <Button onClick={() => setVisible(true)}>Open wizard</Button>
        <WizardComponent view="sidebar" {...args} steps={steps} sidebar={{
        title: 'Wizard in sidebar',
        onClose: () => setVisible(false),
        visible,
        zIndex: args['sidebar.zIndex']
      }} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />
      </>;
  },
  argTypes: {
    'sidebar.zIndex': {
      control: {
        type: 'number'
      }
    }
  }
}`,...(W=(w=u.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var A,y,I;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(false);
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      setVisible(false);
    };
    const handleCancel = () => {
      args.onCancel?.();
      setVisible(false);
    };
    return <>
        <Button onClick={() => setVisible(true)}>Open wizard</Button>
        <WizardComponent view="modal" {...args} steps={steps} modal={{
        title: 'My title',
        visible
      }} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />
      </>;
  }
}`,...(I=(y=C.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var T,O,P;F.parameters={...F.parameters,docs:{...(T=F.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const steps = useStepsWithValidation([0]);
    const handleFinish = () => {
      args.onFinish?.();
      alert('Finished');
    };
    const handleCancel = () => {
      args.onCancel?.();
      alert('Cancelled');
    };
    return <WizardComponent view="page" {...args} steps={steps} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />;
  }
}`,...(P=(O=F.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const Wt=["Page","PageVertical","Sidebar","Modal","PageOneStep"];export{C as Modal,d as Page,F as PageOneStep,h as PageVertical,u as Sidebar,Wt as __namedExportsOrder,wt as default};
