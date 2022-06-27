module.exports = {
	name: "soundcloud",
	alias: ["soundcloud"],
	use: "<url>",
	category: "downloader",
	desc: "Downloader SoundCloud",
	wait: true,
	isUrl: true,
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
	  var teks = args[0];
	  var pilih = msg.body.split(/ +/)[0].slice(1);
		let rizz = require("rizfurr-api")
		var res = await rizz.downloader.soundcloud(teks)
		let cpt = `✵ _*Soundcloud Downloader*_

*➤ Title:* _${res.result.title}_
*➤ Duration:* _${res.result.duration}_
*➤ Quality:* _${res.result.quality}_`

		try {
			switch (pilih) {
			  case "soundcloud":
					await conn.sendMessage(
						msg.from,
						{
							image: { url: await res.result.thumb },
							fileName: "Cover Art - "+res.result.title+".jpg",
							caption: cpt
						},
						{ quoted: msg }
					);
					await conn.sendMessage(
						msg.from,
						{
							document: {
								url: res.result.url,
							},
							mimetype: "audio/mpeg",
							fileName: res.result.title + ".mp3",
						},
						{
							quoted: msg,
						}
					);
					break;
			}
		} catch (err) {
			console.log(err);
			await msg.reply(response.error.api);
		}
	},
};