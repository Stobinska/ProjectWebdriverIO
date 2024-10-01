import {homeUrl} from "../../lib/pages";
import { searchPhrase, Shop } from "../../lib/wordData";

describe("Lesson 1 -Input", async () => 
    {
        it("Should open automationpractise page", async () => {
            await browser.url(homeUrl);

            await browser.pause(3000);

            await expect(browser).toHaveUrl(homeUrl + "/index.php");

            await expect(browser).toHaveTitle(Shop);
    })

        it("Should type value to search input", async () => {

            const input = await $("#search_query_top")

            await input.setValue(searchPhrase);

            await browser.pause(4000);

            expect(await input.getValue()).toContain(searchPhrase)
        })

        it("Should clear search input", async () => {
            const input = await $("#search_query_top");
            await input.clearValue();
            await browser.pause(3000);
            await expect(await input.getValue()).toContain("");
        } )
    
})
     