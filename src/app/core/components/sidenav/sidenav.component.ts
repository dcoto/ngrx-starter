import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bc-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  @Input() open = false;
}
