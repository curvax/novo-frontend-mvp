import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AllCrudsService } from 'src/app/services/all-cruds.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage  {
//  [x: string]: any;

  userForm!: any
  // formBuilder: any;
  // control: any
  constructor(
    private formBuilder: FormBuilder,
    private allCrudsService: AllCrudsService,
    private alertController: AlertController,
    private router: Router

  ) { 
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      telefone: ['', Validators.required],
      dataCriacao: [this.formatDate(new Date())],
      dataNascimento: [new Date().toISOString().split('T')[0], Validators.required],
     // role: [1] // Campo invisível
    });
  }

  // ngOnInit() {
  // }

  
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}T00:00:00.000`;
  }

  async onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
    this.allCrudsService.executarCadastro(this.userForm.value)
      .subscribe({
        next: async (resposta: any) => {
          console.log(resposta)
          console.log(this.userForm.value)
          const alert = await this.alertController.create({
            header: 'Seja Muito Bem-Vinda',
            message: 'Aproveite ao máximo sua estadia no Sampr!',
            buttons: [{
              text: 'Valeu!',
              handler: () => {
               // this.allCrudsService.RefreshPage()
                this.router.navigateByUrl('/dashboard'); // Substitua '/home' pelo caminho da sua página inicial
              }
            }]
          });
  
          await alert.present();
        },
        error: async (erro: any) => {
          console.error(erro)
          console.log(erro)
          const alert = await this.alertController.create({
            header: 'Erro',
            message: 'Ocorreu um erro ao tentar fazer login. Por favor, verifique o e tente novamente.',
            buttons: ['Ok']
          });
  
          await alert.present();
        }
      });
    } else {
     // this.markAllAsTouched();
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, preencha todos os campos obrigatórios.',
        buttons: ['Ok']
      });
      await alert.present();
    }
  }
  
  // markAllAsTouched() {
  //   Object.values(this.userForm.controls).forEach(control => {
  //     control.markAsTouched();
  //   });
  // }


}
