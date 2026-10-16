import{T as A}from"./Palette-BlbcEcWI.js";import{F}from"./Field-BDGZBkAs.js";import{c as x}from"./CustomItem-CgkOAPZC.js";import{c as H,R as o,b as a}from"./iframe-DNVAFsND.js";import{M as I}from"./migrationInputPassword-Dz-v3gWC.js";import{T as u}from"./Textbox-DtZRjkLt.js";import{t as W}from"./Textbox.stories-M6QTVJOf.js";import{N as $}from"./Notification-CZoHx8Gs.js";import"./Help-CYToz9bv.js";import"./FormLabel-DZAlZE9m.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CWq2qS_r.js";import"./TextReducer-CcQuVU5v.js";import"./index-Bdb3sctg.js";import"./omit-DXgDXInf.js";import"./type-0ivux5bP.js";import"./colors-C_cfvQV4.js";import"./wave-BJ1hX2v5.js";import"./Group-DazgOZHb.js";import"./Markdown-kDLujRI3.js";import"./index-uXb6Xqmd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-C_F_6WkG.js";import"./Menu-DaoqgKjb.js";import"./Sider-zubPe5oL.js";import"./RightOutlined-2jDaKPw8.js";import"./ArrowRightMini-Bx_hBTH2.js";import"./Submenu-BU1TlG6g.js";import"./SubComponents-DZ7xv99p.js";import"./TextWithTruncation-D7TECrLB.js";import"./ArrowDownSolid-DNNTg_Oj.js";import"./ArrowRightSolid-Bihw6Oc3.js";import"./Divider-AC6gIdGc.js";import"./Badge-DVgh10Ht.js";import"./Indicator-TFz7xCUL.js";import"./StatusOkSolid-kiUV4rGA.js";import"./useTranslation-Dg1XEziH.js";import"./NotificationService-DSoOi4l_.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-B9ioAtoA.js";import"./InputMasked-DtOxLUJQ.js";import"./input-ThTede3e.js";import"./index-Chjiymov.js";import"./useThemedTextbox-JibM730T.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DY9JG4_L.js";import"./InputNumber-BgZFiRwU.js";import"./index-kDjmKyHE.js";import"./SearchOutlined-ujROV_cz.js";import"./button-BVzDJ1xK.js";import"./useMergedState-ynS__ke0.js";import"./InputPassword-Ca1Y1uhk.js";import"./Button-Cmmczys_.js";import"./Dropdown-JGfdkU0i.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D4FdOSTr.js";import"./focus-DFzoFYVL.js";import"./ArrowRight-GlR7Ouxo.js";import"./Toggle-B1y7zhcL.js";import"./AdditionalContent-D9yWR_3E.js";import"./Loader-DssZ-VPI.js";import"./index-DMLUsSjF.js";import"./IconResolver-COitkxCH.js";import"./Placeholder-CTw9X4Hx.js";import"./propPresentation-Ca9RmEyN.js";import"./blocks-DC9vndXh.js";import"./index-xI5_I1Dm.js";import"./resolveDesignControls-CFhBuB_d.js";const _=[{message:"Пароль содержит от 8 до 256 символов.",validate:e=>e.length>=8&&e.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
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
