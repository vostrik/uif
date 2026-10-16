import{B as g}from"./Button-CL-Qr1l3.js";import{F as k}from"./index-C-Vciu0k.js";import{b as p,R as o}from"./iframe-CuxZtUxP.js";import{W as a}from"./Wizard-uihOd1y5.js";import"./Dropdown-y0CDWPOg.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BjiJJFtM.js";import"./useMergedState-P4F0ljFz.js";import"./focus-D0ElrM-1.js";import"./omit-DXgDXInf.js";import"./Toggle-DNd7EzHq.js";import"./AdditionalContent-CJrFhZE7.js";import"./HelpMessage-vJ8j-KE6.js";import"./type-GeDzSTZ4.js";import"./wave-DhdBo9LV.js";import"./FormLabel-AJ1msRQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-Dt4urbN1.js";import"./TextReducer-DDrjI2Ts.js";import"./index-BPmhZr6B.js";import"./colors-DJ1jxL9H.js";import"./Group-gZM6GuIE.js";import"./ArrowRight-DuajFAMc.js";import"./Divider-FNnXL9Gj.js";import"./Loader-gIIFbDBw.js";import"./index-BYpoxBYL.js";import"./v4-BoP187Zn.js";import"./button-DiQn-Imx.js";import"./Field-q7fnv5i-.js";import"./Help-Btfn5GjZ.js";import"./Markdown-CULbeuuj.js";import"./index-DfhmDEte.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-CxoGGP_s.js";import"./useGlobalStyles-Db1QJWsp.js";import"./InputMasked-CsxMnSBJ.js";import"./input-BPkqxyzb.js";import"./index-Chjiymov.js";import"./useThemedTextbox-30gzApTL.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DdNl3Yg2.js";import"./InputNumber-D6vE5QAB.js";import"./index-WcvzS2Hd.js";import"./SearchOutlined-C23ph8ww.js";import"./InputPassword-B-4kxudl.js";import"./StatusOkSolid-BjnZPyJU.js";import"./useTranslation-CK04u0KU.js";import"./IconResolver-C_QNjFLL.js";import"./Placeholder-CZpzyuK5.js";import"./Select-DzKM5TvG.js";import"./index-BRVkNmfg.js";import"./addEventListener-DLuhf4PV.js";import"./Portal-D7c67ae8.js";import"./regeneratorRuntime-B1uYfXsH.js";import"./pickAttrs-ngGqSzBU.js";import"./List-CSzGcTW1.js";import"./IconSearch-BpVxUzQS.js";import"./Indicator-BDm4vtnD.js";import"./Checkbox-GN_6Gck8.js";import"./useId-D3DcsVr-.js";import"./generateId-BXJELych.js";import"./index-BttC3HIA.js";import"./index-Dfjq1KcL.js";import"./ToggleButtonGroup-BKvVw1XU.js";import"./ToggleButton-C3sc54Nb.js";import"./imaskDateOptionsGenerator-scsuuk1w.js";import"./Uploader-JkIVHO03.js";import"./Upload-DbNH33gC.js";import"./Delete-DUx4Zy1Z.js";import"./Download2-CwhjCmDc.js";import"./Menu2-BxyRMUNi.js";import"./Reload-Bo4cKsdL.js";import"./FileItem-D9tJHdWZ.js";import"./Status-BArBpSxk.js";import"./SegmentedButton-zJ9XuWNF.js";import"./CodeViewer-CrrOjbGD.js";import"./ResizeInput-5cJEPiP8.js";import"./StatusWarningSolid-DHw2_56U.js";import"./TimeInput-whaZTOos.js";import"./RangePicker-oo0y0JXI.js";import"./RangeSeparator-BtRi3lGB.js";import"./WithGlobalStyles-DaUbsGao.js";import"./dateFns-Zy9WemBJ.js";import"./useThemedPicker-CcxlCp-K.js";import"./ArrowRightMini-CUVSZH0v.js";import"./Calendar-DgOF-Wz6.js";import"./Radio-S19TPsl6.js";import"./index-BT_P0ngG.js";import"./Search-lCX0qkfE.js";import"./Sidebar-Dt-TWZNU.js";import"./PortalWrapper-IotRF9Lw.js";import"./useForceUpdate-Ep1uJ0oE.js";import"./TextWithTruncation-DGkObJqj.js";import"./StatusOkSolid-Cqt23_Jk.js";import"./Modal-slypoold.js";import"./StatusOkOutline-MSqmg68d.js";const m=o.createElement("div",{style:{textAlign:"right"}},"Footer Text Element"),c=e=>{const[r,n]=p.useState(!0),[s,t]=p.useState(""),[l,i]=p.useState(),B=b=>{/^\d+$/.test(b)?(n(!0),i(void 0)):(n(!1),i("Should contain only numbers")),t(b)};return[{name:"Step 1",onNext:()=>r,render:()=>o.createElement("div",null,"Step 1 content",o.createElement(k,{labelPosition:"before",items:[{label:"textbox with validation",message:l,control:{component:"textbox",placeholder:"hello",value:s,onChange:B,validationStatus:r?"default":"error"}},{label:"textbox-password",control:{component:"textbox-password"}}]}))},{name:"Step 2",render:()=>o.createElement("div",null,"Step 2 content")},{name:"Step 3",description:"Long long long long long long long long description",render:()=>o.createElement("div",null,"Step 3 content")},{name:"Step 4",description:"Description",render:()=>o.createElement("div",null,"Step 4 content")}].filter((b,M)=>e?e.includes(M):!0)},wt={title:"Hexa UI Components/Wizard/Stories",component:a,tags:["!autodocs"]},d={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}},h={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,isVertical:!0,onFinish:n,onCancel:s,footerAdditionalElement:m})}},u={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"sidebar",...e,steps:s,sidebar:{title:"Wizard in sidebar",onClose:()=>n(!1),visible:r,zIndex:e["sidebar.zIndex"]},onFinish:t,onCancel:l,footerAdditionalElement:m}))},argTypes:{"sidebar.zIndex":{control:{type:"number"}}}},C={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"modal",...e,steps:s,modal:{title:"My title",visible:r},onFinish:t,onCancel:l,footerAdditionalElement:m}))}},F={render:e=>{const r=c([0]),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}};var f,S,E;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
