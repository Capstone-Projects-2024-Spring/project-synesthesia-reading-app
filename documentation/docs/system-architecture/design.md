---
sidebar_position: 1
---

## User-Interface

### Technology
User-Interface created using ReactJS, Tailwind, and mUI. Front-end scripting executed using ReactJS. 

### Class Diagram
```mermaid
classDiagram
  App o-- Account
  App : - Account user
   
  Account : + colorWeights
  Account : + documentList
  Account : + getUserData()
  Account o-- Login
  Login : - Credentials userCredentials
  Login : + checkCredentials()
  Account o-- SignUp
  SignUp : - Credentials ruserCredentials
  SignUp : + registerUser()
  Account o-- Credentials
  Credentials : + username
  Credentials : + password

  App o-- Documents
  Documents : + documentList
  Documents o-- Download
  Download: + saveToDevice(Document)
  Documents o-- Upload
  Upload: + pushToServer(Document)
  Documents o-- Read
  Read: + documentText
  Read: - Array<Note> noteList
  Read o-- "0...*" Note
  Note: + String text
  Note: - int position
  Read: - lazyLoadDoc(DocID)
  Read: + colorText(text)
  Read: - hightlightText(start, stop)
  Read: - makeNote(text)
  App o-- Calibrate
  Calibrate: Array<Integer> letterHues
  Calibrate: ColorModel userColorModel
  Calibrate: updateRemoteModel()
  Calibrate <-- "1" ColorModel
  ColorModel: weights
  
  
  
```
### Design Mock-Ups

<p>Welcome, Login, & Sign Up Screens</p>
<div>
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/assets/40969165/b3638ab1-6bb3-49b0-9d51-5e4d387d55cc" alt="Welcome UI" width="33%"/>
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/assets/40969165/787e1d42-dee6-4b00-b950-56e48fb5bfb7" alt="Login UI" width="33%"/>
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/assets/40969165/a70b62d3-eb85-4af4-8a3b-7898a4d760d2" alt="Sign Up UI" width="33%"/>
</div>
<br/>
<br/>

<p>Document Reading Screen</p>

![document reading](https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/assets/40969165/a75439be-f688-44e0-9563-91d7c1a74f6b)




