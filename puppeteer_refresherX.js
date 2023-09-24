const puppeteer = require("puppeteer");

//Create an asynchronous IIFE (Immediately Invoked Function Expression)

(
    async()=>{
       const browser = await puppeteer.launch({
        headless: false
       });

       //Create a new page
       const page = await browser.newPage();



       //Maximize the browser to cover the whole screen
       await page.setViewport({ width: 2560, height: 1600 });
       await page.evaluate(() => {
        window.moveTo(0, 0);
        window.resizeTo(screen.width, screen.height);
      });


    //    // Use JavaScript within the page context to get screen size
    // const screenSize = await page.evaluate(() => {
    //     return {
    //         width: window.innerWidth,
    //         height: window.innerHeight
    //     };
    // });

    // // Set the viewport to match the screen size
    // await page.setViewport(screenSize);

       
       try {


       //Go to the new page
       await page.setDefaultNavigationTimeout(50000);
       await page.goto('https://uat.zoftwarehub.com');
       await page.waitFor(3000); // Pause for 3 seconds
       console.log("Open the Zoftware UAT website")



       //Click on the chatbot field
       const chatBotField = '[class="bot-input ng-untouched ng-pristine ng-valid"]';
       await page.waitForSelector(chatBotField, { timeout: 10000 });
       await page.click(chatBotField, { clickCount: 1 });
       await page.waitFor(3500); // Pause for 3.5 seconds
       console.log("Click on the bot search field");

       
       
       //Enter text into the chatbot
       await page.type(chatBotField, "Recommend an app that will help me lose weight in 30 seconds", { timeout: 5000 });
       await page.waitFor(3500); // Pause for 3.5 seconds
       console.log("Enter a question into the bot search field");

       
       
       //Click on the send button
       const sendButton = '[alt="Send Icon"]';
       await page.waitForSelector(sendButton, { timeout: 3000 });
       await page.click(sendButton, { clickCount: 1 });
       await page.waitFor(3500); // Pause for 3.5 seconds
       console.log("Click on the send button");

    
       
       //Click on the chatbot field again
       await page.waitForSelector(chatBotField, {timeout: 10000 });
       await page.click(chatBotField, { clickCount: 1});
       await page.waitFor(3500); // Pause for 3.5 seconds
       console.log("Click on the chatbot field again");



       //Enter text into the chatbot field
       await page.type(chatBotField, "Recommend an app that will help me fall asleep", { timeout: 10000 });
       await page.waitFor(3500); // Pause for 3.5 seconds
       console.log("Enter a question into the chatbot field");



       //Click on the send button again
       await page.waitForSelector(sendButton, { timeout: 5000 });
       await page.click(sendButton, { clickCount: 1 });
       await page.waitFor(3500); // Pause for 3.5 seconds
       console.log("Click on the send button again");



       //Click on the Zoftware logo to go back to the homepage
       const zoftLogo = '[class="zoftware-logo"]';
       await page.waitForSelector(zoftLogo, { timeout: 10000 });
       await page.click(zoftLogo, { clickCount: 1 });
       await page.waitFor(3500); // Pause for 3.5 seconds
       console.log("Go back to the zoftware homepage");



       //Select the search field
       const searchField = '[id="txtSearch"]';
       await page.waitForSelector(searchField, { timeout: 10000 });
       await page.click(searchField, { clickCount: 1 });
       await page.waitFor(3500); // Pause for 3.5 seconds
       console.log("Select the search field");



       //Enter the category name into the search field
       await page.type(searchField, "Design", { timeout: 10000 });
       await page.waitFor(3500); // Pause for 3.5 seconds
       console.log("Enter the category name into the search field");



       //Select your preferred category from the list of suggestions
       const graphicDS = '#sliding-panel-inner > div > div:nth-child(4) > ul > li:nth-child(1) > a';
       await page.waitForSelector(graphicDS, { timeout: 10000 });
       await page.click(graphicDS, { clickCount: 1 });
       await page.waitFor(3500); // Pause for 3.5 seconds
       console.log("Select your preferred category from the list of suggestions");



       setTimeout(function () {
        console.log("Sleep for 5 seconds");
       }, 5000);
    
    } catch (error) {
        console.error("Error:", error.message);
    }

    await browser.close();


    } 
)()

//search bot & print response on console & search cat & click category & perform action on cat & if and else & headless true