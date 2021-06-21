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
    })
    .after(async t => {
        //cleaning test data
        //logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //runs after each test
    })
    test('My first testcafe test', async t => {
        await t.typeText("#developer-name", "John")
        await t.click("#submit-button")

        await t.expect(Selector("#article-header").innerText).contains("John")
    })

// Hooks
// 1. .before
// 2. .beforeEach
// 3. .after
// 4. .afterEach