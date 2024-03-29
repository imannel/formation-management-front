import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormationsService } from '../service/formations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-update-formation',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,FormsModule],
  templateUrl: './update-formation.component.html',
  styleUrl: './update-formation.component.css'
})
export class UpdateFormationComponent implements  OnInit{
  updateFormGroup!:FormGroup;
  formationId!:number;
  formation : Formation={title:"",description:"",dateStart:new Date(),dateEnd:new Date()};
constructor(private formationsService:FormationsService,private fb:FormBuilder,private route:ActivatedRoute ,private router:Router ){}
ngOnInit(){
  this.updateFormGroup=this.fb.group({
    title:this.fb.control("",[Validators.required]),
    description:this.fb.control("",[Validators.required]),
    dateStart:this.fb.control(null),
    dateEnd:this.fb.control(null),

  })
  this.formationId= parseInt(this.route.snapshot.paramMap.get('id'));
  this.getformationById();
  

}
handleUpdateFormation(){
  let formation=this.updateFormGroup.value;
  this.formationsService.updateFormation(this.formationId,formation).subscribe({
    next:(data)=>{ this.router.navigate([""]), alert("formation has been modified succefully.")},
    error:(err)=> console.log(err)
  })

 

}
getformationById(){
  this.formationsService.getFormationById(this.formationId).subscribe({
    next:(data)=>(this.formation=data),
    error:(err)=> console.log(err)
  })
}
}
