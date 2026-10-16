import{H as e,R as s,T as o,M as t}from"./iframe-kzbRZKTh.js";import{w as u}from"./withMeta-D4lXFYrc.js";const d={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},m="Panel",f="Панель — сервисный компонент, являющийся контейнером для контента. Панель может встраиваться в страницу или сайдбар. Панель может быть горизонтальной или вертикальной. Панель может иметь статическую ширину или растягиваться.",p="Панель может располагаться на уровне контента и при раскрытии сдвигать контентную область. Панель может располагаться над уровнем контента и при раскрытии перекрывать контентную область. Например, в графах панель находится на уровне контролов и сдвигает их, а также над уровнем самого графа и перекрывает его.",c="",g="",l={dod:d,component:m,description:f,usage:p,designLink:c,pixsoView:g},i=e.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-self: normal;
  margin: calc(var(--spacing--padding_xl) * -1);
`,r=e.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-self: normal;

  &.footer,
  &.header {
    flex: 0;
  }
`,n=e.div`
  padding: var(--spacing--padding_l);
  flex: 1;
  background-image: repeating-linear-gradient(135deg, #f9f9f9, #f9f9f9 10px, transparent 10px, transparent 20px);
`,y=s.createElement(o,null,"Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis."),b={parameters:{badges:[t.stable,t.reviewedByDesign],docs:{page:u(l)},design:l.pixsoView},argTypes:{initialSize:{control:{type:"range",min:130,max:900,step:1}},elementAfter:{control:!1},sectionBottom:{control:!1},padding:{control:{type:"radio"},options:["large","medium"]}},args:{children:y,testId:"panel-test-id",klId:"panel-kl-id",closable:!0,resizable:!0,title:"Panel title",padding:"large"}};try{i.displayName="PanelsLayout",i.__docgenInfo={description:"",displayName:"PanelsLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.displayName="PanelsCol",r.__docgenInfo={description:"",displayName:"PanelsCol",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{n.displayName="OtherArea",n.__docgenInfo={description:"",displayName:"OtherArea",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{n as O,i as P,r as a,y as m,b as s};
