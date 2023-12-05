import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ReasonsWhySegregatedFundComponent } from './reasons-why-segregated-fund/reasons-why-segregated-fund.component';
import { SegregatedFundResultsComponent } from './segregated-fund-results/segregated-fund-results.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'reasons-why-segregated-fund', component: ReasonsWhySegregatedFundComponent },
    {path: 'segregated-fund-results', component: SegregatedFundResultsComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }