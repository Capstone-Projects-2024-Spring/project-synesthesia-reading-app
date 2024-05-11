---
sidebar_position: 5
---

# Use-case descriptions

## Use Case 1: User creates an account

As a user, I want to create an account in order to use the same color profile and documents across devices
   1. User clicks "Google Login"
   2. User enters account info --> login with Google*
   3. Color profile is automatically synced to the web server

```mermaid
sequenceDiagram
    participant User
    participant React UI
    participant Google
    participant Color Profile Handler
    participant Laravel Backend
    participant Web Server
    activate React UI
    
    User->>React UI: Google login
    React UI-->>User: render screen
    loop entering information
        User->>React UI: enter field/type login info
        React UI-->>User: render screen
        end
    
    React UI->>Google: app's client ID & login info
    activate Google
    Google-->>React UI: Google profile ID
    deactivate Google
    
    React UI->>React UI: sync color profile to cloud
    
    React UI->>Color Profile Handler: get Color Profile
    activate Color Profile Handler
    Color Profile Handler-->>React UI: Color Profile
    deactivate Color Profile Handler
    
    React UI->>Laravel Backend: user ID token & Color Profile
    activate Laravel Backend
    Laravel Backend->>Web Server: POST new color profile with ID token
    activate Web Server
    Web Server-->>Laravel Backend: 201 Created
    deactivate Web Server
    
    Laravel Backend-->>React UI: success
    deactivate Laravel Backend
    
    React UI-->>User: color profile synced!
    
    
    deactivate React UI
```

## Use Case 2: User calibrates color profile

As a new user, I want to personalize my reading experience by setting my preferred color calibration for letters and numbers.
1. User is directed to create their color profile
2. User selects letter-color associations using a color picker
3. User selects number-color associations using a color picker
4. Sends grapheme-color associations to backend
5. Directs user to the home page.

```mermaid
sequenceDiagram
    participant User
    participant ReactUI
    participant Laravel Backend
    
    activate ReactUI
    loop for each letter and numeral
        User->>ReactUI: pick color with color picker
        ReactUI-->>User: shows color picker for next grapheme
    end
    
    ReactUI->>Laravel Backend: POST request with grapheme-color associations
    activate Laravel Backend
    Laravel Backend->>Laravel Backend: create new Color Profile
    Laravel Backend-->>ReactUI: 'created' response
    deactivate Laravel Backend
    
    ReactUI-->>User: returns user to document library

    deactivate ReactUI
```


## Use Case 3: User uploads a document

As a user, I want to upload a PDF so that I can be able to access it within the app.
   1. From the document library page, clicks the '+' button
   2. UI displays a dialogue with the 'Upload PDF' button
   3. A file directory opens
   4. The user picks the file they wish to upload from said directory
   5. The PDF file is now available to open from the app library.

```mermaid
sequenceDiagram
   participant User
   participant ReactUI
   participant Laravel Backend
   participant Database

   activate ReactUI
   loop Uploading Documents
      User->>ReactUI: clicks '+'
      ReactUI-->>User: diplays 'Upload PDF' button
      User->>ReactUI: clicks 'Upload PDF'
      ReactUI-->>User: opens directory on user system
      User->>ReactUI: selects a document to upload
      ReactUI->>Laravel Backend: Uploads document
         activate Laravel Backend
         Laravel Backend->>Database: Create database entry
            activate Database
            Database-->>Laravel Backend: successful database entry
         deactivate Database
         Laravel Backend-->>ReactUI: 201 Created, JSON of doc information
      deactivate Laravel Backend
      ReactUI-->>User: Update Doc library from JSON 
   deactivate ReactUI
   end
```

## Use Case 4: Reader Opens a Document
As a user, I want to read an uploaded document
    1. From the document library page, I click a document icon
    2. UI displays the document in my colors


```mermaid
sequenceDiagram
    participant User
    participant ReactUI
    participant Laravel Backend
    participant Coloring Flask
    
    activate ReactUI
    
    User->>ReactUI: click document icon
    ReactUI->>Laravel Backend: request with document id
    activate Laravel Backend
    Laravel Backend->>Laravel Backend: get color profile
    Laravel Backend->>Laravel Backend: get document text
    
    Laravel Backend->>Coloring Flask: request with text and color profile
    activate Coloring Flask
    note right of Coloring Flask: see Coloring Component page
    Coloring Flask-->>Laravel Backend: 'OK" response with Colored Document JSON
    deactivate Coloring Flask
    
    Laravel Backend-->>ReactUI: 'OK' response with Colored Document JSON
    deactivate Laravel Backend
    
    ReactUI->>ReactUI: loads page with colored text
    
    deactivate ReactUI


```



