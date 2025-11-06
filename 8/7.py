def main(n, m, arr):
    result = 0

    def dfs(level, sum, time):
        nonlocal result
        if time > m:
            return
        if level == n:
            result = max(result, sum)
            return

        dfs(level + 1, sum + arr[level][0], time + arr[level][1])
        dfs(level + 1, sum, time)

    dfs(0, 0, 0)

    return result


print(
    main(
        5,
        20,
        [
            [10, 5],
            [25, 12],
            [15, 8],
            [6, 3],
            [7, 4],
        ],
    )
)
