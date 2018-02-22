export class Question {
    id: number;
    a: number;
    b: number;
    answer: number;
    answerString: string;
    constructor(id:number,a:number,b:number) {
        this.id=id;
        this.a=a;
        this.b=b;
        this.answer=a*b;
        this.answerString="";
    }
}