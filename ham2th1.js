// Hàm kiểm tra số nguyên tố
function isPrime(number) {
    if (number < 2) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i * i <= number; i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

// Tìm tất cả số nguyên tố < 10000
const primes = [];
for (let n = 2; n < 10000; n++) {
    if (isPrime(n)) primes.push(n);
}

// Hiển thị
console.log(primes.join(", "));
console.log("Tổng số lượng:", primes.length);