import{R as r,b as n}from"./iframe-BfQ7ApZt.js";import{C as te}from"./CodeCompare-DMXQP52q.js";import{c as ie}from"./CodeCompare.stories-Cy0Orpdd.js";import{g as o,a as e}from"./codeCompareStoryData-CvfggvGe.js";import{G as ae,a as t}from"./Grid-DSSjgc2t.js";import{H as B}from"./HelpMessage-BluS93iW.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-CHDWb0q5.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-n2s7gkAb.js";import"./useMergedState-C69lNlPn.js";import"./focus-CLSyxWMD.js";import"./omit-DXgDXInf.js";import"./ArrowRight-IWPA832A.js";import"./Toggle-DWqz3Goe.js";import"./AdditionalContent-BlBDkelx.js";import"./type-BB57qeSp.js";import"./wave-DHr58TaD.js";import"./FormLabel-Djf96u0n.js";import"./Tag-CNKGekQl.js";import"./TextReducer-CUYXVfXw.js";import"./index-BrzaXK4u.js";import"./colors-DNfPmHyW.js";import"./Group-D5E9cFoC.js";import"./Divider-6ip5VOzi.js";import"./Loader-mu8dA5fb.js";import"./index-D5SjVOUn.js";import"./v4-BoP187Zn.js";import"./SettingsGear-DWQ5zDkW.js";import"./useTranslation-49YpKz4U.js";import"./Select-CoUNbT5-.js";import"./useGlobalStyles-DUVx8yfE.js";import"./index-DikAOKhQ.js";import"./addEventListener-CachLH6z.js";import"./Portal-Cw76o96G.js";import"./regeneratorRuntime-DQK8uPKk.js";import"./pickAttrs-CinTxY6V.js";import"./List-BIv0r3Yz.js";import"./IconSearch-kMFgwgR1.js";import"./Indicator-B08Z_iCO.js";import"./Checkbox-CPaZXU-T.js";import"./useId-FctK62Z4.js";import"./generateId-BXJELych.js";import"./index-BYnWSJMK.js";import"./index-mQqiuGbz.js";import"./blocks-dXj6Tsfl.js";import"./index-BvTlNZwJ.js";import"./ExpandAll-DrYGnHfi.js";import"./propPresentation-BC79pgx_.js";import"./withMeta-DokDzFm5.js";import"./DocPageLayout-2y8II_-a.js";import"./SubComponents-BoEEWChq.js";import"./TextWithTruncation-CzEIiJw0.js";import"./ArrowDownSolid-DDrs44JP.js";import"./ArrowRightSolid-cPlsc-qL.js";import"./Badge-D0c6h182.js";import"./StatusOkOutline-D_gga3lz.js";import"./Markdown-Dktqg8l-.js";import"./index-BKOZdw_L.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const C=s=>{const[T,X]=n.useState(s.oldVersion),[Y,Z]=n.useState(s.newVersion),[ee,oe]=n.useState(s.oldValue),[re,se]=n.useState(s.newValue),ne=(w,y)=>{X(w),Z(y),oe(o(w)),se(o(y))};return r.createElement(te,{...s,oldVersion:T,newVersion:Y,oldValue:ee,newValue:re,onVersionChange:ne})},wo={title:"Hexa UI Components/CodeCompare/Stories",component:C,tags:["!autodocs"],...ie},i={args:{oldVersion:e()[0],newVersion:e()[1],options:e(),oldValue:o(e()[0]),newValue:o(e()[1])}},a={render:()=>{const s={oldVersion:e()[0],newVersion:e()[1],options:e(),oldValue:o(e()[0]),newValue:o(e()[8])};return r.createElement(ae,{layout:{cols:["140px 6fr"]},layoutProperty:{gap:32,alignItems:"center"}},r.createElement(t,null,r.createElement(B,{text:"compareMode = unified"})),r.createElement(t,null,r.createElement(C,{...s,compareMode:"unified"})),r.createElement(t,null,r.createElement(B,{text:"compareMode = split"})),r.createElement(t,null,r.createElement(C,{...s,compareMode:"split"})))}},p={args:{oldVersion:void 0,newVersion:void 0,options:e()}},V={args:{oldVersion:e()[0],newVersion:e()[6],options:e(),oldValue:o(e()[0]),newValue:o(e()[6])}},d={args:{oldVersion:e()[4],newVersion:e()[5],options:e(),oldValue:o(e()[4]),newValue:o(e()[5])}},m={args:{oldVersion:e()[6],newVersion:e()[1],options:e().slice(4),rightOptions:e().slice(0,-7),oldValue:o(e()[6]),newValue:o(e()[1])}},l={args:{oldVersion:e()[0],newVersion:e()[7],options:e(),loading:!0,oldValue:o(e()[0]),newValue:o(e()[7])}},g={args:{oldVersion:e()[0],newVersion:e()[1],options:e(),loading:!0,oldValue:o(e()[0]),newValue:o(e()[1])}},c={tags:["skip-visual"],args:{oldVersion:e()[2],newVersion:e()[3],options:e(),oldValue:o(e()[2]),newValue:o(e()[3])}},u={args:{oldVersion:e()[0],newVersion:e()[1],options:e(),oldValue:o(e()[0]),newValue:o(e()[1]),readOnly:!0}};var S,E,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}`,...(f=(E=i.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var M,G,I;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const props: CodeCompareProps = {
      oldVersion: getVersions()[0],
      newVersion: getVersions()[1],
      options: getVersions(),
      oldValue: getCodeByVersion(getVersions()[0]),
      newValue: getCodeByVersion(getVersions()[8])
    };
    return <Grid layout={{
      cols: ['140px 6fr']
    }} layoutProperty={{
      gap: 32,
      alignItems: 'center'
    }}>
        <GridItem>
          <HelpMessage text="compareMode = unified" />
        </GridItem>
        <GridItem>
          <CodeCompareVersionWrapper {...props} compareMode="unified" />
        </GridItem>
        <GridItem>
          <HelpMessage text="compareMode = split" />
        </GridItem>
        <GridItem>
          <CodeCompareVersionWrapper {...props} compareMode="split" />
        </GridItem>
      </Grid>;
  }
}`,...(I=(G=a.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var h,x,O;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    oldVersion: undefined,
    newVersion: undefined,
    options: getVersions()
  }
}`,...(O=(x=p.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var v,R,H;V.parameters={...V.parameters,docs:{...(v=V.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[6],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[6])
  }
}`,...(H=(R=V.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var W,L,N;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[4],
    newVersion: getVersions()[5],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[4]),
    newValue: getCodeByVersion(getVersions()[5])
  }
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,k,q;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[6],
    newVersion: getVersions()[1],
    options: getVersions().slice(4),
    rightOptions: getVersions().slice(0, -7),
    oldValue: getCodeByVersion(getVersions()[6]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var _,b,U;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[7],
    options: getVersions(),
    loading: true,
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[7])
  }
}`,...(U=(b=l.parameters)==null?void 0:b.docs)==null?void 0:U.source}}};var $,j,z;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    loading: true,
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}`,...(z=(j=g.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var A,D,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  // Слишком большая сторя, => большой таймаут
  tags: ['skip-visual'],
  args: {
    oldVersion: getVersions()[2],
    newVersion: getVersions()[3],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[2]),
    newValue: getCodeByVersion(getVersions()[3])
  }
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1]),
    readOnly: true
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const yo=["CodeCompare","CompareMode","NoValues","EqualValues","EmptyValues","RightOptions","NoValuesLoading","LoadingWithCode","ManyChanges","Readonly"];export{i as CodeCompare,a as CompareMode,d as EmptyValues,V as EqualValues,g as LoadingWithCode,c as ManyChanges,p as NoValues,l as NoValuesLoading,u as Readonly,m as RightOptions,yo as __namedExportsOrder,wo as default};
