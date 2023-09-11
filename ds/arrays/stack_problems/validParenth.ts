function isValid(s: string): boolean {
    const matches = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    const seen: string[] = [];

    for (const parenth of s) {
        if (!matches[parenth]) {
            seen.push(parenth);
            continue;
        }

        console.log(seen.length)
        if (seen.length && seen[seen.length -1] == matches[parenth]) {
            seen.pop();
        } else {
            return false;
        }
    }

    return seen.length === 0;
}
