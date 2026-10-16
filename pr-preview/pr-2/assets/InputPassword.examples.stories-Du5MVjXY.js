import{F as x}from"./Field-BDGZBkAs.js";import{c}from"./CustomItem-CgkOAPZC.js";import{b as o,R as a}from"./iframe-DNVAFsND.js";import{I as m}from"./InputPassword-Ca1Y1uhk.js";import{i as I}from"./InputPassword.stories-C7QKa3IW.js";import{N as k}from"./Notification-CZoHx8Gs.js";import"./Help-CYToz9bv.js";import"./FormLabel-DZAlZE9m.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CWq2qS_r.js";import"./TextReducer-CcQuVU5v.js";import"./index-Bdb3sctg.js";import"./omit-DXgDXInf.js";import"./type-0ivux5bP.js";import"./colors-C_cfvQV4.js";import"./wave-BJ1hX2v5.js";import"./Group-DazgOZHb.js";import"./Markdown-kDLujRI3.js";import"./index-uXb6Xqmd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-C_F_6WkG.js";import"./Menu-DaoqgKjb.js";import"./Sider-zubPe5oL.js";import"./RightOutlined-2jDaKPw8.js";import"./ArrowRightMini-Bx_hBTH2.js";import"./Submenu-BU1TlG6g.js";import"./SubComponents-DZ7xv99p.js";import"./TextWithTruncation-D7TECrLB.js";import"./ArrowDownSolid-DNNTg_Oj.js";import"./ArrowRightSolid-Bihw6Oc3.js";import"./Divider-AC6gIdGc.js";import"./Badge-DVgh10Ht.js";import"./Indicator-TFz7xCUL.js";import"./StatusOkSolid-kiUV4rGA.js";import"./useTranslation-Dg1XEziH.js";import"./NotificationService-DSoOi4l_.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-B9ioAtoA.js";import"./Button-Cmmczys_.js";import"./Dropdown-JGfdkU0i.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D4FdOSTr.js";import"./useMergedState-ynS__ke0.js";import"./focus-DFzoFYVL.js";import"./ArrowRight-GlR7Ouxo.js";import"./Toggle-B1y7zhcL.js";import"./AdditionalContent-D9yWR_3E.js";import"./Loader-DssZ-VPI.js";import"./index-DMLUsSjF.js";import"./button-BVzDJ1xK.js";import"./index-kDjmKyHE.js";import"./SearchOutlined-ujROV_cz.js";import"./useThemedTextbox-JibM730T.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DY9JG4_L.js";import"./IconResolver-COitkxCH.js";import"./Placeholder-CTw9X4Hx.js";import"./propPresentation-Ca9RmEyN.js";import"./blocks-DC9vndXh.js";import"./index-xI5_I1Dm.js";import"./resolveDesignControls-CFhBuB_d.js";const C=[{message:"Пароль содержит от 8 до 256 символов.",validate:t=>t.length>=8&&t.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
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
