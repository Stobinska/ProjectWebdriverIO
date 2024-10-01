describe("Verify Home page Google", async ()=>{
    it("Should open google page and wait for 3000 ms", async () => {
        await browser.url("https://google.com");
        await browser.pause(300000)
    })
})