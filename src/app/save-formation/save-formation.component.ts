import { Component, OnInit } from '@angular/core';
import { FormationsService } from '../service/formations.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Formation } from '../model/Formation';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-save-formation',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './save-formation.component.html',
  styleUrl: './save-formation.component.css'
})
export class SaveFormationComponent implements  OnInit{
 constructor(private formationService:FormationsService,private fb:FormBuilder,private  router:Router){}
 saveFormationFormGroup!: FormGroup
 formation!:Observable<Formation>
 ngOnInit(): void {
   this.saveFormationFormGroup=this.fb.group({
    title:this.fb.control("",[Validators.required]),
    description:this.fb.control("",[Validators.required]),
    dateStart:this.fb.control(null),
    dateEnd:this.fb.control(null)

   })
 }
 handleSaveFormation() {
  let f =this.saveFormationFormGroup.value;
  this.formationService.saveFormation(f).subscribe({
    next:(data)=>{  alert("formation has been added succefully."), this.router.navigate([""])}  ,
    error:(err)=> console.log(err)

  })

}
}
