### invert_colors_minimal_chrome_extension
## Dark Mode: eye-saving invert colors minimal chrome browser extension

# About Invert Colors Minimal

## Description
With security, transparency, and data-hygiene in mind: 
This is a minimal chrome extension to invert colors in a browser tab
(e.g. to reduce eye-strain by turning inscrutably white pages black)
that you can manually deploy in your browser, so that you know
exactly what code you are running. Black-Box extensions in the 
extension-store may be safe to use, but it is very difficult for an average
user to test this.
and new browser extension vulnerabilities are being 
uncovered continually, e.g. see:

https://twit.tv/shows/security-now/episodes/938 

#### Quote:
"Research reveals vulnerabilities in browser extensions that allow them to steal plaintext passwords from a website's HTML source code. Even sites like Google, Facebook, Amazon, IRS, and Capital One are affected."


#### The content.js file is called by background.js:
```
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
```

#### content.js runs a css styling function:
```
function invertColors() {
      const css = 'body {-webkit-filter: invert(100%); filter: invert(100%); }';
        ...
```

No data is collected, no other code is run. But don't trust my word,
look at the code, and make sure you feel comfortable using it.


Please scrutinze the code in github, and if you can
run the code yourself so you know what code you are running.

# Permissions:
This requires two permissions:
  "permissions": [
    "activeTab",
    "scripting"
  ]

# Steps to Deploy Extension
1. Create a new directory(folder) and put these two files in it:
- manifest.json
- invert_color_minimal_chrome_content.js  
2. Open/Go to chrome://extensions/ in your Chrome browser.
3. Turn on "Developer mode" at the top right.
4. Click "Load unpacked" and select your directory.
- A puzzle-piece icon should appear to the right of your URL-address bar. 
5. Click the puzzle-piece icon that should be to the right of your URL-address bar to see a drop-down menu of extensions.
6. "Invert Colors Minimal" should appear in that list. Click "Invert Colors Minimal" to invert to dark-mode.



### This page should show permissions for this extension for all sites:

For reasons beyond my imagination, google pre-sets permissions
very openly. So you need to MANUALLY set everything to block or mute.
So far as I know there is no way for an extension developer to
turn off these permissions, which is terrible. 

Set everything to block or mute. Again, this minimal invert-colors 
extension does not need any permissions.

# Settings: 
Go to: extensions puzzle-piece icon -> minimal_color_invert extension ->  
-> three vertical dots ->  "This can read and change site data" -> 

Seemingly randomly on each browser instance, the default here may be different.
Sometimes this is default set to: 
- When you click the extension
- On _____ (this site)
- On all sites

So you will likely need to adjust this.

The only option available for this version, for security, is the first.
There is a simpler version that runs on all urls with no permissions required,
but that is considered dangerous by google. 


# For Firefox:
This is a firefox extension (not by me) that at least shows
code...if that is really what is running, who knows.
```
https://github.com/Max-Github/FireFoxInvertColors
```
