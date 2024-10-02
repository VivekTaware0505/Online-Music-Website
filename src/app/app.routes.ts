import { Routes } from '@angular/router';
import { AlbumComponent } from './component/album/album.component';
import { MarathisongComponent } from './component/marathisong/marathisong.component';
import { EnlishsongComponent } from './component/enlishsong/enlishsong.component';
import { HindisongComponent } from './component/hindisong/hindisong.component';
import { MainComponent } from './component/main/main.component';

export const routes: Routes = [


    { path: "", component: MainComponent },
    { path: "album", component: AlbumComponent},
    { path: "marathi", component: MarathisongComponent },
    { path: "english", component: EnlishsongComponent },
    { path: "hindi", component: HindisongComponent }


];
