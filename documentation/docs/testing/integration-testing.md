---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Test Case 1

Description: Ensure the user Google account authentication integrates with the registration and login modules

Preconditions: User Google credentials are registered in the system

Input Data: Valid email and password



## Test Case 2

Description: The user selects the Upload PDF button and then will be able to choose the file within the file directory that they wish to upload

Preconditions: The front end must have a functioning button for file uploads, the backend has to be able to send the data to the database and upload the document to be stored on the application server. The database tables must be initialized and able to accept information

Input Data: PDF file



## Test Case 3

Description: The user has the option to download the modified document from the database for offline reading while also being able to add bookmarks and notes to the document

Preconditions: The front end must have a functioning user interface for file downloads, adding notes, and adding bookmarks. The backend has to be able to access the database to retrieve the file as well as, and the database tables must have the location of the document

Input Data: The location of the desired document



## Test Case 4
Description: The user can alter letters, numbers, symbols, and words to their desired colors and the PDF would be updated to match the characters to their chosen colors

Preconditions: The front end must have a functioning color wheel where users can pick their color. The backend has to be able modify the PDF to the users preferred colors. The database tables must update the documents modification date in the documents table

Input Data: Color HEX value and the desired PDF for modification



## Test Case 5
Description: The user has the option delete a downloaded document from their device and even remove an uploaded document completely from the database database

Preconditions: The front end must have a functioning user interface to bring up the file directory of the device for file deletion. The backend has to be able to access the device file and delete the file from the device and from the server where the file is stored. The database tables must have the location of the document and delete the file location

Input Data: The location of the desired document and the PDF file


## Test Case 6
Description: The user has the option to give feedback to the developers in order to help improve the app

Preconditions: The front end must have a functioning user interface for feedback in the app menu. The backend takes the user input for the feedback and send it to the developers

Input Data: The feedback of the user



## Test Case 7

Description: The user can set letters, numbers, symbols, and words to their desired colors and the chosen colors would then be added to their color profile in the app database for future reference. The user is also given a sample passage in order to adjust any settings

Preconditions: The front end must have a functioning color wheel where users can pick their color. The backend has to be able send this information into the database to the users preferred colors. The database tables must store and update colors corresponding to letters, numbers, symbols, and words

Input Data: Color HEX value
