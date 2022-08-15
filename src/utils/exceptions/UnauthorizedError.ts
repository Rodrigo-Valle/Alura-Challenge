export class UnauthorizedError extends Error {
    protected detail: string;
    protected status: number;

    constructor(detail: string) {
        super("Acesso negado");
        this.detail = detail;
        this.status = 401;
    }
}
