import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
/// modulod
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from "./pages.routes";

// ng charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from "./pages.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";

// temporal
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficosComponent } from "../components/graficos/graficos.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        IncrementadorComponent,
        GraficosComponent,
        AccountSettingsComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }