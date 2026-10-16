import{T as A}from"./Palette-CDmqs2Vy.js";import{F}from"./Field-DQoPcQwd.js";import{c as x}from"./CustomItem-CbbXcB6G.js";import{c as H,R as o,b as a}from"./iframe-BC0sauTx.js";import{M as I}from"./migrationInputPassword-Dz-v3gWC.js";import{T as u}from"./Textbox-D4IO5GkS.js";import{t as W}from"./Textbox.stories-DCyfhSxd.js";import{N as $}from"./Notification-BHK0YQX9.js";import"./Help-hJiZkTOm.js";import"./FormLabel-DvUxTPYn.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DYf45Xcw.js";import"./TextReducer-B-H2cHGE.js";import"./index-Bazlc50n.js";import"./omit-DXgDXInf.js";import"./type-ceO20y0I.js";import"./colors-BlEKYhgo.js";import"./wave-CeOhQ2OJ.js";import"./Group-CuTH3Q6e.js";import"./Markdown-DQohGWul.js";import"./index-Ca2avi9Z.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-DztK078o.js";import"./Menu-DhZf0s39.js";import"./Sider-BO5Kip5M.js";import"./RightOutlined-BsAtnlL_.js";import"./ArrowRightMini-byIEESPi.js";import"./Submenu-Ckyya4SR.js";import"./SubComponents-DrIlL0Al.js";import"./TextWithTruncation-DOatzAnE.js";import"./ArrowDownSolid-CAJ9wxew.js";import"./ArrowRightSolid-DmJilGE2.js";import"./Divider-BINKUE5V.js";import"./Badge-BeYddg-s.js";import"./Indicator-C6NMvhP-.js";import"./StatusOkSolid-DYWGd29I.js";import"./useTranslation-De9R2daC.js";import"./NotificationService-CgnV07YF.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-CqyrLu9a.js";import"./InputMasked-DUtfeg-u.js";import"./input-l3UZTC3h.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DHXQEynY.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DJSqrEzb.js";import"./InputNumber-BWAkKPkq.js";import"./index-D0QCmQVE.js";import"./SearchOutlined-CsWPDYZB.js";import"./button-CQm7lrDl.js";import"./useMergedState-GIAdtRIo.js";import"./InputPassword-atq-sjm4.js";import"./Button-Cmjt4Mlb.js";import"./Dropdown-bUtM1Y1j.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CAsWAeK7.js";import"./focus-Dnl7tSMp.js";import"./ArrowRight-UOmwPHbX.js";import"./Toggle-BnlzIyHw.js";import"./AdditionalContent-tnuN7Mwd.js";import"./Loader-ZrnY6mmh.js";import"./index-DfGxRC7Y.js";import"./IconResolver-DXnbb7I9.js";import"./Placeholder-DM3diPVD.js";import"./propPresentation-DqHLXn9o.js";import"./blocks-BgOqIGqq.js";import"./index-o0-Kef5A.js";import"./resolveDesignControls-CFhBuB_d.js";const _=[{message:"Пароль содержит от 8 до 256 символов.",validate:e=>e.length>=8&&e.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
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
