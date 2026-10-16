import{F as x}from"./Field-DzH07X1X.js";import{c}from"./CustomItem-CKFcw8cT.js";import{b as o,R as a}from"./iframe-Df7vKfJt.js";import{I as m}from"./InputPassword-9gZnQ8V2.js";import{i as I}from"./InputPassword.stories-nuVv_Qb4.js";import{N as k}from"./Notification-fhncBx0a.js";import"./Help-C21xyFck.js";import"./FormLabel-BJ1Ltfk6.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DQaD3f7K.js";import"./TextReducer-PfRkTMxb.js";import"./index-Zs4RcXwe.js";import"./omit-DXgDXInf.js";import"./type-BPSO7Hcc.js";import"./colors-BMjSx7ej.js";import"./wave-DLXz7O8a.js";import"./Group-CS03xTqG.js";import"./Markdown-C6fkmFkS.js";import"./index-Cmh3yLHD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-SorIYbjM.js";import"./Menu-Cu4kNDQa.js";import"./Sider-CvIYW2rK.js";import"./RightOutlined-_AtI9B-D.js";import"./ArrowRightMini-Cap3mbie.js";import"./Submenu-DSGf5ei2.js";import"./SubComponents-Cs8A_EB6.js";import"./TextWithTruncation-lg2aspiP.js";import"./ArrowDownSolid-DgIE-i6b.js";import"./ArrowRightSolid-h0t1Ghk7.js";import"./Divider-DpGIrgZy.js";import"./Badge-B4SoFXPk.js";import"./Indicator-BtYVEqOa.js";import"./StatusOkSolid-PsOIyvFx.js";import"./useTranslation-BXD4vFEx.js";import"./NotificationService-HKPCWyCL.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-Bi09YJyx.js";import"./Button-BEXsH9SI.js";import"./Dropdown-CX0MMqyY.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BBH5KuLo.js";import"./useMergedState-BzyNOLYY.js";import"./focus-BahHV41T.js";import"./ArrowRight-BobUK_ZW.js";import"./Toggle-BMGIIV8U.js";import"./AdditionalContent-DhWVtj4k.js";import"./Loader-qrngdWcb.js";import"./index-DTLMFHHc.js";import"./button-CnTfPpMx.js";import"./index-cR9EwmNO.js";import"./SearchOutlined-BMyuNpTD.js";import"./useThemedTextbox-fVj2LBMS.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-W1Zj8ekK.js";import"./IconResolver-CayOmfoU.js";import"./Placeholder-CXT89Bbl.js";import"./propPresentation-CP3VpjtH.js";import"./blocks-CkvcI2q2.js";import"./index-Z1IA21Yl.js";import"./resolveDesignControls-CFhBuB_d.js";const C=[{message:"Пароль содержит от 8 до 256 символов.",validate:t=>t.length>=8&&t.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
- верхний регистр (A–Z);
- нижний регистр (a–z);
- цифры (0–9);
- специальные символы (@ # $ % ^ & * - _ ! + = [ ] { } | : ' , . ? / \\ \` ~ " ( ) );`,validate:t=>[/[A-Z]/.test(t),/[a-z]/.test(t),/[0-9]/.test(t),/[@#$%^&*\-_!+=[\]{}|:'",.?/\\`~"()]/.test(t)].filter(Boolean).length>=3},{message:'Пароль не содержит пробелов, символов Юникода или комбинаций "." и "@", расположенных рядом друг с другом.',validate:t=>!/[^\x20-\x7E]/.test(t)&&!t.includes(".@")&&!t.includes("@.")}],y=C.map(t=>({message:t.message,isValid:!1})),Bt={title:"Hexa UI Components/Inputs/InputPassword/Stories",component:m,tags:["!autodocs"],...I},i={render:t=>{const[e,s]=o.useState("");return a.createElement(m,{...t,value:e,onChange:s})}},n={render:t=>{const[e,s]=o.useState("kXp7*8$tE!R&2f"),[p,E]=o.useState(y);o.useEffect(()=>{E(C.map(r=>({message:r.message,isValid:r.validate?r.validate(e):!1})))},[e]);const u=o.useMemo(()=>p.every(r=>r.isValid),[p]),d=u?"success":"error";return a.createElement(x,{control:a.createElement(m,{...t,value:e,onChange:s,validationRules:p,validationStatus:d}),message:u?"Все требования к паролю выполнены":"Некорректный пароль",messageMode:d})},parameters:{design:""}},l={render:t=>{const[e,s]=o.useState("");return a.createElement(a.Fragment,null,a.createElement(k,null),a.createElement(m,{...t,value:e,onChange:s,actions:[{tooltip:"Скопировать",icon:"Copy",onClick:()=>c("Пароль скопирован!")},{tooltip:"Сгенерировать надежный пароль",icon:"Key",onClick:()=>c("Пароль сгенерирован!")}]}))}};var g,v,V;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('');
    return <InputPassword {...args} value={value} onChange={setValue} />;
  }
}`,...(V=(v=i.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var f,S,R;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('kXp7*8$tE!R&2f');
    const [validationResult, setValidationResult] = useState(defaultInputPasswordValidationResult);
    useEffect(() => {
      setValidationResult(inputPasswordValidationRules.map(rule => ({
        message: rule.message,
        isValid: rule.validate ? rule.validate(value) : false
      })));
    }, [value]);
    const isValid = useMemo(() => validationResult.every(r => r.isValid), [validationResult]);
    const validationStatus = isValid ? 'success' : 'error';
    return <Field control={<InputPassword {...args} value={value} onChange={setValue} validationRules={validationResult} validationStatus={validationStatus} />} message={isValid ? 'Все требования к паролю выполнены' : 'Некорректный пароль'} messageMode={validationStatus} />;
  },
  parameters: {
    design: ''
  }
}`,...(R=(S=n.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var P,h,w;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('');
    return <>
        <Notification />
        <InputPassword {...args} value={value} onChange={setValue} actions={[{
        tooltip: 'Скопировать',
        icon: 'Copy',
        onClick: () => clickHandler('Пароль скопирован!')
      }, {
        tooltip: 'Сгенерировать надежный пароль',
        icon: 'Key',
        onClick: () => clickHandler('Пароль сгенерирован!')
      }]} />
      </>;
  }
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const Nt=["Basic","WithValidation","WithActions"];export{i as Basic,l as WithActions,n as WithValidation,Nt as __namedExportsOrder,Bt as default};
