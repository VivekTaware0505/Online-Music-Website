import { Routes } from '@angular/router';
import { AlbumComponent } from './component/album/album.component';
import { MarathisongComponent } from './component/marathisong/marathisong.component';
import { EnlishsongComponent } from './component/enlishsong/enlishsong.component';
import { HindisongComponent } from './component/hindisong/hindisong.component';

export const routes: Routes = [

    {path:"marathi",component:MarathisongComponent},
    {path:"enlish",component:EnlishsongComponent},
    {path:"hindi",component:HindisongComponent}


];
