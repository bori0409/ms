import { Component, OnInit } from '@angular/core';
import webgazer from 'webgazer';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent implements OnInit {
  ngOnInit(): void {
    console.log('Webgazer', webgazer);
    webgazer
      .setRegression('ridge')
      .setGazeListener(function (data: any, elapsedTime: any) {
        var prediction = webgazer.getCurrentPrediction().then((pred: any) => {
          console.log('Please:', pred);
        });
      })
      .begin();

    webgazer.showPredictionPoints(true);
  }
}
