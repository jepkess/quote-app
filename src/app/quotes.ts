export class Quotes {
    showdescription: boolean;
    constructor(public id: number, public name: string, public description: string, public like: number, public dislike: number, public completeDate: Date) {
        this.showdescription = false;
    }

}
