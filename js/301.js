




// 1. (JS-301) Napisati funkciju min koja prima dva argumenta i vraća natrag manjeg.



min = function (a, b) {
    return (a < b) ? a : b;
}
console.log("vrijednost funckije sa parametrima (0,4)=", min(0, 4));
console.log("vrijednost funckije sa parametrima (0,-4)=", min(0, -4));


console.log("  ");   // cisto da mi je pregledno kada izvrsavam funckije u pregledniku
console.log("  ");


// ili 

let min2 = (a, b) => (a < b ? a : b);
console.log("vrijednost funckije sa parametrima (0,4)=", min2(0, 4));
console.log("vrijednost funckije sa parametrima (0,-4)=", min2(0, -4));


