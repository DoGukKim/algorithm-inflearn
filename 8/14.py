def main(n, m):
    result = 0
    numbers: list[int] = list(range(1, n + 1))

    def dfs(level, j, combination):
        nonlocal result
        if level == m:
            print(combination)
            result += 1
            return

        for i in range(j, n):
            combination.append(numbers[i])
            dfs(level + 1, i + 1, combination)
            combination.pop()

    dfs(0, 0, [])

    return result


print(main(4, 2))
