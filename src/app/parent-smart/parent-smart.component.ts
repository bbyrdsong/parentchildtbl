import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent-smart',
  templateUrl: './parent-smart.component.html',
  styleUrls: ['./parent-smart.component.scss']
})
export class ParentSmartComponent implements OnInit {
  leaseData = [];
  parents = [];
  flagTrueParents = false;
  buttonName = 'View Children';

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getLeases().subscribe(
      data => {
        this.leaseData = data;
        this.loadParents();
      },
      error => console.log(error)
    );
  }

  loadParents() {
    this.parents = this.leaseData
      .filter(d => !d.master)
      .map(p => {
        return {
          ...p,
          children: this.leaseData.filter(d => d.master && d.master === p.id)
        };
      })
      .filter(p => (this.flagTrueParents ? p.children.length > 0 : p));
  }

  handleClick(e) {
    console.log(e);
    if (e.buttonName === 'View Children') {
      this.loadChildren(e);
      this.buttonName = 'Hide Children';
    } else {
      this.unloadChildren(e);
      this.buttonName = 'View Children';
    }
  }

  loadChildren(e) {
    const children = this.parents.filter(p => p.id === e.parentId).map(p => p.children);

    this.parents.splice(e.index + 1, 0, children[0][0]);
  }

  unloadChildren(e) {
    this.parents = this.parents.filter( p => p.master !== e.parentId);
  }

  showTrueParents(e) {
    this.flagTrueParents = e.target.checked;
    this.loadParents();
  }
}
