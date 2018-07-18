import { ModuleWithProviders, NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { IntroStepDirective } from './directives/intro-step/intro-step.directive';
import { IntroCancelButtonDirective } from './directives/intro-cancel-button/intro-cancel-button.directive';
import { IntroPreviousButtonDirective } from './directives/intro-previous-button/intro-previous-button.directive';
import { IntroNextButtonDirective } from './directives/intro-next-button/intro-next-button.directive';
import { IntroService } from './services/intro.service';
import { IntroOverlayService } from './services/intro-overlay.service';
import { IntroOverlayComponent } from './components/intro-overlay/intro-overlay.component';
import { IntroTextComponent } from './components/intro-text/intro-text.component';
import { IntroEmptyComponent } from './components/intro-empty/intro-empty.component';

const MODULES = [
  OverlayModule,
  CommonModule
];

const COMPONENTS = [
  IntroStepDirective,
  IntroNextButtonDirective,
  IntroCancelButtonDirective,
  IntroPreviousButtonDirective
];

const SERVICES = [
  IntroService,
  IntroOverlayService
];

const PIPES = [];

const GUARDS = [];

const ENTRY_COMPONENTS = [
  IntroOverlayComponent,
  IntroTextComponent,
  IntroEmptyComponent
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
    ...ENTRY_COMPONENTS
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...ENTRY_COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class NgIntroModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgIntroModule,
      providers: [...SERVICES, ...GUARDS]
    };
  }
}
