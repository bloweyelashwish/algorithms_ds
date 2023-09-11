function calPoints(operations: string[]): number {
    const record: number[] = [];

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case '+':
                record.push(record[record.length - 1] + record[record.length - 2])
                break;
            case 'D':
                record.push(record[record.length - 1] * 2)
                break;
            case 'C':
                record.pop();
                break;
            default:
                record.push(Number(operations[i]));
        }
    }

    return record.reduce((acc, curr) => acc + curr, 0);
}

