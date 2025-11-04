def main(A, B, C):
    result = A
    if(B < result):
        result = B

    if(C < result):
        result = C

    return result

print(main(20, 1, 1))