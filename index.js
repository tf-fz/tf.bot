//cd Desktop\discordbot\my-discord-bot
//node index.js
//pm2 start index.js
//pm2 stop index.js
//pm2 start Desktop\discordbot\my-discord-bot\index.js
//pm2 stop Desktop\discordbot\my-discord-bot\index.js

// random.jsのmodule.exportsを呼び出します。
const randomFile = require('./commands/random.js');

//エラー時自動起動
process.on('uncaughtException', err => console.log(err));

// discord.jsライブラリ呼び出し保存
const { Client, Events, GatewayIntentBits } = require('discord.js');

// 設定ファイルからトークン情報を呼び出し、変数に保存します
const { token } = require('./config.json');

// クライアントインスタンスオブジェクト作成
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

// クライアントオブジェクトが準備OKとなったとき一度のみ実行
client.once(Events.ClientReady, c => {
	console.log(`準備OKです! ${c.user.tag}がログインします。`);
});



//スラッシュコマンドに応答するには、interactionCreateのイベントリスナーを使う必要があります
client.on(Events.InteractionCreate, async interaction => {

    // スラッシュ以外のコマンドの場合は対象外なので早期リターンさせて終了します
    // コマンドにスラッシュが使われているかどうかはisChatInputCommand()で判断しています
    if (!interaction.isChatInputCommand()) return;

    // randomコマンドに対する処理
    if (interaction.commandName === randomFile.data.name) {
        try {
            await randomFile.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            } else {
                await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            }
        }
    } else {
        console.error(`${interaction.commandName}というコマンドには対応していません。`);
    }
});

let cooldown = 0;
let cooltime = () => {
	cooldown = 0;
}
let gumi1;







/*


client.on(Events.MessageCreate, message => {

if (new Date().getTime() < client.user.communicationDisableTimestamp){
	console.log("タイムアウト中")
}else {
    if (message.author.bot) return;
    if (message.content.includes("@everyone")) {
        message.react('<:T_SHINE:1109313453568557096>');
    }if (message.content.includes("鯖缶")) {
        message.channel.send("# グミ鯖缶降りろ");
    }




if (cooldown == 0){
    if (message.content.includes("😘")) {
        message.channel.send("きしょ");
    }else if (message.content.includes("<@812959370467606549>")) {
        message.channel.send("---ただいま睡眠中---");
    }else if (message.content.includes("⁉️")) {
        message.channel.send("ゴマガキきもい");
    }else if (message.content.includes("<@957571632694718464>")) {
        message.channel.send("重機さん、でしょ？ｗ");
    }else if ((message.content.includes("リコレ"))||(message.content.includes("Recollect Lines"))) {
        message.channel.send("リコレはいいぞリコレはいいぞリコレはいいぞ");
    }else if (message.content.includes("留年睡眠リコハラ魔")) {
        message.channel.send("君消す");
    }else if (message.content.includes("グミ")) {
	gumi1 = Math.floor( Math.random() * 5)
	if (gumi1 == 0){
        message.channel.send("🤮");};
    }else if (message.content.includes("<@1081940226219446436>")) {
	let guminouta = Math.floor( Math.random() * 10)
	if (guminouta == 0){
		 message.channel.send("グミグミまわれ\nグミ手を上げて\nまた退学\nもう決まりそう\nこっち行ってあっち行って\nあぁ今ので退学\n\nグミグミ弾け\nグミ手を上げて\nグミ引きこもり不登校の\n青春を貫き\nまた退学の\nグミの歌");
	}else if (guminouta == 1){
		 message.channel.send("こいつ生理的に無理");
	}else if (guminouta < 6){
		 message.channel.send("森田悠也君がどうしたの？");
	};
    }else if (message.content.includes("<@1240650640116547674>")) {
        message.channel.send("はい、なんの要件でしょうか？");
    }else if ((message.content.includes("つふ"))||(message.content.includes("tf"))) {
	let mesrand1 = Math.floor( Math.random() * 2)
	if (mesrand1 == 0){
		message.channel.send("はい、グミさんは汚い<:Z_nowtaigaku:1186708116591620126>");
	}else if (mesrand1 == 1){
		message.channel.send("はい、きのこ凍結おめでとう<:Z_nowtaigaku:1186708116591620126>");
	};
    }else {
        console.error('対応していません。');
    }
    cooldown = 1;
    setTimeout(cooltime,3000);
}}});


*/

let gumirand1;
let gumirand2;
client.on(Events.MessageCreate, message => {
    if (message.author.id === "1081940226219446436") {
if (new Date().getTime() < message.member.communicationDisableTimestamp){
	console.log("タイムアウト中")
}else {
	if (message.content.includes("<a:rainbowroach:1272205285171265611>")) {
        message.channel.send("きっも死ねや");
    };
	if (message.content){
		 gumirand1 = Math.floor( Math.random() * 100)
		if (gumirand1 == 0){
			message.channel.send("うるさい黙れ");
		}else if (gumirand1 == 1){
			message.channel.send("きっしょいねんガチ死ねよそんなんだからグミなんだよ、とっとと失せろ");
	};
    if (message.content){
		 gumirand2 = Math.floor( Math.random() * 10)
		if (gumirand2 < 3){
			message.react('<:T_SHINE:1109313453568557096>');
		}else if (gumirand2 == 3){
			message.react('<:Z_nowtaigaku:1186708116591620126>');
		}else if (gumirand2 == 4){
			message.react('<:Extra1:1234458378038939719>');
		}
    	};
    if (message.content.includes("tfちゅ😘")) {
        message.channel.send("グミ死ねほんまキモイそんなことしてる暇あったら留年しないようにちゃんと学校行ったら？");
    }else if (message.content.includes("<@812959370467606549>😘")) {
        message.channel.send("グミ死ねほんまキモイそんなことしてる暇あったら留年しないようにちゃんと学校行ったら？");
    }else if (message.content.includes("😘")) {
        message.channel.send("きしょ");};};}
}});




// ログイン
client.login(token);
