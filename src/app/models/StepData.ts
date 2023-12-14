import { Question } from "./Question";

export class StepData {
    // possibleAnswers!: Answer[];

    content?: string;

    // constructor(public author: string, public questionId: number, public content: string, public possibleAnswers: Answer[]) {}
    constructor(public author: string, public question?: Question) {
        this.content = this.question?.text;
    }
    // constructor(public author: string, public content: string) {}

    // public static createFromQuestion(author: string, question: Question): StepData {
    //     return new StepData(author, question);
    // }
}