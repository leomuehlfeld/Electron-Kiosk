# Electron-Kiosk
![license](https://badgen.net/badge/license/MIT/blue)
![dependencies](https://badgen.net/david/dev/leomuehlfeld/electron-kiosk)

![interace-electron-kiosk](https://user-images.githubusercontent.com/22169889/81873152-679bc800-957b-11ea-91a1-a357c2dd3bf3.png)


An electron app displaying an input-field and a keyboard. I originally made this application for exhibitions.

## How to Run!
If you want to run it fullscreen, set kiosk to true in `src/main.js:6`. If you leave it to false, electron will open a window which is 1024 x 600px.
```javascript
kiosk: true
```
```bash
yarn install
yarn start
```

## Credits
Scripts and Graphics by [Leo Mühlfeld.](https://leomuehlfeld.at) Keyboard idea by [Dcode.](https://codepen.io/dcode-software/pen/KYYKxP) Using [Google Material Icons.](https://google.github.io/material-design-icons/#icon-font-for-the-web)
