import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ReasonsWhySegregatedFundComponent } from './reasons-why-segregated-fund/reasons-why-segregated-fund.component';
import { SegregatedFundResultsComponent } from './segregated-fund-results/segregated-fund-results.component';
import { SegregatedFundListComponent } from './segregated-fund-list/segregated-fund-list.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'reasons-why-segregated-fund', component: ReasonsWhySegregatedFundComponent },
    { path: 'segregated-fund-results', component: SegregatedFundResultsComponent},
    {path: 'segregated-fund-list', component: SegregatedFundListComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }