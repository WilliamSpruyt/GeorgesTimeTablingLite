export class Stat {
    id: number;
    time: number;
    numQs: number;
    date:string;
    avTime: string;
    name:String;
     
    constructor(id:number,time:number,numQs:number,date:string,name:string) {
        this.id=id;
        this.time=time;
        this.date=date;
        this.numQs=numQs;
        this.avTime=(time/numQs).toFixed(2);
        this.name=name
         
    }
     
}