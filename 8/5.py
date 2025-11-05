def main(n, arr):
    total = sum(arr)

    def dfs(level, sum):
        if level == n:
            return total - sum == sum

        left = dfs(level + 1, sum + arr[level])
        right = dfs(level + 1, sum)
        return left or right

    return "YES" if dfs(0, 0) else "NO"


print(main(3, [1, 3, 4]))
print(main(6, [1, 3, 5, 6, 7, 10]))
print(main(3, [1, 3, 5]))  # NO가 나와야 함
print(main(4, [1, 2, 3, 10]))  # NO가 나와야 함
