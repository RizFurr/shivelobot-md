const axios = require("axios");
const expand = async (url) => {
	let axs = await axios.get("https://caliph.my.id/api/expandurl.php?url=" + url);
	return axs.data.result;
};

module.exports = {
	name: "downloaderall",
	alias: ["pinterest", "pindl", "tiktokaudio", "tiktok", "fbdl", "fb", "facebook"],
	use: "<url>",
	category: "downloader",
	desc: "Download audio/video from Facebook, Imgur, Pinterest, Dan Tiktok",
	wait: true,
	isUrl: true,
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) { 
		let rizz = require("rizfurr-api")
		var pilih = msg.body.split(/ +/)[0].slice(1);
		var teks = args[0];
		let tiktok;
		if (pilih == "tiktok" || pilih == "tiktokaudio") tiktok = await rizz.downloader.tiktok(teks)
		if (pilih == "tiktok" || pilih == "tiktokaudio") delete tiktok.result;
		
		var yt = await rzky.downloader.downloaderAll(teks);
		if (pilih == "downloaderall") return msg.reply("Silahkan Pilih Downloader: tiktok,soundcloud,facebook");
		var mp3 = yt.mp3[yt.mp3.length - 1];
		var mp4 = yt.mp4[yt.mp4.length - 1];
		var img = yt.image;
		yt.size_audio = mp3 ? mp3.formattedSize : "";
		yt.size_video = mp4 ? mp4.formattedSize : "";
		delete yt.image;
		delete yt.mp4;
		delete yt.mp3;
		delete yt.status;
		var result = await rzky.tools.parseResult(yt, {
			title: "Downloader",
		});
		try {
			switch (pilih) {
				case "facebook":
				case "fb":
				case "fbdl":
					await conn.sendMessage(
						msg.from,
						{
							video: {
								url: mp4.url,
							},
							mimetype: "video/mp4",
							caption: result.replace(/downloader_from/gi, "Downloader From"),
							fileName: "facebook.mp4",
						},
						{
							quoted: msg,
						}
					);
					break;
				case "pindl":
				case "pinterest":
					await conn.sendMessage(
						msg.from,
						{
							video: {
								url: mp4.url,
							},
							mimetype: "video/mp4",
							caption: result.replace(/downloader_from/gi, "Downloader From"),
							fileName: "pinterest.mp4",
						},
						{
							quoted: msg,
						}
					);
					break;
				case "tiktok":
					await conn.sendMessage(
						msg.from,
						{
							video: {
								url: await tiktok.nowm,
							},
							caption: await rzky.tools.parseResult(tiktok, { title: "Tiktok Download" }),
							mimetype: "video/mp4",
							fileName: tiktok.title.substr(0, 19) + ".mp4",
							templateButtons: [
								{ urlButton: { displayText: "Source", url: q } },
								{ quickReplyButton: { displayText: "Audio🎶", id: "#tiktokaudio " + q } },
							],
						},
						{
							quoted: msg,
						}
					);
					break;
				case "tiktokaudio":
					await conn.sendMessage(
						msg.from,
						{
							image: { url: await tiktok.thumbnail },
							fileName: "tiktok.jpg",
							caption: await rzky.tools.parseResult(tiktok, { title: "Tiktok Download" }),
						},
						{ quoted: msg }
					);
					await conn.sendMessage(
						msg.from,
						{
							audio: {
								url: tiktok.audio,
							},
							mimetype: "audio/mpeg",
							fileName: tiktok.author + ".mp3",
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
