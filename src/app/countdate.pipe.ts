import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdate'
})
export class CountdatePipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime-value)
    console.log(dateDifference)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = dateDifferenceSeconds / secondsInDay;


    if (dateCounter >= 1 && value < todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }

  }
}
