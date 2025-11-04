def main(n, matrix):
    result = 0
    for x in range(n):
        for y in range(n):
            current = matrix[x][y]
            top = matrix[x - 1][y] if x > 0 else 0
            bottom = matrix[x + 1][y] if x < n - 1 else 0
            left = matrix[x][y - 1] if y > 0 else 0
            right = matrix[x][y + 1] if y < n - 1 else 0

            if (
                current > top
                and current > bottom
                and current > left
                and current > right
            ):
                result += 1

    return result


print(
    main(
        5,
        [
            [5, 3, 7, 2, 3],
            [3, 7, 1, 6, 1],
            [7, 2, 5, 3, 4],
            [4, 3, 6, 4, 1],
            [8, 7, 3, 5, 2],
        ],
    )
)
