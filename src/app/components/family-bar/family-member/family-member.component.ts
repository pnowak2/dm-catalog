import { Component, OnInit, Input } from '@angular/core';
import { FamilyMemberViewModel } from './model/family-member.viewmodel';

@Component({
  selector: 'asm-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.css']
})
export class FamilyMemberComponent implements OnInit {
  @Input() public familyMember: FamilyMemberViewModel = {};

  constructor() { 

  }

  ngOnInit() {
  }

}
