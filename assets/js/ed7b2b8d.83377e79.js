"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{25478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(85893),i=t(11151);const s={sidebar_position:1},a="Design",c={id:"system-architecture/design",title:"Design",description:"User-Interface",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-synesthesia-reading-app/docs/system-architecture/design",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Elijah Bigham",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-synesthesia-reading-app/docs/category/system-architecture"},next:{title:"Development Environment",permalink:"/project-synesthesia-reading-app/docs/system-architecture/development-environment"}},o={},d=[{value:"User-Interface",id:"user-interface",level:2},{value:"Technology - User-Interface",id:"technology---user-interface",level:3},{value:"Class Diagram - User-Interface",id:"class-diagram---user-interface",level:3},{value:"Design Mock-Ups",id:"design-mock-ups",level:3},{value:"Backend API",id:"backend-api",level:2},{value:"Technology - Backend",id:"technology---backend",level:3},{value:"Class Diagram - Backend",id:"class-diagram---backend",level:3}];function l(e){const n={h1:"h1",h2:"h2",h3:"h3",img:"img",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"design",children:"Design"}),"\n",(0,r.jsx)(n.h2,{id:"user-interface",children:"User-Interface"}),"\n",(0,r.jsx)(n.h3,{id:"technology---user-interface",children:"Technology - User-Interface"}),"\n",(0,r.jsx)(n.p,{children:"User-Interface created using ReactJS, Tailwind, and mUI. Front-end scripting executed using ReactJS."}),"\n",(0,r.jsx)(n.h3,{id:"class-diagram---user-interface",children:"Class Diagram - User-Interface"}),"\n",(0,r.jsx)(n.mermaid,{value:'classDiagram\n  App "1" *-- "1" Login\n  App : + user\n  App : + profile\n  App : - colors\n\n  App "1" *-- "1" Calibration\n  Calibration: + colors \n\n  App "1" *-- "1" DocumentLibrary\n  DocumentLibrary : + documentList\n  DocumentLibrary : - isUploading \n  DocumentLibrary : - handleUpload()\n\n  DocumentLibrary "1" *-- "1" DocumentGrid\n  DocumentLibrary "1" *-- "1" DocumentActionBar\n\n  DocumentActionBar "1" *-- "1" UploadDocument\n  DocumentActionBar: + setUploading()\n  UploadDocument: + setUploading()\n  UploadDocument "1" *-- "1" Input\n  Input: - type\n  Input: + handleUpload()\n\n\n  DocumentGrid *-- Document\n\n  DocumentLibrary "1" *-- "1" Reader\n  Reader "1" <|-- "1" Document\n\n  Document: + name\n  Document: + id\n\n  Reader: - textPages\n  Reader: - currentPage\n  Reader: - goToNextPage()\n  Reader: - goToPrevPage()\n  Reader: - calculateWordsPerPage()\n  Reader: - distributeTextToPages()\n\n  Reader "1" *-- "1" ReaderActionBar\n  ReaderActionBar: - goToNextPage()\n  ReaderActionBar: - goToPrevPage()\n  Reader "1" *-- "10...*" Word\n\n  Word: - word\n  Word: - RGB\n\n\n\n\n\n  \n  \n  '}),"\n",(0,r.jsx)(n.h3,{id:"design-mock-ups",children:"Design Mock-Ups"}),"\n",(0,r.jsx)(n.p,{children:"Welcome, Login, & Sign Up Screens"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Welcome"}),(0,r.jsx)(n.th,{children:"Login"}),(0,r.jsx)(n.th,{children:"Sign Up"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{alt:"Welcome UI",src:t(6759).Z+"",width:"408",height:"708"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{alt:"Login UI",src:t(12039).Z+"",width:"400",height:"700"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{alt:"Sign Up UI",src:t(49283).Z+"",width:"400",height:"700"})})]})})]}),"\n",(0,r.jsx)(n.p,{children:"Document Library Screen"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Doc Screen",src:t(58977).Z+"",width:"400",height:"700"})}),"\n",(0,r.jsx)(n.p,{children:"Document Reading Screen"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Reading"}),(0,r.jsx)(n.th,{children:"Tap to bring up Menu"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{alt:"Reading w/o Menu",src:t(80180).Z+"",width:"400",height:"700"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{alt:"Documenting w/ Menu",src:t(51207).Z+"",width:"400",height:"700"})})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"backend-api",children:"Backend API"}),"\n",(0,r.jsx)(n.h3,{id:"technology---backend",children:"Technology - Backend"}),"\n",(0,r.jsx)(n.p,{children:"Backend API written in PHP using the Laravel framework."}),"\n",(0,r.jsx)(n.h3,{id:"class-diagram---backend",children:"Class Diagram - Backend"}),"\n",(0,r.jsx)(n.mermaid,{value:'classDiagram\n  Model <|-- User\n  Model <|-- ColorProfile\n  Model <|-- Document\n\n  User : +int id\n  User : +string name\n  User : -ColorProfile colorProfile\n  User : -Document[] documents\n  User : +colorProfile()\n  User : +documents()\n  ColorProfile : +Map[string,string] hexCodes\n  ColorProfile : +add(JSON object)\n  ColorProfile : +update(JSON object)\n  ColorProfile : +remove(string key)\n  Document : +int id\n  Document : +int user_id\n  Document : +int size\n  Document : +string location\n  Document : +string[] annotations\n  Document : +timestamp time_created\n  Document : +timestamp last_modified\n  Document : +file download()\n  Document : +update()\n  Document : +delete()\n\n  User "1" *-- "1" ColorProfile\n  User "1" *-- "0..*" Document'})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},12039:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Login-3bb49f5696e41a5ea2600a83822d461d.png"},49283:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/SignUp-8182ec391c36f4f27b28d981798ae40c.png"},58977:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/docs-4f9a7b848c8c3838565fa3fea3378e37.png"},80180:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/read-doc-1c97a98a860ac05a2f51027067cd9891.png"},51207:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/read-doc2-ff9fb171d376edfdd6f3c9f842851b9a.png"},6759:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/welcome-97509e2a1a763d78076858dbed695cbd.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);