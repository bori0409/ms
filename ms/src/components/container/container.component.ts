import { Component, OnInit ,ViewChild,ElementRef, viewChild} from '@angular/core';
import webgazer from 'webgazer';
import * as h337 from 'heatmap.js';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent implements OnInit {
@ViewChild('map') heat?: ElementRef;
  
  public recording:boolean=true;
  public choicesCount:number=0;
  public currentPrediction:any=[];
  public startedCalibration:boolean=false;
  public isCalibrated:boolean=false;
  public calibrateStep:number=0;
  public calibrationComplete:boolean=false;
  public allImageUrls: { id: number, url: string }[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1601493700625-9185417898cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN3ZWV0c3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, url: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWV0c3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, url: 'https://images.unsplash.com/photo-1543773495-2cd9248a5bda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN3ZWV0c3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 4, url: 'https://images.unsplash.com/photo-1591123220262-87ed377f7c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN3ZWV0c3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 5, url: 'https://plus.unsplash.com/premium_photo-1661780097425-171c59ab2b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2F2b3J5JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 6, url: 'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 7, url: 'https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 8, url: 'https://images.unsplash.com/photo-1707322467700-945f9bef9c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 9, url: 'https://images.unsplash.com/photo-1707322467700-945f9bef9c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 10, url: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 11, url: 'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 12, url: 'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 14, url: 'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 15, url: 'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 16, url: 'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 17, url: 'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 18, url: 'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 19, url: 'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { id: 20, url: 'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhdm9yeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },

  ];

  heatmap: any = null; // heatmap instance
  


  public currentIndex2:number = 0;
  public imageUrls: { id: number, url: string }[] = [];
  public imagesToShow:{ id: number, url: string }[] = [];

  public currentIndex: number = 0;
  numbers: number[] = [];
  remainingNumbers: number[] = [];
  generatedNumbers: number[] = [];
  ngOnInit(): void {
    this.initializeWebGazer();
    this.numbers=[ Math.floor(10 * Math.random()),Math.floor(10 * Math.random())]
    if(this.numbers[0]==this.numbers[1]){
      this.numbers[1]==Math.floor(10 * Math.random());
    }
    // minimal heatmap instance configuration
  
 
    
   // console.log('Webgazer', webgazer);
   /* webgazer
      .setRegression('ridge')
      .setGazeListener(function (data: any, elapsedTime: any) {
      
        var prediction = webgazer.getCurrentPrediction().then((pred: any) => {
          console.log('Please:', pred);
         // this.currentPrediction.push(pred);
;         
        });
      })
      .begin();

    webgazer.showPredictionPoints(true);*/
  }
  initializeWebGazer() {
    webgazer.setRegression('ridge').setGazeListener((data: any, elapsedTime: any) => {
      webgazer.getCurrentPrediction().then((pred: any) => {
        console.log('Prediction:', pred);
      if(pred!=null){
          this.currentPrediction.push(pred);
      }
        
      })
      
    }).begin();
  }
  calibration(){
    //REMOVE ME
    this.calibrationComplete=true;
this.startedCalibration=true;
this.calibrateStep++;

  }
  calibrationStepMore(){
    this.calibrateStep++;
    if(this.calibrateStep == 7){
      this.calibrationComplete=true;
      
      
    }
  }
  pictureClicked(index: number) {
    if (this.recording==true){
      this.recording=false;
      webgazer.pause();
      webgazer.getCurrentPrediction().then((pred: any) => {
        
       })
    }
    console.log("picture clicked");
    this.numbers=[ Math.floor(10 * Math.random()),Math.floor(10 * Math.random())]
    if(this.numbers[0]==this.numbers[1]){
      this.numbers[1]==Math.floor(10 * Math.random());
    }
console.log(this.currentPrediction);
   
  }
  
  startChoice(){
    this.currentPrediction=[]
    this.recording=true;
webgazer.resume();
  }
  /*
  recordPrediction() {
    this.webgazer.getCurrentPrediction().then(prediction => {
      // Once the prediction is available, push it into gazechoice1 array
      this.gazechoice1.push(prediction);
    }).catch(error => {
      // Handle errors if any
      console.error('Error getting prediction:', error);
    });
  }    */
  generateHeatmap(): void {


 

    const data = this.currentPrediction;
    console.log(data)


    const points = data.map((item: any) => ({
    
      x: Math.floor(item.x),
      y: Math.floor(item.y),
      value: 5 // You can adjust this value if needed
    }));
console.log(data);
console.log(points,"points")



const config = {
  container: document.querySelector('.heatmap'),
  radius: 10,
  maxOpacity: 0.5,
  minOpacity: 0,
  blur: 0.75
};

const heatmapInstance = (window as any).h337.create(config);


    const heatmapData = {
      data: points
    };

    // heatmapInstance.setData(heatmapData);
    // data.forEach((obj: any) => {
    //   heatmapInstance.addData(obj);
    // });
    heatmapInstance.setData(heatmapData);


      // minimal heatmap instance configuration
// let heatmapInstance2 = h337.create({
//   // only container is required, the rest will be defaults
//   container: document.querySelector('.heatmap')
// });

// // now generate some random data
// var points2 = [];
// var max = 0;
// var width = 840;
// var height = 400;
// var len = 200;

// while (len--) {
//   var val = Math.floor(Math.random()*100);
//   max = Math.max(max, val);
//   var point = {
//     x: Math.floor(Math.random()*width),
//     y: Math.floor(Math.random()*height),
//     value: val
//   };
//   points2.push(point);
// }
// // heatmap data format
// var data2 = {
//   max: max,
//   data: points2
// };
// // if you have a set of datapoints always use setData instead of addData
// // for data initialization
// heatmapInstance2.setData(data2);
// heatmapInstance2.repaint();
// heatmapInstance2.repaint();
// heatmapInstance2.repaint();
// heatmapInstance2.repaint();


  }










  
  
}
