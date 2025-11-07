def main(n, m, arr):
    result = 0
    ch = [0] * n

    def dfs(permute):
        nonlocal result

        if m == len(permute):
            print(permute)
            result += 1
            return

        for i in range(n):
            if ch[i] == 1:
                continue
            ch[i] = 1
            permute.append(arr[i])
            dfs(permute)
            permute.pop()
            ch[i] = 0

    dfs([])

    return result


print(main(3, 2, [3, 6, 9]))
