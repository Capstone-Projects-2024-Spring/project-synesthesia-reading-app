"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{40812:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(85893),r=n(11151);const i={sidebar_position:5},o="Use-case descriptions",c={id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Case 1: User creates an account",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-synesthesia-reading-app/docs/requirements/use-case-descriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"alyssatownsend",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-synesthesia-reading-app/docs/requirements/features-and-requirements"},next:{title:"System Architecture",permalink:"/project-synesthesia-reading-app/docs/category/system-architecture"}},a={},l=[{value:"Use Case 1: User creates an account",id:"use-case-1-user-creates-an-account",level:2},{value:"Use Case 2: User uploads a document",id:"use-case-2-user-uploads-a-document",level:2},{value:"Use Case 3: User reads offline",id:"use-case-3-user-reads-offline",level:2},{value:"User Case 4: User alters a word color while connected to the internet",id:"user-case-4-user-alters-a-word-color-while-connected-to-the-internet",level:2},{value:"User Case 5: User deletes document from device while offline",id:"user-case-5-user-deletes-document-from-device-while-offline",level:2},{value:"Use Case 6: User provides feedback to the developers",id:"use-case-6-user-provides-feedback-to-the-developers",level:2}];function d(e){const s={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"use-case-descriptions",children:"Use-case descriptions"}),"\n",(0,t.jsx)(s.h2,{id:"use-case-1-user-creates-an-account",children:"Use Case 1: User creates an account"}),"\n",(0,t.jsx)(s.p,{children:"As a new user, I want to create an account and personalize my reading experience by setting my preferred color calibration for letters and numbers."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:'User clicks "Create Account"'}),"\n",(0,t.jsx)(s.li,{children:"User enters account info --\x3e login with Google*"}),"\n",(0,t.jsx)(s.li,{children:"User is directed to create their color profile"}),"\n",(0,t.jsx)(s.li,{children:"User selects letter-color associations using a color picker"}),"\n",(0,t.jsx)(s.li,{children:"User selects number-color associations using a color picker"}),"\n",(0,t.jsx)(s.li,{children:"Requests that the user confirms their associations"}),"\n",(0,t.jsx)(s.li,{children:"User picks between a series of binary options to determine letter weight for the color algorithm."}),"\n",(0,t.jsx)(s.li,{children:"Sample passage is provided for user to adjust calibration settings"}),"\n",(0,t.jsx)(s.li,{children:'Request user to confirm their calibration and hit "Done"'}),"\n",(0,t.jsx)(s.li,{children:"Directs user to the home page."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"use-case-2-user-uploads-a-document",children:"Use Case 2: User uploads a document"}),"\n",(0,t.jsx)(s.p,{children:"As a user, I want to upload a PDF so that I can be able to access it within the app."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"From the hope page, user selects 'Upload PDF'"}),"\n",(0,t.jsx)(s.li,{children:"A file directory opens"}),"\n",(0,t.jsx)(s.li,{children:"The user picks the file they wish to upload from said directory"}),"\n",(0,t.jsx)(s.li,{children:"The PDF file is now available to open from the app library."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"use-case-3-user-reads-offline",children:"Use Case 3: User reads offline"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"On the device they want to use offline, the user selects the 'Download' option for a document while still online."}),"\n",(0,t.jsx)(s.li,{children:"Later, the user opens the app offline and opens the downloaded document"}),"\n",(0,t.jsx)(s.li,{children:"The user clicks on the navigation icon and selects the latest bookmark, taking them to the correct page."}),"\n",(0,t.jsx)(s.li,{children:"The user reads and creates a note."}),"\n",(0,t.jsx)(s.li,{children:"The user corrects a word color."}),"\n",(0,t.jsx)(s.li,{children:"Eventually, the user finishes for now, bookmarks their page, and closes the application."}),"\n",(0,t.jsx)(s.li,{children:"When the device is connected to internet, the bookmark, color alteration, and note are synced in the background."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"user-case-4-user-alters-a-word-color-while-connected-to-the-internet",children:"User Case 4: User alters a word color while connected to the internet"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"While reading, the user comes across a word color they wish to change."}),"\n",(0,t.jsx)(s.li,{children:"User clicks on the word."}),"\n",(0,t.jsx)(s.li,{children:"Options to 'save' or 'change' come up."}),"\n",(0,t.jsx)(s.li,{children:"User clicks 'change'."}),"\n",(0,t.jsx)(s.li,{children:"The selected word is shown large on the screen."}),"\n",(0,t.jsx)(s.li,{children:"The user clicks on a letter, and then uses a slider to adjust the selected letter's weight."}),"\n",(0,t.jsx)(s.li,{children:"The user confirms the color change."}),"\n",(0,t.jsx)(s.li,{children:"The word color is saved to the user's account."}),"\n",(0,t.jsx)(s.li,{children:"The web server uses ML models to adjust the user's color generating algorithm in light of the color alteration."}),"\n",(0,t.jsx)(s.li,{children:"The new color algorithm is sent to the user client."}),"\n",(0,t.jsx)(s.li,{children:"The document colors are re-rendered using the new algorithm."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"user-case-5-user-deletes-document-from-device-while-offline",children:"User Case 5: User deletes document from device while offline"}),"\n",(0,t.jsx)(s.p,{children:"document library page, selects a document and clicks the option to delete from device\n2. A pop-up message warns the user that if the document is deleted while disconnected from the internet, any annotations created since the last sync will be lost and gives the user the option to cancel.\n3. The user confirms that they want to delete.\n4. The document and associated annotations are deleted from the device."}),"\n",(0,t.jsx)(s.h2,{id:"use-case-6-user-provides-feedback-to-the-developers",children:"Use Case 6: User provides feedback to the developers"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"User clicks on the 'give feedback' link in the app main menu."}),"\n",(0,t.jsx)(s.li,{children:"A text box is provided."}),"\n",(0,t.jsx)(s.li,{children:"The user types the feedback and hits 'submit'."}),"\n",(0,t.jsx)(s.li,{children:"The user is sent back to the app home page."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>o});var t=n(67294);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);