import { Component } from '@angular/core';
import { MainComponent } from "./component/main/main.component";
import { MiddleComponent } from "./component/middle/middle.component";
import { AlbumComponent } from "./component/album/album.component";
import { FooterComponent } from "./component/footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent, MiddleComponent, AlbumComponent, FooterComponent,RouterLink,RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'musicapp';




 
    
  }
   
