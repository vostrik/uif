import{F as x}from"./Field-YgzWwvGo.js";import{c}from"./CustomItem-DDobso1J.js";import{b as o,R as a}from"./iframe-DXVY_al-.js";import{I as m}from"./InputPassword-BpB75HOe.js";import{i as I}from"./InputPassword.stories-3joZUExJ.js";import{N as k}from"./Notification-CjHHJh5w.js";import"./Help-C9KyF4Sx.js";import"./FormLabel-g5DQo_wL.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DDt60avN.js";import"./TextReducer-L24KvYIg.js";import"./index-BfDcEK3T.js";import"./omit-DXgDXInf.js";import"./type-CsTtS0gC.js";import"./colors-CsMbn7MB.js";import"./wave-LbmbYf62.js";import"./Group-BgkSKQtg.js";import"./Markdown-DlRQLHKn.js";import"./index-BAYulqpX.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-SIOObLpW.js";import"./Menu-DvY2wzpC.js";import"./Sider-BZbKRzHI.js";import"./RightOutlined-SwO6o-ac.js";import"./ArrowRightMini-CCRtfSxq.js";import"./Submenu-D62uDQzt.js";import"./SubComponents-BmDm24jU.js";import"./TextWithTruncation-Bi2HiZvn.js";import"./ArrowDownSolid-CLCLXTUz.js";import"./ArrowRightSolid-BSWeQvzk.js";import"./Divider-Hc8qqOlX.js";import"./Badge-Cj1zsPT9.js";import"./Indicator-B4cq0q5a.js";import"./StatusOkSolid-C5PT2fwA.js";import"./useTranslation-DdpNEPN3.js";import"./NotificationService-zaMKvIkH.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-DBIbeLBm.js";import"./Button-D0QhSnae.js";import"./Dropdown-BLJYQkSA.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CH4g4j4L.js";import"./useMergedState-CR6rJtpb.js";import"./focus-BfF3lKIC.js";import"./ArrowRight-D886n5Yw.js";import"./Toggle-B5cbHog7.js";import"./AdditionalContent-ziC3WO2J.js";import"./Loader-BxJLuQsn.js";import"./index-CzITj10R.js";import"./button-CXIseOCg.js";import"./index-CtBoabqo.js";import"./SearchOutlined-BWXO38kT.js";import"./useThemedTextbox-Cq5Mjd4x.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DCNzFJDX.js";import"./IconResolver-B5JE2hw5.js";import"./Placeholder-DnfSgq--.js";import"./propPresentation-DzyQPo2A.js";import"./blocks-BhP1yI7N.js";import"./index-c6GTnd84.js";import"./resolveDesignControls-CFhBuB_d.js";const C=[{message:"Пароль содержит от 8 до 256 символов.",validate:t=>t.length>=8&&t.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
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
