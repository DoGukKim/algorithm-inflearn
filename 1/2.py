def main(A, B, C):
    result = "YES"
    longest = max(A, B, C)
    rest = sum([A, B, C]) - longest

    if rest < longest:
        result = "NO"

    return result


print(main(7, 6, 11))
