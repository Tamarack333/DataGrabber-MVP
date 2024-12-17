import path from "path"
import puppeteer from "puppeteer"
import fs from "fs"
import { tickers } from './tickers.js'


let browserInstance = await puppeteer.launch({
	headless: false
})
// loop through sites
for(const ticker of tickers){
	console.log(` searching for ${ticker}`)
	// go to site
	``
	// wait for 1.5 seconds
	
	// correct site? if not continue state

	// Process site
	
	// rename file and move to proper location
		
}
