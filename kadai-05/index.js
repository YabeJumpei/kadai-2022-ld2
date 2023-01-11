const profile = {
    name: "矢部",
    age: 20,
    hobby: "歌うこと",
    major: "歴史学"
}

const dictionary = {
    name: "名前",
    age: "年齢", 
    hobby: "趣味", 
    major: "専攻",
}

const keys = object.keys(profile)
for (const key of keys) {
    const subject = dictionary[key]
    const value = profile[key]
    console.log("私の" + subject + "は" + value + "です")
}