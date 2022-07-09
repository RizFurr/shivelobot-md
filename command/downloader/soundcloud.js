module.exports = {
	name: "soundcloud",
	alias: ["soundcloud"],
	use: "<url>",
	category: "downloader",
	desc: "Download audio from SoundCloud",
	wait: true,
	isUrl: true,
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
  require("../../lib/scdl.js")(args[0]).then(data => {
  let txt = `*Title :* ${data.title}`
  conn.sendFile( msg.from, `${data.thumb}`, "artwork.jpg", txt, msg );
	conn.sendMessage(msg.from, { document: { url: data.link }, fileName: `${data.title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: msg })
  }).catch(() => m.reply('Downloader SoundCloud Error!'))
	},
};
