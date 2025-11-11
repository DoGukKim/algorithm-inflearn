def main(n, arr):
    dp = [0] * n
    dp[0] = 1

    for i in range(1, n):
        for j in range(i - 1, -1, -1):
            if arr[i] > arr[j]:
                dp[i] = max(dp[i], dp[j])
        dp[i] += 1

    return max(dp)


print(main(8, [5, 3, 7, 8, 6, 2, 9, 4]))
