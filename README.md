### Readme

#### Improvements

##### Content

Add the extensions' page.

##### List of targets

Instead of hardcoding the targets for which the extension applies (current
implementation changes the headers on **ALL** requests), allow the
user to target custom URLs. This should be available in the extension's
settings.

##### Setup npm

Setup `npm`.

##### ESLint + Prettier

Setup ESLint and Prettier.

##### Webpack

Setup webpack to have a reproducible way to create a "publishing" bundle for the extension.

#### Resources

##### Official docs

- [Get started](https://developer.chrome.com/extensions/getstarted)
- [onBeforeSendHeaders](https://developer.chrome.com/extensions/webRequest#event-onBeforeSendHeaders)
- [No Cookies sample](https://developer.chrome.com/extensions/examples/extensions/no_cookies.zip)
- [Publishing](https://support.google.com/chrome/a/answer/2714278?hl=en)

##### Blog posts

- https://thoughtbot.com/blog/how-to-make-a-chrome-extension
- https://medium.com/better-programming/create-a-chrome-extension-using-react-and-typescript-50e94e14320c
