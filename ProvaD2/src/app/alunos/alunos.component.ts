import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';
import { AlunosServiceService } from '../AlunosService';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public aluno: Aluno;


  constructor(public AlunoServiceService: AlunosServiceService) { }

  ngOnInit(): void {

    this.aluno = this.AlunoServiceService.getAluno();

  }

 

}
