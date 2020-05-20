import { Injectable } from '@angular/core';
import { Aluno } from './alunos/aluno.model'; 


@Injectable({
  providedIn: 'root'
})
export class AlunosServiceService {

  Aluno: Aluno = {
    name: "Marcos Caldas",
    idade: 21,
    RA: 11723317
  }


  constructor() { }


  getAluno() {

    return this.Aluno;


  }

}
