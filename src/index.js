import "./styles.css";

import writer, * as HtmlPrint from "./DomWriter.js";
import RandomNumberCache from "./RandomNumberCache.js";

const writeToApp = writer(document.getElementById("app"));

writeToApp(
  HtmlPrint.h1("Hello - Random Number Cache"),
  HtmlPrint.p("Test promise caching using random number generator"),
  HtmlPrint.div(
    HtmlPrint.button("Get Cached", { onclick: "getCached()" }),
    HtmlPrint.button("Get New", { onclick: "getNewCached()" })
  ),
  HtmlPrint.hr()
);

const rndCache = new RandomNumberCache();

function writeRndToApp(data) {
  writeToApp(HtmlPrint.div(data));
}

function getCached() {
  rndCache.get().then(writeRndToApp);
}

function getNewCached() {
  rndCache.getNew().then(writeRndToApp);
}
