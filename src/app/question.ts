export class Question {
    id: number;
    a: number;
    b: number;
    aStr:string;
    bStr: string;
    answer: number;
    answerString: string;
    answeredRight: boolean;
    constructor(id:number,a:number,b:number) {
        this.id=id;
        this.a=a;
        this.b=b;
        this.answer=a*b;
        this.aStr=((a<10)?" ":"")+this.a.toString();
        this.bStr=((b<10)?" ":"")+this.b.toString();
        this.answeredRight=false;
        this.answerString="";
    }
    setAnsweredRight(ans){
        this.answeredRight=ans;
    }
}