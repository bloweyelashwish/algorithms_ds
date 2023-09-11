class MinStack {
    private stack: { currentMin: number, value: number }[] = [];

    push(val: number): void {
        if (this.stack.length == 0) {
            this.stack.push({ value: val, currentMin: val })
            return;
        }

        const newMin = Math.min(this.getTopPair().currentMin, val);
        this.stack.push({ value: val, currentMin: newMin })
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.getTopPair().value;
    }

    getMin(): number {
        return this.getTopPair().currentMin;
    }

    private getTopPair() {
        return this.stack[this.stack.length - 1];
    }
}

