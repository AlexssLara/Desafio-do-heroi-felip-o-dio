let NomeDoHeroi = "Super Herói";
let XpDoHeroi = 7000;
let nivelDoHeroi;

if (XpDoHeroi < 1000) {
    NivelDoHeroi = "Ferro";
} else if (XpDoHeroi >= 1001 && XpDoHeroi <= 2000) {
    NivelDoHeroi = "Bronze";
} else if (XpDoHeroi >= 2001 && XpDoHeroi <= 5000) {
    NivelDoHeroi = "Prata";
} else if (XpDoHeroi >= 6001 && XpDoHeroi <= 7000) {
    NivelDoHeroi = "Ouro";
} else if (XpDoHeroi >= 7001 && XpDoHeroi <= 8000) {
    NivelDoHeroi = "Platina";
} else if (XpDoHeroi >= 8001 && XpDoHeroi <= 9000) {
    NivelDoHeroi = "Ascendente";
} else if (XpDoHeroi >= 9001 && XpDoHeroi <= 10000) {
    NivelDoHeroi = "Imortal";
} else {
    NivelDoHeroi = "Radiante";
}

console.log("O Herói de nome " + NomeDoHeroi + " está no nível " + NivelDoHeroi);
