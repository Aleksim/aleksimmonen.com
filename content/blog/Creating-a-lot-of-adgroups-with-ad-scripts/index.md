---
title: Creating adgroups...a LOT of adgroups
date: "2023-08-17T23:46:37.121Z"
description: "Creating hundreds of ads and adgroups into a campaign with a single Google ads script."
---
![Man and machine](./man_and_machine.png)

**Sometimes you might need to go granular and create tailored ads for a wide variety of slightly different search intents.**

That's what I did recently and with decent results.

In my case, each ad group also has its own landing page to really get personalized communication going. But for now, let's look at how to create a LOT of ad groups and ads with specific keywords, ad copy, and pinning using a single Google Ads script.

### Enter google ads scripts + google sheets

Creating this system is quite simple to do. Essentially, you just need a Google Sheets document to input the data and a Google Ads Script to input your Javascript code.

#### First step: create a Google Sheet

In the Google Sheet, you define the ad group, ad content, keywords and the page path that is shown in the ad. You can use this <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQX8NE06UnCyrcAYXx_mMrr6PMI_wl1Q217NNzsQID3VpeSCvw8Hq9RU6Blqdzj5aoOB5GHJA9JLv1i/pubhtml" target="_blank" title="Ad group data example">Google Sheet</a> as an example how to structure the data. The columns need to be named exactly like they are in the example google sheet, but you can freely change the row values.

#### Second step: create the Javascript for Google Ads Scripts

I've commented the things you need to add, in the code. But basically, you need to do these changes to the code below:

1. Add your google sheet url to ```var sheetUrl```
2. Add your worksheet's name to  ```var sheetName```
3. Add the name of your campaign (that you want to ad the adgroups to) to ```var campaignIterator```
4. Also, I've pinned certain headlines and descriptions to make sure I have the right angle in the ads. Currently, the first description and headline are pinned to the first positions.

##### Here is the script:

```js
function main() {
  // Replace with your Google Sheet URL
  var sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQX8NE06UnCyrcAYXx_mMrr6PMI_wl1Q217NNzsQID3VpeSCvw8Hq9RU6Blqdzj5aoOB5GHJA9JLv1i/pubhtml';
  
  // Replace with your sheet name
  var sheetName = 'Sheet1';
  var data = getDataFromSheet(sheetUrl, sheetName);
  for (var i = 1; i < data.length; i++) { // Start at 1 to skip the header row
    createAdGroup(data[i]);
  }
}

function getDataFromSheet(sheetUrl, sheetName) {
  var sheet = SpreadsheetApp.openByUrl(sheetUrl).getSheetByName(sheetName);
  return sheet.getDataRange().getValues();
}

function createAdGroup(row) {
  // Columns: url, ag_name, h1, h2, h3, h4, h5, d1, d2, d3, kw1, kw2, path1, path2
  var finalUrl = row[0];
  var adGroupName = row[1];
  var headlines = row.slice(2, 7);
  var descriptions = row.slice(7, 10);
  var keywords = row.slice(10, 12);
  var path1 = row[12];
  var path2 = row[13];

  // Select the campaign in which you want to create the new ad group.
  var campaignIterator = AdsApp.campaigns()
    .withCondition('Name = "put the name here"')
    .get();

  if (campaignIterator.hasNext()) {
    var campaign = campaignIterator.next();

    // Create a new ad group
    var adGroupBuilder = campaign.newAdGroupBuilder()
      .withName(adGroupName)
      .withStatus("ENABLED")
      .withCpc(1.0);
      
    var adGroupOperation = adGroupBuilder.build();
    var adGroup = adGroupOperation.getResult();

    var adOperation = adGroup.newAd().responsiveSearchAdBuilder()
      .withHeadlines([
        headlines[1],
        { text: headlines[0], pinning: "HEADLINE_1"}
      ])
      .addHeadline(headlines[2])
      .addHeadline(headlines[3])
      .addHeadline(headlines[4])
      .withDescriptions([
        descriptions[1],
        { text: descriptions[0], pinning: "DESCRIPTION_1" }
      ])
      .addDescription(descriptions[2])
      .withPath1(path1)
      .withPath2(path2)
      .withFinalUrl(finalUrl)
      .build();

    var responsiveSearchAd = adOperation.getResult();

  // Add keywords to the ad group
  for (var i = 0; i < keywords.length; i++) {
    var phraseMatchKeyword = "\"" + keywords[i] + "\"";
    var keywordOperation = adGroup.newKeywordBuilder()
        .withText(phraseMatchKeyword)
        .withCpc(1.0)
        .withFinalUrl(finalUrl)
        .build();

    var keyword = keywordOperation.getResult();
  }


    Logger.log("New ad group, responsive search ad, and keywords created.");
  } else {
    Logger.log("Campaign not found.");
  }
}

```
### Enjoy!

#### 
