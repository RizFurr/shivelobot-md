const { webp2png } = require('../../lib/webp2');
 
module.exports = {
	name: "toimg",
	alias: ["toimg"],
	category: "converter",
	desc: "converter sticker to img", 
	wait: true,
	async run({ msg, conn }) {
    try {
	let media = await msg.quoted.download(),
        out = await webp2png(media);
	await conn.sendFile(msg.from, out, 'webp.jpg', 'Succes convert sticker to image✅', msg)
		} catch {
		await msg.reply("Reply Sticker",{ adReply: true });   
		}
	},
};