import { NgModule } from '@angular/core';
import { PreloadComponent } from './preload/preload.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const components = [PreloadComponent, NavBarComponent]

@NgModule({
    declarations:[components, ],
    imports:[],
    exports: [components]
})
export class ComponentsModule {}