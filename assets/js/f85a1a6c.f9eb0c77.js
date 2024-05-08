"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1270],{64225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(85893),i=n(11151);const o={sidebar_position:1},r="Unit tests",a={id:"testing/unit-testing",title:"Unit tests",description:"React Component Unit Testing",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-synesthesia-reading-app/docs/testing/unit-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"AndrewDKahn",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-synesthesia-reading-app/docs/category/test-procedures"},next:{title:"Integration tests",permalink:"/project-synesthesia-reading-app/docs/testing/integration-testing"}},c={},l=[{value:"React Component Unit Testing",id:"react-component-unit-testing",level:2},{value:"Unit Test",id:"unit-test",level:3},{value:"Backend Unit Testing with Laravel",id:"backend-unit-testing-with-laravel",level:2},{value:"Unit Test: Document upload",id:"unit-test-document-upload",level:3},{value:"Unit Test: Document retrieval",id:"unit-test-document-retrieval",level:3},{value:"Unit Test: ColorProfile upload",id:"unit-test-colorprofile-upload",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"unit-tests",children:"Unit tests"}),"\n",(0,s.jsx)(t.h2,{id:"react-component-unit-testing",children:"React Component Unit Testing"}),"\n",(0,s.jsx)(t.p,{children:"ColorInSync uses the Jest framework for unit testing JavaScript, including ReactJS components. JS units such as functions can be tested with an expected input and output using Jest in format expect(output).toBe(expectedValue).\nReact components can be tested using Jest snapshot testing."}),"\n",(0,s.jsxs)(t.p,{children:["The first time a snapshot test is run, it renders the component and generates a tree representation of the UI. Subsequent tests will check the UI against this snapshot. Snapshots can be regenerated using ",(0,s.jsx)(t.code,{children:"jest --updateSnapshot"})]}),"\n",(0,s.jsxs)(t.p,{children:["CNS source is configured so that all tests can be run by using the script ",(0,s.jsx)(t.code,{children:"npm run test"}),". This is just a shorthand for the ",(0,s.jsx)(t.code,{children:"jest"})," command, which when run without arguements runs all tests. However, you can also provide arguements, such as ",(0,s.jsx)(t.code,{children:"npm run test my-test"}),"(",(0,s.jsx)(t.code,{children:"jest my-test"}),") and it will run only the tests matching those criteria. Jest can be run directly if it is present in the global path. To add it to the global path, run npm install jest --global."]}),"\n",(0,s.jsx)(t.h3,{id:"unit-test",children:"Unit Test"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Input: ",(0,s.jsx)(t.code,{children:"renderer.create(\\<Login/>).toJSON()"})]}),"\n",(0,s.jsx)(t.li,{children:"Output:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'<div className="bg-gray-200 flex flex-col items-center space-y-10 justify-center h-screen">\n  <h1 className="text-3xl font-bold text-purple-500">\n    Color in Sync\n  </h1>\n  <button className="bg-gray-100 p-2.5 rounded-md" onClick={[Function]}>\n    Log in with Google\n  </button>\n  <button className="bg-purple-500 text-gray-200 p-3 rounded-md">\n    Continue as guest\n  </button>\n</div>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"backend-unit-testing-with-laravel",children:"Backend Unit Testing with Laravel"}),"\n",(0,s.jsxs)(t.p,{children:["Laravel uses Factories to generate dummy data usable for testing, allowing tests to be run without need for real data.\nAll tests in the Laravel backend can be run at once using the command: ",(0,s.jsx)(t.code,{children:"php artisan test"})]}),"\n",(0,s.jsx)(t.h3,{id:"unit-test-document-upload",children:"Unit Test: Document upload"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Input: ",(0,s.jsx)(t.code,{children:"store(faked_document)"})]}),"\n",(0,s.jsx)(t.li,{children:"Expected Output: Returns stored document ID"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"unit-test-document-retrieval",children:"Unit Test: Document retrieval"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Input: ",(0,s.jsx)(t.code,{children:"show(document_id)"})]}),"\n",(0,s.jsx)(t.li,{children:"Expected Output: Returns document as a colored-page object JSON"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"unit-test-colorprofile-upload",children:"Unit Test: ColorProfile upload"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Input: ",(0,s.jsx)(t.code,{children:"store(colorProfileJson)"})]}),"\n",(0,s.jsx)(t.li,{children:"Expected Output: Database entry created"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(67294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);