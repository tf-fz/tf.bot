

// discord.js v14では、下記のようにRESTとRoutesはdiscord.jsパッケージから直接インポートできます
const { REST, Routes } = require('discord.js');

// random.jsのmodule.exportsを呼び出します。
const randomFile = require('./commands/random.js');

// 環境変数としてapplicationId, guildId, tokenの3つが必要です
const { applicationId, guildId,token } = require('./config.json');

// 登録コマンドを呼び出してリスト形式で登録
const commands = [randomFile.data.toJSON()];

// DiscordのAPIには現在最新のversion10を指定
const rest = new REST({ version: '10' }).setToken(token);

// Discordサーバーにコマンドを登録
(async () => {
    try {
        await rest.put(
			Routes.applicationGuildCommands(applicationId, guildId),
			{ body: commands },
		);
        console.log('サーバー固有のコマンドが登録されました！');
    } catch (error) {
        console.error('コマンドの登録中にエラーが発生しました:', error);
    }
})();
