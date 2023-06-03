function solution(my_string) {
    var answer = 0;
    let arr = my_string.split(" ");
    answer = Number(arr[0]);
    for(let i = 1; i < arr.length; i+=2){
        answer += arr[i] == "+"?Number(arr[i+1]):-Number(arr[i+1]);
    }
    return answer;
}

console.log(solution("3 + 4 + 5 + 6"));
