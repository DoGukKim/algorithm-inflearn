def main(n, arr, m):
    result = 500

    def dfs(level, sum):
        nonlocal result

        if sum > m:
            return
        if level > n:
            return
        if sum == m:
            result = min(result, level)
            return

        for i in range(n):
            dfs(level + 1, sum + arr[i])

    dfs(0, 0)
    return result


print(main(3, [1, 2, 5], 15))
