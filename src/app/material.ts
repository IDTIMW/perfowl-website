import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatTreeModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatTreeModule,
        MatListModule,
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatTreeModule,
        MatListModule,
    ]
})

export class MaterialModule { }