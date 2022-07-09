module.exports = {
	name: "tiktok",
	alias: ["tiktok"],
	use: "<url>",
	category: "downloader",
	desc: "Download video from Tiktok",
	wait: true,
	isUrl: true,
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		var pilih = msg.body.split(/ +/)[0].slice(1);
		var teks = args[0];
		var yt = await rzky.downloader.downloaderAll(teks);
		var mp4 = yt.mp4[yt.mp4.length - 1];
		var img = yt.image;
		var audio = yt.result;
		yt.size_video = mp4 ? mp4.formattedSize : "";
		delete yt.image;
		delete yt.mp4;
       delete yt.mp3
		delete yt.status;
		var result = await rzky.tools.parseResult(yt, {
			title: "Tiktok Downloader", delete:["url"]
		});
		try {
			switch (pilih) {
				case "tiktok":
					await conn.sendMessage(
						msg.from,
						{
							video: {
								url: mp4.url,
							},
							caption: result.replace(/downloader_from/gi, "Tiktok Downloader"),
							mimetype: "video/mp4",
							fileName: yt.title.substr(0, 19) + ".mp4",
							templateButtons: [
								{ urlButton: { displayText: "Source Video 📽️", url: q } },
								{ quickReplyButton: { displayText: "Get Audio 🎶", id: "#tiktokaudio " + q } },
							],
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
