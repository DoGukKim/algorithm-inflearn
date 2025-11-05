def main(n):

    def dfs(count):
        if count > n:
            return
        print(count)
        dfs(count + 1)

    dfs(1)


print(main(3))
