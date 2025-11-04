def main(n, arr):
    result = [arr[0]]
    
    for i in range(1, n):
        if arr[i] > arr[i - 1]:
            result.append(arr[i])
    return result

print(main(6, [7, 3, 9, 5, 6, 12]))