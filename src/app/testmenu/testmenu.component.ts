import { Component, Input } from '@angular/core';
@Component({
  selector: 'test-menu',
  templateUrl: './testmenu.component.html',
  styleUrls: [],
})
export class TestMenuComponent {
  @Input()
  public i: number;
}
