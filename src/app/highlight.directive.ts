import { Directive, Input, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input("appHighlight")
  color : string;

  @Input() address: any[];

  constructor(private nelem: ElementRef) {
    this.color = "lightgray";
    console.log(this.color);
  }

  ngOnInit(){
    console.log(this.address);
  }

  private changeBackColor(color){
    this.nelem.nativeElement.style.background = color;
  }
  
  @HostListener("mouseenter")
  applyHighlight(){
    this.changeBackColor(this.color);
  }

  @HostListener("mouseleave")
  removeHighlight(){
    this.changeBackColor("");
  }


}
