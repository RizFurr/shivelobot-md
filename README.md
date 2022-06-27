<p align="center">ShiveloBot MultiDevice</p>
<div align="center">
<img src="https://pbs.twimg.com/media/FVSaBhWVIAIJTj6?format=jpg&name=large" width="150" height="150" border="0" alt="PFFP">

<br> Gunakan dengan risiko Anda sendiri!

[![Check Error](https://github.com/Rizky878/rzky-multidevice/actions/workflows/node.js.yml/badge.svg)](https://github.com/rizfurr/shivelobot/actions/workflows/node.js.yml)

[![JavaScript](https://img.shields.io/badge/JavaScript-d6cc0f?style=for-the-badge&logo=javascript&logoColor=white)](https://javascript.com) [![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

> Dibuat dengan Baileys dan Map() ( sebagai command handler ) <br />

</div><br />
<br />

## Options

Options pada command, yang akan mempermudah kamu untuk membuat/menambahkan fitur<br />

```js
module.exports = {
   name: <String>, // Ex: "menu"
   alias: <Array>, // Ex: ["cmd","help"]
   desc: <String>, // Ex: "Menu adalah command"
   use: <String>,  // Ex: "<teks>"
   category: <String>, // Ex: "umum"
   type: <String>, // Ex: "changelog"
   wait: <Boolean>, // Ex: true
   isOwner: <Boolean>, // Ex: false
   isAdmin: <Boolean>, // Ex: false
   isQuoted: <Boolean>, // Ex: false
   isGroup: <Boolean>, // Ex: false
   isBotAdmin: <Boolean>, // Ex: false
   query: <Boolean and String>, // Ex: "Tunggu Sebentar" / true
   isPrivate: <Boolean>, // Ex: false
   isSpam: <Boolean>, // Ex: true
   isLimit: <Boolean>, // Ex: true
   isLimitGame: <Boolean>, // Ex: false
   noPrefix: <Boolean>, // Ex: true
   isPremium: <Boolean>, // Ex: false
   isMedia: {
      isQVideo: <Boolean>, // Ex: false
      isQAudio: <Boolean>, // Ex: false
      isQImage: <Boolean>, // Ex: false
      isQSticker: <Boolean>, // Ex: false
      isQDocument: <Boolean>, // Ex: false
   }
   isUrl: <Boolean> // Ex: false
}
```

## Contoh Options

Contoh Command : [`./command/umum/help.js`](https://github.com/rizfurr/shivelobot/blob/main/command/umum/help.js)<br />

```js
{
  name: "help",
  alias: ["menu","cmd"],
  desc: "menampilkan menu",
  category: "umum",
  wait: true
}
```

## Highlights

-   [x] Simple Penggunaan,
-   [x] Mudah digunakan,
-   [x] Mudah untuk dirawat/diperbaiki,
-   [x] Dan ringan

## Config

Isi semua yang dibutuhkan di file [`config.json`](https://github.com/rizfurr/shivelobot/blob/main/config.json)<br />

## Request atau report bug

Untuk request atau report bug bisa chat saya disini [Whatsapp](https://wa.me/6282196930963)

## Instalasi On Termux

### Clone Repo

```bash
# Note! Hapus Command elus.js dan run:
$ npm uninstall pet-pet-gif

$ pkg install
$ pkg upgrade
$ pkg install git
$ pkg install ffmpeg && pkg install libwebp
$ pkg install nodejs
$ git clone --depth=1 https://github.com/rizfurr/shivelobot/
$ cd shivelobot
$ npm install --arch=x64 --platform=linux sharp
$ npm start
# Scan QR
```

## Instalasi

### Dibutuhkan

1.  [Nodejs](https://nodejs.org/en/download) 16x/17x
2.  [FFmpeg](https://ffmpeg.org)
3.  [libWebP](https://developers.google.com/speed/webp/download)

### Install Ffmpeg

-   Untuk pengguna Windows, kamu bisa lihat tutorial disini [WikiHow](https://www.wikihow.com/Install-Ffmpeg-on-Windows)<br />
-   Untuk pengguna Linux, kamu bisa pakai manager paket kamu sendiri. Contohnya;

```bash
# apt (Ubuntu)
$ apt install ffmpeg -y

# pacman (Arch Linux)
$ pacman -S ffmpeg
```

### Install libWebP

-   Untuk pengguna Windows,

1.  Unduh libWebP untuk Windows dari [sini](https://developers.google.com/speed/webp/download)
2.  Ekstrak ke C:\
3.  Ganti nama folder yang diekstrak ke `libwebp`
4.  Buka PowerShell dan jalankan perintah berikut;

```cmd
> setx /m PATH "C:\libwebp\bin;%PATH%"
```

> Bila sukses terinstal dengan baik, silahkan check dengan perintah berikut di Command Prompt

```cmd
$ webpmux -version
```

-   Untuk pengguna Linux, kamu bisa pakai manager paket kamu. Contohnya;

```bash
# apt (Ubuntu)
$ apt install libwebp-dev -y

# pacman (Arch Linux)
$ pacman -S libwebp
```

### Clone Repo

```bash
# clone repo
$ git clone --depth=1 https://github.com/rizfurr/shivelobot

# ubah posisi direktori kamu
$ cd shivelobot

# install semua module
$ npm install

# atau
$ yarn install

# bila libray @adiwajshing/baileys error, jalan kan kode yg ada dibawah ini

$ cd ./node_modules/@adiwajshing/baileys
$ npm install -g typescript
$ npm run build:tsc
```

### Start Bot

Start and Scan QR<br />

```bash
$ npm start
```

# Thanks To

-   [`Faiz Bastomi`](https://github.com/FaizBastomi)
-   [`Dehante`](https://github.com/Dehanjing)
-   [`RzkyFdlh`](https://github.com/Rizky878)
-   [`RizFurr`](https://github.com/rizfurr)

# Credits Thumb Bot
- [`ShiveloLover - Twitter`](https://twitter.com/ShiveloLover/)
