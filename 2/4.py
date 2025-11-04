def main(n, arr):
    result = 0
    acc = 1

    for i in range(n):
        if arr[i] == 1:
            result += acc
            acc += 1
        else:
            acc = 1
    return result


print(main(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))
