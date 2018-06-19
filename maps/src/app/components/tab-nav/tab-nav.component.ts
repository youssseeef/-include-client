import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss']
})
export class TabNavComponent implements OnInit {
  @Input() selectedMenu;
  @Output() changedMenu: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    if (typeof this.selectedMenu !== 'number') {
      this.selectedMenu = 0;
    }
  }
  menuClickEvent(input: number) {
    this.selectedMenu = input;
    this.changedMenu.emit(input);
  }

}
