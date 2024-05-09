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
console.log('webgazer', webgazer);

  }

}
