import {homeUrl, womenUrl} from "../../lib/pages";

describe("Chcecbox", async () => {
        it("Should open autmoation practise page", async () => {

            await browser.url(homeUrl);

            await expect(browser).toHaveUrl(homeUrl + "/index.php");

            });
            
            it("Should click pn women page and verify url", async () => {
                const women = await $("a[title='Women']");

                await women.click();

                await expect(browser).toHaveUrl(womenUrl);
            });

                it ("Should check Tops chceckbox ", async () => {
                    const checkbox = await $("#layered_category_4");
                    await checkbox.click();
                    await browser.pause(5000);
                    await expect(checkbox).toBeSelected();
                    await expect(await checkbox.isSelected()).toBeTruthy();
                })

        })
