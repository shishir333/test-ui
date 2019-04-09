import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'pals-app-container',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.scss']
})

export class AppContainerComponent {

}
