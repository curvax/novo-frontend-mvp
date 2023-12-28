import { Component, OnInit } from '@angular/core';
import { UserHealthData } from 'src/app/interfaces/user-data.interface';
import { AllCrudsService } from 'src/app/services/all-cruds.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  caloriesData: any;
  caloriesConsumed!: number;
  userHealthData!: UserHealthData
   userId!: number; // Adicione uma variável para armazenar o userId

  constructor(private allCrudsService: AllCrudsService) {
 
  }

  ngOnInit() {
    this.loadUserId();
    this.getCaloriesData(this.userId); // passe o userId como argumento
  }

  loadUserId(): void {
    // Acessa o localStorage e lê o 'userId'
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = +storedUserId; // o '+' converte a string para número
    } else {
      this.userId = 12345
      console.error('User ID not found in localStorage');
    }
  }

  getCaloriesData(userId: number): void { // modifique para aceitar userId
    this.allCrudsService.getCalories(userId).subscribe(
      (      data: any) => {
        this.caloriesData = data;
        console.log(this.caloriesData);
      },
      (      error: any) => {
        console.error('There was an error!', error);
      }
    );
  }
}
