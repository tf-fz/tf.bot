// SlashCommandBuilder を discord.js からインポート.
// これにより、スラッシュコマンドを簡単に構築できます.
const { SlashCommandBuilder } = require('discord.js');

//別ファイルから曲名を読み込む
let g = require('./songs/geki.js');


			




// 以下の形式にすることで、他のファイルでインポートして使用できるようになります.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('random')
		.setDescription('ランダム選曲')
		.addStringOption(option =>
			option.setName('機種')
				.setDescription('対応機種')
				.setRequired(true)
				.addChoices(
					{ name: 'オンゲキ', value:'オンゲキ'},))
		.addNumberOption(option =>
			option.setName('定数最小値')
				.setDescription('定数の下限を設定します')
				.setRequired(true)
				.setMinValue(0)
				.setMaxValue(15.7))
		.addNumberOption(option =>
			option.setName('定数最大値')
				.setDescription('定数の上限を設定します')
				.setRequired(true)
				.setMinValue(0)
				.setMaxValue(15.7)),
	execute: async function(interaction) {
		let game = interaction.options.getString('機種');
		let difmin = interaction.options.getNumber('定数最小値');
		let difmax = interaction.options.getNumber('定数最大値');

		
let song = []
song = song.concat(g.song)

		let data0 = song.filter( p => p.dev == game)
		let data1 = data0.filter( p => p.con >= difmin)
		let data = data1.filter( q => q.con <= difmax).map(m => m.曲名)

		/*let data = song.filter( function(p) {
			return p.con <= 15;}).map(m => m.曲名)*/
		console.log(data)		

		/*let rand = Math.floor( Math.random() * arr.length);
		if (difmin > difmax){
			await interaction.reply("max"+difmax+" , min"+difmin+" , お前頭グミ");
		}else if (difmin == difmax && difmin == 15.5){
			await interaction.reply(game+"に"+difmin+"なんてねぇよバーカ");
		}else if (difmin == difmax){
			await interaction.reply("機種:"+game+" , 難易度指定 "+difmin+"\n"+ arr[rand]);
		}else if (difmin < difmax){
			await interaction.reply("機種:"+game+" , 難易度指定 "+difmin+"～"+difmax+"\n"+ arr[rand]);
		}
		*/
		
		let rand = Math.floor( Math.random() * data.length);
		if (difmin > difmax){
			await interaction.reply("max"+difmax+" , min"+difmin+" , お前頭グミ");
		}else if (difmin == difmax && difmin == 15.5){
			await interaction.reply(game+"に"+difmin+"なんてねぇよバーカ");
		}else if (difmin == difmax){
			await interaction.reply("機種:"+game+" , 難易度指定 "+difmin+"\n"+ data[rand]);
		}else if (difmin < difmax){
			await interaction.reply("機種:"+game+" , 難易度指定 "+difmin+"～"+difmax+"\n"+ data[rand]);
		}
	},
};


