import{T as Ie}from"./Palette-BlbcEcWI.js";import{S as l}from"./Warnings-CpCCUrtG.js";import{r as p}from"./StoryComponents-eJOs43SN.js";import{B as We}from"./Button-Cmmczys_.js";import{F as Ke}from"./Field-BDGZBkAs.js";import{c as k,R as e,a as B,P as u,T as $e}from"./iframe-DNVAFsND.js";import{U as d}from"./Uploader-DXVlkJz-.js";import{u as Ae}from"./Uploader.stories-CNK2tvdm.js";import{S as Oe}from"./Sidebar-D74-L6i_.js";import"./Tag-CWq2qS_r.js";import"./TextReducer-CcQuVU5v.js";import"./index-Bdb3sctg.js";import"./omit-DXgDXInf.js";import"./type-0ivux5bP.js";import"./colors-C_cfvQV4.js";import"./wave-BJ1hX2v5.js";import"./Group-DazgOZHb.js";import"./FormLabel-DZAlZE9m.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-AC6gIdGc.js";import"./Dropdown-JGfdkU0i.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D4FdOSTr.js";import"./useMergedState-ynS__ke0.js";import"./focus-DFzoFYVL.js";import"./ArrowRight-GlR7Ouxo.js";import"./Toggle-B1y7zhcL.js";import"./AdditionalContent-D9yWR_3E.js";import"./HelpMessage-C_F_6WkG.js";import"./Loader-DssZ-VPI.js";import"./index-DMLUsSjF.js";import"./v4-BoP187Zn.js";import"./button-BVzDJ1xK.js";import"./Help-CYToz9bv.js";import"./Markdown-kDLujRI3.js";import"./index-uXb6Xqmd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./regeneratorRuntime-Deiwfhnr.js";import"./pickAttrs-C-RfKKf4.js";import"./Upload-8IaUmWfp.js";import"./Delete-DvN4CmC2.js";import"./Download2-BjQqCMgM.js";import"./Menu2-HU7Yq2j9.js";import"./Reload-Y_xz2gDP.js";import"./FileItem-BgT5y-l1.js";import"./useTranslation-Dg1XEziH.js";import"./propPresentation-Ca9RmEyN.js";import"./blocks-DC9vndXh.js";import"./index-xI5_I1Dm.js";import"./meta-DPA9fCsy.js";import"./PortalWrapper-Bu_UBFRw.js";import"./Portal-CRwjbGuR.js";import"./useForceUpdate-CWieNRQI.js";import"./TextWithTruncation-D7TECrLB.js";const c=1024,S=1024*c,M={error:"Upload failed. Try again",name:"malware-sample.zip",size:4*S,status:"error",uid:"file-error"},Ne={name:"events.csv",percent:45,size:12*S,status:"uploading",uid:"file-uploading"},je={name:"notes.txt",size:18*c,uid:"file-selected"},f={name:"policy.xml",size:96*c,status:"done",uid:"file-done"},R={name:"screenshot.png",size:860*c,status:"success",uid:"file-success"},Ve=[M,Ne,je,f,R],Xe={name:"quarterly-consolidated-endpoint-protection-policy-report-for-central-northwestern-and-volga-federal-district-branches-with-exceptions-register-and-attachments.pdf",size:2*S,status:"done",uid:"file-long-name"},Ze={name:"backup.tar",size:48*S,status:"done",uid:"file-downloadable",url:"https://example.com/backup.tar"},qe=Array.from({length:10},(t,a)=>({name:`attachment-${String(a+1).padStart(2,"0")}.pdf`,size:(a+1)*120*c,status:"done",uid:`overflow-${a+1}`})),Ge=[{name:"large-dump.bin",size:500*S,status:"done",uid:"file-oversized"},f],Je={name:"empty.dat",size:0,status:"done",uid:"file-zero-size"},Qe={error:"The server rejected the file because the digital signature does not match the expected certificate chain",name:"import-failed.json",size:32*c,status:"error",uid:"file-long-error"},He={name:"scan-results.log",size:640*c,status:"uploading",uid:"file-uploading-no-percent"},Ye=[f],et=[Xe,f],tt=[Ne,He],at=[Ze,R],rt=[f,R,M],ot=[Qe],nt=[Je],it=[He],lt=[f,M],da={title:"Hexa UI Components/Uploader/Stories",component:d,tags:["!autodocs"],...Ae};function r({fileList:t,onChange:a,...o}){const[s,n]=e.useState(t);return e.useEffect(()=>{n(t)},[t]),e.createElement(d,{...o,fileList:s,onChange:i=>{n(i.fileList),a==null||a(i)}})}const g={render:t=>p(["small","medium"].map(a=>({label:a,content:e.createElement(d,{...t,size:a})}))),argTypes:{size:{control:!1}}},h={...g,args:{disabled:!0}},y={render:t=>e.createElement(d,{...t}),args:{description:"1 file, size up to 100KB",maxCount:1,maxTotalSize:100*1024}},x={render:t=>{const a=e.useRef(),[o,s]=e.useState([]);return e.createElement("div",{style:{width:"100%"}},e.createElement(B,{closable:!1,mode:"info"},e.createElement(u,null,"You can disable the automatic upload by setting ",e.createElement(l,null,"manual")," prop and start the upload of the selected files manually, e.g. by click on your own button."),e.createElement(u,null,"Вы можете отключить автоматическую загрузку, установив параметр ",e.createElement(l,null,"manual"),", и начать загрузку выбранных файлов вручную, например, нажав на свою кнопку.")),e.createElement(d,{...t,ref:a,onChange:n=>{var i;s(n.fileList),(i=t.onChange)==null||i.call(t,n)},style:{marginTop:16}}),e.createElement(We,{loading:o.some(n=>n.status==="uploading"),onClick:()=>a.current.upload(),style:{marginTop:16}},"Upload"))},args:{description:"The files will be uploaded to the server after clicking on the Upload button",manual:!0}};function st({children:t,style:a,...o}){return e.createElement("div",{...o,style:{border:"1px solid grey",height:520,padding:20,position:"relative",...a}},e.createElement($e,{style:{background:"white",padding:"0 5px",position:"absolute",left:0,top:0,transform:"translate(10px, -50%"}},"Container"),t)}const z={render:({fileList:t,...a})=>{const[o,s]=e.useState(t);return e.createElement("div",{style:{width:"100%"}},e.createElement(B,{closable:!1,mode:"info"},e.createElement(u,null,"You can gain full control over the file list if needed. Enable ",e.createElement(l,null,"manual"),"and pass the necessary data to ",e.createElement(l,null,"fileList")," prop. You may want it if you need",e.createElement("ul",{style:{marginBottom:0}},e.createElement("li",null,"to display data previously got from backend;"),e.createElement("li",null,"a custom handler to upload the selected files."))),e.createElement(u,null,"Вы можете самостоятельно управлять списком файлов, если необходимо. Включите ",e.createElement(l,null,"manual"),"и передайте необходимые данные в проп ",e.createElement(l,null,"fileList"),". Это может понадобится, если вам",e.createElement("ul",{style:{marginBottom:0}},e.createElement("li",null,"нужно отобразить данные ранее полученные от бэкенда;"),e.createElement("li",null,"нужен кастомный обработчик для загрузки файлов.")))),e.createElement(d,{...a,fileList:o,onChange:n=>{var i;s(n.fileList),(i=a.onChange)==null||i.call(a,n)},style:{marginTop:16}}))},args:{fileList:[{uid:"xxx_1",name:"file_name_1.png",size:500*1024*1024,status:"success"},{uid:"xxx_2",name:"file_name_2.png",percent:45,size:150*1024,status:"uploading"}],manual:!0,maxFileSize:320*1024}},F={render:()=>{const[t,a]=e.useState([]),[o,s]=e.useState(void 0);function n(){t.length===0?s("Upload a file to conitniue"):s("Something went wrong. Try again")}return e.createElement(Oe,{footerLeft:e.createElement(e.Fragment,null,e.createElement(We,{onClick:n},"Import")),size:"small",title:"Import a policy",visible:!0},e.createElement(Ke,{control:e.createElement(d,{description:"Select a file to import a policy",fileList:t,manual:!0,maxCount:1,onChange:i=>{s(void 0),a(i.fileList)},validationStatus:o?"error":void 0}),message:o}))}},b={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(B,{closable:!1,mode:"info"},e.createElement(u,null,"You can extend the height of ",e.createElement(l,null,"Uploader")," to the height of the container by setting ",e.createElement(l,null,"fullHeight")," prop."),e.createElement(u,null,"Вы можете увеличить высоту ",e.createElement(l,null,"Uploader")," до высоты контейнера, установив параметр ",e.createElement(l,null,"fullHeight"),".")),e.createElement(st,{style:{marginTop:16}},e.createElement(d,{...t}))),args:{fullHeight:!0}},L={render:t=>e.createElement(r,{...t}),args:{description:"PDF, XML, CSV and ZIP",fileList:Ve,manual:!0,maxCount:8,maxTotalSize:320*1024}},m={render:t=>p(["small","medium"].map(a=>({label:a,content:e.createElement(r,{...t,size:a})}))),argTypes:{size:{control:!1}},args:{description:"Up to 8 files",fileList:Ve,manual:!0,maxCount:8,maxTotalSize:320*1024}},E={...m,args:{...m.args,disabled:!0}},T={render:t=>e.createElement(r,{...t}),args:{description:"1 file, size up to 100KB",fileList:Ye,manual:!0,maxCount:1,maxTotalSize:100*1024}},C={render:t=>p([!0,!1].map(a=>({label:`truncateFileName = ${a}`,content:e.createElement("div",{style:{maxWidth:480,width:"100%"}},e.createElement(r,{...t,truncateFileName:a}))}))),argTypes:{truncateFileName:{control:!1}},args:{description:"Long file names",fileList:et,manual:!0}},v={render:t=>p([!0,!1].map(a=>({label:`showProgress = ${a}`,content:e.createElement(r,{...t,showProgress:a})}))),argTypes:{showProgress:{control:!1}},args:{description:"Upload in progress",fileList:tt,manual:!0}},w={render:t=>e.createElement(r,{...t,onDownload:a=>{var o;(o=t.onDownload)==null||o.call(t,a)},onDownloadAll:()=>{var a;(a=t.onDownloadAll)==null||a.call(t)}}),args:{description:"Files available for download",fileList:at,manual:!0,maxCount:4}},U={render:t=>e.createElement(r,{...t}),args:{description:"The file list is limited to 287px and scrolls",fileList:qe,manual:!0,maxCount:12,maxTotalSize:320*1024}},P={render:t=>p(["small","medium"].map(a=>({label:a,content:e.createElement(r,{...t,size:a})}))),argTypes:{size:{control:!1}},args:{description:"Maximum number of files reached",fileList:rt,manual:!0,maxCount:3}},_={render:t=>p([{label:"oversized files",content:e.createElement(r,{...t,description:"Each file up to 100 KB",fileList:Ge,maxCount:void 0,maxFileSize:100,maxTotalSize:void 0})},{label:"long error",content:e.createElement(r,{...t,description:"Retry or remove the file",fileList:ot,maxCount:void 0,maxTotalSize:void 0})},{label:"zero size",content:e.createElement(r,{...t,description:"Empty file",fileList:nt,maxCount:void 0,maxTotalSize:void 0})},{label:"uploading without percent",content:e.createElement(r,{...t,description:"Progress is hidden when percent is empty",fileList:it,maxCount:void 0,maxTotalSize:void 0})},{label:"without description",content:e.createElement(r,{...t,description:void 0,fileList:lt,maxCount:void 0,maxTotalSize:void 0})},{label:"validationStatus with files",content:e.createElement(r,{...t,description:"Select a file to continue",fileList:Ye,maxCount:void 0,maxTotalSize:void 0,validationStatus:"error"})}])},D={args:{source:{upload:k.upload,upload_header:k.upload_header,upload_file:k.upload_file}},render:t=>e.createElement(Ie,{...t})};var W,N,V;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => renderVariants((['small', 'medium'] as const).map(size => ({
    label: size,
    content: <Uploader {...args} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(V=(N=g.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var H,Y,I;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Size,
  args: {
    disabled: true
  }
}`,...(I=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:I.source}}};var K,$,A;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <Uploader {...args} />,
  args: {
    description: '1 file, size up to 100KB',
    maxCount: 1,
    maxTotalSize: 100 * 1024
  }
}`,...(A=($=y.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var O,j,X;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const ref = React.useRef<any>();
    const [files, setFiles] = React.useState<UploadFile[]>([]);
    return <div style={{
      width: '100%'
    }}>
        <SectionMessage closable={false} mode="info">
          <P>
            You can disable the automatic upload by setting <StyledTag>manual</StyledTag> prop and start
            the upload of the selected files manually, e.g. by click on your own button.
          </P>
          <P>
            Вы можете отключить автоматическую загрузку, установив параметр <StyledTag>manual</StyledTag>,
            и начать загрузку выбранных файлов вручную, например, нажав на свою кнопку.
          </P>
        </SectionMessage>
        <Uploader {...args} ref={ref} onChange={info => {
        setFiles(info.fileList);
        args.onChange?.(info);
      }} style={{
        marginTop: 16
      }} />
        <Button loading={files.some(x => x.status === 'uploading')} onClick={() => ref.current.upload()} style={{
        marginTop: 16
      }}>
          Upload
        </Button>
      </div>;
  },
  args: {
    description: 'The files will be uploaded to the server after clicking on the Upload button',
    manual: true
  }
}`,...(X=(j=x.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var Z,q,G;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: ({
    fileList,
    ...args
  }) => {
    const [files, setFiles] = React.useState<UploadFile[] | undefined>(fileList);
    return <div style={{
      width: '100%'
    }}>
        <SectionMessage closable={false} mode="info">
          <P>
            You can gain full control over the file list if needed. Enable <StyledTag>manual</StyledTag>
            and pass the necessary data to <StyledTag>fileList</StyledTag> prop. You may want it if you need
            <ul style={{
            marginBottom: 0
          }}>
              <li>to display data previously got from backend;</li>
              <li>a custom handler to upload the selected files.</li>
            </ul>
          </P>
          <P>
            Вы можете самостоятельно управлять списком файлов, если необходимо. Включите <StyledTag>manual</StyledTag>
            и передайте необходимые данные в проп <StyledTag>fileList</StyledTag>. Это может понадобится,
            если вам
            <ul style={{
            marginBottom: 0
          }}>
              <li>нужно отобразить данные ранее полученные от бэкенда;</li>
              <li>нужен кастомный обработчик для загрузки файлов.</li>
            </ul>
          </P>
        </SectionMessage>

        <Uploader {...args} fileList={files} onChange={info => {
        setFiles(info.fileList);
        args.onChange?.(info);
      }} style={{
        marginTop: 16
      }} />
      </div>;
  },
  args: {
    fileList: [{
      uid: 'xxx_1',
      name: 'file_name_1.png',
      size: 500 * 1024 * 1024,
      status: 'success'
    }, {
      uid: 'xxx_2',
      name: 'file_name_2.png',
      percent: 45,
      size: 150 * 1024,
      status: 'uploading'
    }],
    manual: true,
    maxFileSize: 320 * 1024
  }
}`,...(G=(q=z.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,ee;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = React.useState<UploadFile[]>([]);
    const [error, setError] = React.useState<string | undefined>(undefined);
    function onSubmit() {
      if (files.length === 0) {
        setError('Upload a file to conitniue');
      } else {
        setError('Something went wrong. Try again');
      }
    }
    return <Sidebar footerLeft={<>
            <Button onClick={onSubmit}>Import</Button>
          </>} size="small" title="Import a policy" visible>
        <Field control={<Uploader description="Select a file to import a policy" fileList={files} manual maxCount={1} onChange={info => {
        setError(undefined);
        setFiles(info.fileList);
      }} validationStatus={error ? 'error' : undefined} />} message={error} />
      </Sidebar>;
  }
}`,...(ee=(Q=F.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,ae,re;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100%'
  }}>
      <SectionMessage closable={false} mode="info">
        <P>
          You can extend the height of <StyledTag>Uploader</StyledTag> to the height of the container by
          setting <StyledTag>fullHeight</StyledTag> prop.
        </P>
        <P>
          Вы можете увеличить высоту <StyledTag>Uploader</StyledTag> до высоты контейнера, установив
          параметр <StyledTag>fullHeight</StyledTag>.
        </P>
      </SectionMessage>
      <Container style={{
      marginTop: 16
    }}>
        <Uploader {...args} />
      </Container>
    </div>,
  args: {
    fullHeight: true
  }
}`,...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ne,ie;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <ControlledUploader {...args} />,
  args: {
    description: 'PDF, XML, CSV and ZIP',
    fileList: statusFileList,
    manual: true,
    maxCount: 8,
    maxTotalSize: 320 * 1024
  }
}`,...(ie=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,se,de;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => renderVariants((['small', 'medium'] as const).map(size => ({
    label: size,
    content: <ControlledUploader {...args} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  },
  args: {
    description: 'Up to 8 files',
    fileList: statusFileList,
    manual: true,
    maxCount: 8,
    maxTotalSize: 320 * 1024
  }
}`,...(de=(se=m.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,me,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...SizeWithFiles,
  args: {
    ...SizeWithFiles.args,
    disabled: true
  }
}`,...(ue=(me=E.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,fe,ge;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <ControlledUploader {...args} />,
  args: {
    description: '1 file, size up to 100KB',
    fileList: singleDoneFileList,
    manual: true,
    maxCount: 1,
    maxTotalSize: 100 * 1024
  }
}`,...(ge=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Se,he,ye;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: args => renderVariants([true, false].map(truncateFileName => ({
    label: \`truncateFileName = \${truncateFileName}\`,
    content: <div style={{
      maxWidth: 480,
      width: '100%'
    }}>
          <ControlledUploader {...args} truncateFileName={truncateFileName} />
        </div>
  })), true),
  argTypes: {
    truncateFileName: {
      control: false
    }
  },
  args: {
    description: 'Long file names',
    fileList: longNameFileList,
    manual: true
  }
}`,...(ye=(he=C.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var xe,ze,Fe;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => renderVariants([true, false].map(showProgress => ({
    label: \`showProgress = \${showProgress}\`,
    content: <ControlledUploader {...args} showProgress={showProgress} />
  })), true),
  argTypes: {
    showProgress: {
      control: false
    }
  },
  args: {
    description: 'Upload in progress',
    fileList: progressFileList,
    manual: true
  }
}`,...(Fe=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:Fe.source}}};var be,Le,Ee;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => <ControlledUploader {...args} onDownload={file => {
    args.onDownload?.(file);
  }} onDownloadAll={() => {
    args.onDownloadAll?.();
  }} />,
  args: {
    description: 'Files available for download',
    fileList: downloadableFileList,
    manual: true,
    maxCount: 4
  }
}`,...(Ee=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var Te,Ce,ve;U.parameters={...U.parameters,docs:{...(Te=U.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: args => <ControlledUploader {...args} />,
  args: {
    description: 'The file list is limited to 287px and scrolls',
    fileList: overflowFileList,
    manual: true,
    maxCount: 12,
    maxTotalSize: 320 * 1024
  }
}`,...(ve=(Ce=U.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var we,Ue,Pe;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => renderVariants((['small', 'medium'] as const).map(size => ({
    label: size,
    content: <ControlledUploader {...args} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  },
  args: {
    description: 'Maximum number of files reached',
    fileList: maxCountFileList,
    manual: true,
    maxCount: 3
  }
}`,...(Pe=(Ue=P.parameters)==null?void 0:Ue.docs)==null?void 0:Pe.source}}};var _e,De,ke;_.parameters={..._.parameters,docs:{...(_e=_.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: args => renderVariants([{
    label: 'oversized files',
    content: <ControlledUploader {...args} description="Each file up to 100 KB" fileList={oversizedFileList} maxCount={undefined} maxFileSize={100} maxTotalSize={undefined} />
  }, {
    label: 'long error',
    content: <ControlledUploader {...args} description="Retry or remove the file" fileList={longErrorFileList} maxCount={undefined} maxTotalSize={undefined} />
  }, {
    label: 'zero size',
    content: <ControlledUploader {...args} description="Empty file" fileList={zeroSizeFileList} maxCount={undefined} maxTotalSize={undefined} />
  }, {
    label: 'uploading without percent',
    content: <ControlledUploader {...args} description="Progress is hidden when percent is empty" fileList={uploadingWithoutPercentFileList} maxCount={undefined} maxTotalSize={undefined} />
  }, {
    label: 'without description',
    content: <ControlledUploader {...args} description={undefined} fileList={filesWithoutDescription} maxCount={undefined} maxTotalSize={undefined} />
  }, {
    label: 'validationStatus with files',
    content: <ControlledUploader {...args} description="Select a file to continue" fileList={singleDoneFileList} maxCount={undefined} maxTotalSize={undefined} validationStatus="error" />
  }], true)
}`,...(ke=(De=_.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};var Be,Me,Re;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    source: {
      upload: componentColors.upload,
      upload_header: componentColors.upload_header,
      upload_file: componentColors.upload_file
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(Re=(Me=D.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};const ca=["Size","Disabled","SingleFile","ManualUpload","ControlOverFileList","Validation","FullHeight","FileStatuses","SizeWithFiles","DisabledWithFiles","SingleFileSelected","TruncateFileName","ShowProgress","DownloadableFiles","FileListOverflow","MaxCountReached","EdgeCases","ColorTokens"];export{D as ColorTokens,z as ControlOverFileList,h as Disabled,E as DisabledWithFiles,w as DownloadableFiles,_ as EdgeCases,U as FileListOverflow,L as FileStatuses,b as FullHeight,x as ManualUpload,P as MaxCountReached,v as ShowProgress,y as SingleFile,T as SingleFileSelected,g as Size,m as SizeWithFiles,C as TruncateFileName,F as Validation,ca as __namedExportsOrder,da as default};
