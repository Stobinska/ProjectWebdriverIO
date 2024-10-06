import { homeUrl, womenUrl } from "../../lib/pages"

describe("Window", async () => {
    it("Should open home page", async () =>{
        await browser.url(homeUrl);
        await expect(browser).toHaveUrl(homeUrl + "/index.php");

    })

    it("Should open women page in new window", async () => {
        await browser.newWindow(womenUrl);
        await browser.pause(4000)


    })

    it("Should verify title pages", async() => {
            const openWindows = await browser.getWindowHandles();
            console.log(openWindows);
            await browser.switchToWindow(openWindows[0]);
            const windowTitle1:string = await browser.getTitle();
            console.log( await windowTitle1);
            await expect(await windowTitle1).toContain("My Shop");
            await browser.switchToWindow(openWindows[1]);
            await expect(browser).toHaveTitle("Women - My Shop")

    })


                                })