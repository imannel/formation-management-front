import { Component, OnInit } from '@angular/core';
import { FormationsService } from '../service/formations.service';
import { FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Formation } from '../model/Formation';
import { Observable, map } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-display-formations',
  standalone: true,
  imports: [NgFor,NgIf,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './display-formations.component.html',
  styleUrl: './display-formations.component.css'
})
export class DisplayFormationsComponent implements OnInit{
  constructor(private formationService :FormationsService ,private router:Router,private fb:FormBuilder){
    this.handleDisplayFormations();
  }

  formations!:Formation[];
  errorMessage!: string;
  searchFormGroup!:FormGroup;

ngOnInit():void{
  this.searchFormGroup=this.fb.group({
    keyword:this.fb.control("")
  })
} 

handleDisplayFormations(){
this.formationService.getFormations().subscribe({next:(data)=>{this.formations=data},
error:(err)=>this.errorMessage=err.message});
} 
handleDeleteFormation(f:Formation) {
  alert('are you sure?')
 this.formationService.deleteFormation(f.id).subscribe({
     next:(resp)=>{ this.formations = this.formations.filter(item => item !== f);},
     error:(err)=>console.log(err)}
 )
 }
 goToSaveFormation(){
 this.router.navigate(["saveFormation"])

 }
 handleSearchFormations(){
  let kw= this.searchFormGroup.value.keyword;
 this.formationService.searchFormation(kw).subscribe({
    next:(data)=>{this.formations=data}
  });
 }

 goToUpdateFormation(id:number){
  this.router.navigate(["updateFormation/"+id])

 }
 changeState( formation:Formation){
 formation.state=!formation.state;

 }
}

