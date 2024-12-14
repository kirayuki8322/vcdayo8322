const app_id = "388334bf-c246-4cf4-8c7b-5aef5a490453" //skywayのアプリケーションID //skyway application ID
const secret_key = "YsKAEAXmbL2Oyixdh6bm1toV0IH7/11FrkvDhPFqXAg=" //skywayのシークレットキー // skyway secret key
let proximity = true;  //近接VCのtrue:有効/false:無効(デフォルトはtrue) //Proximity VC true:enable/false:disable (default: true)
let password = false; //接続時のパスワードの有無(デフォルトはfalse) //Password in connection (default: false)
let distance = 6; // 声の届く最大距離(デフォルトは6) //Max distance of sound (default: 6)
const port = 19132; // websocketをlistenするポート //Port to listen
const web_port = 8080; // 近接vcのwebサイトと接続するポート // Port to connect website
let lang = "ja"; //言語(ja:日本語, en:英語) //Language (ja:Japanese, en:English)
module.exports = { distance, app_id, secret_key, proximity, port, web_port, lang, password };