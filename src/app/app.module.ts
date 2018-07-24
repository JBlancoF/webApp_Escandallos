import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2CompleterModule } from "ng2-completer";

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';


import { AppComponent } from './app.component';
import { MainControlPanelComponent } from './main-control-panel/main-control-panel.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EscandallosListComponent } from './escandallos-list/escandallos-list.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { EscandalloComponent } from './escandallo/escandallo.component';
import { CatEscandalloComponent } from './cat-escandallo/cat-escandallo.component';
import { CatIngredientComponent } from './cat-ingredient/cat-ingredient.component';
import { CatIngredientUnComponent } from './cat-ingredient-un/cat-ingredient-un.component';
import { CatEscandalloUnComponent } from './cat-escandallo-un/cat-escandallo-un.component';
import { Escandallo1Component } from './escandallo-1/escandallo-1.component';
import { EscandalloNotGuard } from './escadallo-not-saved.guards.service';
import { SideBarColorsService } from './side-bar-colors.service';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MainControlPanelComponent,
    SideBarComponent,
    IngredientListComponent,
    SignInComponent,
    EscandallosListComponent,
    IngredientComponent,
    EscandalloComponent,
    CatEscandalloComponent,
    CatIngredientComponent,
    CatIngredientUnComponent,
    CatEscandalloUnComponent,
    Escandallo1Component,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    Ng2CompleterModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EscandalloNotGuard, SideBarColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
