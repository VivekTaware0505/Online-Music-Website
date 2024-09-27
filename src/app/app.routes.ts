import { Routes } from '@angular/router';
import { EnglistComponent } from './pages/englist/englist.component';
import { HindlistComponent } from './pages/hindlist/hindlist.component';
import { MarlistComponent } from './pages/marlist/marlist.component';
import { AlbumComponent } from './component/album/album.component';


export const routes: Routes = [

    {path:"", component:AlbumComponent},
    {path:"english",component:EnglistComponent},
    {path:"hindi",component:HindlistComponent},
    {path:"marathi",component:MarlistComponent}


];
