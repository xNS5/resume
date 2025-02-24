import { promises as fs } from 'fs'
import * as theme from "jsonresume-theme-local"
import puppeteer from 'puppeteer'
import { render } from 'resumed'

const resume = JSON.parse(await fs.readFile('resume.json', 'utf-8'))
const html = await render(resume, theme)

const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']})
const page = await browser.newPage()

await page.setContent(html, { waitUntil: 'networkidle0' })
await page.addStyleTag({path: "theme/stylesheet.css"})
await page.pdf({ path: `${resume.basics.name.replace(" ", '')}_Resume.pdf`, format: 'Letter', printBackground: false, tagged: true })
await browser.close()
