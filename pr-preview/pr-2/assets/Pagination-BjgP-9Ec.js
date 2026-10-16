import{R as t,r as M,C as h,ai as D,aE as O,l as U,u as C,H as u,T as I,j as F,Z as x,b as w}from"./iframe-DXVY_al-.js";import{P as H}from"./Pagination-DBsGlZGa.js";import{t as G}from"./ArrowRight-D886n5Yw.js";import{c as B,u as Z}from"./useThemedTextbox-Cq5Mjd4x.js";import{u as q}from"./useTranslation-DdpNEPN3.js";import{S as W}from"./Select-CWiGZ4W9.js";const J=t.forwardRef((e,a)=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:a,...e},t.createElement("path",{fill:M(e.color)||e.color||"currentColor",fillRule:"evenodd",d:"M10.6369 3.3223a.65.65 0 0 1-.0131.919L6.7612 7.995l3.8632 3.7641a.65.65 0 1 1-.9072.9311L5.3756 8.4599a.65.65 0 0 1 .0006-.9316L9.7178 3.309a.65.65 0 0 1 .9191.0131",clipRule:"evenodd"}))),E=t.memo(t.forwardRef((e,a)=>{const{klId:i,testId:o,...l}=e;return t.createElement(J,{"kl-id":i,"data-testid":o,ref:a,...l})}));E.displayName="ArrowLeft";const K=50,Q=["20","50","100"],n=U(),X=h`
  & {
    display: flex;
    align-items: center;
    gap: 4px;

    ::after {
      display: none;
    }

    .ant-pagination-options {
      margin-left: 0;
      white-space: pre;

      .ant-pagination-options-quick-jumper {
        margin-left: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--text--secondary);
        ${D(O.BTR3)};

        input {
          ${B}
          width: 48px;
          margin: 0;
          -moz-appearance: textfield;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }

      ::after {
        display: none;
      }
    }

    .ant-pagination-item,
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-next,
    .ant-pagination-jump-prev {
      color: ${n("unselected.enabled.color")};
      background: transparent;
      border: none;
      border-radius: 6px;
      width: 32px;
      height: 32px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        padding: 0;
        color: ${n("unselected.enabled.color")};
      }

      &:hover {
        background: ${n("unselected.hover.background")};
      }
      &:active {
        background: ${n("unselected.active.background")};
      }
      &:focus-visible {
        box-shadow: ${n("focus.boxShadow")};
      }
      &[aria-disabled="true"], &:has([aria-disabled]) {
        &, &:hover, &:active {
          background: transparent;
          color: ${n("unselected.disabled.color")};
        }
      }
      
      &.ant-pagination-item-active {
        background: ${n("selected.enabled.background")};

        &, a {
          color: ${n("selected.enabled.color")};
        }
        
        &:hover {
          background: ${n("selected.hover.background")};

          &, a {
            color: ${n("selected.hover.color")};
          }
        }
        
        &:active {
          background: ${n("selected.active.background")};

          &, a {
            color: ${n("selected.active.color")};
          }
        }
      }
    }
    &&.ant-pagination-disabled {
      .ant-pagination-item, 
      .ant-pagination-prev,
      .ant-pagination-next,
      .ant-pagination-jump-next,
      .ant-pagination-jump-prev {
        &, &:hover, &:active {
          cursor: not-allowed;
          background: transparent;
          &, a {
            color: ${n("unselected.disabled.color")};
          }

          &.ant-pagination-item-active {
            background: ${n("selected.disabled.background")};
            &, a {
              color: ${n("selected.disabled.color")};
            }
          }
        }
      }
    }
  }
`,Y=h`
  width: 100%;
  display: flex;
  align-items: center;
  height: 32px;
  justify-content: space-between;

  .kl6-pagination-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  & a {
    font-family: inherit !important;
    font-size: inherit !important;
    line-height: inherit !important;
    font-weight: inherit !important;
    font-style: inherit !important;
    letter-spacing: inherit !important;
  }
`,ee=h`
  & .ant-select-item.ant-select-item-option {
    padding-right: 12px
  }
`,te=h`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,ae=u(I)`
  white-space: nowrap;
`,v=e=>{const{total:a,selected:i,showSelected:o,testAttributes:l}=C(e),{t:c}=q(),p=`${c("pagination.total",{count:a})}`;return t.createElement(ae,{...l},o?`${p} / ${c("pagination.selected",{count:i})}`:p)};try{v.displayName="TotalSummary",v.__docgenInfo={description:"",displayName:"TotalSummary",props:{total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"number"}},showSelected:{defaultValue:null,description:"",name:"showSelected",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const ne={light:x.Light,dark:x.Dark},ie=e=>{const{cssConfig:a,...i}=F(e,{componentName:"pagination",defaultValues:{}}),{cssConfig:o}=Z({...e,theme:e.theme&&ne[e.theme]}),l=w.useMemo(()=>({...o,...a}),[o,a]);return{...i,cssConfig:l}},oe=u.div`${Y}`,re=u.span`${te}`,le=u(H).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${X}
`,se=u(W)`${ee}`,de={nextIcon:t.createElement(G,null),prevIcon:t.createElement(E,null),jumpNextIcon:t.createElement(t.Fragment,null,"..."),jumpPrevIcon:t.createElement(t.Fragment,null,"...")},ue=(e,a)=>a.map(i=>({label:`${i} / ${e("pagination.page")}`,value:parseInt(i)})),ce=({pageNumber:e})=>t.createElement(re,{onClick:a=>{a.stopPropagation()},"aria-disabled":!0},e),pe=8,me=({current:e=1,pageSize:a=K,pageSizeOptions:i=Q,total:o=0,totalRoot:l,selected:c=0,showSelected:p=!0,onChange:m,onShowSizeChange:S,showSizeChanger:V=!1,jumper:_=!1,disabled:b=!1,cssConfig:$,hideOnSinglePage:k=!1,cursor:P=!1,simple:z=!1,testAttributes:L,...j})=>{const g=l||o;if(k&&g<=a)return null;const{t:y}=q();w.useEffect(()=>{const r=document.querySelector(".ant-pagination-options-quick-jumper input");r&&r.setAttribute("type","number")},[]);const N=w.useMemo(()=>ue(y,i),[y,i]),A=(r,s,d)=>{const f=P&&r>=pe&&r===Math.ceil(g/Number(a))&&r-e>3;return s==="page"?f?t.createElement(ce,{pageNumber:r}):t.createElement(I,null,d):d},R=r=>{const s=Number(r),d=Math.max(1,Math.ceil(g/s)),f=e>d?d:e;m==null||m(f,s),S&&S(f,s)};return t.createElement(oe,{"aria-disabled":b,...L},!z&&t.createElement(v,{total:o,showSelected:p,selected:c,testId:"total",klId:"total"}),t.createElement("div",{className:"kl6-pagination-right"},!(k&&o<=a)&&t.createElement(le,{showQuickJumper:_,showSizeChanger:!1,itemRender:A,current:e,pageSize:a,total:g,showLessItems:!0,disabled:b||a>=o,onChange:m,cssConfig:$,locale:{jump_to:y("pagination.goto")||"Go to page",page:""},...de,...j}),V&&t.createElement(se,{testId:"select",value:a,options:N,onChange:R,disabled:b,placement:"topLeft",virtual:!1})))},T=e=>{const a=ie(e),i=C(a);return t.createElement(me,{...i})};try{T.displayName="Pagination",T.__docgenInfo={description:"",displayName:"Pagination",props:{current:{defaultValue:{value:"1"},description:"Current page number",name:"current",required:!1,type:{name:"number"}},pageSize:{defaultValue:{value:"50"},description:"Number of data items per page",name:"pageSize",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},hideOnSinglePage:{defaultValue:{value:"false"},description:"Whether to hide pager on single page",name:"hideOnSinglePage",required:!1,type:{name:"boolean"}},pageSizeOptions:{defaultValue:{value:"['20', '50', '100']"},description:"Specify the sizeChanger options",name:"pageSizeOptions",required:!1,type:{name:"string[]"}},showSizeChanger:{defaultValue:{value:"false"},description:"Determine whether to show pageSize select, it will be true when total > 50",name:"showSizeChanger",required:!1,type:{name:"boolean"}},showLessItems:{defaultValue:null,description:"Show less pagination items: 3 or 5",name:"showLessItems",required:!1,type:{name:"boolean"}},jumper:{defaultValue:{value:"false"},description:"Determine whether you can jump to pages directly",name:"jumper",required:!1,type:{name:"boolean"}},total:{defaultValue:{value:"0"},description:`Total number of data items, including children, if data is tree-like structure.
Set in table if server pagination is used.`,name:"total",required:!1,type:{name:"number"}},totalRoot:{defaultValue:null,description:`Total number of root data items.
Used to calculate the correct number of pages if data is tree-like structure.
Equals to **total** if data is a flat array and should be ignored`,name:"totalRoot",required:!1,type:{name:"number"}},selected:{defaultValue:{value:"0"},description:"Number of selected data items",name:"selected",required:!1,type:{name:"number"}},showSelected:{defaultValue:{value:"true"},description:"Show number of selected data items",name:"showSelected",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments",name:"onChange",required:!1,type:{name:"((page: number, pageSize: number) => void)"}},onShowSizeChange:{defaultValue:null,description:"Called when pageSize is changed",name:"onShowSizeChange",required:!1,type:{name:"((current: number, size: number) => void)"}},cursor:{defaultValue:{value:"false"},description:"Cursor pagination",name:"cursor",required:!1,type:{name:"boolean"}},simple:{defaultValue:{value:"false"},description:"Simple Table mode. Without total, size changer and quick jumper",name:"simple",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{K as D,T as P,v as T,Q as a,ue as g,E as t};
