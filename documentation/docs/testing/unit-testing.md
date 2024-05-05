---
sidebar_position: 1
---
# Unit tests

## React Component Unit Testing
<p>ColorInSync uses the Jest framework for unit testing JavaScript, including ReactJS components. JS units such as functions can be tested with an expected input and output using Jest in format expect(output).toBe(expectedValue).</p>
<p>React components can be tested using Jest snapshot testing. The first time a snapshot test is run, it renders the component and generates a tree representation of the UI. Subsequent tests will check the UI against this snapshot. Snapshots can be regenerated using <code>jest --updateSnapshot</code>.</p>
<p>CNS source is configured so that all tests can be run by using the script <code>npm run test</code>. This is just a shorthand for the <code>jest</code> command, which when run without arguements runs all tests. However, you can also provide arguements, such as <code>npm run test my-test</code>(<code>jest my-test</code>) and it will run only the tests matching those criteria. Jest can be run directly if it is present in the global path. To add it to the global path, run npm install jest --global.</p>

### Unit Test: 
- Input: `renderer.create(\<Login/>).toJSON()`
- Output:
```
<div className="bg-gray-200 flex flex-col items-center space-y-10 justify-center h-screen">
  <h1 className="text-3xl font-bold text-purple-500">
    Color in Sync
  </h1>
  <button className="bg-gray-100 p-2.5 rounded-md" onClick={[Function]}>
    Log in with Google
  </button>
  <button className="bg-purple-500 text-gray-200 p-3 rounded-md">
    Continue as guest
  </button>
</div>
```
## Backend Unit Testing with Laravel
Laravel uses Factories to generate dummy data usable for testing, allowing tests to be run without need for real data.
All tests in the Laravel backend can be run at once using the command: `php artisan test`
### Unit Test: Document upload
- Input: `store(faked_document)`
- Expected Output: Returns stored document ID
### Unit Test: Document retrieval
- Input: `show(document_id)`
- Expected Output: Returns document as a colored-page object JSON
### Unit Test: ColorProfile upload
- Input: `store(colorProfileJson)`
- Expected Output: Database entry created


