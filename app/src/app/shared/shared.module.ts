import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ClarityModule } from "@clr/angular";
import { HeaderComponent } from './webparts/header/header.component';
import { SliderComponent } from './webparts/slider/slider.component';
import { PageTitleComponent } from './webparts/page-title/page-title.component';

@NgModule({
    imports:[
        CommonModule,
        ClarityModule
    ],
    declarations: [
        HeaderComponent,
        SliderComponent,
        PageTitleComponent
    ],
    exports: [
        CommonModule,
        ClarityModule,
        HeaderComponent,
        SliderComponent,
        PageTitleComponent
    ],
})
export class SharedModule { }
