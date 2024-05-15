import { LOCALE_ID, NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeLayoutComponent } from './shared/layouts/home-layout/home-layout.component';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './pages/crud/crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './shared/services/product.service';
import { MarcaService } from './shared/services/marca.service';
import { ArmazemService } from './shared/services/armazem.service';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MaterialModule } from './shared/material/material.module';
import { ProductCreateComponent } from './pages/crud/product-create/product-create.component';
import { ProductUpdateComponent } from './shared/components/product/product-update/product-update.component';
import { HomeModule } from './pages/home/home.module';
import { ProductReadComponent } from './pages/crud/product-read/product-read.component';
import { ProductDeleteComponent } from './pages/crud/product-delete/product-delete.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { MarcaCreateComponent } from './pages/crud/marca-create/marca-create.component';
import { MarcaCrudComponent } from './pages/crud/marca-crud/marca-crud.component';
import { MarcaReadComponent } from './pages/crud/marca-read/marca-read.component';
import { ArmazemCreateComponent } from './pages/crud/armazem-create/armazem-create.component';
import { ArmazemCrudComponent } from './pages/crud/armazem-crud/armazem-crud.component';
import { ArmazemReadComponent } from './pages/crud/armazem-read/armazem-read.component';
import { ArmazemDeleteComponent } from './pages/crud/armazem-delete/armazem-delete.component';
import { MarcaDeleteComponent } from './pages/crud/marca-delete/marca-delete.component';
import { MarcaUpdateComponent } from './shared/components/marca/marca-update/marca-update.component';
import { ArmazemUpdateComponent } from './shared/components/armazem/armazem-update/armazem-update.component';
import { LoginComponent } from './pages/crud/login/login.component';
import { EstoqueCrudComponent } from './pages/crud/estoque-crud/estoque-crud.component';
import { EstoqueCreateComponent } from './pages/crud/estoque-create/estoque-create.component';
import { EstoqueDeleteComponent } from './pages/crud/estoque-delete/estoque-delete.component';
import { EstoqueReadComponent } from './pages/crud/estoque-read/estoque-read.component';
import { EstoqueUpdateComponent } from './shared/components/estoque/estoque-update/estoque-update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppComponent,
    FooterComponent,
    SidenavComponent,
    HomeLayoutComponent,
    CrudComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductReadComponent,
    ProductDeleteComponent,
    MarcaCreateComponent,
    MarcaCrudComponent,
    MarcaReadComponent,
    ArmazemCreateComponent,
    ArmazemCrudComponent,
    ArmazemReadComponent,
    ArmazemDeleteComponent,
    MarcaDeleteComponent,
    MarcaUpdateComponent,
    ArmazemUpdateComponent,
    LoginComponent,
    EstoqueCrudComponent,
    EstoqueCreateComponent,
    EstoqueDeleteComponent,
    EstoqueReadComponent,
    EstoqueUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    ProductService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    },
    MarcaService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    },
    ArmazemService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
