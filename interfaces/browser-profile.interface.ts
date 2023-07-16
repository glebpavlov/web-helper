export interface BrowserProfile {
    useragent: string,
    platform: string,
    type: 'mobile' | 'tablet' | 'desktop' | string,
    browser: string
}