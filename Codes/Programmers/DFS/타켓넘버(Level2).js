function solution(numbers, target) {
    let answer = 0;

    function dfs(current, index) {
        if (index === numbers.length) {
            if (current === target) {
                answer++;
            }
            return;
        }

        dfs(current + numbers[index], index + 1);
        dfs(current - numbers[index], index + 1);
    }

    dfs(0, 0);

    return answer;
}