import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [ButtonComponent],
  bootstrap: [ButtonComponent]
})
export class AppModule {
    constructor(private injector: Injector){
        const customButton = createCustomElement(ButtonComponent, {injector});
        customElements.define('custom-element', customButton);
    }
 }
