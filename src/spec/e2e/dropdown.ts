import { productUrl } from "../../lib/pages";

describe("Select", async () => {
    it("Should open product page and verify url", async () =>{
        await browser.url(productUrl);
        await expect(browser).toHaveUrl(productUrl);

                    })

        it("Should select product size", async () =>{
            const select = await $("#group_1");
            await select.selectByAttribute("value", "2");
            await browser.pause(4000);
            await expect(await select.getValue()).toContain("2");
                    
                })

      
    })