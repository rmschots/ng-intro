import { Directive, HostListener } from '@angular/core';
import { IntroService } from '../../services/intro.service';

@Directive({
  selector: '[introNextButton]'
})
export class IntroNextButtonDirective {

  constructor(private _introService: IntroService) {
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this._introService.nextStep();
  }

}
