import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService} from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencia: ExperienciaComponent[] = [];
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) {
    IsLogged = false;
  }

  ngOnInit(): void {
  }

}
