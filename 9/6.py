def main(s, e):
    dist = [-1] * 10001
    dist[s] = 0
    queue = [s]

    while dist[e] == -1:
        cur = queue.pop(0)

        for nx in [cur - 1, cur + 1, cur + 5]:
            if dist[nx] != -1:
                continue
            if nx < 0 or nx > 10000:
                continue
            dist[nx] = dist[cur] + 1
            queue.append(nx)

    return dist[e]


print(main(5, 14))
