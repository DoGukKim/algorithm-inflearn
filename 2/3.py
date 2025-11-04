def main(n, arrA, arrB):
    result = ""
    win = {
        1: 3,
        2: 1,
        3: 2,
    }

    for i in range(n):
        if arrA[i] == arrB[i]:
            result += "D\n"
        elif win[arrA[i]] == arrB[i]:
            result += "A\n"
        else:
            result += "B\n"
    return result


print(main(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]))
