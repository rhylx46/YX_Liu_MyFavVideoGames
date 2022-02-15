import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit{
  @Input() el?: string;

  constructor(private elm: ElementRef) { }

  ngOnInit(): void {
      
  }

  @HostListener("mouseover") onMouseOver() {
    this.styleFunction(this.el);
  }

  @HostListener("mouseout") onMouseOut() {
    this.removeunderlineFunction();
    this.removeboldFunction();
  }

  

  private styleFunction(elValue?: string):void{
    // this.elm.nativeElement.style.textDecoration = "underline";
    if(elValue == "tags"){
      this.elm.nativeElement.style.fontWeight = "bold";
    } else {
      this.elm.nativeElement.style.textDecoration = "underline";
    }
  }

  private removeunderlineFunction():void{
    this.elm.nativeElement.style.textDecoration = "none";
  }

  private removeboldFunction():void{
    this.elm.nativeElement.style.fontWeight = "normal";
  }



}
