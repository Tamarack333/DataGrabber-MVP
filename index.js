import path from "path"
import puppeteer from "puppeteer"
import fs from "fs"
import { tickers } from './tickers.js'


const browserInstance = await puppeteer.launch({
	headless: false
})
const page = await browserInstance.newPage()



// loop through sites
for(const ticker of tickers){
	console.log(ticker)
	// go to site
	page.goto(`https://www.nasdaq.com/market-activity/stocks/${ticker}/historical?page=1&rows_per_page=10&timeline=y10`)
	
	// wait for .5 second
 	await new Promise(resolve => setTimeout(resolve, 5000))
	
	if(`${page.url()}` === `https://www.nasdaq.com/market-activity/stocks/${ticker.toLowerCase()}/historical?page=1&rows_per_page=10&timeline=y10`){
		// download data with beneficial name and format
		// wrap in await promise
		await page.waitForSelector('.historical-download')
		console.log('Found Button')
		// create promise for this where a failure appends the ticker to the failed file and a succsess logs confirmation
		await page.click('.historical-download')
		await new Promise(resolve => setTimeout(resolve, 5000))
		// append ticker to file of all missed stocks. name file with date and time. 
	}else{
		// append ticker to failure file
		console.log('Rediredted')}
}
browserInstance.close()

