import { Component, OnInit } from '@angular/core';

import webgazer from 'webgazer';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit{
  ngOnInit(): void {
    console.log('Webgazer', webgazer);
    webgazer.setRegression('ridge').setGazeListener(function(data:any, elapsedTime:any) {
      console.log(data); //elapsed time is based on time since begin was called
      console.log(data);
      var prediction = webgazer.getCurrentPrediction();
      if (prediction) {
        var x = prediction.x;
        var y = prediction.y;
        console.log(prediction)
      }
      
    }).begin();

    webgazer.showPredictionPoints(true);
  }
 

}
