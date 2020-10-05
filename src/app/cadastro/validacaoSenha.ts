import { AbstractControl } from '@angular/forms';

export class Validacao {
  // tslint:disable-next-line: typedef
  static SenhasCombinam(controle: AbstractControl) {
    let senha = controle.get('senha').value;
    let confirmarSenha = controle.get('confirmarSenha').value;

    if (senha === confirmarSenha) return null;

    controle.get('confirmarSenha').setErrors({ senhasNaoCoincidem: true });
  }
}
