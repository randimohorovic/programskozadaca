// 2. (JS-302) Napisati funkciju koja prima string i vraća najveći broj uzastopno istih znakova u  tom stringu.

function istiznakovi(x) {

    let max = 0;
    for (let i = 0; i < x.length - 1; i++) {
        let br = 0;
        for (let j = i; j < x.length; j++)
            if (x.charAt(i) == x.charAt(j)) br++;
        if (br > max) max = br;
    }
    return max;
}


console.log(istiznakovi("baaaccd"));   // vraca  3
console.log(istiznakovi("ba2dll"));   //  vraca 2