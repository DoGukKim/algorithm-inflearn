def main(n):
    def dfs(j=1, result=[]):
        if j > n:
            return
        for i in range(j, 4):
            result.append(i)
            dfs(i + 1, result)
            print(result)
            result.pop()

    dfs()


print(main(3))
