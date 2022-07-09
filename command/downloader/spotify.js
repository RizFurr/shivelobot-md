module.exports = {
	name: "spotify",
	alias: ["spotify"],
	use: "<url>",
	category: "downloader",
	desc: "Download audio from spotify",
	wait: true,
	isUrl: true,
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		var pilih = msg.body.split(/ +/)[0].slice(1);
		const spotify = require("../../lib/spotify.js");
		try {
			switch (pilih) {
				case "spotify":
				  spotify(args[0]).then(async ({ name, artist, cover, album, url }) => {
          let rizz = require("rizfurr-api");
          var teks = `*Spotify Downloader*\n\n*≻ Title :* ${name}\n*≻ Artist :* ${artist}\n*≻ In Album :* ${album}\n*≻ Download :* ${(await rizz.tools.uploadFile(url)).result.url}\n\n_wait a minute sending media..._`;
					await conn.sendMessage(
              msg.from,
              {
                image: {
                  url: cover,
                },
                caption: teks,
              },
              {
                quoted: msg,
              }
            );  
          await conn.sendMessage(
              msg.from,
              {
                document: url,
                fileName: artist+' - '+name+'.mp3',
                mimetype: "audio/mpeg",
              },
              {
                quoted: msg,
              }
            );
          })
					break;
			}
		} catch (err) {
			console.log(err);
			await msg.reply(response.error.api);
		}
	},
};
