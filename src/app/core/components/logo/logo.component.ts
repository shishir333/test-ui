import { Component, Input } from '@angular/core';

@Component({
  selector: 'pals-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() logoURL: string;
  primaryLogoClass = 'primary_logo_img';

}
