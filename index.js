//cd Desktop\discordbot\my-discord-bot
//node index.js

// random.jsのmodule.exportsを呼び出します。
const randomFile = require('./commands/random.js');



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

client.on(Events.MessageCreate, message => {
if (cooldown == 0){
    if (message.author.bot) return;
    if (message.content.includes("tfちゅ😘")) {
        message.channel.send("グミ死ねほんまキモイそんなことしてる暇あったら留年しないようにちゃんと学校行ったら？");
    }else if (message.content.includes("<@812959370467606549>😘")) {
        message.channel.send("グミ死ねほんまキモイそんなことしてる暇あったら留年しないようにちゃんと学校行ったら？");
    }else if (message.content.includes("😘")) {
        message.channel.send("きしょ");
    }else if (message.content.includes("<@812959370467606549>")) {
        message.channel.send("---ただいま睡眠中---");
    }else if (message.content.includes("⁉️")) {
        message.channel.send("ゴマガキきもい");
    }else if (message.content.includes("<@957571632694718464>")) {
        message.channel.send("重機さん、でしょ？ｗ");
    }else if ((message.content.includes("リコレ"))||(message.content.includes("Recollect Lines"))) {
        message.channel.send("リコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞリコレはいいぞ");
    }else if (message.content.includes("留年睡眠リコハラ魔")) {
        message.channel.send("君消す");
    }else if (message.content.includes("グミ")) {
        message.channel.send("🤮");
    }else if (message.content.includes("<@1081940226219446436>")) {
	let guminouta = Math.floor( Math.random() * 10)
	if (guminouta == 0){
		 message.channel.send("グミグミまわれ\nグミ手を上げて\nまた退学\nもう決まりそう\nこっち行ってあっち行って\nあぁ今ので退学\n\nグミグミ弾け\nグミ手を上げて\nグミ引きこもり不登校の\n青春を貫き\nまた退学の\nグミの歌");
	}else if (guminouta == 1){
		 message.channel.send("こいつ生理的に無理");
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
    }
    cooldown = 1;
    setTimeout(cooltime,3000);
};});

let gumirand;
client.on(Events.MessageCreate, message => {
    if (message.author.id === "1081940226219446436") {
	if (message.content){
		 gumirand = Math.floor( Math.random() * 20)
		if (gumirand == 0){
			message.channel.send("うるさい黙れ");
	};
    if (message.content.includes("tfちゅ😘")) {
        message.channel.send("グミ死ねほんまキモイそんなことしてる暇あったら留年しないようにちゃんと学校行ったら？");
    }else if (message.content.includes("<@812959370467606549>😘")) {
        message.channel.send("グミ死ねほんまキモイそんなことしてる暇あったら留年しないようにちゃんと学校行ったら？");
    }else if (message.content.includes("😘")) {
        message.channel.send("きしょ");};};}
});
/*client.on(Events.MessageCreate, message => {
    if (message.author.id === "812959370467606549") {
    if (message.content){
	message.channel.send("test");};}
});*/
// ログイン
client.login(token);
