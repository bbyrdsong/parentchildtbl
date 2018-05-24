import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-prez',
  templateUrl: './parent-prez.component.html',
  styleUrls: ['./parent-prez.component.scss']
})
export class ParentPrezComponent implements OnInit {
  @Input()
  parents: any[];
  @Input()
  buttonName: string;

  @Output()
  childHandler = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(parentId, index, $event) {
    this.childHandler.emit({parentId, index, buttonName: $event.target.innerText});
  }
}
