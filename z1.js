//z1
let name = "Джон";
let admin = name;
alert(admin);

//z2 
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(Number(a) + Number(b)); // 3

//z3
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
//z4

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
//z5
let num;

do {
  num = prompt("Введите число больше 100", '');
} while (num === null || num === '' || +num <= 100);

if (num !== null && num !== '') {
  alert('Вы ввели число: ' + num);
} else {
  alert('Ввод отменен');
}

//z6

def primes(n):
    sieve = [True] * (n+1)
    for x in range(2, int(n**0.5) + 1):
        if sieve[x]: 
            for i in range(x*x, n+1, x): 
                sieve[i] = False
    return [x for x in range(2, n) if sieve[x]]

n = 10
print(primes(n))

