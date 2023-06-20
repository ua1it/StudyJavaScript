function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((priority, index) => ({ priority, index }));

    while (queue.length > 0) {
        let currentProcess = queue.shift();
        let currentIsNotHighPriority = queue.some(item => currentProcess.priority < item.priority);

        if (currentIsNotHighPriority) {
            queue.push(currentProcess);
        } else {
            answer++;
            if (currentProcess.index === location)
                return answer;
        }
    }

    return answer;
}
