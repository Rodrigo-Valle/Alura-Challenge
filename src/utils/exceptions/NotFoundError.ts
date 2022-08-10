export class NotFoundError extends Error {
    protected detail: string;
    protected status: number;

    constructor(detail: string, message: string) {
        super(message);
        this.detail = detail;
        this.status = 404;
    }
}
