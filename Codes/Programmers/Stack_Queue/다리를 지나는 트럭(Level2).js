function solution(bridge_length, weight, truck_weights) {
    const bridge = []; // 다리를 나타내는 배열
    let time = 0; // 경과 시간
    let currentWeight = 0; // 다리 위의 현재 무게

    while (truck_weights.length > 0 || bridge.length > 0) {
        time++; // 시간 증가

        if (bridge.length > 0 && bridge[0].endTime === time) {
            // 다리에서 트럭이 다리를 빠져나옴
            currentWeight -= bridge[0].weight;
            bridge.shift();
        }

        if (truck_weights.length > 0 && currentWeight + truck_weights[0] <= weight) {
            // 다리에 트럭이 진입
            const truckWeight = truck_weights.shift();
            bridge.push({ weight: truckWeight, endTime: time + bridge_length });
            currentWeight += truckWeight;
        }
    }

    return time;
}
