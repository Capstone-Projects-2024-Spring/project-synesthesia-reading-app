"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{25478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(85893),i=t(11151);const o={sidebar_position:1},r=void 0,c={id:"system-architecture/design",title:"design",description:"User-Interface",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-synesthesia-reading-app/docs/system-architecture/design",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Elijah Bigham",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-synesthesia-reading-app/docs/category/system-architecture"},next:{title:"Development Environment",permalink:"/project-synesthesia-reading-app/docs/system-architecture/development-environment"}},a={},d=[{value:"User-Interface",id:"user-interface",level:2},{value:"Technology",id:"technology",level:3},{value:"Class Diagram",id:"class-diagram",level:3},{value:"Design Mock-Ups",id:"design-mock-ups",level:3},{value:"Backend API",id:"backend-api",level:2},{value:"Technology",id:"technology-1",level:3},{value:"Class Diagram",id:"class-diagram-1",level:3}];function l(e){const n={h2:"h2",h3:"h3",img:"img",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"user-interface",children:"User-Interface"}),"\n",(0,s.jsx)(n.h3,{id:"technology",children:"Technology"}),"\n",(0,s.jsx)(n.p,{children:"User-Interface created using ReactJS, Tailwind, and mUI. Front-end scripting executed using ReactJS."}),"\n",(0,s.jsx)(n.h3,{id:"class-diagram",children:"Class Diagram"}),"\n",(0,s.jsx)(n.mermaid,{value:'classDiagram\n  App *-- Account\n  App : - Account user\n   \n  Account : + colorWeights\n  Account : + documentList\n  Account : + getUserData()\n  Account *-- Login\n  Login : - Credentials userCredentials\n  Login : + checkCredentials()\n  Account *-- SignUp\n  SignUp : - Credentials ruserCredentials\n  SignUp : + registerUser()\n  Account *-- Credentials\n  Credentials : + username\n  Credentials : + password\n\n  App *-- Documents\n  Documents : + documentList\n  Documents *-- Download\n  Download: + saveToDevice(Document)\n  Download o-- "1" Document\n\n  Documents *-- Upload\n  Upload: + pushToServer(Document)\n  Upload o-- "1" Document\n\n  Documents *-- Read\n  Read: - lazyLoadDoc(Document)\n  Read o-- "1" Document\n\n  Document: + documentText\n  Document: - Array<Note> noteList\n\n  Document *-- "0...*" Note\n  Note: + String text\n  Note: - int position\n  \n  Document: + colorText(text)\n  Document: - hightlightText(start, stop)\n  Document: - makeNote(text)\n  App *-- Calibrate\n  Calibrate: Array<Integer> letterHues\n  Calibrate: ColorModel userColorModel\n  Calibrate: updateRemoteModel()\n  Calibrate o-- "1" ColorModel\n  ColorModel: weights\n  \n  \n  '}),"\n",(0,s.jsx)(n.h3,{id:"design-mock-ups",children:"Design Mock-Ups"}),"\n",(0,s.jsx)(n.p,{children:"Welcome, Login, & Sign Up Screens"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Welcome"}),(0,s.jsx)(n.th,{children:"Login"}),(0,s.jsx)(n.th,{children:"Sign Up"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{alt:"Welcome UI",src:t(6759).Z+"",width:"408",height:"708"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{alt:"Login UI",src:t(12039).Z+"",width:"400",height:"700"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{alt:"Sign Up UI",src:t(49283).Z+"",width:"400",height:"700"})})]})})]}),"\n",(0,s.jsx)(n.p,{children:"Document Library Screen"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Doc Screen",src:t(58977).Z+"",width:"400",height:"700"})}),"\n",(0,s.jsx)(n.p,{children:"Document Reading Screen"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Reading"}),(0,s.jsx)(n.th,{children:"Tap to bring up Menu"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{alt:"Reading w/o Menu",src:t(80180).Z+"",width:"400",height:"700"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{alt:"Documenting w/ Menu",src:t(51207).Z+"",width:"400",height:"700"})})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"backend-api",children:"Backend API"}),"\n",(0,s.jsx)(n.h3,{id:"technology-1",children:"Technology"}),"\n",(0,s.jsx)(n.p,{children:"Backend API written in PHP using the Laravel framework."}),"\n",(0,s.jsx)(n.h3,{id:"class-diagram-1",children:"Class Diagram"}),"\n",(0,s.jsx)(n.mermaid,{value:'classDiagram\n  Model <|-- User\n  Model <|-- ColorProfile\n  Model <|-- Document\n\n  User : +int id\n  User : +string name\n  User : -ColorProfile colorProfile\n  User : -Document[] documents\n  User : +colorProfile()\n  User : +documents()\n  ColorProfile : +Map[string,string] hexCodes\n  ColorProfile : +add(JSON object)\n  ColorProfile : +update(JSON object)\n  ColorProfile : +remove(string key)\n  Document : +int id\n  Document : +int user_id\n  Document : +int size\n  Document : +string location\n  Document : +string[] annotations\n  Document : +timestamp time_created\n  Document : +timestamp last_modified\n  Document : +file download()\n  Document : +update()\n  Document : +delete()\n\n  User "1" *-- "1" ColorProfile\n  User "1" *-- "0..*" Document'})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},12039:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/Login-3bb49f5696e41a5ea2600a83822d461d.png"},49283:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/SignUp-8182ec391c36f4f27b28d981798ae40c.png"},58977:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/docs-4f9a7b848c8c3838565fa3fea3378e37.png"},80180:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/read-doc-1c97a98a860ac05a2f51027067cd9891.png"},51207:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/read-doc2-ff9fb171d376edfdd6f3c9f842851b9a.png"},6759:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/welcome-97509e2a1a763d78076858dbed695cbd.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);