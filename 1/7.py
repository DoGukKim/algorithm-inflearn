def main(n, arr):
    result = 0

    for num in arr:
        digit = num % 10
        if n == digit:
            result += 1

    return result


print(main(3, [25, 23, 11, 47, 53, 17, 33]))
