import{T as A}from"./Palette-L_jpL42l.js";import{F}from"./Field-DF-zccJ_.js";import{c as x}from"./CustomItem-CcQbWnw6.js";import{c as H,R as o,b as a}from"./iframe-D64doaOG.js";import{M as I}from"./migrationInputPassword-Dz-v3gWC.js";import{T as u}from"./Textbox-DG8LriK_.js";import{t as W}from"./Textbox.stories-W4KKLsLu.js";import{N as $}from"./Notification-ClZELCHA.js";import"./Help-BnWb-5_G.js";import"./FormLabel-_EAno6xN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-D6DOgDGV.js";import"./TextReducer-D9EoPo-Z.js";import"./index-BUFoDfzb.js";import"./omit-DXgDXInf.js";import"./type-BhjCrcP5.js";import"./colors-CZlhbD2k.js";import"./wave-D0moY5T7.js";import"./Group-g0kG_cFj.js";import"./Markdown-BoWm1Hej.js";import"./index-BayBP1qJ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-D9PDbKUA.js";import"./Menu-CuoB-74z.js";import"./Sider-BrS79yvp.js";import"./RightOutlined-I6So6vVt.js";import"./ArrowRightMini-CEuwNWtf.js";import"./Submenu-BJ194FnO.js";import"./SubComponents-CmPDyBhW.js";import"./TextWithTruncation-OcBO6EIa.js";import"./ArrowDownSolid-b0Mul1k0.js";import"./ArrowRightSolid-BZ2MxU-F.js";import"./Divider-CHq-NCgF.js";import"./Badge-tlJSCzR8.js";import"./Indicator-BWF03Jjq.js";import"./StatusOkSolid-BICad4Wy.js";import"./useTranslation-CtdtsiRO.js";import"./NotificationService-DedBF_Dt.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-BHDTOddm.js";import"./InputMasked-mR9gPOBu.js";import"./input-BGaYNdUH.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CSuDfsxH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-E0BmDxS6.js";import"./InputNumber-BgiYnHn5.js";import"./index-M7uLrcpx.js";import"./SearchOutlined-XfEsUDsT.js";import"./button-Xku0lj0N.js";import"./useMergedState-D_-bsn6_.js";import"./InputPassword-CF4iGcsj.js";import"./Button-TmF0MD_-.js";import"./Dropdown-CakLMIuG.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DOaPQPHU.js";import"./focus-DobIVKtg.js";import"./ArrowRight-3NiJ6X-U.js";import"./Toggle-DKzag4k9.js";import"./AdditionalContent-Dm003yIA.js";import"./Loader-DHdWRNjN.js";import"./index-B5M9_ZQL.js";import"./IconResolver-B-B8tWu_.js";import"./Placeholder-CPZh2A8H.js";import"./propPresentation-Bd1LfInE.js";import"./blocks-Mkmu72nY.js";import"./index-g4UEVAJN.js";import"./resolveDesignControls-CFhBuB_d.js";const _=[{message:"Пароль содержит от 8 до 256 символов.",validate:e=>e.length>=8&&e.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
- верхний регистр (A–Z);
- нижний регистр (a–z);
- цифры (0–9);
- специальные символы (@ # $ % ^ & * - _ ! + = [ ] { } | : ' , . ? / \\ \` ~ " ( ) );`,validate:e=>[/[A-Z]/.test(e),/[a-z]/.test(e),/[0-9]/.test(e),/[@#$%^&*\-_!+=[\]{}|:'",.?/\\`~"()]/.test(e)].filter(Boolean).length>=3},{message:'Пароль не содержит пробелов, символов Юникода или комбинаций "." и "@", расположенных рядом друг с другом.',validate:e=>!/[^\x20-\x7E]/.test(e)&&!e.includes(".@")&&!e.includes("@.")}],N=_.map(e=>({message:e.message,isValid:!1})),tt={title:"Hexa UI Components/Inputs/Textbox/Stories",component:u,tags:["!autodocs"],...W},n={args:{showClearButton:!1}},l={render:e=>{const[t,s]=a.useState("");return o.createElement(u.Password,{...e,value:t,onChange:r=>s(r)})}},m={render:e=>{const[t,s]=a.useState("kXp7*8$tE!R&2f"),[r,B]=a.useState(N);a.useEffect(()=>{B(_.map(i=>({message:i.message,isValid:i.validate?i.validate(t):!1})))},[t]);const d=a.useMemo(()=>r.every(i=>i.isValid),[r]),g=d?"success":"error";return o.createElement(F,{control:o.createElement(u.Password,{...e,value:t,onChange:s,validationRules:r,validationStatus:g}),message:d?"Все требования к паролю выполнены":"Некорректный пароль",messageMode:g})},parameters:{design:I.pixsoView}},p={render:e=>{const[t,s]=a.useState("");return o.createElement(o.Fragment,null,o.createElement($,null),o.createElement(u.Password,{...e,value:t,onChange:s,actions:[{tooltip:"Скопировать",icon:"Copy",onClick:()=>x("Пароль скопирован!")},{tooltip:"Сгенерировать надежный пароль",icon:"Key",onClick:()=>x("Пароль сгенерирован!")}]}))}},c={args:{source:H.input_text},render:e=>o.createElement(A,{...e})};var v,V,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showClearButton: false
  }
}`,...(f=(V=n.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var P,w,S;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('');
    return <Textbox.Password {...args} value={value} onChange={nextValue => setValue(nextValue)} />;
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,R,h;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('kXp7*8$tE!R&2f');
    const [validationResult, setValidationResult] = useState(defaultValidationResult);
    useEffect(() => {
      setValidationResult(validationRules.map(rule => ({
        message: rule.message,
        isValid: rule.validate ? rule.validate(value) : false
      })));
    }, [value]);
    const isValid = useMemo(() => validationResult.every(r => r.isValid), [validationResult]);
    const validationStatus = isValid ? 'success' : 'error';
    return <Field control={<Textbox.Password {...args} value={value} onChange={setValue} validationRules={validationResult} validationStatus={validationStatus} />} message={isValid ? 'Все требования к паролю выполнены' : 'Некорректный пароль'} messageMode={validationStatus} />;
  },
  parameters: {
    design: MigrationInputPasswordData.pixsoView
  }
}`,...(h=(R=m.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var T,E,b;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('');
    return <>
        <Notification />
        <Textbox.Password {...args} value={value} onChange={setValue} actions={[{
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
}`,...(b=(E=p.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var k,y,M;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    source: componentColors.input_text
  },
  render: args => <ThemedPalette {...args} />
}`,...(M=(y=c.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const ot=["Basic","PasswordTextbox","PasswordWithValidation","PasswordWithActions","ColorTokens"];export{n as Basic,c as ColorTokens,l as PasswordTextbox,p as PasswordWithActions,m as PasswordWithValidation,ot as __namedExportsOrder,tt as default};
