const yts = require("yt-search"),
	{ y2mateV, y2mateA } = require("../../lib/y2mate");

module.exports = {
	name: "youtube",
	alias: ["play", "ytmp4", "ytmp3"],
	use: "<url>",
	category: "downloader",
	desc: "Download audio/video from YouTube",
	wait: true,
	query: true,
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		var pilih = msg.body.split(/ +/)[0].slice(1);
		var teks = q.replace(/ --doc/gi, "");
		if (pilih == "play" || pilih == "youtube") {
			yets = await yts(teks);
			var results = await yets.all.filter((s) => s.type == "video");
			var vid = results.find((video) => video.seconds < 3600);
			teks = vid.url;
		}
		var yt = await y2mateV(teks, "480");
		if (yt[0].link == "https://app.y2mate.com/download") yt = await y2mateV(teks, "360");
		if (yt[0].link == "https://app.y2mate.com/download") yt = await y2mateV(teks, "144");
		if (pilih == "play" || pilih == "ytmp3" || pilih == "youtube") {
			yt = await y2mateA(teks, "256");
		}
		switch (pilih) {
			case "play":
				await conn.sendMessage(msg.from, {
					image: { url: yt[0].thumb },
					caption: await rzky.tools.parseResult(yt[0], { title: "Youtube Downloader",
delete: ["link"],																			 }),
					templateButtons: [
						{ urlButton: { displayText: "Source", url: teks } },
						{ quickReplyButton: { displayText: "Audio 🎶", id: "#ytmp3 " + teks } },
						{ quickReplyButton: { displayText: "Video 🎥", id: "#ytmp4 " + teks } }
						],
				});
				break;
			case "ytmp3":
				await conn.sendMessage(msg.from, { document: { url: yt[0].link}, mimetype:"audio/mpeg", fileName: yt[0].judul + ".mp3"}, { quoted: msg });
				break;
case "ytmp4":
				await conn.sendMessage(
					msg.from,
					{
						video: {
							url: yt[0].link,
						},
						mimetype: "video/mp4",
						caption: await rzky.tools.parseResult(yt[0], { title: "Youtube Video Downloader",
delete: ["link"],}),
						fileName: yt.title + ".mp4", 
						templateButtons: [
						{ urlButton: { displayText: "Source", url: teks } },
						],
					}, 
					{
						quoted: msg,
					} 
				);
				break;
		}
	},
};