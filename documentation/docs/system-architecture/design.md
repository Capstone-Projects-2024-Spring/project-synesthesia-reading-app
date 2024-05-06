---
sidebar_position: 1
---
# Design

## User-Interface

### Technology - User-Interface

User-Interface created using ReactJS, Tailwind, and mUI. Front-end scripting executed using ReactJS.

### Class Diagram - User-Interface

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

| Welcome     | Login       | Sign Up   |
| ----------- | ----------- | --------- |
| ![Welcome UI](/img/Figma_Mock_Ups/welcome.png) | ![Login UI](/img/Figma_Mock_Ups/Login.png) | ![Sign Up UI](/img/Figma_Mock_Ups/SignUp.png) |

Document Library Screen

![Doc Screen](/img/Figma_Mock_Ups/docs.png)

Document Reading Screen

| Reading | Tap to bring up Menu |
| ------- | -------------------- |
| ![Reading w/o Menu](/img/Figma_Mock_Ups/read-doc.png) | ![Documenting w/ Menu](/img/Figma_Mock_Ups/read-doc2.png) |

## Backend API

### Technology - Backend

Backend API written in PHP using the Laravel framework.

### Class Diagram - Backend

```mermaid
classDiagram
  Model <|-- User
  Model <|-- ColorProfile
  Model <|-- Document

  User : +int id
  User : +string name
  User : -ColorProfile colorProfile
  User : -Document[] documents
  User : +colorProfile()
  User : +documents()
  ColorProfile : +Map[string,string] hexCodes
  ColorProfile : +add(JSON object)
  ColorProfile : +update(JSON object)
  ColorProfile : +remove(string key)
  Document : +int id
  Document : +int user_id
  Document : +int size
  Document : +string location
  Document : +string[] annotations
  Document : +timestamp time_created
  Document : +timestamp last_modified
  Document : +file download()
  Document : +update()
  Document : +delete()

  User "1" *-- "1" ColorProfile
  User "1" *-- "0..*" Document
```
