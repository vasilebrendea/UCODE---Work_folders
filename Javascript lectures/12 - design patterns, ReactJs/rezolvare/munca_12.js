// 1. se cere sa se tipareasca la consola valoarea folosita la apelul functiei push

// a = [13, 15, 25, 21];

// Array.prototype.valOfPush = function (val) {
//   a.push(val);
//   console.log(val);
// };

// a.valOfPush(22);

// 2. se cere sa se tipareasca la consola valoarea unei proprietati si noua valoare de fiecare data cand se modifica;

// 3. exercitiu de algoritmica de pe whatsapp

var sequenceLength = function (n) {
  let a = [];
  a.push(n);
  do {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    a.push(n);
  } while (n != 1);
  return a;
};

console.log(sequenceLength(7));

var maxSequenceLength = function (a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    let firstNumberSeq = sequenceLength(i).length;
    arr.push(firstNumberSeq);
  }
  console.log(Math.max(...arr));
};
maxSequenceLength(1, 3);
