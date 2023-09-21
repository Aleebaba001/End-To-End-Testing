const puppeteer = require("puppeteer");

//Create an asynchronous IIFE (Immediately Invoked Function Expression)

(
    async()=>{
       const browser = await puppeteer.launch({
        headless: true
       });

       const page = await browser.newPage();

       //Go to the new page

       await page.goto('https://uat.zoftwarehub.com')

       console.log("done with automation")
    } 
)()

//search bot & print response on console & search cat & click category & perform action on cat & if and else & headless true