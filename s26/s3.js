let n = [0,1,2,3,4,5,6,7,,9,0,10,11,12];
let ui = parseInt(prompt("mời nhập số"));
let count = 0;
for (let i = 0; i < n.length; i++) {
  if (n[i] === ui) {
    count++;
  }
}
console.log(count);