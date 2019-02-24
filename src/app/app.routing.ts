import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { LoginComponent } from './common/login.component';
import { CatalogComponent } from './common/catalog.component';
import { ZnoexisteComponent } from './common/znoexiste.component';

import { AdminGuard } from './common/services/admin.guard';

const appRoutes: Routes = [    
    {path: '', component: LoginComponent},
    //{path: '', component: CatalogComponent},
    {path: '', redirectTo: 'login' , pathMatch: 'full'},
    {canActivate: [AdminGuard], path: 'catalogo', component: CatalogComponent},
    {path: '**', component: ZnoexisteComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
