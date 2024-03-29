import { Component, OnInit } from '@angular/core';
import { MembersService } from '../service/members.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Member } from '../model/Member';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-save-member',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './save-member.component.html',
  styleUrl: './save-member.component.css'
})
export class SaveMemberComponent implements OnInit {
  constructor(private memberService: MembersService, private fb: FormBuilder, private router: Router) { }
  
  saveMemberFormGroup!: FormGroup;
  member!: Observable<Member>;

  ngOnInit(): void {
    this.saveMemberFormGroup = this.fb.group({
      firstName: this.fb.control("", [Validators.required]),
      lastName: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [Validators.required, Validators.email])
    });
  }

  handleSaveMember() {
    let member = this.saveMemberFormGroup.value;
    this.memberService.saveMember(member).subscribe({
      next: (data) => {
        alert("Member has been added successfully.");
        this.router.navigate(["members"]);
      },
      error: (err) => console.log(err)
    });
  }
}
