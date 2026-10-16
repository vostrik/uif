import{T as _e}from"./Palette-BqHKA6oY.js";import{R as a,a as He,P as O,b as m,S as P,T as $,L as Be,H as Ke,c as Oe,M as z}from"./iframe-D7vGURqZ.js";import{w as $e}from"./withMeta-AvforKRz.js";import{b as Fe,c as ze}from"./helpers-BytZKRkB.js";import{D as Ge}from"./Dropdown-CRW3TkbL.js";import{c as Ue}from"./CheckPoint-QPzq-4Ch.js";import{o as je}from"./Menu2-BniaxG50.js";import{t as g,a as Qe,f as Je}from"./mocks-DcEOBzQK.js";import{g as Xe,i as Ye,b as Ze}from"./Tree-CI-yxeqJ.js";import{S as et}from"./Search-DM9ZGBX_.js";import{T as v,b as k}from"./TreeNav-VHkx_fGY.js";import{P as tt}from"./Panel-Q3WClLVG.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-COy0blt1.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./TextReducer-yX199pg5.js";import"./SubComponents-DsXyPHVa.js";import"./TextWithTruncation-DCb05iIM.js";import"./ArrowDownSolid-DlynUjOu.js";import"./ArrowRightSolid-BtdCqW53.js";import"./Divider-51vw4bax.js";import"./Badge-CJ1lMX1D.js";import"./type-DgSh0ByZ.js";import"./colors-C-4HMPnB.js";import"./Indicator-CQNXQNlG.js";import"./StatusOkOutline-BvinxEvP.js";import"./Grid-C62gR1jB.js";import"./Markdown-CRrCZtGQ.js";import"./index-6XHrBjkF.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BG56_tLR.js";import"./useMergedState-Dgv3UayC.js";import"./focus-Dl3Nwm4s.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DjKzMcwQ.js";import"./Toggle-Dt_5v6fg.js";import"./AdditionalContent-hp1u3Epd.js";import"./HelpMessage-Dr7uz5o3.js";import"./wave-Bh4c9RUC.js";import"./FormLabel-BgNNh3NE.js";import"./Tag-CV4RJqlE.js";import"./index-kV8384LW.js";import"./Group-DqJlf-Gx.js";import"./Loader-CWfEwXXE.js";import"./index-sXrtJGg5.js";import"./v4-BoP187Zn.js";import"./Server-CN5VEXTd.js";import"./Tree-CrUcIwqZ.js";import"./pickAttrs-Cmf7WHza.js";import"./List-CzxbyXDB.js";import"./SettingsGear-bdfcEdG6.js";import"./Checkbox-D2B00BGu.js";import"./useId-cILExZ2P.js";import"./generateId-BXJELych.js";import"./index-pgh_DLMr.js";import"./index-6pHAbIny.js";import"./Radio-CtfAkarO.js";import"./index-1qm2gIUV.js";import"./Textbox-CEZ0dDcq.js";import"./useGlobalStyles-B-HOYsT0.js";import"./InputMasked-_DcfeiFG.js";import"./input-gf-VCky2.js";import"./index-Chjiymov.js";import"./useThemedTextbox-81tGPjUq.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Cv6nyTG6.js";import"./InputNumber-Bt5vXNjj.js";import"./index-Bijc3Mwe.js";import"./SearchOutlined-zeEOv1ar.js";import"./button-iMtochpT.js";import"./InputPassword-5Hf3TJHk.js";import"./Button-9U8xJrYJ.js";import"./StatusOkSolid-CphszqrJ.js";import"./useTranslation-B2jQLDHY.js";import"./IconResolver-BKL_1foC.js";import"./Placeholder-b0XisIub.js";import"./IconSearch-BHlkKiBY.js";const at={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,inBuilder:"Используется под названием «Дерево»"},nt="Tree",rt="В качестве основы используется Tree из библиотеки Antd.",ot="Компонент Tree предназначен для отображения иерархической структуры",st="",lt="",it={dod:at,component:nt,description:rt,usage:ot,designLink:st,pixsoView:lt};function we(e){const t=[];for(const n of e)t.push(n.key),n.children&&t.push(...we(n.children));return t}function ct(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function dt(e,t={depth:3,width:3}){const n=[];let r=0,o=0;const l=ct(7);function c(){return o>=e}function p(){return l()<.5}function s(D,y){const i={key:D,isLeaf:!0,title:D};if(o++,!c()&&t.depth>y&&p()){i.isLeaf=!1,i.children=[];let T=0;for(;i.children.push(s(`${D}-${T++}`,y+1)),!(c()||t.width===T||p()););}return i}function f(){return s(`0-${r++}`,1)}for(;!c();)n.push(f());return n}const ut=Ke(v)`
  ${({$showFoundCount:e})=>e&&`
    .ant-tree-indent,
    .ant-tree-switcher {
      display: none;
    }
    .ant-tree-list .ant-tree-list-holder .ant-tree-treenode {
      gap: 0;
      padding-inline-start: 0;
      border-inline-start: none;
    }
  `}
`,pt=e=>typeof e.title=="string"?e.title:"",xe=(e,t)=>pt(e).toLowerCase().includes(t.toLowerCase()),Ve=(e,t)=>{const n=[];for(const r of e){const o=r.children?Ve(r.children,t):[];!xe(r,t)&&!o.length||(o.length?n.push({...r,children:o}):Ye(r,e)&&r.children?n.push({...r,children:r.children}):n.push({...r,children:void 0,isLeaf:!0}))}return n},qe=(e,t,n=[])=>{for(const r of e)xe(r,t)&&n.push(r),r.children&&qe(r.children,t,n);return n},M=(e,t=[])=>{for(const n of e)n.disabled||t.push(n.key),n.children&&M(n.children,t);return t},Ae=(e,t={})=>{for(const n of e)t[n.key]=n,n.children&&Ae(n.children,t);return t},R=({title:e="Title",treeData:t,showFoundCount:n=!1,...r})=>{const[o,l]=m.useState(""),[c,p]=m.useState([]),[s,f]=m.useState(()=>new Set),D=m.useMemo(()=>Ae(t),[t]),y=m.useMemo(()=>Xe(t),[t]),i=o.trim().length>0,T=m.useMemo(()=>i?Ve(t,o.trim()):t,[t,o,i]),_=m.useMemo(()=>i?qe(t,o.trim()):[],[t,o,i]),Me=m.useMemo(()=>{const d=new Set(s);return s.forEach(C=>{let u=y[C];for(;u&&!d.has(u.key);)d.add(u.key),u=y[u.key]}),Array.from(d)},[s,y]),Pe=(d,C)=>{const u=D[C.node.key];if(!u)return;const H=M([u]),Re=H.every(b=>s.has(b)),B=new Set(s);H.forEach(b=>Re?B.delete(b):B.add(b)),f(B)},F=m.useMemo(()=>{const d=()=>f(new Set(M(t))),C=()=>f(new Set(M(_))),u=()=>f(new Set);return s.size>0?{text:i?"Reset all":"Reset",onClick:u}:i?{text:n?`Select found (${_.length})`:"Select found",onClick:C}:{text:"Select all",onClick:d}},[s.size,i,n,_,t]);return a.createElement(P,{direction:"vertical",gap:"grouped",align:"start",width:"300px"},a.createElement($,{type:"H5"},e),a.createElement(et,{value:o,onChange:d=>l(d),onClearClick:()=>l("")}),a.createElement(P,{gap:"related"},a.createElement($,null,"Selected: ",s.size),a.createElement(Be,{onClick:F.onClick},F.text)),T.length?a.createElement(ut,{...r,$showFoundCount:n,mode:"multipleChoice",treeData:T,checkedKeys:Me,onCheck:Pe,expandedKeys:c,onExpand:d=>p(d),autoExpandParent:!1}):a.createElement($,{type:"BTR3"},"Nothing found"))},We=()=>a.createElement(He,{mode:"info"},a.createElement(O,null,"Композиция «дерево + поиск»: ","<Search />"," фильтрует treeData, оставляя только совпавшие узлы и их родителей. По умолчанию ветки не раскрываются и остаются в том состоянии, в котором были до применения поиска."),a.createElement(O,null,"Пример реализации можно посмотреть в коде данной стори."),a.createElement(O,null,"Используемые компоненты: ","<TreeList />",", ","<Search />",", ","<Text />",", ","<Link />",", ","<Space />","."));try{R.displayName="TreeWithSearch",R.__docgenInfo={description:"",displayName:"TreeWithSearch",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},loadData:{defaultValue:null,description:"Load data asynchronously",name:"loadData",required:!1,type:{name:"((treeNode: EventDataNode) => Promise<void>)"}},icon:{defaultValue:null,description:"Custom treeNode icon",name:"icon",required:!1,type:{name:"ReactNode | ((props: AntTreeNodeProps) => ReactNode)"}},onSelect:{defaultValue:null,description:"Callback function for when the onSelect event occurs",name:"onSelect",required:!1,type:{name:'((selectedKeys: Key[], info: { event: "select"; selected: boolean; node: EventDataNode; selectedNodes: (DataNode | BasicDataNode)[]; nativeEvent: MouseEvent; }) => void)'}},showIcon:{defaultValue:null,description:"Shows an icon before a TreeNode's title. There is no default for this",name:"showIcon",required:!1,type:{name:"boolean"}},selectedKeys:{defaultValue:null,description:"Specifies the keys of the selected treeNodes",name:"selectedKeys",required:!1,type:{name:"Key[]"}},treeData:{defaultValue:null,description:`The treeNodes data Array, if set it then you need not construct children TreeNode.
(key should be unique across the whole array)`,name:"treeData",required:!1,type:{name:"DataNode[]"}},disabled:{defaultValue:null,description:"Whether disabled the tree",name:"disabled",required:!1,type:{name:"boolean"}},draggable:{defaultValue:null,description:"Specifies whether this Tree or the node is draggable",name:"draggable",required:!1,type:{name:"boolean | DraggableFn | DraggableConfig"}},showLine:{defaultValue:null,description:"Show tree line",name:"showLine",required:!1,type:{name:"boolean"}},checkChildren:{defaultValue:null,description:"Whether to check children if the parent node is checked. Has no effect if checkStrictly is true",name:"checkChildren",required:!1,type:{name:"boolean"}},checkParents:{defaultValue:null,description:"Whether to check/half check/uncheck parents if the node is checked. Has no effect if checkStrictly is true",name:"checkParents",required:!1,type:{name:"boolean"}},checkStrictly:{defaultValue:null,description:"Check treeNode precisely; parent treeNode and children treeNodes are not associated",name:"checkStrictly",required:!1,type:{name:"boolean"}},onCheck:{defaultValue:null,description:"Callback function for when the onCheck event occurs",name:"onCheck",required:!1,type:{name:"((checkedKeys: Key[] | { checked: Key[]; halfChecked: Key[]; }, e: TreeCheckEvent) => void)"}},checkedKeys:{defaultValue:null,description:"Specifies the keys of the checked treeNodes",name:"checkedKeys",required:!1,type:{name:"Key[]"}},onExpand:{defaultValue:null,description:"Callback function for when a treeNode is expanded or collapsed",name:"onExpand",required:!1,type:{name:"((newExpandedKeys: Key[], info: { node: EventDataNode; expanded: boolean; nativeEvent: MouseEvent; }) => void)"}},expandedKeys:{defaultValue:null,description:"Specifies the keys of the expanded treeNodes",name:"expandedKeys",required:!1,type:{name:"Key[]"}},onLoad:{defaultValue:null,description:"Callback function for when a treeNode is loaded by loadData function",name:"onLoad",required:!1,type:{name:'((loadedKeys: Key[], info: { event: "load"; node: EventDataNode; }) => void)'}},loadedKeys:{defaultValue:null,description:"Specifies the keys of the loaded treeNodes by loadData function",name:"loadedKeys",required:!1,type:{name:"Key[]"}},autoExpandParent:{defaultValue:null,description:"Whether to automatically expand a parent treeNode",name:"autoExpandParent",required:!1,type:{name:"boolean"}},onDragStart:{defaultValue:null,description:"Callback function for when the onDragStart event occurs",name:"onDragStart",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDragEnter:{defaultValue:null,description:"Callback function for when the onDragEnter event occurs",name:"onDragEnter",required:!1,type:{name:"((info: NodeDragEventParams & { expandedKeys: Key[]; }) => void)"}},onDragOver:{defaultValue:null,description:"Callback function for when the onDragOver event occurs",name:"onDragOver",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDragLeave:{defaultValue:null,description:"Callback function for when the onDragLeave event occurs",name:"onDragLeave",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDragEnd:{defaultValue:null,description:"Callback function for when the onDragEnd event occurs",name:"onDragEnd",required:!1,type:{name:"((info: NodeDragEventParams) => void)"}},onDrop:{defaultValue:null,description:"Callback function for when the onDrop event occurs",name:"onDrop",required:!1,type:{name:"((info: NodeDropEventParams) => void)"}},onActionClick:{defaultValue:null,description:"Callback function for when the onClick event occurs on settings button",name:"onActionClick",required:!1,type:{name:"((node: DataNode) => void)"}},renderAction:{defaultValue:null,description:"Custom render action. Children is ActionButton(Gear)",name:"renderAction",required:!1,type:{name:"(({ children, node }: PropsWithChildren<{ node: DataNode; }>) => void)"}},actionIcon:{defaultValue:null,description:"Custom action icon. Default is <SettingsGear />",name:"actionIcon",required:!1,type:{name:"ReactNode"}},defaultCheckedKeys:{defaultValue:null,description:"Specify the keys of the default checked treeNodes",name:"defaultCheckedKeys",required:!1,type:{name:"Key[]"}},defaultExpandedKeys:{defaultValue:null,description:"Specify the keys of the default expanded treeNodes",name:"defaultExpandedKeys",required:!1,type:{name:"Key[]"}},blockNode:{defaultValue:null,description:"Whether treeNode fill remaining horizontal space",name:"blockNode",required:!1,type:{name:"boolean"}},allowUncheck:{defaultValue:null,description:"Whether user can uncheck an item",name:"allowUncheck",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"Config virtual scroll height. Will not support horizontal scroll when enable this",name:"height",required:!1,type:{name:"number"}},virtual:{defaultValue:null,description:"Disable virtual scroll when set to false",name:"virtual",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"readOnly"'},{value:'"multipleChoice"'},{value:'"singleChoice"'}]}},title:{defaultValue:{value:"Title"},description:"",name:"title",required:!1,type:{name:"string"}},showFoundCount:{defaultValue:{value:"false"},description:"",name:"showFoundCount",required:!1,type:{name:"boolean"}}}}}catch{}const mt={DEFAULT:void 0,THREE_DOTS:a.createElement(je,null),CHECK:a.createElement(Ue,null)},Ha={title:"Hexa UI Components/Tree",component:v,argTypes:{allowUncheck:{control:"boolean"},autoExpandParent:{control:"boolean"},blockNode:{control:"boolean"},checkChildren:{control:"boolean"},checkParents:{control:"boolean"},checkStrictly:{control:"boolean"},checkedKeys:{control:"object"},defaultCheckedKeys:{control:"object"},defaultExpandedKeys:{control:"object"},disabled:{control:"boolean"},expandedKeys:{control:"object"},invalid:{control:"boolean"},loadData:{},loadedKeys:{control:"object"},treeData:{control:"object"},showLine:{control:"boolean"},actionIcon:{control:"select",options:Array("DEFAULT","THREE_DOTS","CHECK")}},args:{klId:"tree-kl-id",testId:"tree-test-id",showLine:!1},parameters:{badges:[z.stable,z.reviewedByDesign],docs:{page:$e(it)}}};function E({Component:e,...t}){const[n,r]=a.useState(t.checkedKeys);a.useEffect(()=>r(t.checkedKeys),[t.checkedKeys]);const o=Fe(ze({...t,checkedKeys:n},["checkedKeys","defaultCheckedKeys","defaultExpandedKeys","expandedKeys"]),{onCheck:l=>r([...l])});return a.createElement(e,{...o})}const S={render:e=>a.createElement(E,{...e,Component:v}),args:{mode:"multipleChoice",treeData:g}},N={render:e=>a.createElement(E,{...e,Component:v}),args:{mode:"multipleChoice",treeData:g,showLine:!0}};function Ie({Component:e,...t}){const[n,r]=a.useState([{key:"0-0",title:"0-0",checkable:!1}]),o=(l,c,p)=>l.map(s=>s.key===c?{...s,children:p}:s.children?{...s,children:o(s.children,c,p)}:s);return a.createElement(e,{...t,loadData:async l=>{var c;(c=t.loadData)==null||c.call(t,l),await new Promise(p=>setTimeout(p,2e3)),r(o(n,l.key,[{key:`${l.key}-0`,title:`${l.title}-0`},{key:`${l.key}-1`,isLeaf:!0,title:`${l.title}-1`}]))},treeData:n})}const L={render:e=>a.createElement(Ie,{...e,Component:v}),args:{onActionClick:void 0,mode:"multipleChoice"},parameters:{actions:{argTypesRegex:"^(on.*|loadData)"},controls:{exclude:/(componentType|theme|treeData)/}}},K={render:e=>a.createElement(P,{gap:"separated"},a.createElement(We,null),a.createElement(R,{...e,treeData:g})),name:"Tree List With Search"},w={render:e=>a.createElement(P,{gap:"separated"},a.createElement(We,null),a.createElement(R,{...e,treeData:Je,showFoundCount:!0})),name:"Tree List With Search - Flat List"},h={render:e=>a.createElement(E,{...e,Component:k}),args:{multiple:!0,treeData:g},parameters:{controls:{exclude:/(componentType|mode|theme)/}}},x={render:e=>a.createElement(E,{...e,Component:k}),args:{treeData:g,showLine:!0}},V={...h,tags:["skip-visual"],render:e=>{const t=a.useMemo(()=>[{key:"all",title:"all",children:dt(400,{depth:3,width:10})}],[]),n=a.useMemo(()=>we(t),[t]);return a.createElement(k,{...e,defaultExpandedKeys:n,treeData:t})},args:{checkParents:!0,multiple:!0},parameters:{controls:{exclude:/(componentType|defaultExpandedKeys|mode|theme|treeData)/}}},q={...h,render:e=>a.createElement(Ie,{...e,Component:k}),args:{onActionClick:void 0,multiple:!0},parameters:{actions:{argTypesRegex:"^(on.*|loadData)"},controls:{exclude:/(componentType|mode|theme|treeData)/}}},A={...h,render:e=>{const[t,n]=a.useState(e.treeData);return a.createElement(k,{...e,onDrop:r=>{var o;(o=e.onDrop)==null||o.call(e,r),n(Ze(r,t))},treeData:t})},args:{blockNode:!0,defaultExpandedKeys:["0-1","0-1-0","0-2-2-0"],draggable:!0,checkParents:!0,treeData:g}},ht=Ke(tt)`
  height: calc(100vh - 48px);
`,W={render:e=>a.createElement(ht,{resizable:!0,resizeHandle:"right",padding:"medium"},a.createElement(E,{...e,Component:k,actionIcon:mt[e.actionIcon]})),args:{multiple:!0,treeData:Qe,onActionClick:e=>alert("simple click to action. Returned node data."),renderAction:({children:e,node:t})=>t.key==="0-0"?a.createElement(a.Fragment,null,e):a.createElement("div",{onClick:n=>n.stopPropagation(),style:{position:"sticky",right:-8}},a.createElement(Ge,{trigger:["click"],selectedItemsKeys:[],overlay:[{key:"edit",children:"Edit",onClick:()=>alert(`EDIT node with name ${t.title}`)},{key:"delete",children:"Delete",onClick:()=>alert(`DELETE node with name ${t.title}`)}]},e))},parameters:{actions:{argTypesRegex:"^(on.*)"},controls:{exclude:/(componentType|mode|theme)/}}},I={args:{source:{tree:Oe.tree}},render:e=>a.createElement(_e,{...e}),parameters:{controls:{include:/(source)/}}};var G,U,j;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice',
    treeData: treeDataMock
  }
}`,...(j=(U=S.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var Q,J,X;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice',
    treeData: treeDataMock,
    showLine: true
  }
}`,...(X=(J=N.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <LoadDataAsynchronously {...args} Component={TreeList} />,
  args: {
    onActionClick: undefined,
    mode: 'multipleChoice'
  },
  parameters: {
    actions: {
      argTypesRegex: '^(on.*|loadData)'
    },
    controls: {
      exclude: /(componentType|theme|treeData)/
    }
  }
}`,...(ee=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;K.parameters={...K.parameters,docs:{...(te=K.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <Space gap="separated">
      <TreeWithSearchInfo />
      <TreeWithSearch {...args} treeData={treeDataMock} />
    </Space>,
  name: 'Tree List With Search'
}`,...(ne=(ae=K.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,oe,se;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <Space gap="separated">
      <TreeWithSearchInfo />
      <TreeWithSearch {...args} treeData={flatListMock} showFoundCount />
    </Space>,
  name: 'Tree List With Search - Flat List'
}`,...(se=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,ie,ce;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeNav} />,
  args: {
    multiple: true,
    treeData: treeDataMock
  },
  parameters: {
    controls: {
      exclude: /(componentType|mode|theme)/
    }
  }
}`,...(ce=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,pe;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <TreeWrapper {...args} Component={TreeNav} />,
  args: {
    treeData: treeDataMock,
    showLine: true
  }
}`,...(pe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,he,fe;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...TreeNavBasic,
  // недетерминированный рендер: виртуализация большого дерева отрисовывается по-разному
  tags: ['skip-visual'],
  render: args => {
    const treeData = React.useMemo(() => {
      return [{
        key: 'all',
        title: 'all',
        children: generateTreeData(400, {
          depth: 3,
          width: 10
        })
      }];
    }, []);
    const defaultExpandedKeys = React.useMemo(() => getKeys(treeData), [treeData]);
    return <TreeNav {...args} defaultExpandedKeys={defaultExpandedKeys} treeData={treeData} />;
  },
  args: {
    checkParents: true,
    multiple: true
  },
  parameters: {
    controls: {
      exclude: /(componentType|defaultExpandedKeys|mode|theme|treeData)/
    }
  }
}`,...(fe=(he=V.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ye,ge,ke;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...TreeNavBasic,
  render: args => <LoadDataAsynchronously {...args} Component={TreeNav} />,
  args: {
    onActionClick: undefined,
    multiple: true
  },
  parameters: {
    actions: {
      argTypesRegex: '^(on.*|loadData)'
    },
    controls: {
      exclude: /(componentType|mode|theme|treeData)/
    }
  }
}`,...(ke=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};var De,Te,Ce;A.parameters={...A.parameters,docs:{...(De=A.parameters)==null?void 0:De.docs,source:{originalSource:`{
  ...TreeNavBasic,
  render: args => {
    const [gData, setGData] = React.useState(args.treeData!);
    return <TreeNav {...args} onDrop={info => {
      args.onDrop?.(info);
      setGData(applyDropToTreeData(info, gData));
    }} treeData={gData} />;
  },
  args: {
    blockNode: true,
    defaultExpandedKeys: ['0-1', '0-1-0', '0-2-2-0'],
    draggable: true,
    checkParents: true,
    treeData: treeDataMock
  }
}`,...(Ce=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var ve,Ee,be;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => <StyledPanel resizable resizeHandle="right" padding="medium">
      <TreeWrapper {...args} Component={TreeNav} actionIcon={ACTION_ICON_MAPPING[args.actionIcon as ActionIconType]} />
    </StyledPanel>,
  args: {
    multiple: true,
    treeData: treeDataMockWithIcons,
    onActionClick: nodeData => alert('simple click to action. Returned node data.'),
    renderAction: ({
      children,
      node
    }) => {
      if (node.key === '0-0') return <>{children}</>;
      return <div onClick={e => e.stopPropagation()} style={{
        position: 'sticky',
        right: -8
      }}>
          <Dropdown trigger={['click']} selectedItemsKeys={[]} overlay={[{
          key: 'edit',
          children: 'Edit',
          onClick: () => alert(\`EDIT node with name \${node.title}\`)
        }, {
          key: 'delete',
          children: 'Delete',
          onClick: () => alert(\`DELETE node with name \${node.title}\`)
        }]}>
            {children}
          </Dropdown>
        </div>;
    }
  },
  parameters: {
    actions: {
      argTypesRegex: '^(on.*)'
    },
    controls: {
      exclude: /(componentType|mode|theme)/
    }
  }
}`,...(be=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:be.source}}};var Se,Ne,Le;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    source: {
      tree: componentColors.tree
    }
  },
  render: args => <ThemedPalette {...args} />,
  parameters: {
    controls: {
      include: /(source)/
    }
  }
}`,...(Le=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};const Ba=["TreeListBasic","TreeListWithLines","TreeListLoadDataAsynchronously","TreeListWithSearch","TreeListWithSearchFlatList","TreeNavBasic","TreeNavWithLines","TreeNavMultipleChoiceWithALotOfData","TreeNavLoadDataAsynchronously","TreeNavDraggable","TreeNavWithIconsInPanel","ColorTokens"];export{I as ColorTokens,S as TreeListBasic,L as TreeListLoadDataAsynchronously,N as TreeListWithLines,K as TreeListWithSearch,w as TreeListWithSearchFlatList,h as TreeNavBasic,A as TreeNavDraggable,q as TreeNavLoadDataAsynchronously,V as TreeNavMultipleChoiceWithALotOfData,W as TreeNavWithIconsInPanel,x as TreeNavWithLines,Ba as __namedExportsOrder,Ha as default};
