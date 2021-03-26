import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomedirective]'
})
export class CustomedirectiveDirective {
  @Input() appCustomedirective: string;

  constructor(private elmRef: ElementRef, 
    private renderer: Renderer2) {
    }
    ngOnInit(): void { let roundVal = `${this.appCustomedirective}`;
    this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', roundVal);
    }
    @HostListener('mouseenter') onMouseEnter() {
      this.appCustomedirectiv('white','red');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.appCustomedirectiv('blue','grey');
    }
    
    private appCustomedirectiv(color: string,bg:string) {
      this.elmRef.nativeElement.style.backgroundColor = color;
      this.elmRef.nativeElement.style.color=bg;
    }
}

