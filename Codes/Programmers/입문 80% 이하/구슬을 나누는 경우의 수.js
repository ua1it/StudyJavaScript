function solution(balls, share) {
    // function factorial(n){
    //     if(n == 1){
    //         return n;
    //     }
    //     return n*factorial(n-1);
    // }

    function factorial(n){
        temp = 1;
        for(let i = 1; i <= n; i++){
            temp *= i;
        }
        return temp;
    }
    var answer = Math.round((factorial(balls))/((factorial(balls-share) * factorial(share))));
    //Math.round -> 반올림
    //Number -> 버림
    return answer;
}
