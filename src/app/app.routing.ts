import {Routes} from '@angular/router'
import { SignInComponent } from './sign-in/sign-in.component';
import { MainControlPanelComponent } from './main-control-panel/main-control-panel.component';
import { EscandallosListComponent } from './escandallos-list/escandallos-list.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { CatIngredientComponent } from './cat-ingredient/cat-ingredient.component';
import { CatIngredientUnComponent } from './cat-ingredient-un/cat-ingredient-un.component';
import { CatEscandalloComponent } from './cat-escandallo/cat-escandallo.component';
import { CatEscandalloUnComponent } from './cat-escandallo-un/cat-escandallo-un.component';
import { EscandalloComponent } from './escandallo/escandallo.component';
import { Escandallo1Component } from './escandallo-1/escandallo-1.component';
import { EscandalloNotGuard } from './escadallo-not-saved.guards.service';
import { SignUpComponent } from './sign-up/sign-up.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'signIn', pathMatch: 'full'},
    { path: 'signUp', component: SignInComponent },
    { path: 'signIn', component: SignUpComponent },
    { path: 'main', component: MainControlPanelComponent,
    children:[
        { path: 'escandallos-list', component: EscandallosListComponent },
        { path: 'escandallo/new', component: EscandalloComponent },
        { path: 'escandallo/new/table/:id', component: Escandallo1Component, canDeactivate:[EscandalloNotGuard] },
        { path: 'escandallo/edit/:id', component: EscandalloComponent },
        
        { path: 'escandallos/category', component: CatEscandalloComponent},
        { path: 'escandallos/category/new', component: CatEscandalloUnComponent},
        { path: 'escandallos/category/edit/:id', component: CatEscandalloUnComponent},

        { path: 'ingredients-list', component: IngredientListComponent },
        { path: 'ingredient/new', component: IngredientComponent},
        { path: 'ingredient/edit/:id', component: IngredientComponent},
        { path: 'ingredients/category', component: CatIngredientComponent},
        { path: 'ingredient/category/new', component: CatIngredientUnComponent},
        { path: 'ingredient/category/edit/:id', component: CatIngredientUnComponent}
    ]}, 
    // { path: '**', component:}
]

