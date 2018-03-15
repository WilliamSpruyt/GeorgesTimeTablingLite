import { Directive } from '@angular/core';
import { Component, AfterViewInit, ViewChild, ElementRef, Renderer,Input } from '@angular/core';
@Directive({
  selector: '[myFocus]'
})
export class FocusDirective {
 
  @Input('myFocus') isFocused: boolean;
 
  constructor(private hostElement: ElementRef, private renderer: Renderer) {}
 
  ngOnInit() {
    if (this.isFocused) {
      this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus');
    }
  }
  ngOnChanges() {
    if (this.isFocused) {
      this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus');
    }
  }
  
}


 