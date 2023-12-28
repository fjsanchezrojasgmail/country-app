import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TagModule } from 'primeng/tag';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './footer/footer.component';
import { TabViewModule } from 'primeng/tabview';





@NgModule({
    declarations: [
      MenuBarComponent,CarrouselComponent,ToolbarComponent,SideBarComponent,FooterComponent
    ],
    imports: [
        CommonModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
        CarouselModule,
        ToolbarModule,
        SplitButtonModule,
        TagModule,
        SidebarModule,
        TabViewModule

    ],
    exports: [
      MenuBarComponent,CarrouselComponent,ToolbarComponent,SideBarComponent,FooterComponent
    ]

})
export class ComponentsModule { }
