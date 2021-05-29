import { Routes } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { ChaptersComponent } from '../chapters/chapters.component';

export const routes: Routes = [
    {path: 'courses', component: CoursesComponent},
    {path: 'chapter/:id', component: ChaptersComponent},
    {path: '', redirectTo: '/courses', pathMatch: 'full'}
]