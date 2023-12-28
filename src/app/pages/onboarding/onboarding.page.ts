import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  slideOptions = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0 // This ensures that there is no space between the slides
  };
  

// Array of objects for each slide
slides = [
  {
    title: "Bem-Vindo ao Sampr",
    subtitle: "Sua central fitness digital completa",
    image: "../../../assets/running.png" // Replace with your image path
  },
  {
    title: "Permaneça conectado e atinja seus objetivos fitness!",
    subtitle: "Descubra a comunidade, acesse a loja, e aproveita ao máximo o app",
    image: "../../../assets/podium.png" // Replace with your image path
  },
  // Add more slides as needed
];

constructor() { } // Constructor of the class

  ngOnInit() {
  }

}
