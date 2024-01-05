let name = "Hero Example"
let XP = 7500
let herolvl

if (XP < 1000) {
    herolvl = "Iron"
} else if (XP >= 1001 && XP <= 2000) {
    herolvl = "Bronze"
} else if (XP >= 2001 && XP <= 5000) {
    herolvl = "Silver"
} else if (XP >= 5001 && XP <= 7000) {
    herolvl = "Gold"
} else if (XP >= 7001 && XP <= 8000) {
    herolvl = "Platinum"
} else if (XP >= 8001 && XP <= 9000) {
    herolvl = "Ascending"
} else if (XP >= 9001 && XP <= 10000) {
    herolvl = "Immortal"
} else {
    herolvl = "Radiant"
}

console.log("The Hero " + name + " is on level " + herolvl)