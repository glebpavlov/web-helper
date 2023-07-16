import { SiteBase } from './index';


(async () => {
setInterval(async ()=>{
    const app = new SiteBase();
    await app.initDb();
    const proxylist = await app.getProxyList();
    await app.saveProxyList(proxylist);
    return;
}, 120000)
})();