function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;

    // 이동 방향 설정 (상, 하, 좌, 우)
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // 방문 여부를 나타내는 배열
    const visited = Array.from(Array(rows), () => Array(cols).fill(false));

    // BFS를 위한 큐 초기화
    const queue = [];
    queue.push([0, 0, 1]);

    // 시작 위치 방문 표시
    visited[0][0] = true;

    while (queue.length) {
        const [x, y, dist] = queue.shift();

        // 도착 위치에 도달한 경우 최단거리 반환
        if (x === rows - 1 && y === cols - 1) {
            return dist;
        }

        // 상하좌우로 이동하는 경우 확인
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 이동 가능한 위치인지 확인
            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    // 도착 위치에 도달할 수 없는 경우 -1 반환
    return -1;
}