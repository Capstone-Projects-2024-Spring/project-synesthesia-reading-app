---
sidebar_position: 1
---

## User-Interface

### Technology
User-Interface created using ReactJS, Tailwind, and mUI. Front-end scripting executed using ReactJS. 

### Class Diagram
```mermaid
classDiagram
  App *-- Account
  App : - Account user
   
  Account : + colorWeights
  Account : + documentList
  Account : + getUserData()
  Account *-- Login
  Login : - Credentials userCredentials
  Login : + checkCredentials()
  Account *-- SignUp
  SignUp : - Credentials ruserCredentials
  SignUp : + registerUser()
  Account *-- Credentials
  Credentials : + username
  Credentials : + password

  App *-- Documents
  Documents : + documentList
  Documents *-- Download
  Download: + saveToDevice(Document)
  Download o-- "1" Document

  Documents *-- Upload
  Upload: + pushToServer(Document)
  Upload o-- "1" Document

  Documents *-- Read
  Read: - lazyLoadDoc(Document)
  Read o-- "1" Document

  Document: + documentText
  Document: - Array<Note> noteList

  Document *-- "0...*" Note
  Note: + String text
  Note: - int position
  
  Document: + colorText(text)
  Document: - hightlightText(start, stop)
  Document: - makeNote(text)
  App *-- Calibrate
  Calibrate: Array<Integer> letterHues
  Calibrate: ColorModel userColorModel
  Calibrate: updateRemoteModel()
  Calibrate o-- "1" ColorModel
  ColorModel: weights
  
  
  
```
### Design Mock-Ups

<p>Welcome, Login, & Sign Up Screens</p>


<div>
  <img src = "static/img/Figma Mock Ups/welcome.png" alt="Welcome UI" width="33%"/>
  <img src = "static/img/Figma Mock Ups/Login.png" alt="Login UI" width="33%"/>
  <img src = "static/img/Figma Mock Ups/Sign Up.png" alt="Sign Up UI" width="33%"/>  
</div>
<br/>
<br/>

<p>Document Library Screen</p>
<div>
  <img src = "static/img/Figma Mock Ups/welcome.png"/> 
</div>
<br/>
<br/>
<p>Document Documenting Screen</p>
<div>
  <img src = "static/img/Figma Mock Ups/read doc.png" alt="Documenting w/o Menu" width="49%"/>
  <img src = "static/img/Figma Mock Ups/read doc 2.png" alt="Documenting w/ Menu" width="49%"/>
</div>





