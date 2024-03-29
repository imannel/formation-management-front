import { Component,OnInit } from '@angular/core';
import { Formation } from '../model/Formation';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationsService } from '../service/formations.service';
import { Member } from '../model/Member';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-membres-formation',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule,],
  templateUrl: './list-membres-formation.component.html',
  styleUrl: './list-membres-formation.component.css'
})

export class ListMembresFormationComponent implements OnInit {
  formationId!: number;
  formation!: Formation;
  members!:Member[];
  nouveauMembre: any = {}; 
  afficherFormulaire: boolean = false;

  constructor(private route: ActivatedRoute, private formationService: FormationsService,private router: Router) {}

  ngOnInit(): void {
    this.formationId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getFormationById();
    this.getMembers();
  }

  getFormationById() {
    this.formationService.getFormationById(this.formationId).subscribe({
      next: (data) => {
        this.formation = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  getMembers(){
    this.formationService.getMembersByFormationId(this.formationId).subscribe({
      next:(data) =>{
        this.members=data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  removeMember(member:Member){
    this.formationService.removeMemberFromFormation(this.formationId,member.id).subscribe({
      next: (resp) => { this.members = this.members.filter(item => item !== member); },
      error: (err) => console.log(err)
    });;

  }
  editeMember(member:Member){

  }

  ajouterMembre(): void {
    this.formationService.assignMemberToFormation(this.formationId, this.nouveauMembre).subscribe({
      next: (data) => {  
        this.members.push(this.nouveauMembre);
        this.nouveauMembre = {}; 
        this.getMembers();

        alert("Membre has been added successfully.");
      },
      error: (err) => console.log(err)
    });
  }
  goToUpdateMember(id:number){
    this.router.navigate(["updateMember/"+id])
  
}

}
