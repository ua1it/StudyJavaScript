function solution(clothes) {
    var answer = 1;
    const clothMap = new Map();
    for(var i = 0; i < clothes.length; i++){
        [cloth, category] = clothes[i];
        if(clothMap.has(category)){
            clothMap.get(category).push(cloth);
        }else{
            clothMap.set(category, [cloth]);
        }
    }

    for(let [category, clothes] of clothMap){
        answer *= clothes.length + 1;
        // 의상 미착용 조건 + 1
    }


    return answer-1;
    // 의상 아예 미착용 조건 -1
}