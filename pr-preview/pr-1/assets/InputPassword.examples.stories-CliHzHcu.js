import{F as x}from"./Field-Di0ZVxXr.js";import{c}from"./CustomItem-D3pcnDzr.js";import{b as o,R as a}from"./iframe-CE3A2i_R.js";import{I as m}from"./InputPassword-DTGy24rF.js";import{i as I}from"./InputPassword.stories-8qgsgajD.js";import{N as k}from"./Notification-BGC6KEbM.js";import"./Help-CypKvDy_.js";import"./FormLabel-BTPnuYAd.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CwGNHh5s.js";import"./TextReducer-BWwC3ime.js";import"./index-KYV4nEoS.js";import"./omit-DXgDXInf.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./wave-id3Y8ngN.js";import"./Group-CT1GLKPI.js";import"./Markdown-B8dK-0JV.js";import"./index-A0tpAMov.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-CGiJa2GT.js";import"./Menu-DRm0cJ07.js";import"./Sider-ofXNfbZe.js";import"./RightOutlined-Dp1V5yh5.js";import"./ArrowRightMini-B7_v8cqS.js";import"./Submenu-ThEM8MTs.js";import"./SubComponents-CeRF_0XA.js";import"./TextWithTruncation-vwuJ8fKM.js";import"./ArrowDownSolid-2gKtvJFB.js";import"./ArrowRightSolid-DEyUkgj2.js";import"./Divider-BfYsgfay.js";import"./Badge-COlrkFgX.js";import"./Indicator-CzmYw3rU.js";import"./StatusOkSolid-BHaQF9M1.js";import"./useTranslation-Df249MGx.js";import"./NotificationService-BDTfy7yz.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-DemgArYT.js";import"./Button-DWAe4sGj.js";import"./Dropdown-DDTza_yl.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BJj8FZs2.js";import"./useMergedState-CJ57ru4s.js";import"./focus-CQD7WjR7.js";import"./ArrowRight-CtiO8sz4.js";import"./Toggle-Bx9catjq.js";import"./AdditionalContent-MuEB1NF-.js";import"./Loader-B-PrFUxA.js";import"./index-DeHYj0xS.js";import"./button-BXfcPuzR.js";import"./index-Bma-jNZr.js";import"./SearchOutlined-C5ND5PMp.js";import"./useThemedTextbox-DFiuUy0S.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Ceydhy0X.js";import"./IconResolver-D-DLfVil.js";import"./Placeholder-Cww9fqa_.js";import"./propPresentation-CndodZqI.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./resolveDesignControls-CFhBuB_d.js";const C=[{message:"Пароль содержит от 8 до 256 символов.",validate:t=>t.length>=8&&t.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
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
