function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const bracket = s[i];

        // stack에는 '('만 저장
        if (bracket === '(') {
            stack.push(bracket);
        } else if (bracket === ')') {
            if (stack.length === 0) {
                return false;
            }
            // ')'가 발견되면 stack의 '(' 하나를 pop
            stack.pop();
        }
    }

    // 전부 pop되면 true
    return stack.length === 0;
}
