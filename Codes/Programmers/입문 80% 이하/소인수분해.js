function solution(n) {
    const answer = new Set();

    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            answer.add(i);
            n /= i;
        }
    }
    if (n > 1) {
        answer.add(n);
    }
    return Array.from(answer);
}

console.log(solution(12));