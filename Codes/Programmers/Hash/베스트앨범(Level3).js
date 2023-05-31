function solution(genres, plays) {
    var dic = new Map();
    genres.forEach((t, i) => {
        dic.set(t, dic.has(t) ? dic.get(t) + plays[i] : plays[i]);
    });

    var dupDic = new Map();
    return genres
        .map((t, i) => ({ genre: t, count: plays[i], index: i }))
        .sort((a, b) => {
            if (a.genre !== b.genre) return dic.get(b.genre) - dic.get(a.genre);
            if (a.count !== b.count) return b.count - a.count;
            return a.index - b.index;
        })
        .filter((t) => {
            if (dupDic.get(t.genre) >= 2) return false;
            dupDic.set(t.genre, dupDic.has(t.genre) ? dupDic.get(t.genre) + 1 : 1);
            return true;
        })
        .map((t) => t.index);
}