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
	console.log(` searching for ${ticker}`)
	// go to site
	page.goto(`https://www.nasdaq.com/market-activity/stocks/${ticker}/historical?page=1&rows_per_page=10&timeline=y10`)
	// wait for .5 second
 	await new Promise(resolve => setTimeout(resolve, 5000))
	// correct site? if not continue state
	console.log(`should do logic`)
	if(page.url()===`https://www.nasdaq.com/market-activity/stocks/${ticker}/historical?page=1&rows_per_page=10&timeline=y10`){
		console.log(`still on ${page.url()}`)
	}else{
		console.log(page.url() + ` changed`)
	}
	// wait 3.5 sec
	await new Promise(resolve => setTimeout(resolve, 3500))
	// Process site
	console.log(`should process site`)
	// rename file and move to proper location
	
	}
browserInstance.close()

