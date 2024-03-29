import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Member } from '../model/Member';
import { MembersService } from '../service/members.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-member',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,FormsModule],
  templateUrl: './update-member.component.html',
  styleUrl: './update-member.component.css'
})
export class UpdateMemberComponent implements OnInit {
  updateFormGroup!: FormGroup;
  memberId!: number;
  member: Member = { firstName: "", lastName: "", email: "" };

  constructor(private membersService: MembersService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.updateFormGroup = this.fb.group({
      firstName: this.fb.control("", [Validators.required]),
      lastName: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [Validators.required, Validators.email])
    });

    this.memberId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getMemberById();
  }

  handleUpdateMember() {
    let member = this.updateFormGroup.value;
    this.membersService.updateMember(this.memberId, member).subscribe({
      next: (data) => {
        this.router.navigate(["members"]);
        alert("Member has been modified successfully.");
      },
      error: (err) => console.log(err)
    });
  }

  getMemberById() {
    this.membersService.getMemberById(this.memberId).subscribe({
      next: (data) => (this.member = data),
      error: (err) => console.log(err)
    });
  }
}
