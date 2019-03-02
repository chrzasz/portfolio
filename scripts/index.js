console.log(123 + "test");
console.log(" java jest slaba ".replace("slaba", "mocna").repeat(3));
console.log(" JAVA   jest      mocno    typowany     ".trim().split(/\s+/));
console.log(
   " JAVA   jest      mocno    typowany     "
      .trim()
      .split(" ")
      .filter(Boolean)
);

console.log((234).toString(2));

console.log((23.2345432).toPrecision(5));
console.log((23.2345432).toFixed(3));

console.log(parseFloat("54.34test"));
console.log(isFinite(2e134));

console.log(!!0);

console.log(5 > 1);

console.log(0 || false || "abc" || 23);

console.log("abc" && 23 && "last");

var str = "234";
var bin = (+str).toString(2);
console.log(bin);
