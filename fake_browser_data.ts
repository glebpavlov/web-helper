import { BrowserProfile } from './interfaces/browser-profile.interface';
import { Config } from 'unique-names-generator/dist/unique-names-generator.constructor';

export const browserProfiles: BrowserProfile[] = [ {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        platform: 'Win10',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        platform: 'Win10',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        platform: 'macOS',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        platform: 'macOS',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0',
        platform: 'Win10',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
        platform: 'Win10',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15',
        platform: 'macOS',
        browser: 'safari',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0',
        platform: 'Linux',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        platform: 'Linux',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        platform: 'Linux',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:108.0) Gecko/20100101 Firefox/108.0',
        platform: 'macOS',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0',
        platform: 'Linux',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.76',
        platform: 'Win10',
        browser: 'edge',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/109.0',
        platform: 'macOS',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0',
        platform: 'Linux',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; rv:108.0) Gecko/20100101 Firefox/108.0',
        platform: 'Win10',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0',
        platform: 'Linux',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
        platform: 'macOS',
        browser: 'safari',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.61',
        platform: 'Win10',
        browser: 'edge',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 OPR/94.0.0.0',
        platform: 'Win10',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; rv:109.0) Gecko/20100101 Firefox/109.0',
        platform: 'Win10',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0',
        platform: 'Linux',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54',
        platform: 'Win10',
        browser: 'edge',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.55',
        platform: 'Win10',
        browser: 'edge',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.70',
        platform: 'Win10',
        browser: 'edge',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
        platform: 'Win10',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        platform: 'macOS',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
        platform: 'macOS',
        browser: 'safari',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        platform: 'Win10',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        platform: 'Win7',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 YaBrowser/22.11.5.715 Yowser/2.5 Safari/537.36',
        platform: 'Win10',
        browser: 'yandex',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        platform: 'macOS',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15',
        platform: 'macOS',
        browser: 'safari',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 OPR/93.0.0.0',
        platform: 'Win10',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        platform: 'Win10',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0',
        platform: 'Win10',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0',
        platform: 'Win10',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        platform: 'Win7',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        platform: 'Linux',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        platform: 'Win8.1',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/22.11.7.42 Yowser/2.5 Safari/537.36',
        platform: 'MacOSX',
        browser: 'yandex',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0',
        platform: 'Win10',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        platform: 'Win10',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0',
        platform: 'Win7',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
        platform: 'macOS',
        browser: 'chrome',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0',
        platform: 'Linux',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15',
        platform: 'macOS',
        browser: 'safari',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Linux x86_64; rv:107.0) Gecko/20100101 Firefox/107.0',
        platform: 'Linux',
        browser: 'firefox',
        type: 'desktop'
    }, {
        useragent: 'Mozilla/5.0 (X11; Linux x86_64; rv:107.0) Gecko/20100101 Firefox/107.0',
        platform: 'Linux',
        browser: 'firefox',
        type: 'desktop'
    } ]
;

export const dimensions = {
    desktop: [
        [ 1920, 1080 ],
        [ 1366, 768 ],
        [ 1536, 864 ],
        [ 1280, 720 ],
        [ 1440, 900 ],
        [ 1600, 900 ],
    ],
    mobile: [],

    tablet: [],
}

export const separators = [ '_', '-', '' ];

export const styleName: Config['style'][] = [ 'lowerCase', 'upperCase', 'capital' ];