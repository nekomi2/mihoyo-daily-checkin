# mihoyo-daily-checkin

## Installation
1. Get Nodejs
1. Install puppeteer
```bash
npm i puppeteer
```

## Usage

1. Create `cookies.json` file. Just go to the check in page, and use something like EditThisCookie to export the cookies in json format.
1. Set the URL variable variable to the check in URL.
1. run 

```bash
node daily-checkin.js
```
## Tips
To schedule this to run automatically on Linux, make a cronjob

For Windows, use task scheduler, set the user to SYSTEM to make it run without popup