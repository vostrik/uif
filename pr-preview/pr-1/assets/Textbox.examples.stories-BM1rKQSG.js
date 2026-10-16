import{T as A}from"./Palette-BLZ41xKU.js";import{F}from"./Field-DFdSwBnO.js";import{c as x}from"./CustomItem-DyHh_ZJ4.js";import{c as H,R as o,b as a}from"./iframe-BPWAyQGL.js";import{M as I}from"./migrationInputPassword-Dz-v3gWC.js";import{T as u}from"./Textbox-BHhM7EQ-.js";import{t as W}from"./Textbox.stories-CxGmSaog.js";import{N as $}from"./Notification-8ZSG5zRj.js";import"./Help-BPNhYY2G.js";import"./FormLabel-B-aKaC8j.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CLdMII2D.js";import"./TextReducer-eAZWrg4x.js";import"./index-DVFdTPQg.js";import"./omit-DXgDXInf.js";import"./type-maMiwprh.js";import"./colors-kJjG_WhN.js";import"./wave-EISCTe2f.js";import"./Group-DuhoQwP5.js";import"./Markdown-CbfyQx-w.js";import"./index-BNpFfLq6.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-CD1QG__s.js";import"./Menu-BijvZzWy.js";import"./Sider--E9RJZem.js";import"./RightOutlined-CYf9ga2I.js";import"./ArrowRightMini-DcFhh-P5.js";import"./Submenu-D_oEXAFO.js";import"./SubComponents-D_d7nq2C.js";import"./TextWithTruncation-CTt1ujNW.js";import"./ArrowDownSolid-DRt_qnJW.js";import"./ArrowRightSolid-BpVPz2Qv.js";import"./Divider-UsJkeAB_.js";import"./Badge-CukyCQDU.js";import"./Indicator-V_gcwk1L.js";import"./StatusOkSolid-BxJYhgs5.js";import"./useTranslation-DQyKnvau.js";import"./NotificationService-Cv3sWNeg.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./useGlobalStyles-vof3p1Uv.js";import"./InputMasked-DUtpnYD4.js";import"./input-CoHkwCY4.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Rrj0SyKM.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-hzPyAOnM.js";import"./InputNumber-yEWAmw0H.js";import"./index-Caav-DZ5.js";import"./SearchOutlined-BFls0Wly.js";import"./button-B1Scf5B3.js";import"./useMergedState-g6WViP84.js";import"./InputPassword-BS9yIELW.js";import"./Button-CQWa6EYf.js";import"./Dropdown-lv8Gw8_U.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-YytDoSjm.js";import"./focus-DFc-nYJ4.js";import"./ArrowRight-B3jVM-Au.js";import"./Toggle-DuE0rxkq.js";import"./AdditionalContent-BJ7Szo00.js";import"./Loader-DFUBe3p9.js";import"./index-dBktDYt3.js";import"./IconResolver-CCt_PimO.js";import"./Placeholder-oZWN3qNI.js";import"./propPresentation-CIJdeABG.js";import"./blocks-CmgeZvgx.js";import"./index-BXqOKXS7.js";import"./resolveDesignControls-CFhBuB_d.js";const _=[{message:"Пароль содержит от 8 до 256 символов.",validate:e=>e.length>=8&&e.length<=256},{message:`Пароль содержит символы как минимум трех групп из четырех:
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
