def main(n, m, edges):
    result = 0

    matrix = [[0] * (n + 1) for _ in range(n + 1)]
    ch = [0] * (n + 1)
    ch[1] = 1

    for i in range(m):
        v = edges[i][0]
        e = edges[i][1]
        matrix[v][e] = e

    def dfs(v):
        nonlocal result

        if v == n:
            result += 1
            return
        for i in range(1, n + 1):
            if ch[i] == 1:
                continue
            ch[i] = 1
            dfs(matrix[v][i])
            ch[i] = 0

    dfs(1)

    return result


print(
    main(5, 9, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]])
)
