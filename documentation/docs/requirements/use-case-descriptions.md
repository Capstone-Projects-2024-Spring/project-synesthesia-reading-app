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


## Use Case 2: User uploads a document

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

## Use Case 3: User reads offline

   1. On the device they want to use offline, the user selects the 'Download' option for a document while still online.
   2. Later, the user opens the app offline and opens the downloaded document
   3. The user clicks on the navigation icon and selects the latest bookmark, taking them to the correct page.
   4. The user reads and creates a note.
   5. The user corrects a word color.
   6. Eventually, the user finishes for now, bookmarks their page, and closes the application.
   7. When the device is connected to internet, the bookmark, color alteration, and note are synced in the background.

```mermaid
sequenceDiagram
    participant User 
    participant React UI
    participant Database
    participant Laravel Backend


    activate React UI
    Note over User: User wants to download a PDF
    
    User->>React UI: clicks the download button
        React UI->>Database: gets the file location from the database
        React UI-->>User: displays option on where to download document

    User->>React UI: clicks a button to navigate to their bookmark 
        React UI->>Database: gets the page number that was bookmarked
        React UI-->>User: opens the document page that was bookmarked
        
        User->>React UI: clicks on the add note button
        React UI-->>Laravel Backend: Laravel gets ready to scan user input
        Laravel Backend-->>User: User enters the note
        
        User->>React UI: clicks button to bookmark their page
        React UI->>Database: adds the page to the database
      
    
    deactivate React UI

        

```



## User Case 4: User alters a word color
   1. While reading, the user comes across a word color they wish to change.
   2. User clicks on the word.
   3. Options to 'save' or 'change' come up.
   4. User clicks 'change'.
   5. The selected word is shown large on the screen.
   6. The user clicks on a letter, and then uses a slider to adjust the selected letter's weight.
   7. The user confirms the color change.
   8. The word color is saved to the user's color profile.
   9. The colors of the currently-loaded text are re-calculated and re-rendered as described on the algorithms page.

```mermaid
sequenceDiagram
    participant User 
    participant React UI
    participant Text Handler
    participant Color Profile Handler
    participant Color Profile


    activate React UI
    Note over User: User wants to change a word color
    
    User->>React UI: clicks word on screen
        React UI->>React UI: alerts word option menu handler
        React UI-->>User: displays option to save or change color

    User->>React UI: clicks 'change'
        React UI->>React UI: invokes color-changing screen
        React UI-->>User: shows selected word
        
        User->>React UI: toggles letter weight with slider
        React UI-->>User: displays word in changed color
        
        User->>React UI: confirms color choice
        React UI->>Color Profile Handler: word  & color value
        activate Color Profile Handler
            Color Profile Handler->>Color Profile: create new word-color pair
            activate Color Profile
            Color Profile-->>Color Profile Handler: Created
            deactivate Color Profile
        Color Profile Handler-->>React UI: Success
        deactivate Color Profile Handler
        
        React UI->>Text Handler: reload text
        activate Text Handler
        Note over Text Handler: color process sequence diagram in Algorithms page
        Text Handler-->>React UI: return formatted text
        deactivate Text Handler
        
        
    React UI->>User: renders colored text
    
    deactivate React UI

        

```



## User Case 5: User deletes document from device while offline
   1. document library page, selects a document and clicks the option to delete from device
   2. A pop-up message warns the user that if the document is deleted while disconnected from the internet, any annotations created since the last sync will be lost and gives the user the option to cancel.
   3. The user confirms that they want to delete.
   4. The document and associated annotations are deleted from the device.
```mermaid
   sequenceDiagram
      participant User
      participant ReactUI
      participant Laravel Backend
      participant Database

      activate ReactUI
      Note over User: User is running app without internet connection
      loop Deleting Documents
         User->>ReactUI: selects delete option on document
         ReactUI-->>User: Warning about risk of deleting while offline, request confirmation
         User->>ReactUI: User confirms they want to delete
         ReactUI->>ReactUI: Deletes document from internal storage
         ReactUI-->>User: Render screen  
      end
      Note over ReactUI: Internet connection reestablished
      ReactUI->>Laravel Backend: Notify backend of changes
      activate Laravel Backend
         Laravel Backend->>Database: Notify database of changes
         activate Database
            Database-->>Laravel Backend: acknowlege changes
         deactivate Database
         Laravel Backend-->> ReactUI: 200 OK
      deactivate Laravel Backend
      ReactUI-->>User: Render screen
      deactivate ReactUI
```

## Use Case 6: User provides feedback to the developers
   1. User clicks on the 'give feedback' link in the app main menu.
   2. A text box is provided.
   3. The user types the feedback and hits 'submit'.
   4. The user is sent back to the app home page.

```mermaid
    sequenceDiagram
        participant User
        participant React UI
        participant Laravel Backend
        participant Web Server

        activate React UI
        
        User->>React UI: clicks 'give feedback'
        React UI-->>User: displays feedback text box
        
        User->>React UI: types message & presses send
        React UI->>Laravel Backend: send given text as feedback
        activate Laravel Backend
            Laravel Backend->>Web Server: POST text to feedback
            activate Web Server
                Web Server->>Web Server: creates a feedback entry
                Web Server-->>Laravel Backend: 201 Created
            deactivate Web Server
            Laravel Backend-->>React UI: successful
        deactivate Laravel Backend
        
        React UI-->>User: feedback sent!
        
        deactivate React UI

```
## Use Case 7: User calibrates color profile

As a new user, I want to personalize my reading experience by setting my preferred color calibration for letters and numbers.
1. User is directed to create their color profile
2. User selects letter-color associations using a color picker
3. User selects number-color associations using a color picker
4. User selects punctuation-color associations using a color picker
5. Requests that the user confirms their associations
6. User picks between a series of binary options to determine letter weight for the color algorithm.
7. Sample passage is provided for user to adjust calibration settings
8. Request user to confirm their calibration and hit "Done"
9. Directs user to the home page.
