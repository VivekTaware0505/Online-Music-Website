import { Component } from '@angular/core';
import { MainComponent } from "./component/main/main.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlbumComponent } from "./component/album/album.component";
import { FooterComponent } from "./component/footer/footer.component";






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent, RouterLink, RouterOutlet, AlbumComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'musicapp';




 
    
  }
   
