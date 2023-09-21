const puppeteer = require("puppeteer");

//Create an asynchronous IIFE (Immediately Invoked Function Expression)

(
    async()=>{
       const browser = await puppeteer.launch({
        headless: false
       });

       const page = await browser.newPage();

       //Go to the new page

       await page.goto('https://uat.zoftwarehub.com')

       console.log("Open the Zoftware UAT website")



       //Enter a question into the chatbot

       const botSearchField = document.querySelector('textarea[class="bot-input ng-untouched ng-pristine ng-valid"]');

       await page.waitForBotSearchField(botSearchField)

       await page.click(botSearchField, {clickCount: 1})
       console.log("click on the bot search field")

       await page.type(botSearchField, "Recommend an app that will help me lose weight in 30 seconds");
       console.log("enter a question into the bot search field")

    } 
)()

//search bot & print response on console & search cat & click category & perform action on cat & if and else & headless true