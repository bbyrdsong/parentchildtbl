import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-prez',
  templateUrl: './parent-prez.component.html',
  styleUrls: ['./parent-prez.component.scss']
})
export class ParentPrezComponent implements OnInit {
  @Input()
  parents: any[];

  @Output()
  childHandler = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  loadChildren(parentId) {
    this.childHandler.emit(parentId)
  }
}
