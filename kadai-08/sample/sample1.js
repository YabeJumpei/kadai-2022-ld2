// 標準モジュールのfsを使ってみる
const fs = require("fs")

fs.writeFileSync("./kadai-08/text.txt", "こんにちは")

const content = fs.readFileSync("./kadai-08/text.txt")
console.log(content.toString())


fs.writeFile("./kadai-08/text2.txt", "こんにちは2", () => {
    console.log("ファイル書き込み完了")
})
console.log("次の行")