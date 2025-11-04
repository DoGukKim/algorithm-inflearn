from itertools import combinations


def main(arr):
    result = []
    for combo in combinations(arr, 7):
        if sum(combo) == 100:
            result = list(combo)

    return result


print(main([20, 7, 23, 19, 10, 15, 25, 8, 13]))
