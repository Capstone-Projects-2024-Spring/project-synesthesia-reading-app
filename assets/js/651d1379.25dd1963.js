"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{40812:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(85893),t=n(11151);const a={sidebar_position:5},i="Use-case descriptions",o={id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Case 1: User creates an account",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-synesthesia-reading-app/docs/requirements/use-case-descriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Elijah Bigham",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-synesthesia-reading-app/docs/requirements/features-and-requirements"},next:{title:"System Architecture",permalink:"/project-synesthesia-reading-app/docs/category/system-architecture"}},c={},l=[{value:"Use Case 1: User creates an account",id:"use-case-1-user-creates-an-account",level:2},{value:"Use Case 2: User uploads a document",id:"use-case-2-user-uploads-a-document",level:2},{value:"Use Case 3: User reads offline",id:"use-case-3-user-reads-offline",level:2},{value:"User Case 4: User alters a word color",id:"user-case-4-user-alters-a-word-color",level:2},{value:"User Case 5: User deletes document from device while offline",id:"user-case-5-user-deletes-document-from-device-while-offline",level:2},{value:"Use Case 6: User provides feedback to the developers",id:"use-case-6-user-provides-feedback-to-the-developers",level:2}];function d(e){const s={h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"use-case-descriptions",children:"Use-case descriptions"}),"\n",(0,r.jsx)(s.h2,{id:"use-case-1-user-creates-an-account",children:"Use Case 1: User creates an account"}),"\n",(0,r.jsx)(s.p,{children:"As a new user, I want to create an account and personalize my reading experience by setting my preferred color calibration for letters and numbers."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:'User clicks "Create Account"'}),"\n",(0,r.jsx)(s.li,{children:"User enters account info --\x3e login with Google*"}),"\n",(0,r.jsx)(s.li,{children:"User is directed to create their color profile"}),"\n",(0,r.jsx)(s.li,{children:"User selects letter-color associations using a color picker"}),"\n",(0,r.jsx)(s.li,{children:"User selects number-color associations using a color picker"}),"\n",(0,r.jsx)(s.li,{children:"Requests that the user confirms their associations"}),"\n",(0,r.jsx)(s.li,{children:"User picks between a series of binary options to determine letter weight for the color algorithm."}),"\n",(0,r.jsx)(s.li,{children:"Sample passage is provided for user to adjust calibration settings"}),"\n",(0,r.jsx)(s.li,{children:'Request user to confirm their calibration and hit "Done"'}),"\n",(0,r.jsx)(s.li,{children:"Directs user to the home page."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"use-case-2-user-uploads-a-document",children:"Use Case 2: User uploads a document"}),"\n",(0,r.jsx)(s.p,{children:"As a user, I want to upload a PDF so that I can be able to access it within the app."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"From the hope page, user selects 'Upload PDF'"}),"\n",(0,r.jsx)(s.li,{children:"A file directory opens"}),"\n",(0,r.jsx)(s.li,{children:"The user picks the file they wish to upload from said directory"}),"\n",(0,r.jsx)(s.li,{children:"The PDF file is now available to open from the app library."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"use-case-3-user-reads-offline",children:"Use Case 3: User reads offline"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"On the device they want to use offline, the user selects the 'Download' option for a document while still online."}),"\n",(0,r.jsx)(s.li,{children:"Later, the user opens the app offline and opens the downloaded document"}),"\n",(0,r.jsx)(s.li,{children:"The user clicks on the navigation icon and selects the latest bookmark, taking them to the correct page."}),"\n",(0,r.jsx)(s.li,{children:"The user reads and creates a note."}),"\n",(0,r.jsx)(s.li,{children:"The user corrects a word color."}),"\n",(0,r.jsx)(s.li,{children:"Eventually, the user finishes for now, bookmarks their page, and closes the application."}),"\n",(0,r.jsx)(s.li,{children:"When the device is connected to internet, the bookmark, color alteration, and note are synced in the background."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"user-case-4-user-alters-a-word-color",children:"User Case 4: User alters a word color"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"While reading, the user comes across a word color they wish to change."}),"\n",(0,r.jsx)(s.li,{children:"User clicks on the word."}),"\n",(0,r.jsx)(s.li,{children:"Options to 'save' or 'change' come up."}),"\n",(0,r.jsx)(s.li,{children:"User clicks 'change'."}),"\n",(0,r.jsx)(s.li,{children:"The selected word is shown large on the screen."}),"\n",(0,r.jsx)(s.li,{children:"The user clicks on a letter, and then uses a slider to adjust the selected letter's weight."}),"\n",(0,r.jsx)(s.li,{children:"The user confirms the color change."}),"\n",(0,r.jsx)(s.li,{children:"The word color is saved to the user's color profile."}),"\n",(0,r.jsx)(s.li,{children:"The colors of the currently-loaded text are re-calculated and re-rendered as described on the algorithms page."}),"\n"]}),"\n",(0,r.jsx)(s.mermaid,{value:"sequenceDiagram\n    participant User \n    participant React UI\n    participant Text Handler\n    participant Color Handler\n    participant Color Profile\n\n\n    activate React UI\n    Note over User: User wants to change a word color\n    \n    User->>React UI: clicks word on screen\n        React UI->>React UI: alerts word option menu handler\n        React UI--\x3e>User: displays option to save or change color\n\n    User->>React UI: clicks 'change'\n        React UI->>React UI: invokes color-changing screen\n        React UI--\x3e>User: shows selected word\n        \n        User->>React UI: toggles letter weight with slider\n        React UI--\x3e>User: displays word in changed color\n        \n        User->>React UI: confirms color choice\n        React UI->>Color Handler: word  & color value\n        activate Color Handler\n            Color Handler->>Color Profile: POST new word-color pair\n            activate Color Profile\n            Color Profile--\x3e>Color Handler: 201 Created\n            deactivate Color Profile\n        Color Handler--\x3e>React UI: Success\n        deactivate Color Handler\n        \n        React UI->>Text Handler: reload text\n        activate Text Handler\n        Note over Text Handler: color process sequence diagram in Algorithms page\n        Text Handler--\x3e>React UI: return formatted text\n        deactivate Text Handler\n        \n        \n    React UI->>User: renders colored text\n    \n    deactivate React UI\n\n        \n"}),"\n",(0,r.jsx)(s.h2,{id:"user-case-5-user-deletes-document-from-device-while-offline",children:"User Case 5: User deletes document from device while offline"}),"\n",(0,r.jsx)(s.p,{children:"document library page, selects a document and clicks the option to delete from device\n2. A pop-up message warns the user that if the document is deleted while disconnected from the internet, any annotations created since the last sync will be lost and gives the user the option to cancel.\n3. The user confirms that they want to delete.\n4. The document and associated annotations are deleted from the device."}),"\n",(0,r.jsx)(s.h2,{id:"use-case-6-user-provides-feedback-to-the-developers",children:"Use Case 6: User provides feedback to the developers"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"User clicks on the 'give feedback' link in the app main menu."}),"\n",(0,r.jsx)(s.li,{children:"A text box is provided."}),"\n",(0,r.jsx)(s.li,{children:"The user types the feedback and hits 'submit'."}),"\n",(0,r.jsx)(s.li,{children:"The user is sent back to the app home page."}),"\n"]}),"\n",(0,r.jsx)(s.mermaid,{value:"    sequenceDiagram\n        participant User\n        participant React UI\n        participant Laravel Backend\n        participant Web Server\n\n        activate React UI\n        \n        User->>React UI: clicks 'give feedback'\n        React UI--\x3e>User: displays feedback text box\n        \n        User->>React UI: types message & presses send\n        React UI->>Laravel Backend: send given text as feedback\n        activate Laravel Backend\n            Laravel Backend->>Web Server: POST text to feedback\n            activate Web Server\n                Web Server->>Web Server: creates a feedback entry\n                Web Server--\x3e>Laravel Backend: 201 Created\n            deactivate Web Server\n            Laravel Backend--\x3e>React UI: successful\n        deactivate Laravel Backend\n        \n        React UI--\x3e>User: feedback sent!\n        \n        deactivate React UI\n"})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var r=n(67294);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);