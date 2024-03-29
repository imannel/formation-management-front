import { Routes } from '@angular/router';
import { SaveFormationComponent } from './save-formation/save-formation.component';
import { DisplayFormationsComponent } from './display-formations/display-formations.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { DisplayMembersComponent } from './display-members/display-members.component';
import { SaveMemberComponent } from './save-member/save-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { ListMembresFormationComponent } from './list-membres-formation/list-membres-formation.component';
import { AssignMemberFormationComponent } from './assign-member-formation/assign-member-formation.component';

export const routes: Routes = [

    {path:"saveFormation",component:SaveFormationComponent},
    {path:"",component:DisplayFormationsComponent},
    {path:"members",component:DisplayMembersComponent},
    {path:"updateFormation/:id",component:UpdateFormationComponent},
    {path:"updateMember/:id",component:UpdateMemberComponent},
    {path:"saveMember",component:SaveMemberComponent},
    { path: "formations/:formationId/members/:memberId", component: AssignMemberFormationComponent },
    { path: "details-formation/:id", component: ListMembresFormationComponent }




];
