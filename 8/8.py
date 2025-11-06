def main(n, m):
    numbers: list[int] = list(range(1, n + 1))

    def dfs(level, result):
        if level == m:
            print(result)
            return
        for i in range(n):
            dfs(level + 1, result + [numbers[i]])

    dfs(0, [])


print(main(3, 2))
