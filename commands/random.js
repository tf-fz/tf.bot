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

		//空の配列作って必要なのだけ結合.
		let arr = [];
	
		if (game == 'オンゲキ'){
			if((difmin <= 14.0)&&(difmax >= 14.0)){
				arr = arr.concat(g.g140)
			}if((difmin <= 14.1)&&(difmax >= 14.1)){
				arr = arr.concat(g.g141)
			}if((difmin <= 14.2)&&(difmax >= 14.2)){
				arr = arr.concat(g.g142)
			}if((difmin <= 14.3)&&(difmax >= 14.3)){
				arr = arr.concat(g.g143)
			}if((difmin <= 14.4)&&(difmax >= 14.4)){
				arr = arr.concat(g.g144)
			}if((difmin <= 14.5)&&(difmax >= 14.5)){
				arr = arr.concat(g.g145)
			}if((difmin <= 14.6)&&(difmax >= 14.6)){
				arr = arr.concat(g.g146)
			}if((difmin <= 14.7)&&(difmax >= 14.7)){
				arr = arr.concat(g.g147)
			}if((difmin <= 14.8)&&(difmax >= 14.8)){
				arr = arr.concat(g.g148)
			}if((difmin <= 14.9)&&(difmax >= 14.9)){
				arr = arr.concat(g.g149)
			}if((difmin <= 15.0)&&(difmax >= 15.0)){
				arr = arr.concat(g.g150)
			}if((difmin <= 15.1)&&(difmax >= 15.1)){
				arr = arr.concat(g.g151)
			}if((difmin <= 15.2)&&(difmax >= 15.2)){
				arr = arr.concat(g.g152)
			}if((difmin <= 15.3)&&(difmax >= 15.3)){
				arr = arr.concat(g.g153)
			}if((difmin <= 15.4)&&(difmax >= 15.4)){
				arr = arr.concat(g.g154)
			}if((difmin <= 15.6)&&(difmax >= 15.6)){
				arr = arr.concat(g.g156)
			}if((difmin <= 15.7)&&(difmax >= 15.7)){
				arr = arr.concat(g.g157)
			}
		}

		let rand = Math.floor( Math.random() * arr.length);
		if (difmin > difmax){
			await interaction.reply("max"+difmax+" , min"+difmin+" , お前頭グミ");
		}else if (difmin == difmax){
			await interaction.reply("機種:"+game+" , 難易度指定 "+difmin+"\n"+ arr[rand]);
		}else if (difmin < difmax){
			await interaction.reply("機種:"+game+" , 難易度指定 "+difmin+"～"+difmax+"\n"+ arr[rand]);
		}
	},
};

