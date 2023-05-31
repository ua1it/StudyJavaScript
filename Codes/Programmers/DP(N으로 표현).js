function solution(N, number) {
    const dp = Array.from(Array(9), ()=>new Set());

    for(let i = 1; i < 9; i++){
        dp[i].add(Number(N.toString().repeat(i)));
        for(let j = 1; j <= i - 1; j++){
            dp[j].forEach((x)=>{
                dp[i-j].forEach((y)=>{
                    dp[i].add(x+y);
                    dp[i].add(x-y);
                    dp[i].add(x*y);
                    dp[i].add(Number(x/y>>0));
                });
            });
        }
        if(dp[i].has(number)){
            return i;
        }
    }
    return -1;
}

solution(5,12);