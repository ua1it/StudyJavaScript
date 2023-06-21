function solution(score) {
    const n = score.length;
    const averages = [];

    // 평균 계산
    for (let i = 0; i < n; i++) {
        const average = (score[i][0] + score[i][1]) / 2;
        averages.push({ index: i, average });
    }

    // 평균을 기준으로 정렬
    averages.sort((a, b) => b.average - a.average);

    // 등수 매기기
    const ranks = new Array(n);
    let currentRank = 1;
    let previousAverage = averages[0].average;
    for (let i = 0; i < n; i++) {
        const currentIndex = averages[i].index;
        const currentAverage = averages[i].average;

        if (currentAverage !== previousAverage) {
            currentRank = i + 1;
        }

        ranks[currentIndex] = currentRank;
        previousAverage = currentAverage;
    }

    return ranks;
}
