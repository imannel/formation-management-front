import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayFormationsComponent } from './display-formations/display-formations.component';
import { SaveFormationComponent } from './save-formation/save-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { DisplayMembersComponent } from './display-members/display-members.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SaveMemberComponent } from './save-member/save-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { ListMembresFormationComponent } from './list-membres-formation/list-membres-formation.component';
import { AssignMemberFormationComponent } from './assign-member-formation/assign-member-formation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DisplayFormationsComponent,SaveFormationComponent,UpdateFormationComponent,DisplayMembersComponent,NavbarComponent,SaveMemberComponent,AssignMemberFormationComponent,UpdateMemberComponent,ListMembresFormationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontEndApi';
}
