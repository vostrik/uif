import{B as g}from"./Button-Cmjt4Mlb.js";import{F as k}from"./index-C5SM-psC.js";import{b as p,R as o}from"./iframe-BC0sauTx.js";import{W as a}from"./Wizard-BeRoVtbh.js";import"./Dropdown-bUtM1Y1j.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CAsWAeK7.js";import"./useMergedState-GIAdtRIo.js";import"./focus-Dnl7tSMp.js";import"./omit-DXgDXInf.js";import"./ArrowRight-UOmwPHbX.js";import"./Toggle-BnlzIyHw.js";import"./AdditionalContent-tnuN7Mwd.js";import"./HelpMessage-DztK078o.js";import"./type-ceO20y0I.js";import"./wave-CeOhQ2OJ.js";import"./FormLabel-DvUxTPYn.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DYf45Xcw.js";import"./TextReducer-B-H2cHGE.js";import"./index-Bazlc50n.js";import"./colors-BlEKYhgo.js";import"./Group-CuTH3Q6e.js";import"./Divider-BINKUE5V.js";import"./Loader-ZrnY6mmh.js";import"./index-DfGxRC7Y.js";import"./v4-BoP187Zn.js";import"./button-CQm7lrDl.js";import"./Field-DQoPcQwd.js";import"./Help-hJiZkTOm.js";import"./Markdown-DQohGWul.js";import"./index-Ca2avi9Z.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-D4IO5GkS.js";import"./useGlobalStyles-CqyrLu9a.js";import"./InputMasked-DUtfeg-u.js";import"./input-l3UZTC3h.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DHXQEynY.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DJSqrEzb.js";import"./InputNumber-BWAkKPkq.js";import"./index-D0QCmQVE.js";import"./SearchOutlined-CsWPDYZB.js";import"./InputPassword-atq-sjm4.js";import"./StatusOkSolid-DYWGd29I.js";import"./useTranslation-De9R2daC.js";import"./IconResolver-DXnbb7I9.js";import"./Placeholder-DM3diPVD.js";import"./ToggleButtonGroup-BHswHwdp.js";import"./ToggleButton-C8LT5SUv.js";import"./generateId-BXJELych.js";import"./imaskDateOptionsGenerator-hh5tR66Q.js";import"./Uploader-P4HnSP-m.js";import"./regeneratorRuntime-C0pOTN4U.js";import"./pickAttrs-Dsm7ACIa.js";import"./Upload-DGOzC-CW.js";import"./Delete-C5THwAll.js";import"./Download2-CW2GVDuK.js";import"./Menu2-CPkhik0j.js";import"./Reload-DF0chfGk.js";import"./FileItem-BW8TAGGW.js";import"./Status-Cf2fnDjz.js";import"./Indicator-C6NMvhP-.js";import"./Checkbox-0v2wFjNL.js";import"./useId-2E_W_Qyw.js";import"./index-r5fD96Zl.js";import"./index-Cr_hWViW.js";import"./SegmentedButton-C1lpWek5.js";import"./CodeViewer-BL3D3w-a.js";import"./ResizeInput-3dgKd4Gk.js";import"./StatusWarningSolid-Dc9JTL7l.js";import"./TimeInput-VuCUe6kS.js";import"./RangePicker-DwDjzfS2.js";import"./RangeSeparator-BE0zv-nT.js";import"./WithGlobalStyles-CMqaOBpn.js";import"./dateFns-Bo6tYxkn.js";import"./useThemedPicker-BwCb8Ktp.js";import"./ArrowRightMini-byIEESPi.js";import"./index-DA1QsbVZ.js";import"./addEventListener-oy-TF7CF.js";import"./Portal-Dt5L31z9.js";import"./Calendar-BDJCgJdh.js";import"./Select-0OmSTOj3.js";import"./List-BFi6zTWM.js";import"./IconSearch-B-ed8d-J.js";import"./Radio-D266ULd-.js";import"./index-BZuDLSBv.js";import"./Search-DrW4snq0.js";import"./StatusOkSolid-B0mtYFih.js";import"./Modal-CtifL9JL.js";import"./PortalWrapper-BBa9k9pv.js";import"./StatusOkOutline-nyfZfHQX.js";import"./Sidebar-Gu2dLEk7.js";import"./useForceUpdate-DpFMLy1N.js";import"./TextWithTruncation-DOatzAnE.js";const m=o.createElement("div",{style:{textAlign:"right"}},"Footer Text Element"),c=e=>{const[r,n]=p.useState(!0),[s,t]=p.useState(""),[l,i]=p.useState(),B=b=>{/^\d+$/.test(b)?(n(!0),i(void 0)):(n(!1),i("Should contain only numbers")),t(b)};return[{name:"Step 1",onNext:()=>r,render:()=>o.createElement("div",null,"Step 1 content",o.createElement(k,{labelPosition:"before",items:[{label:"textbox with validation",message:l,control:{component:"textbox",placeholder:"hello",value:s,onChange:B,validationStatus:r?"default":"error"}},{label:"textbox-password",control:{component:"textbox-password"}}]}))},{name:"Step 2",render:()=>o.createElement("div",null,"Step 2 content")},{name:"Step 3",description:"Long long long long long long long long description",render:()=>o.createElement("div",null,"Step 3 content")},{name:"Step 4",description:"Description",render:()=>o.createElement("div",null,"Step 4 content")}].filter((b,M)=>e?e.includes(M):!0)},wt={title:"Hexa UI Components/Wizard/Stories",component:a,tags:["!autodocs"]},d={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}},h={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,isVertical:!0,onFinish:n,onCancel:s,footerAdditionalElement:m})}},u={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"sidebar",...e,steps:s,sidebar:{title:"Wizard in sidebar",onClose:()=>n(!1),visible:r,zIndex:e["sidebar.zIndex"]},onFinish:t,onCancel:l,footerAdditionalElement:m}))},argTypes:{"sidebar.zIndex":{control:{type:"number"}}}},C={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"modal",...e,steps:s,modal:{title:"My title",visible:r},onFinish:t,onCancel:l,footerAdditionalElement:m}))}},F={render:e=>{const r=c([0]),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}};var f,S,E;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
