const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['ekspress'],
  'Browse Ekspress, 1st case': function (browser) {
    browser
      .url('http://ekspress.delfi.ee/')
      .pause(500)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressEsileht1.png`)
      .pause(1000)
      .click('div[class="navigation-arrow navigation-arrow-right"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressEsimeneLugu.png`)
      .pause(1000)
      .moveToElement('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]', 1, 1)
      .pause(1000)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressTeineLugu.png`)
      .end();
  },
  'Browse Ekspress, 2nd case': function (browser) {
    browser
      .url('http://ekspress.delfi.ee/')
      .pause(500)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressEsileht2.png`)
      .pause(1000)
      .click('div[class="left-buttons"]')
      .pause(500)
      .waitForElementVisible('div[class="menu-content"]')
      .pause(500)
      .saveScreenshot(`${config.imgpath(browser)}ekspressMenu.png`)
      .pause(500)
      .click('a[href="/arhiiv/"][class="menu-link"]')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressArhiiv.png`)
      .pause(500)
      .click('div.archive-item-container:nth-child(3) a')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressArhiiviEsimene.png`)
      .pause(500)
      .moveToElement('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]', 1, 1)
      .pause(1000)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressReklaam.png`)
      .pause(500)
      .click('div[class="right-buttons"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressSidebar.png`)
      .pause(500)
      .click('div[class="sidebar-item sidebar-item-1"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressUusArtikel.png`)
      .pause(500)
      .end();
  },
  'Browse Ekspress, 3rd case': function (browser) {
    browser
      .url('http://ekspress.delfi.ee/')
      .pause(500)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressEsileht3.png`)
      .pause(1000)
      .click('div[class="left-buttons"]')
      .pause(500)
      .waitForElementVisible('div[class="menu-content"]')
      .pause(500)
      .saveScreenshot(`${config.imgpath(browser)}ekspressMenu2.png`)
      .pause(500)
      .click('a[href="/otsing/"][class="menu-link"]')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .setValue('input[type="text"]', 'tallinna polütehnikum')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(500)
      .click('div.item.cfx:nth-child(2) a')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}ekspressTPTTeine.png`)
      .pause(500)
      .end();
  },
};