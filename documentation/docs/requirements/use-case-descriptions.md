---
sidebar_position: 5
---

# Use-case descriptions

## Use Case 1: User creates an account
   1. User clicks "Create Account"
   2. User enters account info --> login with Google*
   3. User is directed to create their color profile
   4. User selects letter-color associations using a color picker
   5. User selects number-color associations using a color picker
   6. Requests that the user confirms their associations
   7. User picks between a series of binary options to determine letter weight for the color algorithm.
   8. Sample passage is provided for user to adjust calibration settings
   9. Request user to confirm their calibration and hit "Done"
   10. Directs user to the home page.


## Use Case 2: User uploads a document
   1. From the hope page, user selects 'Upload PDF'
   2. A file directory opens
   3. The user picks the file they wish to upload from said directory
   4. The PDF file is now available to open from the app library.


## Use Case 3: User reads offline

   1. On the device they want to use offline, the user selects the 'Download' option for a document while still online.
   2. Later, the user opens the app offline and opens the downloaded document
   3. The user clicks on the navigation icon and selects the latest bookmark, taking them to the correct page.
   4. The user reads and creates a note.
   5. The user corrects a word color.
   6. Eventually, the user finishes for now, bookmarks their page, and closes the application.
   7. When the device is connected to internet, the bookmark, color alteration, and note are synced in the background.



## User Case 4: User alters a word color while connected to the internet
   1. While reading, the user comes across a word color they wish to change.
   2. User clicks on the word.
   3. Options to 'save' or 'change' come up.
   4. User clicks 'change'.
   5. The selected word is shown large on the screen.
   6. The user clicks on a letter, and then uses a slider to adjust the selected letter's weight.
   7. The user confirms the color change.
   8. The word color is saved to the user's account.
   9. The web server uses ML models to adjust the user's color generating algorithm in light of the color alteration.
   10. The new color algorithm is sent to the user client.
   11. The document colors are re-rendered using the new algorithm.



## User Case 5: User deletes document from device while offline
   1. From the document library page, selects a document and clicks the option to delete from device
   2. A pop-up message warns the user that if the document is deleted while disconnected from the internet, any annotations created since the last sync will be lost and gives the user the option to cancel.
   3. The user confirms that they want to delete.
   4. The document and associated annotations are deleted from the device.


## Use Case 6: User provides feedback to the developers
   1. User clicks on the 'give feedback' link in the app main menu.
   2. A text box is provided.
   3. The user types the feedback and hits 'submit'.
   4. The user is sent back to the app home page.