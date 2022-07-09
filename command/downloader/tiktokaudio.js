module.exports = {
	name: "tiktokaudio",
	alias: ["tiktokaudio"],
	use: "<url>",
	category: "downloader",
	desc: "Download audio from tiktok",
	wait: true,
	isUrl: true,
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		var pilih = msg.body.split(/ +/)[0].slice(1);
		let rizz = require("rizfurr-api");
		try {
			switch (pilih) {
				case "tiktokaudio":
				rizz.downloader.tiktok(args[0]).then(async ({ author, audio }) => { 
       await conn.sendMessage(
						msg.from,
						{
							document: {
							url: audio,
							},
							mimetype: "audio/mpeg",
							fileName: author + ".mp3",
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
