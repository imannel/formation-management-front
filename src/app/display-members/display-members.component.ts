import { Component ,OnInit } from '@angular/core';
import { Member } from '../model/Member';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MembersService } from '../service/members.service';
import { Router } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-display-members',
  standalone: true,
  imports: [NgFor,NgIf,ReactiveFormsModule,CommonModule],
  templateUrl: './display-members.component.html',
  styleUrl: './display-members.component.css'
})
export class DisplayMembersComponent implements OnInit {

  constructor(private membersService: MembersService, private router: Router, private fb: FormBuilder) { }

  members!: Member[];
  errorMessage!: string;
  searchFormGroup!: FormGroup;

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    });
    this.handleDisplayMembers();
  }

  handleDisplayMembers() {
    this.membersService.getMembers().subscribe({
      next: (data) => { this.members = data; },
      error: (err) => this.errorMessage = err.message
    });
  }

  handleDeleteMember(member: Member) {
    alert('Are you sure?');
    this.membersService.deleteMember(member.id).subscribe({
      next: (resp) => { this.members = this.members.filter(item => item !== member); },
      error: (err) => console.log(err)
    });
  }

  goToSaveMember() {
    this.router.navigate(["saveMember"]);
  }

  handleSearchMembers() {
    let kw = this.searchFormGroup.value.keyword;
    this.membersService.searchMember(kw).subscribe({
      next: (data) => { this.members = data; }
    });
  }
  goToUpdateMember(id:number){
    this.router.navigate(["updateMember/"+id])
  
}
}