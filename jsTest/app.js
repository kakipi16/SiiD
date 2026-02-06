// Q.　下記のコードを穴埋めし、「myMoneyが500以上ならisShippingでtrueを返す」ようにしなさい。必ずifを使うこと。

// const myMoney = 1000;
// let isShipping = false;
// if (myMoney >= 500) {
//   isShipping = true;
// }
// console.log(isShipping);

// Q. 実行したら戻り値20を返す関数"sonicBoom"を作成しなさい。
const sonicBoom = () => {
    return 20;
}

console.log(sonicBoom());

// Q.引数"lastDamage"を持ち、実行したら
// "lastDamage"に1.5を書けた値を戻り値
// として返す関数"metalBust"を作成しなさい。

const metalBust = (lastDamage) => {
    return lastDamage * 1.5
}

console.log(metalBust(20));

// Q.引数"theirHp"を持ち、実行したら
//"theirHp"の値をそのまま戻り値として
//返す関数"hornDrill"を作成しなさい。
// ただし成功確率は30%とし、
// 失敗した場合は0を返すようにしなさい（発展問題）
// Hint:
// *if文をつかいます
// *Math.random()をつかいます
const hornDrill = (theirHp) => {
    const success = Math.random() * 100
    if(success >= 30) {
        return theirHp
    } else {
        return 0
    }
};

console.log(hornDrill(500));

//Q.ピカチュウのオブジェクトを作りなさい。含めるべきプロパティは下記。
//name (文字列 -> "ピカチュウ")
//level (数字 -> 18)
//type (文字列の配列 ->　でんき)
//skills (文字列の配列 -> 10万ボルト、　でんこうせっか、　たいあたり)

// const pikachu = {
//     name:"ピカチュウ",
//     level:18,
//     types:["でんき"],
//     skills:["10万ボルト", "でんこうせっか", "たいあたり"]
// }

// console.log(pikachu.skills[2])

//Q.ピカチュウのオブジェクト二下記の仕様を満たすメソッド"levelUP"を追加しなさい(発展問題)
// - 実行するとlevelが１増える
//　- levelが20以上でskillに"スパーク"が追加される
// Hints: 下記のコードを使います
//  * this.level++;
//  * this.skills.push("スパーク");

const pikachu = {
    name:"ピカチュウ",
    level:18,
    types:["でんき"],
    skills:["10万ボルト", "でんこうせっか", "たいあたり"],
    levelUP: function(){
        this.level++;
        if(this.level >= 20) {
            this.skills.push("スパーク");
        }
    }
};
console.log(pikachu.skills)
pikachu.levelUP()
pikachu.levelUP()
console.log(pikachu.level)
console.log(pikachu.skills)


// Q. "サンダー","ホウオウ", "スイクン", "ラティアス", "パルキア"を持つ配列myPokemonsを作成しなさい。
const MyPokemons = ["サンダー","ホウオウ", "スイクン", "ラティアス", "パルキア"];

//Q. myPokemonsに新しい値"ミュウツー"を追加しなさい
MyPokemons.push("ミュウツー");

console.log(MyPokemons);

//Q. Mypokemonsがもつ値が今いくつあるか出力しなさい
console.log(MyPokemons.length);

//Q.oldVersionsとnewVersionsを１つの配列二まとめなさい
const oldVersions = ["赤", "緑", "青"];
const newVersions = ["ルビー", "サファイア", "エメラルド"];
console.log(oldVersions.concat(newVersions));

//# Q. ボタンを押したら画面に
// "ピカチュウ"が表示されるプログラムを書いてください。

// const $button = document.querySelector("#button");
// const isActive = $button.addEventListener("click", function() {
//     const $output = document.querySelector("#output");
//     $output.textContent = "ピカチュウ";
// });


//# Q. ボタンを押したら20%の確率で「ピカチュウをゲットした！」
//　80%之確率で「ざんねん！もうすこしでつかまえられたのに！」と
//　ダイアログで表示するプログラムを書きなさい。（発展）

const $button = document.querySelector("#button");
$button.addEventListener("click", () => {
    if(Math.random() >= 0.2) {
        alert("「ざんねん！もうすこしでつかまえられたのに！」")
    } else {
        alert("「ピカチュウをゲットした！」")
    }
})