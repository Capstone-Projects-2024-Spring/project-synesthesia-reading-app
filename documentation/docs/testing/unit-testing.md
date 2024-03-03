---
sidebar_position: 1
---
# Unit tests
For each method, one or more test cases.

A test case consists of input parameter values and expected results.

All external classes should be stubbed using mock objects.

## Backend Unit Testing with Laravel
Laravel uses Factories to generate dummy data usable for testing, allowing tests to be run without need for real data.
All tests in the Laravel backend can be run at once using the command: `php artisan test`
### Unit Test: Documents retrieval
- Input: `GET \api\documents\{user_credentials}`
- Expected Output: A JSON array containing information about all user documents, including filename and id number.

