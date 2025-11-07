def main(n):
    def dfs(m):
        if m == 1:
            return 1
        return m * dfs(m - 1)

    return dfs(n)


print(main(5))
