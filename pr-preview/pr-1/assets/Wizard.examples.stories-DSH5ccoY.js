import{B as g}from"./Button-C9wH3E3m.js";import{F as k}from"./index-DJbUuh8g.js";import{b as p,R as o}from"./iframe-DZ6CNdmR.js";import{W as a}from"./Wizard-DzlY_qbl.js";import"./Dropdown-duWrCIkx.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DHB5dyvI.js";import"./useMergedState-Bv7O4HCz.js";import"./focus-QtQWvBuy.js";import"./omit-DXgDXInf.js";import"./ArrowRight-Fn5l7xGu.js";import"./Toggle-DHSC5Vjo.js";import"./AdditionalContent-CPgxIA4P.js";import"./HelpMessage-BoCaja7X.js";import"./type-CxXYYU3T.js";import"./wave-DyggUTsD.js";import"./FormLabel-WpK8CiKN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-jEOS0vhO.js";import"./TextReducer-BUFzZryR.js";import"./index-Aj0jm6uB.js";import"./colors-uxJ92uqJ.js";import"./Group-dqpsK0g-.js";import"./Divider-CeH8hLX2.js";import"./Loader-CUCsJRC1.js";import"./index-BdH7CSvn.js";import"./v4-BoP187Zn.js";import"./button-R3ozi3gu.js";import"./Field-CgsiKLMD.js";import"./Help-cq2m7fd4.js";import"./Markdown-AzZ1dVDo.js";import"./index-DR4iiykL.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-BVe-NjwS.js";import"./useGlobalStyles-C8XA7wQH.js";import"./InputMasked-Dc-xkFNK.js";import"./input-BjQab1dI.js";import"./index-Chjiymov.js";import"./useThemedTextbox-BB93mY2Z.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-dtfbHAr8.js";import"./InputNumber-I6H84s6n.js";import"./index-BEJuuqy6.js";import"./SearchOutlined-C_XoquOD.js";import"./InputPassword-0CEE8fhu.js";import"./StatusOkSolid-CniIV_0K.js";import"./useTranslation-Bw9GGU1E.js";import"./IconResolver-DS4sEvCH.js";import"./Placeholder-CImJHfn5.js";import"./ToggleButtonGroup-BN7UniPj.js";import"./ToggleButton-D04Cnqtz.js";import"./generateId-BXJELych.js";import"./imaskDateOptionsGenerator-BPT5bDQZ.js";import"./Uploader-DQ5oxDe8.js";import"./regeneratorRuntime-BM5cR9eM.js";import"./pickAttrs-lUs4Fpz8.js";import"./Upload-BPvb16_1.js";import"./Delete-MTL4oVXS.js";import"./Download2-o9DQKGOp.js";import"./Menu2-C57-544i.js";import"./Reload-ByvNxyZg.js";import"./FileItem-CHYU5Gpl.js";import"./Status-DPXqC7Db.js";import"./Indicator-x62EYK4r.js";import"./Checkbox--1SHICgj.js";import"./useId-DYFiFSDh.js";import"./index-B97hSIQw.js";import"./index-BszuWbEO.js";import"./SegmentedButton-Dpahqi4R.js";import"./CodeViewer-CfadSfdo.js";import"./ResizeInput-CICzW8YR.js";import"./StatusWarningSolid-CvnoolaT.js";import"./TimeInput-FbOnvzUB.js";import"./RangePicker-D8lnuYW3.js";import"./RangeSeparator-oX49bBGp.js";import"./WithGlobalStyles-DGAieQaq.js";import"./dateFns-Chv5_U5G.js";import"./useThemedPicker-C3HDNwHA.js";import"./ArrowRightMini-BgtDgXN4.js";import"./index-CS4FsDxm.js";import"./addEventListener-CMogv84G.js";import"./Portal-CUIZqvlJ.js";import"./Calendar-DfUhpyl1.js";import"./Select-CwAXgEEF.js";import"./List-5XfbApHs.js";import"./IconSearch-pcJARPxG.js";import"./Radio-Cuw_F4rn.js";import"./index-DgOmRnFl.js";import"./Search-5blpJWEY.js";import"./StatusOkSolid-DipNWBWm.js";import"./Modal-Os-lA8tE.js";import"./PortalWrapper-DrAVxFJ_.js";import"./StatusOkOutline-9gbc7hr8.js";import"./Sidebar-CuenJMdV.js";import"./useForceUpdate-p2QW_TfR.js";import"./TextWithTruncation-Oqju7yY8.js";const m=o.createElement("div",{style:{textAlign:"right"}},"Footer Text Element"),c=e=>{const[r,n]=p.useState(!0),[s,t]=p.useState(""),[l,i]=p.useState(),B=b=>{/^\d+$/.test(b)?(n(!0),i(void 0)):(n(!1),i("Should contain only numbers")),t(b)};return[{name:"Step 1",onNext:()=>r,render:()=>o.createElement("div",null,"Step 1 content",o.createElement(k,{labelPosition:"before",items:[{label:"textbox with validation",message:l,control:{component:"textbox",placeholder:"hello",value:s,onChange:B,validationStatus:r?"default":"error"}},{label:"textbox-password",control:{component:"textbox-password"}}]}))},{name:"Step 2",render:()=>o.createElement("div",null,"Step 2 content")},{name:"Step 3",description:"Long long long long long long long long description",render:()=>o.createElement("div",null,"Step 3 content")},{name:"Step 4",description:"Description",render:()=>o.createElement("div",null,"Step 4 content")}].filter((b,M)=>e?e.includes(M):!0)},wt={title:"Hexa UI Components/Wizard/Stories",component:a,tags:["!autodocs"]},d={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}},h={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,isVertical:!0,onFinish:n,onCancel:s,footerAdditionalElement:m})}},u={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"sidebar",...e,steps:s,sidebar:{title:"Wizard in sidebar",onClose:()=>n(!1),visible:r,zIndex:e["sidebar.zIndex"]},onFinish:t,onCancel:l,footerAdditionalElement:m}))},argTypes:{"sidebar.zIndex":{control:{type:"number"}}}},C={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"modal",...e,steps:s,modal:{title:"My title",visible:r},onFinish:t,onCancel:l,footerAdditionalElement:m}))}},F={render:e=>{const r=c([0]),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}};var f,S,E;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
