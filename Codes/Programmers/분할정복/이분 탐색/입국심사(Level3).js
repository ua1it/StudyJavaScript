function solution(n, times) {
    // 심사 시간을 오름차순으로 정렬
    times.sort((a, b) => a - b);

    // 최소 시간을 저장할 변수 초기화
    let answer = times[times.length - 1] * n;

    // 이분 탐색을 위한 초기 범위 설정
    let left = 1;
    let right = times[times.length - 1] * n;

    // 이분 탐색 수행
    while (left <= right) {
        // 중간값 계산
        const mid = Math.floor((left + right) / 2);

        // 심사할 수 있는 사람의 수 계산
        let count = 0;
        for (let i = 0; i < times.length; i++) {
            count += Math.floor(mid / times[i]);

            // 목표인 n명 이상의 사람을 심사할 수 있는 경우
            if (count >= n) {
                // 최소 시간 업데이트
                answer = Math.min(answer, mid);
                break;
            }
        }

        // count가 목표인 n보다 크거나 같은 경우, 시간을 줄여서 범위를 좁힘
        if (count >= n) {
            right = mid - 1;
        }
        // count가 목표인 n보다 작은 경우, 시간을 늘려서 범위를 넓힘
        else {
            left = mid + 1;
        }
    }

    // 최소 시간 반환
    return answer;
}