import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ENVIRONMENT } from './tokens/environment.token';
import { NZ_I18N, tr_TR } from 'ng-zorro-antd/i18n';
import { lightTheme } from './theme';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { environment } from 'src/environments/environment';
import { ApiInterceptor } from './interceptors/api.interceptor';
import tr from '@angular/common/locales/tr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(tr);

const ngZorroConfig: NzConfig = {
  theme: lightTheme,
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: ENVIRONMENT, useValue: environment },
    { provide: NZ_I18N, useValue: tr_TR },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: LOCALE_ID, useValue: 'tr' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
