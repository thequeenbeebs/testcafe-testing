import { Selector } from 'testcafe'

fixture `Getting started with testCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t => {
        //test setup goes here
        //await runDatabaseReset()
        //await seedTestData()
    })
    .beforeEach(async t => {
        //runs before each test
        await t.setTestSpeed(1)
    })
    .after(async t => {
        //cleaning test data
        //logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //runs after each test
    })
    test('My first testcafe test', async t => {
        const developerNameInput = Selector('#developer-name')
        const submitButton = Selector('#submit-button')
        const articleText = Selector('#article-header').innerText

        await t.typeText(developerNameInput, "John")
        // await t.wait(3000)
        await t.click(submitButton)
        await t.expect(articleText).contains("John")
    })

// Hooks
// 1. .before
// 2. .beforeEach
// 3. .after
// 4. .afterEach

// Setting test speed: t.setTestSpeed .01 => 1 for debugging purposes

//Pausing the test: t.wait for debugging

// Selector: function that finds a page element in the test