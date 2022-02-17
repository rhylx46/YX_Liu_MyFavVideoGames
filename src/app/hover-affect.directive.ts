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

    if (this.elm.nativeElement.classList.contains('type')){
      this.removeunderlineFunction();
      this.removeboldFunction();
    } else {
      this.removeunderlineFunction();
      this.removeboldFunction();
      this.removeborderFunction();
    }

  }

  

  private styleFunction(elValue?: string):void{
    // this.elm.nativeElement.style.textDecoration = "underline";
    if(elValue == "tags"){
      this.elm.nativeElement.style.fontWeight = "bold";
    } 
    
    if( this.elm.nativeElement.classList.contains('first-item')) {
      this.elm.nativeElement.style.border ="5px solid black";
    } 
    
    if( this.elm.nativeElement.classList.contains('last-item')) {
      this.elm.nativeElement.style.border ="5px solid black";
    } 
    
    if (elValue == "types"){
      this.elm.nativeElement.style.textDecoration = "underline";
    }
  }

  private removeunderlineFunction():void{
    this.elm.nativeElement.style.textDecoration = "none";
  }

  private removeboldFunction():void{
    this.elm.nativeElement.style.fontWeight = "normal";
  }

  private removeborderFunction():void{
    this.elm.nativeElement.style.border = "1px solid black";
  }



}
