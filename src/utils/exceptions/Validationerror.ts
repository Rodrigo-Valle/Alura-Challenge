export class ValidationError extends Error {
    protected detail: string | string[];
    protected status: number;

    constructor(detail: string | string[]) {
        super("Erro na entrada de dados");
        this.detail = detail;
        this.status = 400;
    }
}
