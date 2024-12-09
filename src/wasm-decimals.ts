import { add, divide, multiply, subtract } from "@romafominih/rust_math";

export class WasmDecimals {
    #a: string;
    constructor(private readonly a:string) {
        this.#a = a;
    }

    add(b: string): this {
        this.#a = add(this.#a, b);
        return this;
    }

    subtract(b: string): this {
        this.#a = subtract(this.#a, b);
        return this;
    }

    multiply(b: string): this {
        this.#a = multiply(this.#a, b);
        return this;
    }

    divide(b: string): this {
        this.#a = divide(this.#a, b);
        return this;
    }

    toString(): string {
        return this.#a;
    }

    toNumber(): number {
        return parseFloat(this.#a);
    }
}