import { HttpClient } from '@angular/common/http';

import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { from } from 'rxjs';
import { tap, switchMap, finalize, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
  
export class AllCrudsService {

    constructor(
        private httpClient: HttpClient,
        private loadingController: LoadingController
    ){}


  private apiUrl = 'https://curvs-mvp-smpr.onrender.com';
  private apiUrlDev = 'http://localhost:3001';

  

    executarLogin(voluntario: UserLoginDTO): Observable<any> {
        let loadingInstance: HTMLIonLoadingElement;
      
        return from(this.loadingController.create({
          message: 'Enviando dados...'
        })).pipe(
          tap(loading => {
            loadingInstance = loading;
            loading.present();
          }),
          switchMap(() => this.httpClient.post(`${this.apiUrl}/voluntarios`, voluntario)),
          finalize(() => loadingInstance.dismiss())
        );
      }

      executarCadastro(voluntario: UserSignupDTO): Observable<any> {
        let loadingInstance: HTMLIonLoadingElement;
      
        return from(this.loadingController.create({
          message: 'Enviando dados...'
        })).pipe(
          tap(loading => {
            loadingInstance = loading;
            loading.present();
          }),
          switchMap(() => this.httpClient.post(`${this.apiUrl}/voluntarios`, voluntario)),
          finalize(() => loadingInstance.dismiss())
        );
      }

      getCalories(userId: number): Observable<any> {
        const url = `${this.apiUrlDev}/${userId}/calories`;
        return this.httpClient.get(url);
      }

}

export interface UserLoginDTO {
    email: string;
    password: string
}

export interface UserSignupDTO {
 
        id: any;
        createdAt: string;
        name: string;
        email: string;
        password: string;
        cpfCnpj: string; 
        company: string; 
        mobilePhone: string;  
        phone: string; 
        postalCode: string;
        address: string; 
        province: string;     
        state: string;     
        city: string; 
        addressNumber: string;
        additionalEmails: string;
        birthAt?: string; // Opcional
        role?: number; // Opcional
        emailVerificationCode?: string; // Opcional
        SMSVerificationCode?: string; // Opcional
        observations: string;
      }


