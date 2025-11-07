def main(n, k, arr, m):
    result = 0

    def dfs(level, j, sum):
        nonlocal result
        if level == k:
            if sum % m == 0:
                result += 1
            return
        for i in range(j, n):
            dfs(level + 1, i + 1, sum + arr[i])

    dfs(0, 0, 0)

    return result


print(main(5, 3, [2, 4, 5, 8, 12], 6))
