export class DisneyDate {
    value: Date;

    constructor(formattedDate: string | Date) {
        if (formattedDate instanceof Date) {
            this.value = new Date(formattedDate.getFullYear(), formattedDate.getMonth(), formattedDate.getDate());
        
            return;
        }
        var r: RegExp = /(^[0-9]{4})\/([0-9]{2})\/([0-9]{2})$/;
        if (r.test(formattedDate)) {
            let result = r.exec(formattedDate);
            this.value = new Date(parseInt(result[1], 10), parseInt(result[2], 10) - 1, parseInt(result[3], 10));
        } else {
            r = /^[0-9]{8}$/;
            if (r.test(formattedDate)) {
                this.value = new Date(parseInt(formattedDate.slice(0, 4)), parseInt(formattedDate.slice(4, 6)) - 1, parseInt(formattedDate.slice(6, 8)));
            } else {
                this.value = new Date(formattedDate);
            }
        }
    }

    public getUrlValue(): string {
        var year: number = this.value.getFullYear();
        var month: number = this.value.getMonth() + 1;
        var date: number = this.value.getDate();

        return year.toString() + ('0' + month).slice(-2) + ('0' + date).slice(-2);
    }

    public getDisplayValue(): string {
        var year: number = this.value.getFullYear();
        var month: number = this.value.getMonth() + 1;
        var date: number = this.value.getDate();

        return year.toString() + '/' + ('0' + month).slice(-2) + '/' + ('0' + date).slice(-2);
    }

    public isEqual(targetDate: DisneyDate): boolean {
        return this.value.getTime() === targetDate.value.getTime();
    }

    public isBefore(targetDate: DisneyDate): boolean {
        return this.value.getTime() < targetDate.value.getTime();
    }

    public isAfter(targetDate: DisneyDate): boolean {
        return this.value.getTime() > targetDate.value.getTime();
    }
}
