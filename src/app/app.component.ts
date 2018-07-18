import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {
  IntroPlaybookEntry,
  IntroPlaybookOptions,
  IntroService,
  IntroTextComponent,
  IntroTextComponentData
} from 'ng-intro';
import { Unsubscribable } from './unsubscribable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends Unsubscribable {
  @ViewChild('introTextTemplate') introTextTemplate: TemplateRef<any>;

  private _playbookEntriesAutomatic: IntroPlaybookEntry<any>[] = [
    {
      id: 'step1',
      data: {text: 'this is the first automatic step', automatic: true} as IntroTextComponentData,
      component: IntroTextComponent
    },
    {
      id: 'step2',
      data: {text: 'this is the second automatic step', automatic: true} as IntroTextComponentData,
      displayTime: 500,
      component: IntroTextComponent
    },
    {
      id: 'step2.5',
      data: {text: 'this is a nonexisting automatic step', automatic: true} as IntroTextComponentData,
      displayTime: 1000,
      component: IntroTextComponent
    },
    {
      id: 'step3',
      data: {text: 'this is the third automatic step', automatic: true} as IntroTextComponentData,
      displayTime: 1500,
      component: IntroTextComponent
    }
  ];

  private _playbookEntriesManual: IntroPlaybookEntry<any>[] = [
    {id: 'step1', data: {text: 'this is the first step'} as IntroTextComponentData, component: IntroTextComponent},
    {id: 'step2', data: {text: 'this is the second step'} as IntroTextComponentData},
    {id: 'step2.5', data: {text: 'this a nonexisting step'} as IntroTextComponentData, component: IntroTextComponent},
    {id: 'step3', data: {text: 'this is the third step'} as IntroTextComponentData, component: IntroTextComponent}
  ];

  private _playbookOptionsAutomatic: IntroPlaybookOptions = {
    autoplay: true
  };
  private _playbookOptionsManual: IntroPlaybookOptions = {
    autoplay: false
  };

  constructor(private _introService: IntroService, private _viewContainerRef: ViewContainerRef) {
    super();
  }

  startIntroManual() {
    this._playbookEntriesManual[1].templateRef = this.introTextTemplate;
    this._playbookEntriesManual[1].viewContainerRef = this._viewContainerRef;
    this._introService.startIntro({entries: this._playbookEntriesManual, options: this._playbookOptionsManual});
  }

  startIntroAutomatic() {
    this._introService.startIntro({entries: this._playbookEntriesAutomatic, options: this._playbookOptionsAutomatic});
  }
}
