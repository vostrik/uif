import{T as ee}from"./Palette-BB5tpPID.js";import{c as te,M,b as r,R as e,A as oe,H as ne}from"./iframe-aBV3CYH3.js";import{B as l}from"./Button-DgUfCEii.js";import{o as ae}from"./Placeholder-C0eqEAUH.js";import{M as re}from"./meta-DqK1VaOc.js";import{M as a}from"./Modal-XjETc6k1.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-KoQ7Ozhb.js";import"./KeyCode-c5NdJp32.js";import"./isEqual--rqab9QN.js";import"./useMergedState-CYatStVN.js";import"./focus-DNariyKj.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BspTRk2f.js";import"./Toggle-CFrSJDb6.js";import"./AdditionalContent-CBTW8zX-.js";import"./HelpMessage-DBlyCl9F.js";import"./type-GmYgjqv3.js";import"./wave-iSaySfuY.js";import"./FormLabel-d3dW3auX.js";import"./Tag-DY7rUT5S.js";import"./TextReducer-D8U9kJ52.js";import"./index-BkZLf1_p.js";import"./colors-nuNhf3hF.js";import"./Group-MwZqih5e.js";import"./Divider-C5DkIf6Z.js";import"./Loader-CchH_JSv.js";import"./index-CqTa44a8.js";import"./v4-BoP187Zn.js";import"./button-DGh54oSp.js";import"./PortalWrapper-B_AymT-I.js";import"./Portal-ndL5V8tE.js";import"./pickAttrs-Yiyzt30t.js";import"./StatusOkOutline-SGeFpZ58.js";const s=`This is placeholder text. The basic dialog for modals should contain only valuable and
relevant information. Simplify dialogs by removing unnecessary elements or content that
does not support user tasks.`,se=e.createElement(ae,{klId:"button-icon"}),je={title:"Hexa UI Components/Modal/Stories",component:a,tags:["!autodocs"],parameters:{badges:[M.stable,M.reviewedByDesign],design:re.pixsoView}},T=o=>{const[n,t]=r.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:()=>t(!0)},"Open Modal"),e.createElement(a,{...o,visible:n,actions:{FIRST_ACTION:{text:"OK",onClick:()=>t(!1)},SECOND_ACTION:{text:"Cancel",mode:"secondary",onClick:()=>t(!1)}},onCancel:()=>t(!1)}))},le=o=>{const[n,t]=r.useState(!1),[X,Z]=r.useState(o.dialog.position),$={...o,dialog:{...o.dialog,position:X}};return e.createElement(e.Fragment,null,["Left","Center","Right"].map(h=>e.createElement(l,{key:h,onClick:()=>{Z(h.toLowerCase()),t(!0)}},h)),e.createElement(a,{...$,visible:n,actions:{FIRST_ACTION:{text:"OK",onClick:()=>t(!1)},SECOND_ACTION:{text:"Cancel",mode:"secondary",onClick:()=>t(!1)}},onCancel:()=>t(!1)}))},i={args:{header:"Modal dialog",content:s},render:T},c={args:{header:"Modal without footer",content:s,visible:!0},render:o=>e.createElement(a,{...o})},d={args:{header:"Modal dialog",content:s},render:o=>{const[n,t]=r.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:()=>t(!0)},"Open Modal"),e.createElement(a,{...o,visible:n,actions:{FIRST_ACTION:{text:"OK",onClick:()=>t(!1)},SECOND_ACTION:{text:"Cancel",mode:"secondary",onClick:()=>t(!1)},THIRD_ACTION:{text:"Continue",mode:"secondary",onClick:()=>t(!1)}},onCancel:()=>t(!1)}))}},m={args:{header:"Modal dialog",content:"Custom buttons are retained for backwards compatibility.",customButtons:Array.from({length:12}).map((o,n)=>({onClick:()=>alert(n),text:n.toString()}))},render:o=>{const[n,t]=r.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:()=>t(!0)},"Open Modal"),e.createElement(a,{...o,visible:n,onCancel:()=>t(!1)}))}},u={args:{header:"Long long long long long long long long long long modal dialog title",content:Array(20).fill(s).join(" ")},render:T},ie=ne.div`
  position: relative;
  pointer-events: auto;

  .modal-video-close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`,p={render:o=>{const[n,t]=r.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:()=>t(!0)},"Open Modal"),e.createElement(a,{...o,visible:n,modalRender:()=>e.createElement(ie,null,e.createElement(oe,{onClick:()=>t(!1),className:"modal-video-close-button",mode:"filledInverted",size:"large"}),e.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/J0Hx0Pmfjb0?si=q6pOcK3TNrHBlnI0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})),onCancel:()=>t(!1)}))}},g={args:{header:"Modal dialog",content:s},render:o=>{const[n,t]=r.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:()=>t(!0)},"Open Modal"),e.createElement(a,{...o,visible:n,actions:{FIRST_ACTION:{text:"OK",loading:!0,onClick:()=>t(!1)},SECOND_ACTION:{text:"Cancel",mode:"secondary",disabled:!0,iconAfter:se,onClick:()=>t(!1)}},onCancel:()=>t(!1)}))}},C={args:{header:"Modal dialog",content:s,closable:!1},render:T},b={args:{header:"Dialog modal",content:s,dialog:{position:"center"}},render:le},f={args:{source:te.modal},render:o=>e.createElement(ee,{...o})};var S,O,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    header: 'Modal dialog',
    content: defaultText
  },
  render: ModalWithActions
}`,...(x=(O=i.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var k,v,A;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    header: 'Modal without footer',
    content: defaultText,
    visible: true
  },
  render: args => <Modal {...args} />
}`,...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var E,y,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    header: 'Modal dialog',
    content: defaultText
  },
  render: args => {
    const [visible, setVisible] = useState(false);
    return <>
        <Button onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <Modal {...args} visible={visible} actions={{
        FIRST_ACTION: {
          text: 'OK',
          onClick: () => setVisible(false)
        },
        SECOND_ACTION: {
          text: 'Cancel',
          mode: 'secondary',
          onClick: () => setVisible(false)
        },
        THIRD_ACTION: {
          text: 'Continue',
          mode: 'secondary',
          onClick: () => setVisible(false)
        }
      }} onCancel={() => setVisible(false)} />
      </>;
  }
}`,...(I=(y=d.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var V,B,N;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    header: 'Modal dialog',
    content: 'Custom buttons are retained for backwards compatibility.',
    customButtons: Array.from({
      length: 12
    }).map((_, index) => ({
      onClick: () => alert(index),
      text: index.toString()
    }))
  },
  render: args => {
    const [visible, setVisible] = useState(false);
    return <>
        <Button onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <Modal {...args} visible={visible} onCancel={() => setVisible(false)} />
      </>;
  }
}`,...(N=(B=m.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var w,D,_;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    header: 'Long long long long long long long long long long modal dialog title',
    content: Array(20).fill(defaultText).join(' ')
  },
  render: ModalWithActions
}`,...(_=(D=u.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var F,W,R;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(false);
    return <>
        <Button onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <Modal {...args} visible={visible} modalRender={() => <VideoModalContent>
              <ActionButton onClick={() => setVisible(false)} className="modal-video-close-button" mode="filledInverted" size="large" />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/J0Hx0Pmfjb0?si=q6pOcK3TNrHBlnI0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </VideoModalContent>} onCancel={() => setVisible(false)} />
      </>;
  }
}`,...(R=(W=p.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var H,K,L;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    header: 'Modal dialog',
    content: defaultText
  },
  render: args => {
    const [visible, setVisible] = useState(false);
    return <>
        <Button onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <Modal {...args} visible={visible} actions={{
        FIRST_ACTION: {
          text: 'OK',
          loading: true,
          onClick: () => setVisible(false)
        },
        SECOND_ACTION: {
          text: 'Cancel',
          mode: 'secondary',
          disabled: true,
          iconAfter: defaultIcon,
          onClick: () => setVisible(false)
        }
      }} onCancel={() => setVisible(false)} />
      </>;
  }
}`,...(L=(K=g.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var P,j,q;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    header: 'Modal dialog',
    content: defaultText,
    closable: false
  },
  render: ModalWithActions
}`,...(q=(j=C.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,J,Y;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    header: 'Dialog modal',
    content: defaultText,
    dialog: {
      position: 'center'
    }
  },
  render: DialogWithPositions
}`,...(Y=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var U,G,Q;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    source: componentColors.modal
  },
  render: args => <ThemedPalette {...args} />
}`,...(Q=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};const qe=["Basic","WithoutFooter","WithThreeActionButtons","WithCustomButtons","WithScrollAndLongTitle","CustomModalRender","WithLoadingAndDisabledButtons","NonClosable","Dialog","ColorTokens"];export{i as Basic,f as ColorTokens,p as CustomModalRender,b as Dialog,C as NonClosable,m as WithCustomButtons,g as WithLoadingAndDisabledButtons,u as WithScrollAndLongTitle,d as WithThreeActionButtons,c as WithoutFooter,qe as __namedExportsOrder,je as default};
