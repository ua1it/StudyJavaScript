function solution(chicken) {
    let coupons = chicken;  // 보유한 쿠폰 수
    let serviceChicken = 0;  // 서비스로 받은 치킨 수

    while (coupons >= 10) {
        // 쿠폰 10장을 사용하여 서비스 치킨 받음
        serviceChicken++;
        coupons -= 10;

        // 새로 발급된 쿠폰을 추가로 계산
        coupons++;
    }

    return serviceChicken;
}

console.log(solution(1999))
