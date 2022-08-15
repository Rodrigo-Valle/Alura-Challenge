export class DataBaseError extends Error {
    protected detail: string;
    protected status: number;

    constructor(detail: string, error: Error, code?: string) {
        if (code === 'ER_DUP_ENTRY') error.message = "Usuário já cadastrado"
        super(error.message);
        this.detail = detail;
        this.status = 500;
        
    }
}
