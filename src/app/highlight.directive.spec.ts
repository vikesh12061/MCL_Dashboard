import { HighlightDirective } from './highlight.directive';
import { Directive, Input, ElementRef, HostListener, OnInit } from '@angular/core';


describe('HighlightDirective', () => {

  it('should create an instance', () => {
    //nelem: ElementRef;
    const directive = new HighlightDirective(this.nelem);
    expect(directive).toBeTruthy();
  });
});
