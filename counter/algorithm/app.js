// var str = 'user-1,user-2,user-3';

// //「, (カンマ)」で区切って分割する
// var result = str.split(',');

// console.log( result );

// function surroundWithPlus(text) {
//     const length = text.length + 2;
//     console.log(length)
//     const border = '+'.repeat(length);
//     console.log(border)
//     return `${border}\n+${text}+\n${border}`;
// }

// console.log(surroundWithPlus("paripi"));

// console.log(parseInt("123"));
// // 123
// console.log(parseInt("123", 10));
// // 123　ナンバー型は消失
// console.log(parseInt("   123 "));
// // 123　空白は消失
// console.log(parseInt("077"));
// // 77　先頭の０は省略
// console.log(parseInt("1.9"));
// // 1　少数点は省略
// console.log(parseInt("ff", 16));
// // 255　２進数は適用できる
// console.log(parseInt("0xFF", 16));
// // 255　16進数もOK
// console.log(parseInt("xyz"));
// // NaN　　文字列は出力できない

// const b = String(123); // b === "Hello

// const c = String(321);
// console.log(b + c);

// //replace()
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", "my"));
// // Expected output: "I think my dog is cuter than your dog!"

// const regex = /Dog/gi;
// console.log(paragraph,"\n", paragraph.replaceAll(regex, "ferret"));
// // Expected output: "I think Ruth's ferret is cuter than your dog!"

// //replaceAll()

//Cookie
import Cookies from 'js-cookie';
Cookies.get('key'); // 'value'
Cookies.get(); // {key: 'value'}