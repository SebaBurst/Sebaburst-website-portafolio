import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  redireccionarInazuma(): void { 
    window.open('https://inazumaplus.netlify.app/', '_blank');
  }


  redireccionarSmart():void{
    window.open('https://drive.google.com/uc?id=14tM9DwXvEEMnJfyxnWtDpyB_LZ9jLOJg&export=download', '_blank');
  }
  redireccionarRotom(): void { 
    window.open('https://rotom-dex.netlify.app/', '_blank');
  }
  redireccionarBike(): void {
    window.open('https://bicicleteroutal.tech/', '_blank');
  }
  redireccionarDrosucatch(): void {
    window.open('https://drosucatch.live/', '_blank');
  }
  redireccionarMobile(): void {
    window.open('https://drive.google.com/uc?id=1VVBD_lSU38RmjesY1eL3OeBPH9G4ERJW&export=download', '_blank');
  }

  redireccionarStudents(): void {
    window.open('https://tec-web-2022.web.app/', '_blank');
  }

  redireccionarRepo(): void {
    window.open('https://drive.google.com/drive/folders/1uajUW4q_-NQyadS74-VEutYFa2uMWNfY?usp=drive_link', '_blank');
  }


}
