const { downloadContentFromMessage } = require("@adiwajshing/baileys");
const { color, bgcolor } = require("../lib/color");
const {
  getBuffer,
  fetchJson,
  fetchText,
  getRandom,
  getGroupAdmins,
  runtime,
  sleep,
} = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert");
const fs = require("fs");
const moment = require("moment-timezone");
const parseRes = (parseResult = require("../lib/parseres"));
const util = require("util");
const nou = require("node-os-utils");
const ikyyh = new (require("ikyy"))();
const {
  apikey,
  hostapi,
  sticker: stc,
} = JSON.parse(fs.readFileSync("./config.json"));
const { EmojiAPI } = require("emoji-api");
const api = new EmojiAPI();
const defaultType = "apple";
const { webp2png, webp2mp4 } = require("../lib/webp2mp4");
const { exec, spawn, execSync } = require("child_process");
const ffmpeg = (ff = require("fluent-ffmpeg"));
const { toAudio } = require("../lib/converter");
const pindl = require("../lib/pindl");
const pinsrch = require("../lib/skrep").pinterest;
let { sticker, addExif } = require("../lib/sticker");
const linkGrupRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
const xfar = require("xfarr-api");
const rizz = require("rizfurr-api")
const axios = require("axios");
const iky = new (require("ikyy"))();
const hxz = require("hxz-api");
const ms = require("ms");
const evphp = require("../lib/evphp");
const textpro = require("../lib/textpro");
const yts = require("yt-search");
const { getVideoID, validateURL } = (ytdl = require("ytdl-core"));
const fetch = require("node-fetch");
const Baileys = require("@adiwajshing/baileys");
const gis = util.promisify(require("g-i-s"));
const speed = require("performance-now");
const Violetics = require("@violetics/canvas");
const vio = new Violetics("kalip");
let { yta, ytv } = require("../lib/y2mate");
let cheerio = require("cheerio");
let { sizeFormatter } = require("human-readable");
let format = sizeFormatter({
  std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});
let os = require("os");
const canvacord = require("canvacord").Canvas;
const clph = require("caliph-api");
// Database
let mess = JSON.parse(fs.readFileSync("./message/response.json"));
let welcome = JSON.parse(
  fs.readFileSync("./database/chat/welcome.json").toString()
);
let left = JSON.parse(fs.readFileSync("./database/chat/left.json").toString());
let detect = JSON.parse(
  fs.readFileSync("./database/chat/detect.json").toString()
);
let antilink = JSON.parse(
  fs.readFileSync("./database/chat/antilink.json").toString()
);
let listcmd = JSON.parse(fs.readFileSync("./database/other/listcmd.json"));
let antidelete = JSON.parse(fs.readFileSync("./database/chat/antidelete.json"));
let hit = JSON.parse(fs.readFileSync("./database/chat/hit.json"));
let afk = JSON.parse(fs.readFileSync("./database/other/afk.json"));
let prem = JSON.parse(fs.readFileSync("./database/other/premium.json"));
let autodownload = JSON.parse(
  fs.readFileSync("./database/other/autodownload.json")
);

// TicTacToe
const ttcsolo = [];
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const tictacsolo = require("../lib/tictactoe-solo");
function checkPremium(jid) {
  let usr = prem[jid];
  return usr ? usr : false;
}
function isPremium(jid) {
  dt = checkPremium(jid);
  if (!dt || isExpired(jid)) return false;
  return true;
}
function addPremium(jid, mss = "30d") {
  coeg = prem[jid] || {};
  coeg.expired = Date.now() + ms(mss);
  prem[jid] = coeg;
  fs.writeFileSync(
    "./database/other/premium.json",
    JSON.stringify(prem, null, 2)
  );
  return coeg;
}
function listPremium() {
  return Object.entries(prem).map((a) => {
    hh = isExpired(a[0]);
    g = isPremium(a[0]);
    return {
      jid: a[0],
      isExpired: hh,
      isPremium: g,
      ...a[1],
    };
  });
}
function deletePremium(jid) {
  chk = isPremium(jid);
  if (!chk) return false;
  delete prem[jid];
  fs.writeFileSync(
    "./database/other/premium.json",
    JSON.stringify(prem, null, 2)
  );
  return true;
}
function isExpired(jid) {
  dt = checkPremium(jid);
  if (!dt) return true;
  return Date.now() > dt.expired;
}
function checkExpired(jid) {
  dt = checkPremium(jid);
  if (!dt) return 0;
  return dt.expired - Date.now();
}

const telesticker = async (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      packName = url.replace("https://t.me/addstickers/", "");
      data = await axios(
        `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
          packName
        )}`,
        {
          method: "GET",
          headers: {
            "User-Agent": "GoogleBot",
          },
        }
      );
      const hasil = [];
      for (let i = 0; i < data.data.result.stickers.length; i++) {
        fileId = data.data.result.stickers[i].thumb.file_id;
        data2 = await axios(
          `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`
        );
        hasil.push(
          "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" +
            data2.data.result.file_path
        );
      }
      resolve(hasil);
    } catch (e) {
      reject(e);
    }
  });
};
async function checkBandwidth() {
  ind = 0;
  out = 0;

  for (let i of await require("node-os-utils").netstat.stats()) {
    ind += parseInt(i.inputBytes);
    out += parseInt(i.outputBytes);
  }

  return {
    download: format(ind),
    upload: format(out),
  };
}
function parseMs(seconds) {
  seconds = Number(seconds / 1000);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " Hari," : " Hari,") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " Jam," : " Jam,") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " Menit," : " Menit,") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " Detik," : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

let mathjs = require("mathjs");
let ssweb = require("../lib/ssweb");
let porn = require("is-porn");
let textapakah = ["Ya", "Tidak", "Mungkin", "Tidak Mungkin"];
function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}
moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async function (conn, msg, mmvslfvnln, setting) {
  if (!msg.message) return;
  if (
    msg.message.senderKeyDistributionMessage &&
    msg.message.messageContextInfo
  ) {
    delete msg.message.senderKeyDistributionMessage;
    delete msg.message.messageContextInfo;
  }
  if (!msg.key) return;
  let m = require("../lib/simple").smsg(conn, msg);
  try {
    if (msg.key && /clph|bae5/gi.test(msg.id)) return;
    // if (!msg.fromMe && conn.selfmode) return;
    let { ownerNumber, botName, selfmode } = setting;
    let { allmenu } = require("./help");
    conn.selfmode = selfmode;
    const jam = moment.tz("asia/jakarta").format("HH:mm:ss");
    let dt = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
    const ucapanWaktu = "Selamat " + dt.charAt(0).toUpperCase() + dt.slice(1);
    const type = Object.keys(msg.message)[0];
    const content = JSON.stringify(msg.message);
    const fromMe = msg.key.fromMe;
    const cmdhex = listcmd.find(
      (a) =>
        a.hex ==
        Buffer.from(
          m.mtype == "stickerMessage" ? m.msg.fileSha256 : ""
        ).toString("hex")
    );
    if (cmdhex) m.text = cmdhex.cmd;
    const from = msg.key.remoteJid;
    const chats =
      typeof m.text == "string"
        ? m.text
        : type === "conversation" && msg.message.conversation
        ? msg.message.conversation
        : type == "imageMessage" && msg.message.imageMessage.caption
        ? msg.message.imageMessage.caption
        : type == "documentMessage" && msg.message.documentMessage.caption
        ? msg.message.documentMessage.caption
        : type == "videoMessage" && msg.message.videoMessage.caption
        ? msg.message.videoMessage.caption
        : type == "extendedTextMessage" && msg.message.extendedTextMessage.text
        ? msg.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" &&
          msg.message.buttonsResponseMessage.selectedButtonId
        ? msg.message.buttonsResponseMessage.selectedButtonId
        : type == "templateButtonReplyMessage" &&
          msg.message.templateButtonReplyMessage.selectedId
        ? msg.message.templateButtonReplyMessage.selectedId
        : "";
    const toJSON = (j) => JSON.stringify(j, null, 2);
    if (conn.multi) {
      var prefix = (chats
        .toLowerCase()
        .match(/^[`,°•><π÷×¶∆£¢€¥®™✓Z=|~!?w#$%^&.\/\\©^]/gi) || ["-"])[0];
    } else {
      if (conn.nopref) {
        prefix = "";
      } else {
        prefix = conn.prefa;
      }
    }
    const args = chats.split(" ");
    const command = chats.toLowerCase().split(" ")[0] || "";
    const isCmd = command.startsWith(prefix);
    const isGroup = msg.key.remoteJid.endsWith("@g.us");
    const sender = isGroup
      ? msg.key.participant
        ? msg.key.participant
        : msg.participant
      : msg.key.remoteJid;
    const isOwner = ownerNumber.includes(sender) || (msg.key && msg.key.fromMe);
    const pushname = msg.pushName;
    const q = args.slice(1).join(" ");
    const text = q;
    const body = chats.startsWith(prefix) ? chats : "";
    const botNumber = conn.user.id.split(":")[0] + "@s.whatsapp.net";
    const groupMetadata = isGroup
      ? await conn.groupMetadata(from).catch(() => {})
      : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const isMedia = RegExp(
      ["sticker", "audio", "image", "video"].join("|"),
      "gi"
    ).test(m.quoted ? m.quoted.mtype : m.mtype);
    const groupId = isGroup ? groupMetadata.id : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender);
    const isAdmin = isGroupAdmins;

    async function downloadAndSaveMediaMessage(type_file, path_file) {
      if (type_file === "image") {
        var stream = await downloadContentFromMessage(
          msg.message.imageMessage ||
            msg.message.extendedTextMessage?.contextInfo.quotedMessage
              .imageMessage,
          "image"
        );
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        fs.writeFileSync(path_file, buffer);
      } else if (type_file === "video") {
        var stream = await downloadContentFromMessage(
          msg.message.videoMessage ||
            msg.message.extendedTextMessage?.contextInfo.quotedMessage
              .videoMessage,
          "video"
        );
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        fs.writeFileSync(path_file, buffer);
      } else if (type_file === "sticker") {
        var stream = await downloadContentFromMessage(
          msg.message.stickerMessage ||
            msg.message.extendedTextMessage?.contextInfo.quotedMessage
              .stickerMessage,
          "sticker"
        );
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        fs.writeFileSync(path_file, buffer);
      } else if (type_file === "audio") {
        var stream = await downloadContentFromMessage(
          msg.message.audioMessage ||
            msg.message.extendedTextMessage?.contextInfo.quotedMessage
              .audioMessage,
          "audio"
        );
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        fs.writeFileSync(path_file, buffer);
      }
    }
    const sendFileFromUrl = async (from, url, caption, options = {}) => {
      let mime = "";
      let res = await axios.head(url);
      mime = res.headers["content-type"];
      let type = mime.split("/")[0] + "Message";
      if (mime.split("/")[0] === "image") {
        var img = await getBuffer(url);
        return conn.sendMessage(
          from,
          {
            image: img,
            caption: caption,
          },
          options
        );
      } else if (mime.split("/")[0] === "video") {
        var vid = await getBuffer(url);
        return conn.sendMessage(
          from,
          {
            video: vid,
            caption: caption,
          },
          options
        );
      } else if (mime.split("/")[0] === "audio") {
        var aud = await getBuffer(url);
        return conn.sendMessage(
          from,
          {
            audio: aud,
            mimetype: "audio/mp3",
          },
          options
        );
      } else {
        var doc = await getBuffer(url);
        return conn.sendMessage(
          from,
          {
            document: doc,
            mimetype: mime,
            caption: caption,
          },
          options
        );
      }
    };
    async function sendPlay(from, query) {
      var urld = isUrl(query) && validateURL(query) ? "" : await yts(query);
      url =
        isUrl(query) && validateURL(query)
          ? isUrl(query)[0]
          : urld.videos[0].url;
      hxz
        .youtube(url)
        .then(async (data) => {
          var button = [
            {
              urlButton: {
                displayText: `Download`,
                url: `https://ytdwnld.ml/dl/` + data.id,
              },
            },
            {
              quickReplyButton: {
                displayText: `🎵 Audio (${data.size_mp3})`,
                id: `!ytmp3 ${url}`,
              },
            },
            {
              quickReplyButton: {
                displayText: `🎥 Video (${data.size})`,
                id: `!ytmp4 ${url}`,
              },
            },
          ];
          // var button = [{ buttonId: `!ytmp3 ${url}`, buttonText: { displayText: `🎵 Audio (${data.size_mp3})` }, type: 1 }, { buttonId: `!ytmp4 ${url}`, buttonText: { displayText: `🎥 Video (${data.size})` }, type: 1 }]
          conn.sendMessage(
            from,
            {
              caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`,
              image: await getBuffer(data.thumb),
              templateButtons: button,
              footer: "Pilih Salah Satu Button Dibawah⬇️",
              mentions: [sender],
            },
            {
              quoted: msg,
            }
          );
        })
        .catch((e) => {
          conn.sendMessage(
            from,
            {
              text: mess.error.api,
            },
            {
              quoted: msg,
            }
          );
          ownerNumber.map((i) =>
            conn.sendMessage(from, {
              text: `Send Play Error : ${e}`,
            })
          );
        });
    }
    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
          "gi"
        )
      );
    };
    const reply = (teks) => {
      return conn.sendMessage(
        from,
        {
          text: teks,
        },
        {
          quoted: msg,
        }
      );
    };
    const textImg = (teks) => {
      return conn.sendMessage(
        from,
        {
          text: teks,
          jpegThumbnail: fs.readFileSync(setting.pathimg),
        },
        {
          quoted: msg,
        }
      );
    };
    const sendMess = (hehe, teks) => {
      conn.sendMessage(hehe, {
        text,
        teks,
      });
    };
    const buttonWithText = (from, text, footer, buttons) => {
      return conn.sendMessage(from, {
        text: text,
        footer: footer,
        templateButtons: buttons,
      });
    };
    const buttonImg = (from, image, text, footer, buttons) => {
      return conn.sendMessage(from, {
        image,
        caption: text,
        footer: footer,
        templateButtons: buttons,
      });
    };
    const sendContact = (jid, numbers, name, quoted, mn) => {
      let number = numbers.replace(/[^0-9]/g, "");
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        name +
        "\n" +
        "ORG:;\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        number +
        ":+" +
        number +
        "\n" +
        "END:VCARD";
      return conn.sendMessage(
        from,
        {
          contacts: {
            displayName: name,
            contacts: [
              {
                vcard,
              },
            ],
          },
          mentions: mn ? mn : [],
        },
        {
          quoted: quoted,
        }
      );
    };

    const templateButtons = [
      {
        urlButton: {
          displayText: `🌐 Website`,
          url: "https://rizfurr.ml",
        },
      },
      {
        quickReplyButton: {
          displayText: `💰 Donate`,
          id: `${prefix}donate`,
        },
      },
      {
        quickReplyButton: {
          displayText: `👥 Owner Bot`,
          id: `${prefix}owner`,
        },
      },
      {
        quickReplyButton: {
          displayText: `📋 All Menu`,
          id: `${prefix}allmenu`,
        },
      },
    ];
    
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isSticker = type == "stickerMessage";
    const isQuotedMsg = type == "extendedTextMessage";
    const isQuotedImage = isQuotedMsg
      ? content.includes("imageMessage")
        ? true
        : false
      : false;
    const isQuotedAudio = isQuotedMsg
      ? content.includes("audioMessage")
        ? true
        : false
      : false;
    const isQuotedDocument = isQuotedMsg
      ? content.includes("documentMessage")
        ? true
        : false
      : false;
    const isQuotedVideo = isQuotedMsg
      ? content.includes("videoMessage")
        ? true
        : false
      : false;
    const isQuotedSticker = isQuotedMsg
      ? content.includes("stickerMessage")
        ? true
        : false
      : false;
    isAvail = true;

    // Logs;
    if (!isGroup && isCmd)
      console.log(
        "->[\x1b[1;32mCMD\x1b[1;37m]",
        color(
          moment(msg.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"),
          "yellow"
        ),
        color(`${command} [${args.length}]`),
        "from",
        color(pushname)
      );
    if (isGroup && isCmd)
      console.log(
        "->[\x1b[1;32mCMD\x1b[1;37m]",
        color(
          moment(msg.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"),
          "yellow"
        ),
        color(`${command} [${args.length}]`),
        "from",
        color(pushname),
        "in",
        color(groupName)
      );
    if (!m.isGroup && m.sender.startsWith("212")) {
      await m.reply(
        `+212 Sorry automatic block, for always calling me and spamming!`
      );
      await conn.updateBlockStatus(m.sender, "block");
      ownerNumber.map(async (a) => {
        await conn.sendMessage(a, {
          withtag: true,
          text: `*Block User*\n\nUser : ${m.sender.split("@")[0]}`,
        });
      });
    }
    if (isTicTacToe(from, ttcsolo))
      tictacsolo(conn, chats, prefix, ttcsolo, msg);

    if (conn.user.id && msg.id && from) conn.chatRead(from, m.sender, msg.id);
    if (
      isBotGroupAdmins &&
      linkGrupRegex.test(m.text) &&
      antilink.includes(m.chat)
    ) {
      if (isGroupAdmins) return;
      await m.reply(`Kamu Terdeteksi Mengirim Link Grup, Goodbye...`);
      conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    } else if (!isCmd && isUrl(chats) && autodownload[m.chat]) {
      for (let i of isUrl(chats)) {
        var { hostname } = new URL(i);
        switch (hostname) {
          case "vt.tiktok.com":
          case "www.tiktok.com":
            await reply(mess.wait);
            clph.downloader
              .tiktok(i)
              .then((datas) => {
                conn.sendMessage(
                  from,
                  {
                    video: {
                      url: datas.nowm,
                    },
                    caption: `${datas.title}\n\nKamu bisa mengubahnya menjadi Audio, pencet tombol dibawah untuk mengubahnya!`,
                    buttons: [
                      {
                        buttonId: `${prefix}tiktokaudio ${args[1]}`,
                        buttonText: {
                          displayText: "Get Audio",
                        },
                        type: 1,
                      },
                    ],
                    footer: "Create by @ShiveloBot!",
                  },
                  {
                    quoted: msg,
                  }
                );
              })
              .catch(() => reply(mess.error.api));
            break;
          case "pin.it":
            res = await clph.downloader.pindl(i);
            conn.sendMessage(
              m.chat,
              {
                [res.result.endsWith("mp4") ? "video" : "image"]: {
                  url: res.result,
                },
                caption: "Source : " + res.result,
              },
              {
                quoted: msg,
              }
            );
            break;
          case "youtu.be":
          case "www.youtube.com":
            if (!validateURL(i)) return;
            await sendPlay(m.chat, i);
            break;
        }
      }
    }
    for (let i of [...(m.quoted ? [m.quoted.sender] : []), ...m.mentionedJid]) {
      okh = afk[i];
      if (okh) m.reply(`Jangan Tag dia, dia lagi afk!\nAlasan : ${okh.reason}`);
    }
    if (afk[m.sender]) {
      m.reply(`${pushname} telah kembali dari afk, selamat datang kembali ~`);
      delete afk[m.sender];
      fs.writeFileSync(
        "./database/other/afk.json",
        JSON.stringify(afk, null, 2)
      );
    }
    switch (command) {
      case ">":
      case "=>":
        if (!isOwner) return;
        var ev = "";
        try {
          ev = util.format(
            await eval(
              `( async () => { ${command == "=>" ? "return " + q : q} })()`
            )
          );
        } catch (e) {
          ev = util.format(e);
        }
        reply(ev);
        break;
      case prefix + "culik":
        if (!isOwner) throw `sorry, this feature only for owner!`;
        if (!q) throw `linkny?`;
        if (!linkGrupRegex.test(q)) throw `invalid linknya!`;
        let [unk, kodeunik] = linkGrupRegex.exec(q);
        let idn = await conn.groupAcceptInvite(kodeunik);
        await conn.reply(idn, "Ijin culik member bang 😁");
        let ho = await conn.groupMetadata(idn);
        await conn.groupParticipantsUpdate(
          m.chat,
          ho.participants.map((a) => a.id),
          "add"
        );
        await m.reply(
          `Udah\n${ho.participants.length} total member yg diculik`
        );
        break;
      case prefix + "evphp":
      case prefix + "php":
        if (!q) throw `Silahkan masukkan kode php!`;
        if (!isOwner) return;
        var { Errors, Result, Stats } = await evphp(`<?php ${q} ?>`);
        if (Errors) throw Errors;
        await reply(Result || "No Response");
        await reply(Stats);
        break;
      case prefix + "afk":
        alasan = q || "Tanpa Alasan";
        afk[m.sender] = {
          reason: alasan,
          ago: new Date() * 1,
        };
        gtw = `@${m.sender.split("@")[0]} Sekarang Afk!\nAlasan : ${alasan}`;
        conn.sendMessage(
          m.chat,
          {
            text: gtw,
            mentions: conn.parseMention(gtw),
          },
          {
            quoted: m,
          }
        );
        fs.writeFileSync(
          "./database/other/afk.json",
          JSON.stringify(afk, null, 2)
        );
        break;
      case prefix + "ssweb":
      case prefix + "sswebf":
      case prefix + "sswebhp":
      case prefix + "ss":
      case prefix + "ssf":
      case prefix + "sshp":
        if (!q) throw `urlnya mna?`;
        var full = /f$/i.test(command);
        var isHP = /hp$/i.test(command);
        var isDark = /dark$/i.test(command);
        var url = /https?:\/\//.test(args[1]) ? args[1] : "http://" + args[1];
        res_time_old = Date.now();
        var { host } = new URL(url);

        isNsfw = await clph.tools.isporn(host);

        if (isNsfw.result.isporn) throw "Content Blocked!";
        if (isHP)
          return conn.sendMessage(
            m.chat,
            {
              image: await require("../lib/sshp")(url),
              caption: `Response Time : ${
                Date.now() - res_time_old
              } ms\nType : Handphone`,
            },
            {
              quoted: m,
            }
          );
        conn.sendMessage(
          m.chat,
          {
            image: await require("../lib/ssweb")(url, full, isDark),
            caption: `Response Time : ${
              Date.now() - res_time_old
            } ms\nType : Desktop`,
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "cekdrive":
      case prefix + "drive":
        var result = await nou.drive.info();
        m.reply(
          `*Drive Server Info*\n\n-> Total : ${result.totalGb} GB\n-> Used : ${result.usedGb} GB (${result.usedPercentage}%)\n-> Free : ${result.freeGb} GB (${result.freePercentage}%)`
        );
        break;
      case prefix + "gitclone":
      case prefix + "git":
      case prefix + "gitdl":
        if (!q || (!isUrl(q) && !/github\.com/gi.test(q)))
          throw `masukkan link repo githubnya!`;
        cekvalid = (await fetch(q)).status !== 200;
        if (cekvalid) throw `link repo can't download it!`;
        await m.reply(mess.wait);
        linkrepo = q;
        namarepo = linkrepo.split("/")[4];
        exec(
          `cd tmp && git clone ${linkrepo} && zip -r ${namarepo}.zip ${namarepo}`,
          async (h) => {
            await conn.sendMessage(m.chat, {
              document: { url: `./tmp/${namarepo}.zip` },
              fileName: namarepo + ".zip",
              mimetype: "application/zip",
            });
            await fs.promises.unlink(`./tmp/${namarepo}.zip`);
            await fs.promises.rm(`./tmp/${namarepo}`, {
              recursive: true,
              force: true,
            });
            m.reply(
              `Processing ${
                (new Date() - m.messageTimestamp * 1000) / 1000
              } Seconds`
            );
          }
        );
        break;
      case prefix + "cekbandwidth":
      case prefix + "bandwidth":
        await m.reply(mess.wait);
        var { download, upload } = await checkBandwidth();
        m.reply(
          `Bandwidth Server\n\n-> Upload : ${upload}\n-> Download : ${download}`
        );
        break;
      case prefix + "loli":
        await reply(mess.wait);
        var { url } = (await axios.get("https://lolis.clph.me/loli")).data;
        conn.sendMessage(
          from,
          {
            image: {
              url,
            },
          },
          {
            quoted: msg,
          }
        );
        break;
      case prefix + "linkgrup":
      case prefix + "link":
      case prefix + "linkgc":
        if (!isGroup) throw `hanya bisa di grup`;
        if (!isBotGroupAdmins) throw `Bot not admin`;
        var captionnye = `Link Group *${groupMetadata.subject}*`;
        var displaynye = `Copy Link`;
        var copynye = `https://chat.whatsapp.com/${await conn.groupInviteCode(
          m.chat
        )}`;
        menuButa = [
          {
            index: 1,
            urlButton: {
              displayText: `${displaynye}`,
              url: "https://www.whatsapp.com/otp/copy/" + copynye,
            },
          },
        ];

        await conn.sendMessage(m.chat, {
          text: `${captionnye}`,
          templateButtons: menuButa,
          footer: `Copyright ${new Date().getFullYear()} © ${conn.user.name}`,
        });
        break;
      case prefix + "waifu":
      case prefix + "neko":
        await m.reply(mess.wait);
        var { url } = await fetchJson(
          `https://api.waifu.pics/sfw/${command.slice(1)}`
        );
        conn.sendMessage(
          m.chat,
          {
            image: {
              url,
            },
            caption: "Source : " + url,
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "smim":
      case prefix + "smeme":
        {
          let url;
          let x = m.quoted ? m.quoted : m;
          let mime = (x.msg || x).mimetype || "";
          if (!mime || !q) throw "Reply image dengan caption *#smim teks*";
          if (!/image\/(jpe?g|png|webp)/.test(mime))
            throw `Mime ${mime} tidak support`;
          await m.reply("Mohon tunggu sebentar~");
          if (/image\/(webp)/.test(mime)) {
            url = await webp2png(await x.download());
          } else {
            img = await x.download();
            url = (await clph.tools.uploadFile(img)).result.url;
          }
          let remsult = `https://api.memegen.link/images/custom/_/${q
            .replace("", "_")
            .replace("\n", "%5Cn")
            .replace("?", "~q")
            .replace("%", "~p")
            .replace("#", "~h")
            .replace("/", "~s")}.png?background=${url}`;
          let stiker = await sticker(null, remsult, stc.packname, stc.author);
          await conn.sendMessage(
            m.chat,
            {
              sticker: stiker,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case prefix + "addprem":
      case prefix + "addpremium":
        if (!isOwner) throw mess.OnlyOwner;
        if (!q) throw `Contoh Penggunaan :\n${command} 30d 628820038060xx`;
        expi = ms(args[1]);
        users = args[2]
          ? args[2].replace(/[^0-9]/gi, "") + "@s.whatsapp.net"
          : m.quoted
          ? m.quoted.sender
          : m.mentionedJid[0]
          ? m.mentionedJid[0]
          : false;
        if (isNaN(users.split("@")[0]))
          throw `Silahkan masukkan target yang mau dijadiin Premium!`;
        addPremium(users, args[1]);
        m.reply(
          `*Sukses Menambahkan Premium*\n\n*Information* :\nJid : ${
            users.split("@")[0]
          }\nExpired Time : ${parseMs(expi)}`
        );
        break;
      case prefix + "checkprem":
      case prefix + "checkpremium":
        //  if (!isOwner) throw mess.OnlyOwner;
        //  if (!q) throw `Contoh Penggunaan :\n${command} 628820038060xx`
        users = q
          ? q.replace(/[^0-9]/gi, "") + "@s.whatsapp.net"
          : m.quoted
          ? m.quoted.sender
          : m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.sender;
        if (!users) throw `Silahkan masukkan target yang mau dicek Premium!`;
        if (!isPremium(users)) throw `Sorry, user not premium`;
        m.reply(
          `*Info Premium*\n\n*Information* :\nJid : ${
            users.split("@")[0]
          }\nExpired Time : ${parseMs(checkExpired(users))}`
        );
        break;
      case prefix + "deleteprem":
      case prefix + "deletepremium":
        if (!isOwner) throw mess.OnlyOwner;
        //  if (!q) throw `Contoh Penggunaan :\n${command} 628820038060xx`
        users = q
          ? q.replace(/[^0-9]/gi, "") + "@s.whatsapp.net"
          : m.quoted
          ? m.quoted.sender
          : m.mentionedJid[0]
          ? m.mentionedJid[0]
          : false;
        if (!users) throw `Silahkan masukkan target yang mau dihapus Premium!`;
        if (!isPremium(users)) throw `Sorry, user not premium`;
        deletePremium(users);
        m.reply("Success...");
        break;
      case prefix + "upload":
      case prefix + "tourl":
        if (!isMedia) throw `Reply Atau Kirim Media Dengan Caption ${command}`;
        dlfile = (m.quoted && m.quoted.download) || m.download || false;
        if (!dlfile) throw `Can't download file`;
        buffer = await dlfile();
        var { result } = await rizz.tools.uploadFile(buffer);
        m.reply(parseRes(result));
        break;
      case prefix + "telestick":
      case prefix + "telesticker":
        if (!isUrl(q)) throw `Masukkan link stiker telegramnya!`;
        await m.reply(mess.wait);
        results = await telesticker(q);
        for (let i of results) {
          buffers = await getBuffer(i);
          metadatas = await addExif(buffers, stc.packname, stc.author);
          await conn.sendMessage(
            m.chat,
            {
              sticker: metadatas,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case prefix + "delete":
      case prefix + "del":
      case prefix + "d":
        if (!m.quoted) throw `Reply Chat Bot!`;
        if (!m.quoted.fromMe) throw `Reply Chat Bot!`;
        if (!m.quoted.isBaileys) throw `Pesan Tersebut Bukan Dikirim Oleh Bot!`;
        await m.quoted.delete();
        // m.reply(`Udh`)
        break;
      case prefix + "cuaca":
        if (!q) throw `Contoh Penggunaan :\n${command} Jakarta`;
        await m.reply(mess.wait);
        var { status, data: result } = await clph.search.cuaca(q);
        if (status != 200) throw `Daerah ${q} tidak ditemukan!`;
        m.reply(
          parseRes(result, {
            title: "Cuaca Hari Ini",
          })
        );
        break;
      case prefix + "infogempa":
        await reply(mess.wait);
        var { result } = await clph.info.gempa();
        image = {
          url: result.image,
        };
        delete result.image;
        conn.sendMessage(m.chat, {
          image,
          caption: parseRes(result, {
            title: "Info Gempa",
          }),
        });
        break;
      case prefix + "happymod":
      case prefix + "hmod":
        if (!q) throw `Contoh Penggunaan :\n${command} pubg`;
        await m.reply(mess.wait);
        head = "*Happymod Search*\n\n";
        var { status, result } = await clph.search.happymod(q);
        if (status != 200) throw `Apk ${q} Not Found!`;
        n = 0;
        for (let i of result)
          head += `(${(n += 1)})\nApp Name : ${i.title}\nApp Link : ${
            i.link
          }\n\n`;
        m.reply(head.trim());
        break;
      case prefix + "yts":
      case prefix + "ytsearch":
        {
          if (!q) throw `Masukkan Query!\n\nContoh :\n${command} ghost`;
          let results = await yts(q);
          let anjing = [];
          let teks = results.videos
            .map((v) => {
              switch (v.type) {
                case "video":
                  anjing.push({
                    title: `${v.title}`,
                    rows: [
                      {
                        title: `${v.title}\n`,
                        description: `⏰ Duration: ${v.timestamp}\n📤 Upload: ${
                          v.ago
                        }\n🧿 Views: ${v.views.toLocaleString()} views\n🔗 From: ${
                          v.url
                        }
                           `.trim(),
                        rowId: `${prefix}ytmp3 ${v.url}`,
                      },
                    ],
                  });
                  break;
              }
            })
            .filter((v) => v)
            .join("\n========================\n");
          const listMessage = {
            text: "The results are found, please press the button below then click the title you want to download!",
            footer: "ShiveloBot!",
            title: "*YouTube Search*\n",
            buttonText: "List Video",
            sections: anjing,
          };
          await conn.sendMessage(m.chat, listMessage, {
            quoted: m,
          });
        }
        break;
      case prefix + "lolivid":
      case prefix + "asupanloli":
        await reply(mess.wait);
        buffer = await getBuffer(
          `https://${hostapi}/api/asupan/loli?apikey=${apikey}`
        );
        conn.sendMessage(
          from,
          {
            video: buffer,
          },
          {
            quoted: msg,
          }
        );
        break;
      case prefix + "ttstalk":
      case prefix + "tiktokstalk":
      case prefix + "ttusr":
      case prefix + "tiktokuser":
      case prefix + "ttuser":
        if (!q)
          throw `Silahkan masukkan username!\n\nContoh :\n${command} caliph91_`;
        await m.reply(mess.wait);
        var { result } = await clph.search.ttstalk(q);
        caption = `ID : ${result.user.id}\nNickname : ${
          result.user.nickname
        }\nFollowers : ${result.stats.followerCount.toLocaleString()}\nFollowing : ${result.stats.followingCount.toLocaleString()}\nPost : ${result.stats.videoCount.toLocaleString()}\nHeart : ${result.stats.heartCount.toLocaleString()}\nPrivate Acc : ${
          result.user.privateAccount ? "Yes" : "No"
        }\nVerified : ${result.user.verified ? "Yes" : "No"}\nSignature : ${
          result.user.signature
        }`;
        conn.sendMessage(
          m.chat,
          {
            image: {
              url: result.user.avatarLarger,
            },
            caption,
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "setpp":
      case prefix + "setprofile":
        var download = m.quoted ? m.quoted.download : m.download;
        var mimetype = m.quoted
          ? m.quoted.mimetype
          : m.msg
          ? m.msg.mimetype
          : "";

        switch (q) {
          case "bot":
          case "me":
            if (!isOwner) return m.reply(mess.OnlyOwner);
            if (!/image\/(png|jpeg)/gi.test(mimetype))
              return m.reply("Reply Gambarny!");
            await conn.updateProfilePicture(conn.user.jid, await download());
            await m.reply("Sukses Mengganti Profile...");
            break;
          case "grup":
          case "group":
          case "gc":
            if (!isGroup) return m.reply(mess.OnlyGrup);
            if (!isGroupAdmins) return m.reply(mess.GrupAdmin);
            if (!isBotGroupAdmins) return m.reply(mess.BotAdmin);
            if (!/image\/(png|jpeg)/gi.test(mimetype))
              return m.reply("Reply Gambarny!");
            await conn.updateProfilePicture(m.chat, await download());
            await m.reply("Sukses Mengganti Profile...");
            break;
          default:
            m.reply(`*▢ L I S T  O P T I O N*

                                - bot / me *(ownbot only)*
                                - grup / gc / group *(adm grup only & Bot Admin Required)*

                                Example :
                                - ${command} bot
                                - ${command} group`);
            break;
        }
        break;
      case prefix + "hidetag":
      case prefix + "hdtg":
      case prefix + "everyone":
      case prefix + "ht":
        if (!isGroupAdmins) throw mess.GrupAdmin;
        if (!isGroup) throw mess.OnlyGrup;
        mek = m.quoted ? conn.serializeM(m.quoted.fakeObj) : m;
        conn.sendMessage(
          msg.chat,
          {
            forward: conn.cMod(
              m.chat,
              mek,
              q ? q : m.quoted ? m.quoted.text : ""
            ),
            mentions: groupMembers.map((a) => a.id),
          },
          { quoted: m }
        );
        break;
      case prefix + "request":
        if (!q) throw `Silahkan Masukkan Pesan Request!`;
        tiket = `*[ Request ]*\n\nFrom : *@${
          m.sender.split("@")[0]
        }*\nMessage : ${q}`;
        for (let i of ownerNumber)
          await conn.sendMessage(
            i,
            {
              forward: conn.cMod(m.chat, m, tiket),
              mentions: conn.parseMention(tiket),
            },
            { quoted: m }
          );
        m.reply(`Request Kamu Berhasil Dikirim ke Owner Bot!`);
        break;
      case prefix + "zippy":
      case prefix + "zippyshare":
        if (!q) throw `Silahkan masukkan link zippyshare!`;
        if (!isUrl(q) || !/zippyshare.com/gi.test(q))
          throw `Silahkan Masukkan Link Dengan benar!`;
        await m.reply(mess.wait);
        var result = await require("../lib/zippyshare")(q);
        if (result.error) throw `Error`;
        mime = require("mime").lookup(result.name);
        conn.sendMessage(
          m.chat,
          {
            document: {
              url: result.url,
            },
            mimetype: mime,
            fileName: result.name,
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "mediafire":
        if (!q) throw `Silahkan masukkan link MediaFire`;
        if (!isUrl(q) || !/mediafire.com/gi.test(q))
          throw `Silahkan masukkan link dengan benar!`;
        await reply(mess.wait);
        var { result } = await clph.downloader.mediafire(q);
        await reply(
          parseRes(result, {
            title: `MediaFire Downloader`,
          })
        );
        conn.sendMessage(
          m.chat,
          {
            document: {
              url: result.link,
            },
            mimetype: result.mimetype,
            fileName: result.filename,
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "ohidetag":
      case prefix + "ohdtg":
      case prefix + "oeveryone":
      case prefix + "oht":
        if (!isOwner) throw mess.OnlyOwner;
        if (!isGroup) throw mess.OnlyGrup;
        mek = m.quoted ? conn.serializeM(m.quoted.fakeObj) : m;
        conn.sendMessage(
          msg.chat,
          {
            forward: conn.cMod(
              m.chat,
              mek,
              q ? q : m.quoted ? m.quoted.text : ""
            ),
            mentions: groupMembers.map((a) => a.id),
          },
          { quoted: m }
        );
        break;
      case prefix + "groups":
      case prefix + "gclist":
      case prefix + "listgrup":
      case prefix + "gcl":
        gcs = await conn.getGroups();
        head = `*List Groups*\nTotal : *${gcs.length}* Groups!\n\n`;
        h = 0;
        for (let i of gcs) {
          head += `(${(h += 1)})\nSubject : ${i.subject}\nID : ${
            i.id
          }\nDate Create : ${moment(i.creation * 1000)
            .tz("Asia/Jakarta")
            .format("DD/MM/YY HH:mm:ss")}\nOwner : @${
            i.owner?.split("@")[0] ||
            (i.id.includes("-") && i.id.split("-")[0]) ||
            "0"
          }\nTotal Member : ${i.participants.length} Members\n\n`;
        }
        await conn.sendMessage(
          m.chat,
          {
            text: head.trim(),
            mentions: conn.parseMention(head),
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "apakah":
        jawaban = textapakah[Math.floor(Math.random() * textapakah.length)];
        m.reply(
          `*Pertanyaan* : *${chats.split(prefix)[1]}*\n*Jawaban* : ${jawaban}`
        );
        break;
      case prefix + "emojimix":
        if (!q) throw `Contoh Penggunaan\n\n${command} 😅+😭`;
        let ha = q.split(/\-|&|\||\+/);
        if (!(ha[0] && ha[1])) throw `Contoh Penggunaan\n\n${command} 😅+😭`;
        buf = await clph.other.emojimix(...ha);
        conv = await sticker(buf, null, stc.packname, stc.author);
        conn.sendMessage(
          m.chat,
          {
            sticker: conv,
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "qrcode":
      case prefix + "qr":
        if (!q) throw `Masukkan Teksnya!\n\nContoh :\n${command} hello world`;
        urls = `https://${hostapi}/api/qrcode/127/?text=${encodeURIComponent(
          q
        )}&apikey=${apikey}`;
        dts = await fetch(urls);
        if (!dts.ok) throw `Internal Server Error`;
        buffer = await dts.buffer();
        conn.sendMessage(
          m.chat,
          {
            image: buffer,
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "igstalk":
      case prefix + "igs":
        if (!q) throw `masukkan usernamenya!`;
        await m.reply(mess.wait);
        var { profile, data } = await clph.search.igstalk(q);
        conn.sendMessage(
          m.chat,
          {
            image: {
              url: profile.high,
            },
            caption: parseRes(data, {
              title: "Instagram Stalk",
            }),
          },
          {
            quoted: msg,
          }
        );
        break;
      case prefix + "nowa":
      case prefix + "dork":
        teks = q;
        if (!teks.includes("x"))
          throw `Masukkan Nomornya!\n\nContoh :\n${command} 171775099xx`;
        var numberPattern = /\d+/g;
        var nomer = teks.match(numberPattern);
        var random_length = teks.length - nomer[0].length;
        if (random_length == 1) {
          var random = 10;
        } else if (random_length == 2) {
          var random = 100;
        } else if (random_length == 3) {
          var random = 1000;
        } else if (random_length == 4) {
          var random = 10000;
        }
        console.log(random);
        var nomerny = `*• List Number •*\n\n• With Bio/Status/Info •\n`;
        var no_bio = `\n• Without Bio/Status/Info ||\nHey there! I am using WhatsApp. •\n`;
        var no_watsap = `\n• Not Registered •\n`;
        for (let i = 0; i < random; i++) {
          var nu = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          var dom1 = nu[Math.floor(Math.random() * nu.length)];
          var dom2 = nu[Math.floor(Math.random() * nu.length)];
          var dom3 = nu[Math.floor(Math.random() * nu.length)];
          var dom4 = nu[Math.floor(Math.random() * nu.length)];
          if (random_length == 1) {
            var rndm = `${dom1}`;
          } else if (random_length == 2) {
            var rndm = `${dom1}${dom2}`;
          } else if (random_length == 3) {
            var rndm = `${dom1}${dom2}${dom3}`;
          } else if (random_length == 4) {
            var rndm = `${dom1}${dom2}${dom3}${dom4}`;
          }
          var anu = (
            await conn.onWhatsApp(`${nomer[0]}${i}@s.whatsapp.net`)
          )[0];
          var anuu = anu ? anu : false;
          try {
            var anu1 = await conn.fetchStatus(anu.jid);
            if (
              anu1.status == "" ||
              anu1.status == "Hey there! I am using WhatsApp."
            ) {
              no_bio += `@${anu.jid.split("@")[0]}\n`;
              console.log(
                `-${i}) ${nomer[0]}${i}`,
                color(` [REGISTERED]`, "blue")
              );
            } else {
              nomerny += `No : @${anu.jid.split("@")[0]}\nBio : ${
                anu1.status
              }\nSet At : ${moment(anu1.setAt).format("DD MMMM YYYY")}\n\n`;
              console.log(
                `-${i}) ${nomer[0]}${i}`,
                color(` [REGISTERED]`, "blue")
              );
            }
          } catch {
            no_watsap += `${nomer[0]}${i}\n`;
            console.log(
              `-${i}) ${nomer[0]}${i}`,
              color(` [NOT REGISTERED]`, "red")
            );
          }
        }
        conn.sendMessage(
          m.chat,
          {
            text: `${nomerny}${no_bio}${no_watsap}`,
            mentions: conn.parseMention(`${nomerny}${no_bio}${no_watsap}`),
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "sendbug":
        if (!q || !isOwner) return m.reply("...");
        timeout = ms(q);
        await conn.reply(
          m.sender,
          `Sending Attack...\nEstimated Time : ${timeout / 1000} Sec`,
          m
        );
        conn.presenceSubscribe(from);
        bugged = setInterval(() => {
          conn.sendPresenceUpdate("composing", from).catch(() => {});
        });
        setTimeout(async () => {
          await conn.reply(m.sender, "Stopping Attack...", m);
          clearInterval(bugged);
        }, timeout);
        break;
      case prefix + "pub":
        if (!isOwner) return;
        conn.selfmode = false;
        m.reply(`Public Mode`);
        break;
      case prefix + "slf":
        if (!isOwner) return;
        conn.selfmode = true;
        m.reply(`Self Mode`);
        break;
      case prefix + "ip":
      case prefix + "iplook":
      case prefix + "iplookup":
        if (!q) throw `Masukkan Ip Address atau domain!`;
        res = await clph.search.iplookup(q).then((a) =>
          parseRes(a, {
            title: "IP Lookup",
          })
        );
        m.reply(res);
        break;
      case prefix + "whois":
        if (!q) throw `Masukkan domain!`;
        res = await clph.tools.whois(q).then((a) =>
          parseRes(a.result, {
            title: "Whois Domain",
          })
        );
        m.reply(res);
        break;
      case prefix + "brainly":
        if (!q) return reply("mau cri ap?");
        var bren = await require("brainly-scraper")(`${q}`, 30);
        if (!bren.length) throw `Maaf, fitur brainly sedang error!`;
        var teks = "*「 _BRAINLY_ 」*\n\n";
        await reply(`${teks}${bren.length} jawaban Ditemukan`);
        var no = 0;
        for (let data of bren.data) {
          var hem = data.jawaban;
          console.log(hem);
          no += 1;
          teks += `\n*➸ Pertanyaan ${no}:* ${data.pertanyaan}\n\n*➸ Jawaban ${no}:* ${data.jawaban[0].text}\n\n❉───────────❉\n`;
        }
        reply(teks.trim());
        break;
      case prefix + "pindl":
      case prefix + "pinterestdl":
      case prefix + "pin":
      case prefix + "pinterest":
        if (!q)
          throw `Masukkan Query!\n\nContoh :\n${command} loli\natau\n${command} https://pin.it/fXePof0`;
        await m.reply(mess.wait);
        if (isUrl(q)) {
          res = await pindl(q);
          conn.sendMessage(
            m.chat,
            {
              [res.result.endsWith("mp4") ? "video" : "image"]: {
                url: res.result,
              },
              caption: "Source : " + res.result,
            },
            {
              quoted: msg,
            }
          );
        } else {
          res = await clph.search.pin(q);
          if (res.length == 0) throw `Query *${q}* Not Found!`;
          random = res[Math.floor(Math.random() * res.length)];
          buffer = await getBuffer(random);
          conn.sendMessage(
            m.chat,
            {
              [random.endsWith("mp4") ? "video" : "image"]: buffer,
              caption: "Source : " + random,
            },
            {
              quoted: msg,
            }
          );
        }
        break;
      case prefix + "image":
      case prefix + "gimage":
        if (!q) throw `Mau Cari apa?`;
        await m.reply(mess.wait);
        result = await gis(q);
        if (!result) throw `Gambar Yang Kamu Cari Tidak Dapat Ditemukan!`;
        randomize = result[Math.floor(Math.random() * result.length)];
        checked = await fetch(randomize.url);
        if (checked.status != 200)
          throw `Error ${checked.status} *${checked.statusText}*`;
        conn.sendMessage(
          m.chat,
          {
            image: {
              url: randomize.url,
            },
            caption: `Source : ${randomize.url}`,
          },
          {
            quoted: msg,
          }
        );
        break;
      case prefix + "wallcave":
      case prefix + "wallpapercave":
      case prefix + "wpcave":
        if (!q) throw `Masukkan Query!\n\nContoh :\n${command} genshin`;
        var { result } = await clph.search.wallpapercave(q);
        var url = result[Math.floor(Math.random() * result.length)];
        if (/undefined/.test(url)) throw `Error, Can't get image url`;
        conn.sendMessage(
          m.chat,
          {
            image: {
              url,
            },
            caption: `Source : ${url}`,
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "singkatankata":
        if (!q) throw `Masukkan Query!\n\nContoh :\n${command} NASA`;
        var result = await clph.search.singkatankata(q);
        if (result.status == 404) throw `Hasil Dari ${q} Tidak ditemukan!`;
        m.reply(
          `*${result.result.length} Hasil Ditemukan!*\n\n${result.result
            .map((a) => {
              return `- ${a}\n`;
            })
            .join("")
            .trim()}\n\nSource : ${result.link}`
        );
        break;
      case prefix + "ytcomment":
      case prefix + "ytkomen":
        if (!q) return reply("Teksnya?");
        var pp = await conn
          .profilePictureUrl(sender, "preview")
          .catch(() => "https://github.com/rizfurr.png");
        var username = pushname;
        var res = await canvacord.youtube({
          content: q,
          username,
          avatar: pp,
        });
        conn.sendMessage(
          from,
          {
            image: res,
            caption: "Yt Comment : " + q,
          },
          {
            quoted: msg,
          }
        );
        break;
      case prefix + "cmm":
      case prefix + "changemymind":
        if (!q) return reply("teksnya?");
        var buffer = await canvacord.changemymind(q);
        conn.sendMessage(
          from,
          {
            image: buffer,
          },
          {
            quoted: msg,
          }
        );
        break;
      case prefix + "react":
        if (!m.isGroup) throw mess.OnlyGrup;
        if (!q) throw `Contoh penggunaan :\n${command} 😅`;
        var { key: hh } = m.quoted ? m.quoted.fakeObj : m;
        await conn.relayMessage(
          m.chat,
          {
            reactionMessage: {
              key: hh,
              text: q,
              senderTimestampMs: m.messageTimestamp,
            },
          },
          {
            messageId: m.id,
          }
        );
        m.reply("udh");
        break;
      case prefix + "clyde":
        if (!q) return reply("teksnya?");
        var buffer = await canvacord.clyde(q);
        conn.sendMessage(
          from,
          {
            image: buffer,
          },
          {
            quoted: msg,
          }
        );
        break;
      case prefix + "emot":
      case prefix + "emoji":
      case prefix + "semoji":
        {
          let [tipe, emoji] = q.includes("|") ? q.split("|") : args.slice(1);
          if (tipe && !emoji) {
            emoji = tipe;
            tipe = defaultType;
          }
          if (!emoji)
            throw `Silahkan masukan emojinya\n\nMisal ${command} whatsapp 😎\n\nList Tipe:\n- whatsapp\n- facebook\n- apple\- google\- microsoft`;
          emoji = emoji.trim();
          tipe = tipe
            .trim()
            .toLowerCase()
            .replace(/ip/i, "apple")
            .replace(/fb/i, "facebook")
            .replace(/go/i, "google")
            .replace(/ht/i, "htc")
            .replace(/mi/i, "microsoft")
            .replace(/mo/i, "mozilla")
            .replace(/pi/i, "pixel")
            .replace(/sa/i, "samsung")
            .replace(/tw/i, "twitter")
            .replace(/wh/i, "whatsapp");
          let json = await api.get(emoji);
          filter = json.images.find((a) => RegExp(tipe, "gi").test(a.vendor));
          if (!filter) throw `Vendor ${tipe} Not Found`;
          let stiker = await sticker(
            null,
            filter.url,
            stc.packname,
            stc.author,
            [emoji]
          );
          m.reply(stiker);
        }
        break;
      case prefix + "welcome":
        if (!isGroup) return reply("Perintah ini khusus didalam grup!");
        if (!isAdmin) return reply("Perintah ini khusus admin grup!");
        if (!q) {
          m.reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        } else if (/on|enable/gi.test(q)) {
          if (welcome.includes(from))
            return reply("Welcome Telah Diaktifkan Sebelumnya");
          welcome.push(from);
          fs.writeFileSync(
            "./database/chat/welcome.json",
            JSON.stringify(welcome, null, 2)
          );
          reply("Sukses mengaktifkan welcome di grup ini....");
        } else if (/off|disable/gi.test(q)) {
          index = welcome.indexOf(from);
          welcome.splice(index, 1);
          reply("Sukses menonaktifkan welcome di grup ini....");
          fs.writeFileSync(
            "./database/chat/welcome.json",
            JSON.stringify(welcome, null, 2)
          );
        } else reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        break;
      case prefix + "autodl":
      case prefix + "autodownload":
        if (!isGroup) return reply("Perintah ini khusus didalam grup!");
        if (!isAdmin) return reply("Perintah ini khusus admin grup!");
        if (!q) {
          m.reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        } else if (/on|enable/gi.test(q)) {
          if (autodownload[from])
            return reply("autodownload Telah Diaktifkan Sebelumnya");
          autodownload[from] = true;
          fs.writeFileSync(
            "./database/other/autodownload.json",
            JSON.stringify(autodownload, null, 2)
          );
          reply("Sukses mengaktifkan autodownload di grup ini....");
        } else if (/off|disable/gi.test(q)) {
          // index = welcome.indexOf(from)
          delete autodownload[from];
          reply("Sukses menonaktifkan autodownload di grup ini....");
          fs.writeFileSync(
            "./database/other/autodownload.json",
            JSON.stringify(autodownload, null, 2)
          );
        } else reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        break;
      case prefix + "setcmd":
        megmeg = m.quoted ? m.quoted : m;
        if (!/sticker/.test(megmeg.mtype)) throw `Reply Stickernya!`;
        if (!q)
          throw `Masukkan Command Yg ingin disetel\n\nContoh : ${command} #menu`;
        hex = Buffer.from(
          m.quoted ? m.quoted.fileSha256 : m.msg.fileSha256
        ).toString("hex");
        available = listcmd.find((a) => a.hex == hex);
        if (available) throw `Stiker Tersebut Sudah Ada di Database!`;
        listcmd.push({
          hex,
          cmd: q,
        });
        fs.writeFileSync(
          "./database/other/listcmd.json",
          JSON.stringify(listcmd, null, 2)
        );
        m.reply(`Sukses!`);
        break;
      case prefix + "me":
      case prefix + "profile":
        senders =
          (m.quoted && m.quoted.sender) || m.mentionedJid[0] || m.sender;
        name = conn.getName(senders);
        var { status, setAt } = await conn.fetchStatus(senders).catch(() => {
          return {
            status: "",
            setAt: "",
          };
        });
        number = require("awesome-phonenumber")(
          "+" + senders.split("@")[0]
        ).getNumber("international");
        profile = await conn
          .profilePictureUrl(senders, "image")
          .catch(() => `https://telegra.ph/file/e47d9ec693e5288ad9382.jpg`);
        blok = (await conn.fetchBlocklist()).includes(senders) ? "Yes" : "No";
        gtw = [];
        for (let i of await conn.getGroups())
          if (i.participants.map((a) => a.id).includes(senders)) gtw.push(i);
        caption = `• Name : ${name}\n• Tag : @${
          senders.split("@")[0]
        }\n• Link : https://wa.me/${
          senders.split("@")[0]
        }\n• Number : ${number}\n• Bio : ${status || ""}\n• Set At Bio : ${
          (setAt && moment(setAt).format("DD MMMM YYYY")) || "Unknown"
        }\n• Device : ${Baileys.getDevice(
          m.id
        )}\n• Blocked : ${blok}\n• Same Group With Bot : ${gtw.length} Groups`;
        conn.sendMessage(
          m.chat,
          {
            image: {
              url: profile,
            },
            caption,
            mentions: conn.parseMention(caption),
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "delcmd":
        megmeg = m.quoted ? m.quoted : m;
        if (!/sticker/.test(megmeg.mtype)) throw `Reply Stickernya!`;
        // if (!q) throw `Masukkan Command Yg ingin disetel\n\nContoh : ${command} #menu`
        hex = Buffer.from(
          m.quoted ? m.quoted.fileSha256 : m.msg.fileSha256
        ).toString("hex");
        indexOF = listcmd.findIndex((a) => hex == a.hex);
        yomi = listcmd[indexOF];
        if (!yomi)
          throw `Sepertinya stiker tersebut tidak ada di dalam database!`;
        if (yomi.locked)
          throw `Sepertinya stiker tersebut di kunci, dan tidak bisa dihapus!`;
        listcmd.splice(indexOF, 1);
        fs.writeFileSync(
          "./database/other/listcmd.json",
          JSON.stringify(listcmd, null, 2)
        );
        m.reply(`Sukses!`);
        break;
      case prefix + "left":
        if (!isGroup) return reply("Perintah ini khusus didalam grup!");
        if (!isAdmin) return reply("Perintah ini khusus admin grup!");
        if (!q) {
          reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        } else if (/on|enable/gi.test(q)) {
          if (left.includes(from))
            return reply("Left Telah Diaktifkan Sebelumnya");
          left.push(from);
          fs.writeFileSync(
            "./database/chat/left.json",
            JSON.stringify(left, null, 2)
          );
          reply("Sukses mengaktifkan left di grup ini....");
        } else if (/off|disable/gi.test(q)) {
          index = left.indexOf(from);
          left.splice(index, 1);
          reply("Sukses menonaktifkan welcome di grup ini....");
          fs.writeFileSync(
            "./database/chat/left.json",
            JSON.stringify(left, null, 2)
          );
        } else reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        break;
      case prefix + "detect":
        if (!isGroup) return reply("Perintah ini khusus didalam grup!");
        if (!isAdmin) return reply("Perintah ini khusus admin grup!");
        if (!q) {
          reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        } else if (/on|enable/gi.test(q)) {
          if (detect.includes(from))
            return reply("Detect Telah Diaktifkan Sebelumnya");
          detect.push(from);
          fs.writeFileSync(
            "./database/chat/detect.json",
            JSON.stringify(detect, null, 2)
          );
          reply("Sukses mengaktifkan detect di grup ini....");
        } else if (/off|disable/gi.test(q)) {
          index = detect.indexOf(from);
          detect.splice(index, 1);
          reply("Sukses menonaktifkan detect di grup ini....");
          fs.writeFileSync(
            "./database/chat/detect.json",
            JSON.stringify(detect, null, 2)
          );
        } else reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        break;
      case prefix + "antilink":
        if (!isGroup) return reply("Perintah ini khusus didalam grup!");
        if (!isAdmin) return reply("Perintah ini khusus admin grup!");
        if (!q) {
          reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        } else if (/on|enable/gi.test(q)) {
          if (antilink.includes(from))
            return reply("antilink Telah Diaktifkan Sebelumnya");
          antilink.push(from);
          fs.writeFileSync(
            "./database/chat/antilink.json",
            JSON.stringify(antilink, null, 2)
          );
          reply("Sukses mengaktifkan antilink di grup ini....");
        } else if (/off|disable/gi.test(q)) {
          index = antilink.indexOf(from);
          antilink.splice(index, 1);
          reply("Sukses menonaktifkan antilink di grup ini....");
          fs.writeFileSync(
            "./database/chat/antilink.json",
            JSON.stringify(antilink, null, 2)
          );
        } else reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        break;
      case prefix + "antidelete":
        if (!isGroup) return reply("Perintah ini khusus didalam grup!");
        if (!isAdmin) return reply("Perintah ini khusus admin grup!");
        if (!q) {
          reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        } else if (/on|enable/gi.test(q)) {
          if (antidelete.includes(from))
            return reply("antidelete Telah Diaktifkan Sebelumnya");
          antidelete.push(from);
          fs.writeFileSync(
            "./database/chat/antidelete.json",
            JSON.stringify(antidelete, null, 2)
          );
          reply("Sukses mengaktifkan antidelete di grup ini....");
        } else if (/off|disable/gi.test(q)) {
          index = antidelete.indexOf(from);
          antidelete.splice(index, 1);
          reply("Sukses menonaktifkan antidelete di grup ini....");
          fs.writeFileSync(
            "./database/chat/antidelete.json",
            JSON.stringify(antidelete, null, 2)
          );
        } else reply(`Pilih enable atau disable!\n\nEx:\n${command} enable`);
        break;
      case prefix + "hartatahta":
      case prefix + "tahta":
        if (!q) return reply("teksnya?");
        await reply(mess.wait);
        buffer = await getBuffer(
          `https://${hostapi}/api/hartatahta?text=${encodeURIComponent(
            q
          )}&apikey=${apikey}`
        );
        conn.sendMessage(
          from,
          {
            image: buffer,
          },
          {
            quoted: msg,
          }
        );
        break;
      case prefix + "join":
        if (!isOwner)
          return reply(
            `kmu Bkn Owner Bot!`
          );
        if (!q) return reply("linkny mna?");
        if (!linkGrupRegex.test(q)) return reply("linknya invalid ngab");
        var [h, link] = linkGrupRegex.exec(q);
        var detek = await conn.inviteInfo(q);
        if (parseInt(detek.size) <= setting.MinMem && !isOwner)
          throw `Maaf Kak, bot hanya bisa join jika member grupnya lebih dari ${setting.MinMem}`;
        var gcid = await conn.groupAcceptInvite(link);
        reply("Success Joined!");
        break;
      case prefix + "leave":
        if (!isOwner) return reply("Kamu Siapa?");
        if (!isGroup) return reply(`Hanya Bisa dibuka di grup!`);
        await reply(`Goodbye everyone...`);
        conn.groupLeave(from);
        break;
      case prefix + "dash":
      case prefix + "dashboard":
        function sort(property, ascending = true) {
          if (property)
            return (...args) =>
              args[ascending & 1][property] - args[!ascending & 1][property];
          else return (...args) => args[ascending & 1] - args[!ascending & 1];
        }
        hh = Object.entries(hit).map((a) => {
          return {
            cmd: a[0],
            ...a[1],
          };
        });
        head = `Dashboard *${conn.user.name}*\n\n`;
        n = 0;
        for (let i of hh
          .sort(sort("hit"))
          .slice(0, !q || isNaN(q) ? 5 : parseInt(q))) {
          head += `(${(n += 1)})\nCommand : *${
            i.cmd
          }*\nHit : *${i.hit.toLocaleString()}x*\nLast Used : *${moment(i.last)
            .tz("Asia/Jakarta")
            .locale("id")
            .fromNow()}*\n\n`;
        }
        conn.reply(m.chat, head.trim(), m);
        break;
      case prefix + "menu":
      case prefix + "help":
        ppbt = await conn
          .profilePictureUrl(conn.user.jid, "image")
          .catch(() => "https://telegra.ph/file/6fbee3e70bd0a8e5fe647.jpg");
        image = await buttonImg(
          from,
          {
            url: ppbt,
          },
          `Hai ${pushname !== undefined ? pushname : "Kak" } ${ucapanWaktu}, Aku adalah *${botName}*

Bot ini adalah Beta *Multi-Device* WhatsApp. Jika menemukan bug/error pada bot ini, silahkan lapor kepada ${prefix}owner`,
          `${conn.user.name} © ${new Date().getFullYear()}`,
          templateButtons
        );
        break;
      case "$":
        if (!isOwner) return;
        if (!q) return;
        await reply(`Plz Wait...`);
        var exe = execSync(q);
        var res = util.format(exe.toString() || "done!");
        try {
          reply(res);
        } catch (e) {
          reply(util.format(e.message));
        }
        break;
      case prefix + "allmenu":
        reply(allmenu(conn, prefix, pushname));
        break;
      case prefix + "test":
        reply("Test, sukses respon!");
        break;
      case prefix + "runtime":
        reply(runtime(process.uptime()));
        break;
      case prefix + "speed":
      case prefix + "ping":
      case prefix + "p":
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            }
          );
          let old = new Date() * 1;
          await m.reply("_Testing speed..._");
          let neww = new Date() * 1;
          let groupsIn = await conn.getGroups();
          let chats = Object.entries(conn.chats).map((a) => a[0]);
          let speed = neww - old;
          m.reply(
            `
Merespon dalam ${speed / 1000} detik (${speed} ms)

💬 Status :
- *${groupsIn.length}* Group Chats
- *${groupsIn.length}* Groups Joined
- *${groupsIn.length - groupsIn.length}* Groups Left
- *${chats.length - groupsIn.length}* Personal Chats
- *${chats.length}* Total Chats

💻 *Server Info* :
RAM: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}

_NodeJS Memory Usage_
${
  "```" +
  Object.keys(used)
    .map(
      (key, _, arr) =>
        `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${format(
          used[key]
        )}`
    )
    .join("\n") +
  "```"
}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed / 1000} GHz)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed / 1000} GHz)\n${Object.keys(
        cpu.times
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}`
  )
  .join("\n\n")}`
    : ""
}
`.trim()
          );
        }
        break;
      case prefix + "donate":
      case prefix + "donasi":
        reply(
          `──「 MENU DONATE 」──\n\nHi ${pushname} 👋🏻\n\`\`\`Dana : 0882003806038\`\`\`\n\`\`\`PULSA : 082325549376 (Telkomsel)\`\`\`\nTerimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini _^\n──「 THX FOR YOU ! 」──`
        );
        break;
      case prefix + "owner":
        conn.sendContact(from, ownerNumber, m);
        break;
      case prefix + "fetch":
      case prefix + "get":
        if (!/^https?:\/\//.test(q))
          throw "Awali *URL* dengan http:// atau https://";
        var url = q;
        var res = await fetch(url);
        if (res.headers.get("content-length") > 100 * 1024 * 1024 * 1024) {
          delete res;
          throw `Content-Length: ${res.headers.get("content-length")}`;
        }
        if (!/text|json/.test(res.headers.get("content-type")))
          return conn.sendFile(m.chat, url, "file", q, m);
        txt = await res.buffer();
        try {
          txt = util.format(JSON.parse(txt + ""));
        } catch (e) {
          txt = txt + "";
        } finally {
          m.reply(txt.slice(0, 65536) + "");
        }
        break;
      /*<------- Converter/Tools ------->*/
      case prefix + "tomp3":
      case prefix + "toaudio":
        qu = m.quoted ? m.quoted : m;
        mime = (m.quoted ? m.quoted : m.msg).mimetype || "";
        if (!/video|audio/.test(mime))
          throw `Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${command}*`;
        await m.reply(mess.wait);
        media = await qu.download();
        audio = await toAudio(media, "mp3");
        conn.sendMessage(
          m.chat,
          {
            audio,
            mimetype: "audio/mpeg",
          },
          { quoted: m }
        );
        break;
      case prefix + "stiker":
      case prefix + "sticker":
      case prefix + "s":
      case prefix + "sgif":
      case prefix + "gif":
      case prefix + "stickergif":
        fq = m.quoted ? m.quoted : m;
        mime = (fq.msg || fq).mimetype || "";
        duration = (fq.msg || fq).seconds || "";
        med = m.quoted ? m.quoted.fakeObj : m;
        if (!/video|image/.test(mime) && fq.mtype !== "stickerMessage")
          throw `Reply Foto/Video Dengan Caption *${command}*`;
        // if (duration > 10) throw `Maksimal 10 Detik!`;
        timeot = new Date() * 1;
        console.log(`Starting Creating Sticker...`);
        media = `tmp/stick-before.${mime.split("/")[1]}`;
        await fs.promises.writeFile(media, await fq.download());
        ran = `./tmp/${new Date() * 1}.webp`;
        console.log(media);
        await ff(`./${media}`)
          [fq.mtype == "videoMessage" ? "inputFormat" : "input"](
            fq.mtype == "videoMessage" ? media.split(".")[1] : media
          )
          .on("start", function (cmd) {
            /*console.log(`Started : ${cmd}`)*/
          })
          .on("error", async function (e) {
            console.log(`Error : ${e}`);
            await fs.promises.unlink(media);
            tipe = media.endsWith(".mp4") ? "video" : "gif";
            m.reply(`Error, Gagal Membuat sticker!`);
          })
          .on("end", async function () {
            /*console.log('Finish')*/
            buff = await fs.promises.readFile(ran);
            await conn.sendMessage(
              m.chat,
              {
                sticker: await addExif(buff, stc.packname, stc.author),
                contextInfo: {
                  externalAdReply: {
                    title: `${conn.user.name}`,
                    body: `Simpe WhatsApp Bot Using Baileys Library`,
                    thumbnail: await getBuffer(
                      "https://telegra.ph/file/3853364f5291ba57e01f0.jpg"
                    ),
                    sourceUrl: "https://rizfurr.ml",
                  },
                },
              },
              {
                quoted: m,
              }
            );
            /* buttonWithText(m.chat, `Creating Sticker Success...\nResponse time ${new Date - timeot} ms\n\nFollow my Instagram or join group WhatsApp to get more information`, `${conn.user.name} © ${new Date().getFullYear()}`, [{
                                               urlButton: {
                                                displayText: `Instagram`,
                                                url: `https://instagram.com/caliph91_`
                                               }
                                              },
                                               {
                                                urlButton: {
                                                 displayText: `Group WhatsApp`,
                                                 url: 'https://clp.pw/gcbot'
                                                }
                                               }])*/
            await fs.promises.unlink(media);
            await fs.promises.unlink(ran);
          })
          .addOutputOptions([
            `-vcodec`,
            `libwebp`,
            `-vf`,
            `fps=15, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
          ])
          .toFormat("webp")
          .save(ran);
        break;
      case prefix + "bc":
      case prefix + "broadcast":
        if (!isOwner) return msg.reply("Perintah ini khusus Owner bot!");
        if (!q) return msg.reply("Teksnya mana amsu!");
        var chatss = Object.keys(conn.chats).filter(
          (v) => v !== "status@broadcast"
        );
        var sss = msg.quoted ? msg.quoted.fakeObj : msg;
        var kon = await conn.cMod(
          msg.chat || from,
          sss,
          `*「 BROADCAST 」*\n\n${q}`
        );
        for (let id of chatss) {
          await delay(3000);
          await conn.copyNForward(id, kon, false);
        }
        conn.reply(
          msg.chat,
          `_Mengirim pesan broadcast ke ${chats.length} chats_`,
          msg
        );
        break;
      case prefix + "bcgc":
      case prefix + "broadcastgroup":
        if (!isOwner) return msg.reply("Perintah ini khusus Owner bot!");
        if (!q) return msg.reply("Teksnya mana amsu!");
        ms_before = new Date() * 1;
        var chatss = await conn.getGroups();
        var sss = msg.quoted ? msg.quoted.fakeObj : msg;
        var kon = await conn.cMod(
          msg.chat || from,
          sss,
          `*「 BROADCAST 」*\n\n${q}`
        );
        for (let { id } of chatss) {
          await conn.copyNForward(id, kon, false);
        }
        ms_after = new Date() * 1 - ms_before;
        conn.reply(
          msg.chat,
          `_Mengirim pesan broadcast ke ${chatss.length} group_\nEstimasi ${
            ms_after / 1000
          } detik`,
          msg
        );
        break;
      case prefix + "toimg":
      case prefix + "toimage":
      case prefix + "tovid":
      case prefix + "tovideo":
        if (!isQuotedSticker) return reply(`Reply stikernya!`);
        var stream = await downloadContentFromMessage(
          msg.message.extendedTextMessage?.contextInfo.quotedMessage
            .stickerMessage,
          "sticker"
        );
        var buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        var rand1 = "tmp/" + getRandom(".webp");
        var rand2 = "tmp/" + getRandom(".png");
        fs.writeFileSync(`./${rand1}`, buffer);
        if (
          isQuotedSticker &&
          msg.message.extendedTextMessage.contextInfo.quotedMessage
            .stickerMessage.isAnimated !== true
        ) {
          exec(`ffmpeg -i ./${rand1} ./${rand2}`, async (err) => {
            fs.unlinkSync(`./${rand1}`);
            if (err) return reply(mess.error.api);
            await conn.sendMessage(
              from,
              {
                image: {
                  url: `./${rand2}`,
                },
              },
              {
                quoted: msg,
              }
            );
            fs.unlinkSync(`./${rand2}`);
          });
        } else {
          reply(mess.wait);
          require("../lib/webp2mp4")
            .webp2mp4(fs.readFileSync(`./${rand1}`))
            .then((data) => {
              fs.unlinkSync(`./${rand1}`);
              conn.sendMessage(
                from,
                {
                  video: {
                    url: data,
                  },
                },
                {
                  quoted: msg,
                }
              );
            });
        }
        break;
      case prefix + "cdnjs":
        {
          if (!q) throw `Masukkan Query\n\nCth :\n${command} jquery`;
          let segs = await fetchJson(
            `https://api.cdnjs.com/libraries/?search=${encodeURIComponent(q)}`
          );
          let tekscuy = `*Cdnjs Search*\nAvailable : ${segs.available}\nTotal : ${segs.total}\n\n`;
          num = 0;
          for (let segscuy of segs.results)
            tekscuy += `${(num += 1)}. *${segscuy.name}*\n\`\`\`${
              segscuy.latest
            }\`\`\`\n\n`;
          m.reply(tekscuy.trim());
        }
        break;
      /*<-------- Downloader ------->*/
      case prefix + "tiktok":
        if (args.length < 2) return reply(`Kirim perintah ${command} link`);
        if (!isUrl(args[1])) return reply(mess.error.Iv);
        if (!args[1].includes("tiktok")) return reply(mess.error.Iv);
        reply(mess.wait);
        clph.downloader
          .tiktok(args[1])
          .then((datas) => {
            conn.sendMessage(
              from,
              {
                video: {
                  url: datas.nowm,
                },
                caption: `${datas.title}\n\nKamu bisa mengubahnya menjadi Audio, pencet tombol dibawah untuk mengubahnya!`,
                buttons: [
                  {
                    buttonId: `${prefix}tiktokaudio ${args[1]}`,
                    buttonText: {
                      displayText: "Get Audio",
                    },
                    type: 1,
                  },
                ],
                footer: "Created by @ShiveloBot!",
              },
              {
                quoted: msg,
              }
            );
          })
          .catch(() => reply(mess.error.api));
        break;
      case prefix + "tiktokaudio":
        if (args.length < 2) return reply(`Kirim perintah ${command} link`);
        if (!isUrl(args[1])) return reply(mess.error.Iv);
        if (!args[1].includes("tiktok")) return reply(mess.error.Iv);
        reply(mess.wait);
        clph.downloader
          .tiktok(args[1])
          .then((data) => {
            conn.sendMessage(
              from,
              {
                audio: {
                  url: data.audio,
                },
                mimetype: "audio/mpeg",
              },
              {
                quoted: msg,
              }
            );
          })
          .catch(() => reply(mess.error.api));
        break;
      case prefix + "play":
        if (args.length < 2)
          return reply(
            `Kirim perintah ${command} query\nContoh : ${command} monokrom`
          );
        reply(mess.wait);
        await sendPlay(from, q);
        break;
      case prefix + "ytmp4":
      case prefix + "mp4":
        if (args.length < 2) return reply(`Kirim perintah ${command} link`);
        if (!isUrl(args[1])) return reply(mess.error.Iv);
        if (!args[1].includes("youtu.be") && !args[1].includes("youtube.com"))
          return reply(mess.error.Iv);
        reply(mess.wait);
        ytv(args[1])
          .then(async ({ thumb, dl_link, title, filesizeF }) => {
            var teks = `*Youtube Video Downloader*\n\n*≻ Title :* ${title}\n*≻ Size :* ${filesizeF}\n*≻ Download:* ${
              (await clph.tools.shortlink(dl_link)).result.url
            }\n\n_wait a minute sending media..._`;
            conn.sendMessage(
              from,
              {
                video: {
                  url: dl_link,
                },
                caption: teks,
              },
              {
                quoted: msg,
              }
            );
          })
          .catch(() => reply(mess.error.api));
        break;
      case prefix + "ytmp3":
      case prefix + "mp3":
        if (args.length < 2) return reply(`Kirim perintah ${command} link`);
        if (!isUrl(args[1])) return reply(mess.error.Iv);
        if (!args[1].includes("youtu.be") && !args[1].includes("youtube.com"))
          return reply(mess.error.Iv);
        await reply(mess.wait);
        yta(args[1])
          .then(async ({ dl_link, thumb, title, filesizeF }) => {
            var teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${title}\n*≻ Size :* ${filesizeF}\n*≻ Download :* ${
              (await clph.tools.shortlink(dl_link)).result.url
            }\n\n_wait a minute sending media..._`;
            await conn.sendMessage(
              from,
              {
                image: {
                  url: thumb,
                },
                caption: teks,
              },
              {
                quoted: msg,
              }
            );
            conn.sendMessage(
              from,
              {
                document: {
                  url: dl_link,
                },
                fileName: `${title}.mp3`,
                mimetype: "audio/mpeg",
                contextInfo: {
                  externalAdReply: {
                    title: title,
                    body: conn.user.name,
                    mediaType: "VIDEO",
                    thumbnailUrl: thumb,
                    mediaUrl: args[1],
                  },
                },
              },
              {
                quoted: msg,
              }
            );
          })
          .catch(() => reply(mess.error.api));
        break;
      case prefix + "ghsearch":
        if (!q)
          throw `Masukkan nama repo yg mau dicari!\n\nContoh :\n${command} whatsapp bot`;
        var { items, total_count } = await fetchJson(
          `https://api.github.com/search/repositories?q=${encodeURIComponent(
            q
          )}`
        );
        if (total_count == 0) throw `Repo Not Found!`;
        head = `*Github Search*\n${items.length} Repo Found!\n\n`;

        N = 0;
        for (let i of items) {
          head += `${(N += 1)}. *${i.name}*\n*${i.description}*\n*${
            i.html_url
          }*\nSize : ${format(i.size)}\nLang : ${i.language}\nStarred : ${
            i.stargazers_count
          }\nForked : ${i.forks}\n\n`;
        }
        conn.reply(m.chat, head, m);
        break;
      case prefix + "google":
        if (!q) throw `Cari Apa?`;
        dat = "❏  G O O G L E - S E A R C H\n\n";

        rez = await require("google-it")({
          query: q,
        });
        i = 0;
        for (let g of rez) {
          dat += `${(i = i + 1)}. ${g.title}\n${g.snippet}\n${g.link}\n\n`;
        }
        screen = await ssweb(
          `https://www.google.com/search?q=${encodeURIComponent(q)}`,
          true,
          true
        );
        conn.sendMessage(
          m.chat,
          {
            image: screen,
            caption: dat.trim(),
          },
          {
            quoted: m,
          }
        );
        break;
      case prefix + "igdl":
      case prefix + "instagram":
      case prefix + "ig":
        if (args.length < 2) return reply(`Kirim perintah ${command} link`);
        if (!isUrl(args[1])) return reply(mess.error.Iv);
        if (!args[1].includes("instagram.com")) return reply(mess.error.Iv);
        reply(mess.wait);
        clph.downloader.instagram
          .post(args[1])
          .then((data) => {
            var teks = `*Instagram Downloader*\n\n*> Username :* ${data.user.fullName} *(@${data.user.username})*\n*≻ Jumlah Media :* ${data.medias.length}\n\n_wait a minute sending media..._`;
            reply(teks);
            for (let i of data.medias) {
              if (i.type === "video") {
                conn.sendMessage(from, {
                  video: {
                    url: i.url,
                  },
                });
              } else if (i.type === "image") {
                conn.sendMessage(from, {
                  image: {
                    url: i.url,
                  },
                });
              }
            }
          })
          .catch(() => reply(mess.error.api));
        break;
      case prefix + "igstory":
      case prefix + "instagramstory":
        if (!q)
          return reply(
            `Kirim perintah ${command} username\n\nContoh :\n${command} dicoding`
          );
        reply(mess.wait);
        clph.downloader.instagram
          .story(args[1])
          .then((data) => {
            var teks = `*Instagram Story*\n\n*> Username :* ${data.user.fullName} *(@${data.user.username})*\n*≻ Jumlah Media :* ${data.medias.length}\n\n_wait a minute sending media..._`;
            reply(teks);
            for (let i of data.medias) {
              if (i.type === "video") {
                conn.sendMessage(from, {
                  video: {
                    url: i.url,
                  },
                });
              } else if (i.type === "image") {
                conn.sendMessage(from, {
                  image: {
                    url: i.url,
                  },
                });
              }
            }
          })
          .catch(() => reply(mess.error.api));
        break;
      case prefix + "facebook":
      case prefix + "fbdl":
        if (args.length < 2) return reply(`Kirim perintah ${command} link`);
        if (!isUrl(args[1])) return reply(mess.error.Iv);
        if (!args[1].includes("facebook.com")) return reply(mess.error.Iv);
        reply(mess.wait);
        xfar
          .Facebook(args[1])
          .then((data) => {
            conn.sendMessage(
              from,
              {
                video: {
                  url: data.medias[0].url,
                },
                caption: data.title,
              },
              {
                quoted: msg,
              }
            );
          })
          .catch(() => reply(mess.error.api));
        break;
      case prefix + "ttc-solo":
      case prefix + "tictactoe-solo":
      case prefix + "ttcsolo":
        if (isTicTacToe(from, ttcsolo))
          return reply(
            `Masih ada game yg blum selesai\nketik ${prefix}endttc untuk menghapus sesi`
          );
        // addCountCmd('#tictactoe-solo', sender, _cmd)
        reply(
          `\`\`\`TICTACTOE GAME\n\n@${sender.split("@")[0]} melawan ${
            conn.user.name
          }\n\nKirim (Y/N) untuk melanjutkan permainan\`\`\``
        );
        ttcsolo.push({
          id: from,
          status: null,
          giliran: "penantang",
          penantang: sender,
          ditantang: botName,
          TicTacToe: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"],
        });
        // gameAdd(sender, glimit)
        break;
      case prefix + "endttc":
      case prefix + "endtictactoe":
        if (!isTicTacToe(from, ttcsolo))
          return reply(`Tidak ada sesi game TicTacToe di Grup ini!`);
        var posi = getPosTic(from, ttcsolo);
        if (ttcsolo[posi].penantang == sender) {
          reply(`Berhasil menghapus sesi TicTacToe Solo`);
          ttcsolo.splice(posi, 1);
        } else {
          reply(
            `Anda bukan pemain, suruh @${
              ttcsolo[posi].penantang.split("@")[0]
            } untuk mengetik ${prefix}endttc`
          );
        }
        break;
      default:
        if (isCmd) isAvail = false;
        if (
          m.quoted &&
          typeof m.text == "string" &&
          m.quoted.fromMe &&
          m.quoted.isBaileys &&
          !isCmd
        ) {
          var lc = JSON.parse(
            JSON.stringify(
              require("awesome-phonenumber")("+" + m.sender.split("@")[0])
            )
          ).regionCode;
          var { success: result } = await fetchJson(
            `https://api-sv2.simsimi.net/v2/?text=${encodeURIComponent(
              m.text
            )}&lc=${lc.toLowerCase()}&cf=false`
          );
          if (
            result ==
            "Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku."
          )
            return m.reply("maaf kak, aku ga ngerti :(");
          m.reply(result.trim().replace(/simi/gi, "rikka"));
        }
        if (isGroup && isCmd) {
          kyy = ikyyh.tools.detectTypo(
            command.slice(1) || command,
            Object.keys(hit)
          );
          if (kyy.status == 200)
            m.reply(
              `Mungkin yang kamu maksud :\n\n${kyy.result
                .map(
                  (a) =>
                    `- *${prefix + a.teks}*\n- Keakuratan : ${
                      String(a.keakuratan).split(".")[1]
                    }%`
                )
                .join("\n\n")}`
            );
        }
    }
    if (isAvail && isCmd) {
      if (hit[command.slice(1) || command]) {
        console.log("Adding count command on database " + command);
        cuy = hit[command.slice(1) || command];
        cuy.hit += 1;
        cuy.last = new Date() * 1;
        hit[command.slice(1) || command] = cuy;
        console.log(cuy);
        fs.writeFileSync(
          "./database/chat/hit.json",
          JSON.stringify(hit, null, 2)
        );
      } else {
        hit[command.slice(1) || command] = {
          hit: 1,
          last: new Date() * 1,
        };
        console.log("Pushing command on database " + command);
        fs.writeFileSync(
          "./database/chat/hit.json",
          JSON.stringify(hit, null, 2)
        );
      }
    }
  } catch (e) {
    console.log("Error :", color(e, "red"));
    if (m)
      m.reply(util.format(e.message ? `Error : ` + e.message : e)).catch(
        () => {}
      );
  }
};
