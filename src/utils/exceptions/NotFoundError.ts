export class NotFoundError extends Error {
    protected detail: string;
    protected status: number;

    constructor(detail: string) {
        super("Não localizado");
        this.detail = detail;
        this.status = 404;
    }
}
