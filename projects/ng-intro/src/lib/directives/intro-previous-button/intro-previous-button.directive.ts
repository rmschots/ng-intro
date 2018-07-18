import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { IntroService } from '../../services/intro.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Directive({
  selector: '[introPreviousButton]'
})
export class IntroPreviousButtonDirective {

  @HostBinding('style.display') display = '';
  private _stopHiding$ = new Subject<void>();

  @Input('hideWhenDisabled')
  set hideWhenDisabled(hideWhenDisabled: boolean) {
    if (hideWhenDisabled) {
      this._introService.canDoPreviousChanges$
        .pipe(takeUntil(this._stopHiding$))
        .subscribe(canDoPrevious => this.display = canDoPrevious ? '' : 'none');
    } else {
      this._stopHiding$.next(undefined);
    }
  }

  constructor(private _introService: IntroService) {
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this._introService.previousStep();
  }
}
