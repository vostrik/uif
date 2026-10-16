import{B as g}from"./Button-CojEiSsh.js";import{F as k}from"./index-CR69cpLT.js";import{b as p,R as o}from"./iframe-B2l-dmA0.js";import{W as a}from"./Wizard-Cc5y8q_c.js";import"./Dropdown-S_MRfeG_.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CRR70Q8q.js";import"./useMergedState-B2rUqGYB.js";import"./focus-BPcTVHQR.js";import"./omit-DXgDXInf.js";import"./ArrowRight-Bx66-T-K.js";import"./Toggle-5naXiYrs.js";import"./AdditionalContent-MJG4L1hb.js";import"./HelpMessage-DIz5r9vB.js";import"./type-BpHiafRd.js";import"./wave-BK90i1zI.js";import"./FormLabel-B4tLdVC9.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-Bdw-yt0a.js";import"./TextReducer-DpL_UgVZ.js";import"./index-BOo2ub6M.js";import"./colors-CYe0s51z.js";import"./Group-DR6kYA3m.js";import"./Divider-Cp3b7YUD.js";import"./Loader-CZ44NMWY.js";import"./index-a79vEa0Q.js";import"./v4-BoP187Zn.js";import"./button-DQ_ypKND.js";import"./Field-GkaHM5BC.js";import"./Help-DFv0GHeZ.js";import"./Markdown-CjdEfNRZ.js";import"./index-CVJDPu1G.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-CZYGi6SE.js";import"./useGlobalStyles-DOvBPfaB.js";import"./InputMasked-i3yD_Ead.js";import"./input-DzNTSwXz.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CzZ-JQ0-.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-ng42U88B.js";import"./InputNumber-C9On9ukx.js";import"./index-C40OFg9h.js";import"./SearchOutlined-BOgvv3Np.js";import"./InputPassword-bxKZlwoB.js";import"./StatusOkSolid-CYBx9QGQ.js";import"./useTranslation-B4Lk-u3d.js";import"./IconResolver-BAKZVe_Q.js";import"./Placeholder-BMiAOLu8.js";import"./ToggleButtonGroup-DX_vvwTA.js";import"./ToggleButton-C7_a8xlP.js";import"./generateId-BXJELych.js";import"./imaskDateOptionsGenerator-BnfUKXCI.js";import"./Uploader-DYwQqlDA.js";import"./regeneratorRuntime-DXcbctbJ.js";import"./pickAttrs-Dzsdrk_t.js";import"./Upload-DEr8rlLx.js";import"./Delete-B_6tjwFj.js";import"./Download2-Bm9Nlefb.js";import"./Menu2-DVJFHnPa.js";import"./Reload-BSchzgua.js";import"./FileItem-DDda-riN.js";import"./Status-9OlTT7Gf.js";import"./Indicator-6We_UnkV.js";import"./Checkbox-UDY_jJAR.js";import"./useId-6IhzUeRK.js";import"./index-D4YlcZ4b.js";import"./index-BojPFag2.js";import"./SegmentedButton-ByrfLXRj.js";import"./CodeViewer-_choYD2w.js";import"./ResizeInput-BqDIhkSr.js";import"./StatusWarningSolid-CZ_3x5EJ.js";import"./TimeInput-CsQwCxpu.js";import"./RangePicker-CWWLVB5Q.js";import"./RangeSeparator-BLVrHvHB.js";import"./WithGlobalStyles-Bxo2a5yV.js";import"./dateFns-BJoRu9D4.js";import"./useThemedPicker-xqMDe1r5.js";import"./ArrowRightMini-BVAV-uCT.js";import"./index-Cjen56g0.js";import"./addEventListener-BoiPpR6a.js";import"./Portal-D5S_1wfx.js";import"./Calendar-4a4B7YCZ.js";import"./Select-CqTsWq-v.js";import"./List-n8rU_vX-.js";import"./IconSearch-CUrV-1OI.js";import"./Radio-CEHGvf0c.js";import"./index-Dr_Oyd08.js";import"./Search-BXdzJNlU.js";import"./StatusOkSolid-DXqOvchE.js";import"./Modal-D-M1krvY.js";import"./PortalWrapper-BKqvFi2j.js";import"./StatusOkOutline-C91EBLeD.js";import"./Sidebar-C5hJt8qY.js";import"./useForceUpdate-D73F1-Gf.js";import"./TextWithTruncation-CDCo7Y_H.js";const m=o.createElement("div",{style:{textAlign:"right"}},"Footer Text Element"),c=e=>{const[r,n]=p.useState(!0),[s,t]=p.useState(""),[l,i]=p.useState(),B=b=>{/^\d+$/.test(b)?(n(!0),i(void 0)):(n(!1),i("Should contain only numbers")),t(b)};return[{name:"Step 1",onNext:()=>r,render:()=>o.createElement("div",null,"Step 1 content",o.createElement(k,{labelPosition:"before",items:[{label:"textbox with validation",message:l,control:{component:"textbox",placeholder:"hello",value:s,onChange:B,validationStatus:r?"default":"error"}},{label:"textbox-password",control:{component:"textbox-password"}}]}))},{name:"Step 2",render:()=>o.createElement("div",null,"Step 2 content")},{name:"Step 3",description:"Long long long long long long long long description",render:()=>o.createElement("div",null,"Step 3 content")},{name:"Step 4",description:"Description",render:()=>o.createElement("div",null,"Step 4 content")}].filter((b,M)=>e?e.includes(M):!0)},wt={title:"Hexa UI Components/Wizard/Stories",component:a,tags:["!autodocs"]},d={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}},h={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,isVertical:!0,onFinish:n,onCancel:s,footerAdditionalElement:m})}},u={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"sidebar",...e,steps:s,sidebar:{title:"Wizard in sidebar",onClose:()=>n(!1),visible:r,zIndex:e["sidebar.zIndex"]},onFinish:t,onCancel:l,footerAdditionalElement:m}))},argTypes:{"sidebar.zIndex":{control:{type:"number"}}}},C={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"modal",...e,steps:s,modal:{title:"My title",visible:r},onFinish:t,onCancel:l,footerAdditionalElement:m}))}},F={render:e=>{const r=c([0]),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}};var f,S,E;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
