def main(n, arr):
    result = [1] * n

    for i in range(n):
        for j in range(n):
            if i != j and arr[i] < arr[j]:
                result[i] += 1

    return result


print(main(5, [87, 89, 92, 100, 76]))
print(main(3, [92, 92, 76]))
