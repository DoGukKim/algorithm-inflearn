def main(c, n, arr):
    result = 0

    def dfs(level, sum):
        nonlocal result

        if sum > c:
            return
        if level == n:
            result = max(result, sum)
            return

        dfs(level + 1, sum + arr[level])
        dfs(level + 1, sum)

    dfs(0, 0)
    return result


print(main(259, 5, [81, 58, 42, 33, 61]))
