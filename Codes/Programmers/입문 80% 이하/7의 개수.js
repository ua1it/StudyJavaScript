function solution(array) {
    var answer = 0;
    const regex = new RegExp("7","gi");
    for(let i = 0; i < array.length; i++){
        answer += ((array[i].toString()).match(regex) || []).length;
    }
    return answer;
}

console.log(solution([7,17,77]));