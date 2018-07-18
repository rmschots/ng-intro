import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'intro-empty',
  templateUrl: './intro-empty.component.html',
  styleUrls: ['./intro-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroEmptyComponent {
}
