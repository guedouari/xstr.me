import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xstr-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.css']
})
export class OverViewComponent implements OnInit {
  info: string;
  constructor() {
    this.info = 'AAAA'; // this.mediaService.activeMedia.mediaInfo;
  }

  ngOnInit() {
    // this.info = this.mediaService.activeMedia.mediaInfo;
  }

}
