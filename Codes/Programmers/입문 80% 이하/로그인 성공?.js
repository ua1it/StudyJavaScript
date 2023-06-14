function solution(id_pw, db) {
    const userId = id_pw[0];
    const userPw = id_pw[1];

    for(let person of db){
        if(userId == person[0] && userPw == person[1]) return "login";
        else if(userId == person[0] && userPw != person[1]) return "wrong pw";
    }

    return "fail";
}
