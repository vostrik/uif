import{T as A}from"./Palette-BAVbpaYU.js";import{F}from"./Field-BsTSlUmQ.js";import{c as x}from"./CustomItem-B-bkcq18.js";import{c as H,R as o,b as a}from"./iframe-BxJnf3ZL.js";import{M as I}from"./migrationInputPassword-Dz-v3gWC.js";import{T as u}from"./Textbox-CAZ2Fv9U.js";import{t as W}from"./Textbox.stories-BGw-3sQi.js";import{N as $}from"./Notification-CvWaP98G.js";import"./Help-DMNflowG.js";import"./FormLabel-C8HaQNzE.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-B4FkS-ry.js";import"./TextReducer-jgmtD67Q.js";import"./index-Dlpfquxs.js";import"./omit-DXgDXInf.js";import"./type-l5tskpde.js";import"./colors-yztLXgoP.js";import"./wave-CE4pLSVu.js";import"./Group-Dnx8lKl-.js";import"./Markdown-M2-twDFV.js";import"./index-DkgxDGTG.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-DFGrmg6s.js";import"./Menu-BV1UDYdB.js";import"./Sider-0JwPVeo2.js";import"./RightOutlined-BtBOjOZH.js";import"./ArrowRightMini-DBiX0oTM.js";import"./Submenu-P85nbD0O.js";import"./SubComponents-B17FNPjy.js";import"./TextWithTruncation-DRr7EPDb.js";import"./ArrowDownSolid-mA2-OHVl.js";import"./ArrowRightSolid-DI2-NN91.js";import"./Divider-Ch4BCEC8.js";import"./Badge-BD8rQxYw.js";import"./Indicator-DttH4MVv.js";import"./StatusOkSolid-B81X7uk8.js";import"./useTranslation-XbAzRulq.js";import"./NotificationService-5dWOm_4D.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-BwyzlKcq.js";import"./InputMasked-CAu3zsjn.js";import"./input-n1WBQ7hV.js";import"./index-Chjiymov.js";import"./useThemedTextbox-C_LafCEC.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-C1QARNsJ.js";import"./InputNumber-BTIEgQNa.js";import"./index-YsXWYt75.js";import"./SearchOutlined-DAC8EMEh.js";import"./button-ZplnygZi.js";import"./useMergedState-BgQ2XY1A.js";import"./InputPassword-t2hcqH-O.js";import"./Button-I6hF4eMe.js";import"./Dropdown-DGWR5wSe.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-lpBnInVO.js";import"./focus-CSmuw2j_.js";import"./ArrowRight-BHNzx7qw.js";import"./Toggle-CGR2gxI3.js";import"./AdditionalContent-0QTduPgH.js";import"./Loader-CkJh8F18.js";import"./index-DLAJHFC-.js";import"./IconResolver-ByUaWSDK.js";import"./Placeholder-B2af5lXh.js";import"./propPresentation-lj9O_TmM.js";import"./blocks-BzGBXNOF.js";import"./index-RPybRgje.js";import"./resolveDesignControls-CFhBuB_d.js";const _=[{message:"Пароль содержит от 8 до 256 символов.",validate:e=>e.length>=8&&e.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
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
