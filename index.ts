import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { Page } from 'puppeteer';
import ac from '@antiadmin/anticaptchaofficial';
import { browserProfiles, dimensions, separators, styleName } from './fake_browser_data';
import { adjectives, animals, colors, names, NumberDictionary, uniqueNamesGenerator } from 'unique-names-generator';
import { randomInteger, randomItemArray } from './utils/random';
import { Config } from 'unique-names-generator/dist/unique-names-generator.constructor';
import { shuffle } from './utils/shuffle-array';
import { russianNamesDictionary } from './russian_names';
import * as passwordGenerator from 'generate-password';
import _ from 'lodash';
import { Profile } from './interfaces/profile.interface';
import { BrowserProfile } from './interfaces/browser-profile.interface';
import * as mongoose from 'mongoose';
import { Proxy } from './interfaces/proxy.interface';
import { ProxyModel } from './db-models/proxy.dbmodel';

const antigateApiKey = '3c38331448863767be2d79d5137689c1';
const dbName = 'antisite';
ac.setAPIKey(antigateApiKey);
ac.settings.isVerbose = false;

export class SiteBase {
    public async getPage(url: string, profile: Profile): Promise<Page> {
        return new Promise<Page>(async (resolve, reject) => {
            const browser = await puppeteer
                .use(StealthPlugin()).launch({
                    headless: false,
                    channel: 'chrome',
                    devtools: false,
                    product: 'chrome',
                    userDataDir: `./profiles/${profile.userDirName}`,

                    ignoreDefaultArgs: [
                        '--disable-extensions',
                        '--enable-automation'
                    ],
                    args: [
                        // '--disable-web-security',
                        //  '--disable-features=IsolateOrigins,site-per-process',
                        //  '--allow-running-insecure-content',
                        '--disable-blink-features=AutomationControlled',
                        //  '--no-sandbox',
                        '--mute-audio',
                        //   '--no-zygote',
                        //   '--no-xshm',
                        `--window-size=${profile.dimension.join(',')}`,
                        '--no-first-run',
                        '--no-default-browser-check',
                        //   '--disable-dev-shm-usage',
                        // '--disable-gpu',
                        //   '--enable-webgl',
                        //  '--ignore-certificate-errors',
                        '--password-store=basic',
                        //  '--disable-gpu-sandbox',
                        //  '--disable-software-rasterizer',
                        // '--disable-background-timer-throttling',
                        //   '--disable-backgrounding-occluded-windows',
                        //  '--disable-renderer-backgrounding',
                        //   '--disable-infobars',
                        // '--disable-breakpad',
                        //    '--disable-canvas-aa',
                        //  '--disable-2d-canvas-clip-aa',
                        //  '--disable-gl-drawing-for-tests',
                        //   '--enable-low-end-device-mode',
                        //`--user-data-dir=${__dirname}\\profiles\\test_user`
                        /*                        '--disable-extensions-except=./plugin',
                                                '--load-extension=./plugin'*/
                    ]
                });
            const page = await browser.newPage();
            // await page.setUserAgent(profile.userAgent);
            const result = await page.goto(url, {timeout: 120000, waitUntil: 'networkidle0'}).catch(() => null);
            // отключаем ошибки таймаута навигации
            await page.setDefaultNavigationTimeout(0);
            if (!result) {
                await browser.close();
                setTimeout(async () => {
                    resolve(await this.getPage(url, profile));
                }, 2000);
                return;
            }
            const originalClose = page.close;
            page.close = (async function (options?: { runBeforeUnload?: boolean }): Promise<void> {
                await originalClose.call(page, options);
                await browser.close();
            }).bind(page)
            resolve(page);
        });

    }

    public async getProxyList(): Promise<Proxy[]> {
        const profile = this.generateBrowserProfile();
        const selector = '#list > tr, div.table_block > table > tbody > tr'
        const hidemePage = await this.getPage('https://hidemy.name/ru/proxy-list/?country=ALARAMAUATBDBYBEBZBJBOBRBGKHCMCACNCOCDCRCWCYCZDKDOECEGFIFRGEDEGTHNHKHUINIDIRIQILITJPKZKEKRMWMYMXMDNPNLNGPKPSPYPEPHPLPTPRQARORSSGSKZAESSECHSYTWTZTHTTTRUAGBUSVEVNVGZMZW&maxtime=2500&type=s45&anon=4#list', profile);
        await hidemePage.waitForSelector(selector, {timeout: 200000});
        const getProxiesHandler = await hidemePage.evaluateHandle((selector) => {
            // @ts-ignore
            return JSON.stringify([ ...document.querySelectorAll(selector) ].map((trEl) => {
                const host = trEl.querySelector('td:nth-child(1)')?.textContent;
                const port = parseInt(trEl.querySelector('td:nth-child(2)')?.textContent);
                const type = trEl.querySelector('td:nth-child(5)')?.textContent?.toLowerCase().split(', ');
                return {host, port, type};
            }));
        }, selector);
        const proxies: Proxy[] = JSON.parse(await getProxiesHandler?.jsonValue());
        console.log(proxies);
        await getProxiesHandler.dispose();
        await hidemePage.close();
        return proxies;
    }

    public async saveProxyList(proxyList: Proxy[]) {
        const updates = proxyList.map((proxy) => ({
            updateOne: {
                filter: {host: proxy.host},
                update: {$set: proxy},
                upsert: true
            }
        }));
        return await ProxyModel.bulkWrite(updates)
    }


    public generateLoginName() {
        return uniqueNamesGenerator({
            dictionaries: shuffle([
                adjectives,
                animals,
                colors,
                randomItemArray<string[]>([ names, russianNamesDictionary ]),
                NumberDictionary.generate({min: new Date().getUTCFullYear() - 45, max: new Date().getUTCFullYear()})
            ]),
            separator: randomItemArray<string>(separators),
            style: randomItemArray<Config['style']>(styleName),
            length: randomInteger(2, 5)
        });
    }

    public generatePasswordString() {
        return passwordGenerator.generate({
            length: randomInteger(8, 20),
            numbers: true
        });
    }

    public async initDb() {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
    }

}

/*const app = new SiteBase();
console.log(app.generateBrowserProfile());
 app.getRegisterPage();*/
/*
app.getRegisterPage().then(() => {
})*/
