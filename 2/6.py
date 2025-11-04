def main(n, matrix):
    result = 0
    diagSum1 = 0
    diagSum2 = 0

    for x in range(n):
        rowSum = 0
        colSum = 0

        for y in range(n):
            rowSum += matrix[x][y]
            colSum += matrix[y][x]

        diagSum1 += matrix[x][x]
        diagSum2 += matrix[x][n - x - 1]
        result = max(result, rowSum, colSum)

    result = max(result, diagSum1, diagSum2)
    return result


print(
    main(
        5,
        [
            [10, 13, 10, 12, 15],
            [12, 39, 30, 23, 11],
            [11, 25, 50, 53, 15],
            [19, 27, 29, 37, 27],
            [19, 13, 30, 13, 19],
        ],
    )
)
