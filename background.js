const pattern = "surfly://"
const surflyServer = "https://app.surfly.online/"

function navigationHandler(details) {
    const url = new URL(details.url);
    const searchParams = new URLSearchParams(url.search);
    for (const item of searchParams.values()) {
        if (item.startsWith(pattern)) {
            console.log(`Found surfly protocol: ${item}`);
            const newURL = new URL(surflyServer);
            newURL.searchParams.set("url", item.replace(pattern, ""))
            browser.tabs.update({url: newURL.toString()});
        }
      }
}

browser.webNavigation.onBeforeNavigate.addListener(navigationHandler);
