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
  App "1" *-- "1" Login
  App : + user
  App : + profile
  App : - colors

  App "1" *-- "1" Calibration
  Calibration: + colors 

  App "1" *-- "1" DocumentLibrary
  DocumentLibrary : + documentList
  DocumentLibrary : - isUploading 
  DocumentLibrary : - handleUpload()

  DocumentLibrary "1" *-- "1" DocumentGrid
  DocumentLibrary "1" *-- "1" DocumentActionBar

  DocumentActionBar "1" *-- "1" UploadDocument
  DocumentActionBar: + setUploading()
  UploadDocument: + setUploading()
  UploadDocument "1" *-- "1" Input
  Input: - type
  Input: + handleUpload()


  DocumentGrid *-- Document

  DocumentLibrary "1" *-- "1" Reader
  Reader "1" <|-- "1" Document

  Document: + name
  Document: + id

  Reader: - textPages
  Reader: - currentPage
  Reader: - goToNextPage()
  Reader: - goToPrevPage()
  Reader: - calculateWordsPerPage()
  Reader: - distributeTextToPages()

  Reader "1" *-- "1" ReaderActionBar
  ReaderActionBar: - goToNextPage()
  ReaderActionBar: - goToPrevPage()
  Reader "1" *-- "10...*" Word

  Word: - word
  Word: - RGB





  
  
  
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
