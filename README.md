### Skip Medium Wall

Simple browser extension to skip Medium's login/paywall. Works based on two
things:

- their policy of not displaying a paywall when navigating in from links that
  are shared on Twitter;
- removing a cookie they seem to rely on to limit the number of articles you can
  read.

Note: the extension does not limit the targets it applies the changes to,
this is due to two reasons: Medium runs on other domains (not just medium.com),
and limiting the extension to only target specificl URLs/domains requires
releasing a new version every time a new URL/domain needs to be added.

#### Developing

##### Firefox

On your browser, go to _about:debugging_ - `about:debugging#/runtime/this-firefox` -
and click the "Load Temporary Add-on..." button. Open the `manifest.json` file
and you should be ready to go. Remember to click "Reload" every time you modify
the extension's code.

##### Chrome

On your browser open up the extenstions internal page
([here](chrome://extensions/)). On the top right, enable "Developer mode".
A few new buttons should appear at the top of the page. Click "Load unpacked".
On the file browser select this directory/folder. You're done.

Every time you make changes to the source code, reload the extension so the
changes take effect. Use the "Errors" page to check for errors and the
"background page" to check for everything else.

#### Resources

##### Official Firefox docs

**TODO**

##### Official Chrome docs

- [Get started](https://developer.chrome.com/extensions/getstarted)
- [Design UI](https://developer.chrome.com/extensions/user_interface)
- [onBeforeSendHeaders](https://developer.chrome.com/extensions/webRequest#event-onBeforeSendHeaders)
- [No Cookies sample](https://developer.chrome.com/extensions/examples/extensions/no_cookies.zip)
- [Publishing](https://support.google.com/chrome/a/answer/2714278?hl=en)

##### Blog posts

- https://thoughtbot.com/blog/how-to-make-a-chrome-extension
- https://medium.com/better-programming/create-a-chrome-extension-using-react-and-typescript-50e94e14320c
