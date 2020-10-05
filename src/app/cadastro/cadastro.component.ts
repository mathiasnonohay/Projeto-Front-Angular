import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validacao } from './validacaoSenha';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  submitted = false;

  formularioDeCadastro: FormGroup;

  constructor(private fb: FormBuilder) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.formularioDeCadastro = this.fb.group(
      {
        nome: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validator: Validacao.SenhasCombinam,
      }
    );
  }

  // tslint:disable-next-line: typedef
  get form() {
    return this.formularioDeCadastro.controls;
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.submitted = true;

    if (this.formularioDeCadastro.invalid) {
      return;
    }

    alert(
      'SUCCESS!! :-)\n\n' +
        JSON.stringify(this.formularioDeCadastro.value, null, 4)
    );
  }

  // tslint:disable-next-line: typedef
  onReset() {
    this.submitted = false;
    this.formularioDeCadastro.reset();
  }
}
