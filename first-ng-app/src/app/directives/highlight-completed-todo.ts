import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodo {
  isCompleted = input(false);
  constructor() { }

  el = inject(ElementRef)
  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = 'gray';
      this.el.nativeElement.style.backgroundColor = '#f0f0f0';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = 'initial';
      this.el.nativeElement.style.backgroundColor = 'initial';
    }
  })

}
