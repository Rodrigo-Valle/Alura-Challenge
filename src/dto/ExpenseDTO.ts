import { User } from "../entity"

interface ISaveExpenseDTO {
    description: string
    value: number
    date: Date
    user?: User
    id?: string
}

interface IExpenseResponseDTO {
    id: string
    description: string
    value: number
    date: Date
}

interface IUpdateExpenseDTO {
    description?: string
    value?: number
    date?: Date
}

export {ISaveExpenseDTO, IExpenseResponseDTO, IUpdateExpenseDTO}