export class ValidationError extends Error {
    protected detail: string | string[];
    protected status: number;

    constructor(detail: string | string[], message: string) {
        super(message);
        this.detail = detail;
        this.status = 400;
    }
}
