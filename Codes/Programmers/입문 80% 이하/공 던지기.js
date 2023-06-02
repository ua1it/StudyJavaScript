function solution(numbers, k) {
    var answer = 0;
    let flag = 0;
    for(let i = 0; i < k; i++){
        answer = numbers[flag];
        if(flag == numbers.length-2){
            flag = 0;
        }else if(flag == numbers.length-1){
            flag = 1;
        }else{
            flag += 2;
        }
    }
    return answer;
}