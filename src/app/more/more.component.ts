import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';



interface MoreNode {
  name: string;
  children?: MoreNode[];
}

const TREE_DATA: MoreNode[] = [
  {
    name: 'Recreation',
    children: [
      {name: 'Swimming'},
      {name: 'Camping'},
      {name: 'Tours'},
    ]
  },
  {
    name: 'Recreation',
    children: [
      {name: 'Swimming'},
      {name: 'Camping'},
      {name: 'Tours'},
    ]
  },
  {
    name: 'Spur',
    children: [
      {
        name: 'Relaxation',
        children: [
          {name: 'Couples massage'},
          {name: 'Singles massage'},
          {name: 'hot tab'}
        ]
      }, {
        name: 'Bookings',
        children: [
          {name: 'Rooms'},
          {name: 'events'},
          {name: 'food and drinks'}
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private transformer = (node: MoreNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
