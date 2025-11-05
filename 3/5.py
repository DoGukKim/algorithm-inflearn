def main(s):
    result = ""
    hash_counter = {}

    for i in range(len(s)):
        if not hash_counter.get(s[i]):
            hash_counter[s[i]] = 1
            continue
        hash_counter[s[i]] += 1

    for key in hash_counter:
        result += f"{key}{hash_counter[key] if hash_counter[key] > 1 else ''}"

    return result


print(main("KKHSSSSSSSE"))
