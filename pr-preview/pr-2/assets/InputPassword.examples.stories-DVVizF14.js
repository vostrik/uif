import{F as x}from"./Field-DF-zccJ_.js";import{c}from"./CustomItem-CcQbWnw6.js";import{b as o,R as a}from"./iframe-D64doaOG.js";import{I as m}from"./InputPassword-CF4iGcsj.js";import{i as I}from"./InputPassword.stories-CCPiC4wn.js";import{N as k}from"./Notification-ClZELCHA.js";import"./Help-BnWb-5_G.js";import"./FormLabel-_EAno6xN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-D6DOgDGV.js";import"./TextReducer-D9EoPo-Z.js";import"./index-BUFoDfzb.js";import"./omit-DXgDXInf.js";import"./type-BhjCrcP5.js";import"./colors-CZlhbD2k.js";import"./wave-D0moY5T7.js";import"./Group-g0kG_cFj.js";import"./Markdown-BoWm1Hej.js";import"./index-BayBP1qJ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-D9PDbKUA.js";import"./Menu-CuoB-74z.js";import"./Sider-BrS79yvp.js";import"./RightOutlined-I6So6vVt.js";import"./ArrowRightMini-CEuwNWtf.js";import"./Submenu-BJ194FnO.js";import"./SubComponents-CmPDyBhW.js";import"./TextWithTruncation-OcBO6EIa.js";import"./ArrowDownSolid-b0Mul1k0.js";import"./ArrowRightSolid-BZ2MxU-F.js";import"./Divider-CHq-NCgF.js";import"./Badge-tlJSCzR8.js";import"./Indicator-BWF03Jjq.js";import"./StatusOkSolid-BICad4Wy.js";import"./useTranslation-CtdtsiRO.js";import"./NotificationService-DedBF_Dt.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-BHDTOddm.js";import"./Button-TmF0MD_-.js";import"./Dropdown-CakLMIuG.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DOaPQPHU.js";import"./useMergedState-D_-bsn6_.js";import"./focus-DobIVKtg.js";import"./ArrowRight-3NiJ6X-U.js";import"./Toggle-DKzag4k9.js";import"./AdditionalContent-Dm003yIA.js";import"./Loader-DHdWRNjN.js";import"./index-B5M9_ZQL.js";import"./button-Xku0lj0N.js";import"./index-M7uLrcpx.js";import"./SearchOutlined-XfEsUDsT.js";import"./useThemedTextbox-CSuDfsxH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-E0BmDxS6.js";import"./IconResolver-B-B8tWu_.js";import"./Placeholder-CPZh2A8H.js";import"./propPresentation-Bd1LfInE.js";import"./blocks-Mkmu72nY.js";import"./index-g4UEVAJN.js";import"./resolveDesignControls-CFhBuB_d.js";const C=[{message:"Пароль содержит от 8 до 256 символов.",validate:t=>t.length>=8&&t.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
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
