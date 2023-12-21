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
}
