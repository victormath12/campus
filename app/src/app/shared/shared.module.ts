import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Webparts
import { HeaderComponent } from './webparts/header/header.component';
import { SliderComponent } from './webparts/slider/slider.component';
import { PageTitleComponent } from './webparts/page-title/page-title.component';
import { NavComponent } from './webparts/nav/nav.component';

// Components
import { InputComponent } from './components/input/input.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SliderComponent,
        PageTitleComponent,
        NavComponent,
        InputComponent,
        CoursesListComponent,
        ProfileCardComponent
    ],
    exports: [
        CommonModule,
        HeaderComponent,
        SliderComponent,
        PageTitleComponent,
        NavComponent,
        InputComponent,
        CoursesListComponent,
        ProfileCardComponent
    ],
})
export class SharedModule { }
