import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  points = 8000;
  counterPts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  

  pointsCalcAdd(pts){
    return this.points += parseFloat(pts);
  }

  pointsCalcSub(pts){
    if(this.points > 0){
      return this.points -= pts;
    }else{
      return this.points = 0;
    }
  }

  counterAdd(position){
    return this.counterPts[position] += 1;
  }

  counterSub(position){
    if(this.counterPts[position] > 0){
      return this.counterPts[position] -= 1;
    }else{
      this.counterPts[position] = 0;
    }
  }

}
