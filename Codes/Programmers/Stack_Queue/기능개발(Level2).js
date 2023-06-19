function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((value, index) => Math.ceil((100-progresses)/speeds[index]));
    let maxDay = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            maxDay = days[i];
            count = 1;
        }
    }
    answer.push(count);
    return answer;
}
