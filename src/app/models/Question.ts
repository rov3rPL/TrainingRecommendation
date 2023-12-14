import { Answer } from "./Answer";

export class Question {
    constructor(public questionId: number, public text: string, public possibleAnswers: Answer[]) {}
}