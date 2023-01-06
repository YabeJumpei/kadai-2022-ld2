const firstName ="Jumpei"
const familyName = "Yabe"

const fullName = firstName + familyName
console.log(fullName)

const num = 1+2+3+4+5+6+7+8+9+10
console.log(num)

const dog = false
const cat = true

console.log("犬または猫を飼ってる", dog || cat)
console.log("犬と猫の両方を飼っている", dog && cat)
console.log("犬も猫も飼っていない（「犬を飼っていない」かつ「猫を飼っていない」）", !dog && !cat)
console.log("犬も猫も飼っていない（「犬または猫を飼っている、わけではない」）", !(dog || cat))