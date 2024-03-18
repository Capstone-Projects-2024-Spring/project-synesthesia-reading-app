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

Welcome, Login, & Sign Up Screens

![Welcome UI](/img/Figma_Mock_Ups/welcome.png)

![Login UI](/img/Figma_Mock_Ups/Login.png)

![Sign Up UI](/img/Figma_Mock_Ups/SignUp.png)


Document Library Screen

![Doc Screen](/img/Figma_Mock_Ups/docs.png)


Document Reading Screen

![Documenting w/o Menu](/img/Figma_Mock_Ups/read-doc.png)

![Documenting w/ Menu](/img/Figma_Mock_Ups/read-doc2.png)





