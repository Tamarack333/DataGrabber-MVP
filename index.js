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
	// go to site
	page.goto(`https://www.nasdaq.com/market-activity/stocks/${ticker}/historical?page=1&rows_per_page=10&timeline=y10`)
	
	// wait for .5 second
 	await new Promise(resolve => setTimeout(resolve, 5000))
	
	if(`${page.url()}` === `https://www.nasdaq.com/market-activity/stocks/${ticker.toLowerCase()}/historical?page=1&rows_per_page=10&timeline=y10`){
		console.log(`still on ${page.url()}`)
		// download data with beneficial name and format	

	}else{
		console.log(`changed`)
		// append ticker to file of all missed stocks. name file with date and time. 
	}
	}
browserInstance.close()

