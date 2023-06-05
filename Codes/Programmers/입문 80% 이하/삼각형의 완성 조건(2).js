function solution(sides) {
    var min = sides[0]<=sides[1]?sides[0]:sides[1];
    var flag = sides[1]>=sides[0]?sides[1]:sides[0];
    return min*2 - 1;
}
