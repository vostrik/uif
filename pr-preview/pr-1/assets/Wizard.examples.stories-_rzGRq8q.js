import{B as g}from"./Button-C-yJZqhy.js";import{F as k}from"./index-Cu6XDeSF.js";import{b as p,R as o}from"./iframe-CS_lS3JQ.js";import{W as a}from"./Wizard-DkJMJ3SO.js";import"./Dropdown-BicdhTL9.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DSLVStBP.js";import"./useMergedState-B61t_fRl.js";import"./focus-BLc_l6vY.js";import"./omit-DXgDXInf.js";import"./Toggle-BOxHbuiK.js";import"./AdditionalContent-DjSD8NAm.js";import"./HelpMessage-B8QdDqVO.js";import"./type-BpgJjWfR.js";import"./wave-87GZ2a0S.js";import"./FormLabel-CwcsdRCh.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-K_Mfb6oe.js";import"./TextReducer-BY5uL3xm.js";import"./index-etHmF8Xf.js";import"./colors-D4ituO_X.js";import"./Group-DmPThJhc.js";import"./ArrowRight-DMancYzQ.js";import"./Divider-D_7SE2Jg.js";import"./Loader-C2l0Wque.js";import"./index-FxBC4-nU.js";import"./v4-BoP187Zn.js";import"./button-6xivo2h5.js";import"./Field-Dnb0DLM9.js";import"./Markdown-s2jsbGO9.js";import"./index-CGDdDTKA.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Help-BM3k3hvj.js";import"./CodeViewer-R1ZDOkZD.js";import"./index-Chjiymov.js";import"./ResizeInput-CMrJcFW5.js";import"./StatusWarningSolid-DqtuxwKw.js";import"./Textbox-Xvu2giKA.js";import"./useGlobalStyles-Be6xzYS-.js";import"./InputMasked-CXoAUoAM.js";import"./input-DKVbfvkV.js";import"./useThemedTextbox-BXVkZeWV.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BO5f5yOH.js";import"./InputNumber-C_LUGXAO.js";import"./index-7fiEC0nI.js";import"./SearchOutlined-BE7_ur6Q.js";import"./InputPassword-BM_nvyAd.js";import"./StatusOkSolid-cz3jVigG.js";import"./useTranslation-Co6sA9X3.js";import"./IconResolver-A6fpvtN_.js";import"./Placeholder-Q-SCb9Hd.js";import"./ToggleButtonGroup-CLBnly-z.js";import"./ToggleButton-DXXqjLj8.js";import"./generateId-BXJELych.js";import"./imaskDateOptionsGenerator-hNfW1cry.js";import"./Uploader-TSo_Jjd0.js";import"./regeneratorRuntime-CXEq1u0D.js";import"./pickAttrs-wgZBa4UG.js";import"./Upload-BNDUoKDn.js";import"./Delete-Cf3ftsdF.js";import"./Download2-B--iy48P.js";import"./Menu2-BCJeOr2q.js";import"./Reload--J6PyIai.js";import"./FileItem-BfedH1PF.js";import"./Status-DWqfVAeG.js";import"./Indicator-B2JkvBkD.js";import"./Checkbox-BXqKLmll.js";import"./useId-BYjWvsw4.js";import"./index-DoT2arve.js";import"./index-D7KIalkN.js";import"./SegmentedButton-DEjUiGmW.js";import"./TimeInput-CaddJj4T.js";import"./RangePicker-D0KRzAsm.js";import"./RangeSeparator-CY1IZVpz.js";import"./WithGlobalStyles-Ctoq3cuR.js";import"./dateFns-FeFoHxRO.js";import"./useThemedPicker-CePX03XF.js";import"./ArrowRightMini-D1g7SlDU.js";import"./index-pXupdlRx.js";import"./addEventListener-BTGKWlk2.js";import"./Portal-iQrxryRz.js";import"./Calendar-BLaSNQOB.js";import"./Select-fv4djXiD.js";import"./List-Bjp0SNVe.js";import"./IconSearch-DV1M1iKb.js";import"./Radio-BhvkngYT.js";import"./index-Bz4i9ORa.js";import"./Search-DtxZZycV.js";import"./StatusOkSolid-CaHROjsC.js";import"./Modal-ClnOEAV3.js";import"./PortalWrapper-fVzV0qr7.js";import"./StatusOkOutline-zylH21B-.js";import"./Sidebar-Cm_BdkCF.js";import"./useForceUpdate-D7iF0vYl.js";import"./TextWithTruncation-JO92Emz0.js";const m=o.createElement("div",{style:{textAlign:"right"}},"Footer Text Element"),c=e=>{const[r,n]=p.useState(!0),[s,t]=p.useState(""),[l,i]=p.useState(),B=b=>{/^\d+$/.test(b)?(n(!0),i(void 0)):(n(!1),i("Should contain only numbers")),t(b)};return[{name:"Step 1",onNext:()=>r,render:()=>o.createElement("div",null,"Step 1 content",o.createElement(k,{labelPosition:"before",items:[{label:"textbox with validation",message:l,control:{component:"textbox",placeholder:"hello",value:s,onChange:B,validationStatus:r?"default":"error"}},{label:"textbox-password",control:{component:"textbox-password"}}]}))},{name:"Step 2",render:()=>o.createElement("div",null,"Step 2 content")},{name:"Step 3",description:"Long long long long long long long long description",render:()=>o.createElement("div",null,"Step 3 content")},{name:"Step 4",description:"Description",render:()=>o.createElement("div",null,"Step 4 content")}].filter((b,M)=>e?e.includes(M):!0)},wt={title:"Hexa UI Components/Wizard/Stories",component:a,tags:["!autodocs"]},d={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}},h={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,isVertical:!0,onFinish:n,onCancel:s,footerAdditionalElement:m})}},u={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"sidebar",...e,steps:s,sidebar:{title:"Wizard in sidebar",onClose:()=>n(!1),visible:r,zIndex:e["sidebar.zIndex"]},onFinish:t,onCancel:l,footerAdditionalElement:m}))},argTypes:{"sidebar.zIndex":{control:{type:"number"}}}},C={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"modal",...e,steps:s,modal:{title:"My title",visible:r},onFinish:t,onCancel:l,footerAdditionalElement:m}))}},F={render:e=>{const r=c([0]),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}};var f,S,E;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
