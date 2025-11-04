def main(n, arr):
    result = 1
    min_tall = arr[0]

    for i in range(1, n):
        if arr[i] > min_tall:
            min_tall = arr[i]
            result += 1
    return result


print(main(8, [130, 135, 148, 140, 145, 150, 150, 153]))
