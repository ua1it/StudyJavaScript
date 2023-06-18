function solution(arr)
{
    var answer = [];
    let flag = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(i == 0) answer.push(flag);
        else{
            if(arr[i] == flag) continue;
            else{
                flag = arr[i];
                answer.push(flag);
            }
        }
    }
    return answer;
}
