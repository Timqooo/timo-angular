import { Routes } from '@angular/router';
import { LibraryComponent } from './components/library/library/library.component';
import { CartComponent } from './components/library/cart/cart.component';

export const routes: Routes = [
    { path: '', component: LibraryComponent},
    { path: 'cart', component: CartComponent}
];
