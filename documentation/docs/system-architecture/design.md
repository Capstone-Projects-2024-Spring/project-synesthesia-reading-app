---
sidebar_position: 1
---

**Purpose**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Requirements**

In addition to the general requirements the Design Document - Part I Architecture will contain:

A description the different components and their interfaces. For example: client, server, database.

For each component provide class diagrams showing the classes to be developed (or used) and their relationship.

Sequence diagrams showing the data flow for _all_ use cases. One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams.

Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc.

If there is a database:

Entity-relation diagram.

Table design.

A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance.



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
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/assets/40969165/b3638ab1-6bb3-49b0-9d51-5e4d387d55cc" alt = "Welcome UI" width = 33%/>
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/assets/40969165/787e1d42-dee6-4b00-b950-56e48fb5bfb7" alt = "Login UI" width = 33%/>
  <img src = "https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/assets/40969165/a70b62d3-eb85-4af4-8a3b-7898a4d760d2" alt = "Sign Up UI" width = 33%/>
</div>
</br>
</br>

<p>Document Reading Screen</p>

![document reading](https://github.com/Capstone-Projects-2024-Spring/project-synesthesia-reading-app/assets/40969165/a75439be-f688-44e0-9563-91d7c1a74f6b)




