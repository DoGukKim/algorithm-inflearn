def main(s, t):
    result = [0] * len(s)

    for i in range(len(s)):
        dist = 100
        if s[i] == t:
            continue
        for j in range(len(s)):
            if i != j and s[j] == t:
                dist = min(dist, abs(i - j))
        result[i] = dist

    return result


print(main("teachermode", "e"))
