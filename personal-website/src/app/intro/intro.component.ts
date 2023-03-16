import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  constructor(private scroller: ViewportScroller) {}

  scrollToAboutMe(): void {
    this.scroller.scrollToAnchor("about-me");
  }
}
