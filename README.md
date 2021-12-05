# TMail API
> Simple TMail API Wrapper as a Node Package so that you can use in any if your JS based frameworks.
## Quick Start

### Install TMail API
```bash
# Install TMail API
npm i tmail-api
```
### Usage Example
```js
const tmail = require('tmail-api')

const app = tmail('[YOUR_TMAIL_SITE_API]', '[API_KEY]')
//Example const app = tmail('https://default.tmail.thehp.in/api', '123123123')

const main = async () => {
  console.log(await app.domains())
  console.log(await app.create()) //To get Ramdom Email ID
  console.log(await app.create('email@domain.com')) //To create Custom Email ID
  console.log(await app.messages('email@domain.com'))
  console.log(await app.deleteMessage(123))
}

mail();
```
## Special Mentions
TempMailed - [Temp Mail](https://tempmailed.com)
