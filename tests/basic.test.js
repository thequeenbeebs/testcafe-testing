import { Selector } from 'testcafe'

fixture `Getting started with testCafe`
    .page `https://devexpress.github.io/testcafe/example/`

    test('My first testcafe test', async t => {
        await t.typeText("#developer-name", "John")
        await t.click("#submit-button")

        await t.expect(Selector("#article-header").innerText).contains("John")
    })