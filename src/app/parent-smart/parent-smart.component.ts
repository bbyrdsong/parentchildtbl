import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'

@Component({
  selector: 'app-parent-smart',
  templateUrl: './parent-smart.component.html',
  styleUrls: ['./parent-smart.component.scss']
})
export class ParentSmartComponent implements OnInit {
  leaseData = []
  parents = []
  flagTrueParents = false

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getLeases().subscribe(
      data => {
        this.leaseData = data
        this.loadParents()
      },
      error => console.log(error)
    )
  }

  loadParents() {
    this.parents = this.leaseData
      .filter(d => !d.master)
      .map(p => {
        return {
          ...p,
          children: this.leaseData.filter(d => d.master && d.master === p.id)
        }
      })
      .filter(p => (this.flagTrueParents ? p.children.length > 0 : p))
  }

  loadChildren(e) {
    const children = this.parents.filter(p => p.id === e).map(p => p.children)

    console.log(children)
  }

  showTrueParents(e) {
    this.flagTrueParents = e.target.checked
    this.loadParents()
  }
}
