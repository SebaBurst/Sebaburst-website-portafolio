import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  redireccionarLinkedIn(): void {
    window.open('https://www.linkedin.com/in/sebastián-retamales-aguilera-910b791ba/', '_blank');
  }
  redireccionarGithub(): void {
    window.open('https://github.com/SebaBurst', '_blank');
  }

  redireccionarCV(): void {
    window.open('https://firebasestorage.googleapis.com/v0/b/inazumaplus-3f274.appspot.com/o/CV.pdf?alt=media&token=9f127c78-4704-4f38-b638-42d64c97bdbc', '_blank');
  }
}
