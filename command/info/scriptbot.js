module.exports = {
	name: "scriptbot",
	alias: ["script", "sc", "scbot"],
	category: "info",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		await conn.sendMessage(
			msg.from,
			{
				image: { url: config.thumb },
				footer: config.namebot,
				// Gausah di ubah kontol najis modal copas sana sini ubah source cih
				caption: `Script Bot Is here\ndon't forget fork + star XD`,
				templateButtons: [
					{ urlButton: { displayText: "Base Bot", url: "https://github.com/Rizky878/rzky-multidevice/" } },
					{ urlButton: { displayText: "Script Bot", url: "https://github.com/rizfurr/shivelobot-md/" } },

				],
			},
			{ quoted: msg }
		);
	},
};
