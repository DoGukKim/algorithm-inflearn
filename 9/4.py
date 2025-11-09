def main(matrix):
    result = 0
    directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

    ch = [[0] * 7 for _ in range(7)]
    ch[0][0] = 1

    def dfs(x, y):
        nonlocal result
        if x == 6 and y == 6:
            result += 1
            return
        for dx, dy in directions:
            nx = x + dx
            ny = y + dy
            if 0 <= nx < 7 and 0 <= ny < 7 and ch[nx][ny] == 0 and matrix[nx][ny] == 0:
                ch[nx][ny] = 1
                dfs(nx, ny)
                ch[nx][ny] = 0

    dfs(0, 0)

    return result


print(
    main(
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [1, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 0, 0, 0, 0],
        ]
    )
)
