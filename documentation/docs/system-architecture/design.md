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
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-Documenting-app/assets/40969165/5c7288f8-bcf7-4907-896a-3dd78af01398" alt="Welcome UI" width="33%"/>
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-Documenting-app/assets/40969165/a20f50f5-4f8a-4313-b840-65764bbdd0ed" alt="Login UI" width="33%"/>
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-Documenting-app/assets/40969165/ce2d44fb-9416-4dc1-8308-1205b2fca2fa" alt="Sign Up UI" width="33%"/>  
</div>
<br/>
<br/>

<p>Document Library Screen</p>
<div>
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-Documenting-app/assets/40969165/3694de3f-6b57-4160-88c7-5de16aee3227"/> 
</div>
<br/>
<br/>
<p>Document Documenting Screen</p>
<div>
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-Documenting-app/assets/40969165/104f2c14-80ad-47ea-937d-5d6c04256839" alt="Documenting w/o Menu" width="49%"/>
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-Documenting-app/assets/40969165/2f49d573-8e9a-434d-a1f2-a1b8820ced0f" alt="Documenting w/ Menu" width="49%"/>
</div>





