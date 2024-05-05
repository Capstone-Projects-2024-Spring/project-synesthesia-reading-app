---
sidebar_position: 3
---
# Acceptance test

Demonstration of all of the functional and non-functional requirements. This can be a combination of automated tests derived from the use-cases (user stories) and manual tests with recorded observation of the results.

## Test 1: ColorProfile creation
- Description: On first login, color profile creation screen is displayed, user is able to submit colors for each letter and number on their profile, finished profile is POSTed to the server and stored in the database, returning 201 response code in less than 500 ms.
- Server response testable by POSTman
- ColorProfile creation flow testable by manual test
## Test 2: Document creation
- Description: From document library page, user is able to open a prompt to upload a document from local files, document is POSTed to the server, text processed and then stored in the database, returning 201 response code and database entry id in less than 500 ms.
- Server response testable by POSTman
- Document upload flow testable by manual test
