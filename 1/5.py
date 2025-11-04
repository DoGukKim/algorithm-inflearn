def main(arr):
    result = arr[0]
    for num in arr:
        if num < result:
            result = num

    return result


print(main([5, 3, 7, 11, 2, 15, 17]))
