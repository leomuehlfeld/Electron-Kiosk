# Electron-Kiosk
![license](https://badgen.net/badge/license/MIT/blue)
![dependencies](https://badgen.net/david/dev/leomuehlfeld/electron-kiosk)

An electron app displaying input-field and keyboard. Originally made for exhibitions. We had it installed at Vienna Design Week and took the useinput to print it out on a thermal printer.

## How to Run!
If you want to run it fullscreen, set kiosk to true in src/main.js:6. If you leave it to false, electron will open a window which is 1024 x 600px.
```javascript
kiosk: true
```
```bash
yarn install
yarn start
```

## Credits
Scripts and Graphics by [Leo Mühlfeld.](https://leomuehlfeld.at) Keyboard idea by [Dcode.](https://codepen.io/dcode-software/pen/KYYKxP) Using [Google Material Icons.](https://google.github.io/material-design-icons/#icon-font-for-the-web)
