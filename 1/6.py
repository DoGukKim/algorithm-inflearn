def main(arr):
    oddSum = 0
    min = 100

    for num in arr:
        isOdd = num % 2 != 0
        if isOdd and num < min:
            min = num
        if isOdd:
            oddSum += num

    return [oddSum, min]


print(main([12, 77, 38, 41, 53, 92, 85]))
