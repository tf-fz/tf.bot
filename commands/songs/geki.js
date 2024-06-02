//白⚪️,紫🟣,赤🔴,黄🟡,緑🟢

//多次元配列にして後々ソート楽にしようと書き換え中
let song = [//	{ dev:"オンゲキ", con:"", dif:"MASTER", tit:""},
	{ dev:"オンゲキ", con:"15.7", dif:"MASTER", 曲名:"🟣Recollect Lines"},
	{ dev:"オンゲキ", con:"15.6", dif:"MASTER", 曲名:"🟣μ3"},
	{ dev:"オンゲキ", con:"15.4", dif:"MASTER", 曲名:"🟣LAMIA"},{ dev:"オンゲキ", 定数:"15.4", 難易度:"MASTER", 曲名:"🟣Apollo"},{ dev:"オンゲキ", 定数:"15.4", 難易度:"MASTER", 曲名:"🟣Selenadia"},{ dev:"オンゲキ", 定数:"15.4", 難易度:"MASTER", 曲名:"🟣FestA of PandemoniuM"},
	{ dev:"オンゲキ", con:"15.3", dif:"MASTER", 曲名:"🟣MarbleBlue."},{ dev:"オンゲキ", 定数:"15.3", 難易度:"MASTER", 曲名:"🟣MeteorSnow"},{ dev:"オンゲキ", 定数:"15.3", 難易度:"MASTER", 曲名:"🟣光焔のラテラルアーク"},{ dev:"オンゲキ", 定数:"15.3", 難易度:"MASTER", 曲名:"🟣And Revive The Melody"},
	{ dev:"オンゲキ", con:"15.2", 難易度:"MASTER", 曲名:"🟣Stardust:RAY"},{ dev:"オンゲキ", 定数:"15.2", 難易度:"MASTER", 曲名:"🟣Regulus"},
	{ dev:"オンゲキ", con:"15.1", 難易度:"MASTER", 曲名:"🟣雪男"},{ dev:"オンゲキ", 定数:"15.1", 難易度:"MASTER", 曲名:"🟣脳天直撃"},{ dev:"オンゲキ", 定数:"15.1", 難易度:"MASTER", 曲名:"🟣Magical Panic Adventure"},{ dev:"オンゲキ", 定数:"15.1", 難易度:"MASTER", 曲名:"🟣POTENTIAL"},{ dev:"オンゲキ", 定数:"15.1", 難易度:"MASTER", 曲名:"🟣宿星審判"},{ dev:"オンゲキ", 定数:"15.1", 難易度:"MASTER", 曲名:"🟣Stellar:Dream"},{ dev:"オンゲキ", 定数:"15.1", 難易度:"MASTER", 曲名:"🟣Op.l《fear-TITΛN-》"},
	{ dev:"オンゲキ", con:"15.0", 難易度:"MASTER", 曲名:"🟣Opfer"},{ dev:"オンゲキ", 定数:"15.0", 難易度:"MASTER", 曲名:"🟣ω4"},{ dev:"オンゲキ", 定数:"15.0", 難易度:"MASTER", 曲名:"⚪️怨撃"},{ dev:"オンゲキ", 定数:"15.0", 難易度:"MASTER", 曲名:"⚪️AMAZING MIGHTYYYY!!!!"},{ dev:"オンゲキ", 定数:"15.0", 難易度:"MASTER", 曲名:"🟣Scythe of Death"},
	{ dev:"オンゲキ", con:"14.9", 難易度:"MASTER", 曲名:""},
	{ dev:"オンゲキ", con:"14.9", 難易度:"MASTER", 曲名:""},
]

let g157 = '🟣Recollect Lines';
let g156 = '🟣μ3';
let g155 = [];
let g154 = ['🟣LAMIA','🟣Apollo','🟣Selenadia','🟣FestA of PandemoniuM'];
let g153 = ['🟣MarbleBlue.','🟣MeteorSnow','🟣光焔のラテラルアーク','🟣And Revive The Melody'];
let g152 = ['🟣Stardust:RAY','🟣Regulus'];
let g151 = ['🟣脳天直撃','🟣Magical Panic Adventure','🟣POTENTIAL','🟣宿星審判','🟣Stellar:Dream','🟣Op.l《fear-TITΛN-》'];
let g150 = ['🟣Opfer','🟣ω4','⚪️怨撃','⚪️AMAZING MIGHTYYYY!!!!','🟣Scythe of Death'];
let g149 = ['🟣MANIERA REMASTERED','🟣FREEDOM DiVE','🟣Invisible Frenzy','🟣the EmpErroR','🟣蜘蛛の糸','🟣Hainuwele','🟣Sage','🟣Titania','🟣Good bye, Merry-Go-Round.','🟣Falsum Atlantis.',"🟣Don't Fight The Music","🟣Viyella's Scream",'🟣Cult future','🟣Diamond Dust','🟣オンソクデイズ!!','🟣GAME:CHANGER','🟣THE TRiANGLE','⚪️シリウスの輝きのように','⚪️天狗の落とし文 feat.ｙｔｒ','⚪️MEGALOVANIA','⚪️macrocosmos','⚪️GODLINESS'];
let g148 = ['🟣Re：End of a Dream','🟣Shamshir -rough Pt.2-','🟣Crimson Phoenix','🟣In Chaos','🟣Tempestissimo','🟣QZKago Requiem','🟣TiamaT:F minor','🟣YURUSHITE',"🟣Viyella's Tears",'🟣A Man In The Mirror','🟣Singularity -technoplanet-','🟣Ai C','🟣ゼーレンヴァンデルング','🟣しとしとと','⚪️My First Phone','⚪️Halcyon'];
let g147 = ['🟣End Time','🟣Love & Justice','🟣ouroboros -twin stroke of the end-','🟣otorii INNOVATED -[i]3-','🟣larva','🟣Xevel','🟣Last Celebration','🟣Alea jacta est!','🟣渦状銀河のシンフォニエッタ','🟣Fragrance','🟣Elemental Ethnic','🟣AstrøNotes.','🟣FLUFFY FLASH','🟣Adverse Gaff','🟣SUPER AMBULANCE','🟣RELOAD','🟣Final Flash Flight','🟣其のエメラルドを見よ',"🟣Buck's Fizz",'🟣Cogito ergo sum','🔴Recollect Lines','⚪️P！P！P！P！がおー!!'];
let g146 = ['🟣ラクガキスト','🟣妖々跋扈 ～ Who done it!','🟣BATTLE NO.1','🟣World Vanquisher','🟣Caliburne 〜Story of the Legendary sword〜','🟣花と、雪と、ドラムンベース。','🟣VIIIbit Explorer','🟣MEGATON BLAST','🟣GEOMETRIC DANCE','🟣心','🟣エータ・ベータ・イータ','🟣μάγια','🟣Diamond Dust -crystal piano Arr.-','🟣Prominence','🔴Fragrance','⚪️luna blu'];
let g145 = ['🟣Air','🟣Showguts','🟣8OROCHI','🟣Akasagarbha -reincarnate-','🟣怒槌','🟣Glorious Crown (tpz over-Over-OVERCUTE REMIX)','🟣Climax','🟣TEmPTaTiON','🟣ハードコア・シンドローム','🟣BREaK! BREaK! BREaK!','🟣月詠に鳴る','🟣N3V3R G3T OV3R','🟣Aenbharr','🟣ヒトリボッチサテライト','🟣MAGNETAR GIRL','🟣ミラージュ・フレイグランス','🟣FLUFFY FLASH (C-Show & Maozon Remix)','🟣Zitronectar','⚪️Destiny Runner','⚪️What color...','⚪️まっすぐ→→→ストリーム！'];
let g144 = ['🟣Everything Will Freeze','🟣Armageddon','🟣Grievous Lady','🟣Amphisbaena','🟣聖者の鼓動','🟣MEGALOVANIA','🟣雷切 -RAIKIRI-','🟣宛城、炎上！！','🟣Trrricksters!!','🟣TECHNOPOLIS 2085','🟣Starry Colors',"🟣WE'RE BACK!!",'🟣Desperado Waltz','🟣美夜月鏡','🟣霧の書斎','🟣Baqeela (Creepy Remix)','⚪️脳漿炸裂ガール'];
let g143 = ['🟣3分ガール','🟣神威','🟣Jack-the-Ripper◆','🟣DRAGONLADY','🟣2112410403927243233368','🟣BLUE ZONE','🟣Malicious Mischance','🟣Grayed Out-Antifront-','🟣混沌を越えし我らが神聖なる調律主を讃えよ','🟣Garakuta Doll Play','🟣folern','🟣Supersonic Generation','🟣Galaxy Blaster','🟣Stargazing Dreamer','🟣See The Light','🟣ジャンヌ・ダルクの慟哭','🟣Starlight★Limited','🔴μ3','⚪️最終鬼畜全部声'];
let g142 = ['🟣あ・り・ま・す・か？','🟣初音ミクの激唱','🟣Imperishable Night 2006 (2016 Refine)','🟣Satori ～3rd EyEs (2020 Recall)','🟣U.N.オーエンは彼女なのか？ - Greater Scarlet','🟣Sound Chimera','🟣Singularity -ETIA-','🟣Altale','🟣竹','🟣音弾超人ゴリライザー','🟣PARALLEL★PRISM','🟣エンドマークに希望と涙を添えて','🟣Genesis','🟣PinqPiq (xovevox Remix)','🟣B WiZ U','🟣Tricky Treat!!!','⚪️私たち、四季を遊ぶんです！！','⚪️初音ミクの激唱','⚪️セガNET麻雀MJ -O.N.G.E.K.I. MIX-','⚪️トリドリ⇒モリモリ！Lovely fruits☆','⚪️Transcend Lights'];
let g141 = ['🟣カナリア','🟣INTERNET YAMERO','🟣レータイスパークEx','🟣FREEDOM DiVE (tpz Overcute Remix)','🟣felys -final remix-','🟣Singularity -MJ-','🟣c.s.q.n.','🟣Knight Rider','🟣SILENT BLUE','🟣Oshama Scramble! (Cranky Remix)','🟣Blows Up Everything','🟣宙の隣','🟣Death Scythe','🟣Daydreama','🟣LiftOff','🟣Daredevil Glaive','🟣Elusive Emotes','🟣Knocking Harder','🟣YURUSHITE (LeaF Remix)','⚪️六兆年と一夜物語','⚪️ヒバナ','⚪️Calamity Fortune','⚪️GranFatalité','⚪️Rule the World!!'];
let g140 = ['🟣ジングルベル','🟣宣誓センセーション','🟣星界ちゃんと可不ちゃんのおつかい合騒曲','🟣きゅうくらりん','🟣ナイト・オブ・ナイツ (xi Remix)','🟣神々が恋した幻想郷','🟣GOODRAGE','🟣BBBLOW -rebuild-','🟣ENERGY SYNERGY MATRIX','🟣7thSense','🟣シャッキーーン！！','🟣ここからはじまるプロローグ。','🟣MUSIC PЯAYER','🟣Everlasting Today','🟣Dazzle hop',"🟣R'N'R Monsta",'🟣GODLINESS','🟣ICEBURN','🟣Princesses Holiday','🟣Azucar','🔴光焔のラテラルアーク','🔴FestA of PandemoniuM','⚪️ハッピータイフーン','⚪️ロキ','⚪️Fly to the Leaden Sky -O.N.G.E.K.I. MIX-'];


exports.song = song;

exports.g157 = g157;
exports.g156 = g156;
exports.g155 = g155;
exports.g154 = g154;
exports.g153 = g153;
exports.g152 = g152;
exports.g151 = g151;
exports.g150 = g150;
exports.g149 = g149;
exports.g148 = g148;
exports.g147 = g147;
exports.g146 = g146;
exports.g145 = g145;
exports.g144 = g144;
exports.g143 = g143;
exports.g142 = g142;
exports.g141 = g141;
exports.g140 = g140;
