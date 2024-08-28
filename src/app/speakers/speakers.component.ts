import { Component, EventEmitter, Output } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [MatButtonModule ,NgFor,MatGridListModule],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @Output() bioClicked = new EventEmitter<{ src: string; name: string }>();

  

  sendBio(data : any ) {
    this.dataEvent.emit(data);
  }


speakers=[
{src:"kamel.jpg",name:" Pr Kamal Mohammedi" , bio:"Prof. Kamal MOHAMMEDI is a Senior Lecturer of Applied Numerical Methods, Multiphase Flows, Solar Thermal Energy and Renewable Energy, since 1993, at M. Bougara University, Boumerdès/ Algeria, Department of Mechanical Engineering. He received his M Sc. degree in Mechanical Engineering from Boumerdès National Institute of Mechanical Engineering (INGM) Algeria, in 1985 and his Diplôme d’Etudes Approfondies and PhD degrees in Process Engineering from the INSA de Lyon, France, in 1992. Head of the Modelling Simulation and Optimization of Alternative and Sustainable Systems (MESOnexTeam), he has been involved in 2 FP6 European projects and 10 national projects in the fields of hybrid renewable energy systems, Renewable Energy Desalination, CSP, Sustainable Industrial parks, Carbone Dioxide mitigation in cement industry, Energy Efficiency, etc. He is the author and co-author of more than 40 published papers; book chapters and 100 conference articles in the fields of Concentrated Solar Power, Hybrid Renewable Energy Systems, and multiphase flows interface tracking. He is a member of scientific committees and a reviewer of national and International journals. He is a member of advisory boards of national and international conferences where he chaired sessions. He supervised Master/Engineer/Magister and PhD theses and consults for industry."} , 
{src:"dris.jpeg",name:"Pr Zied Driss ", bio:"Prof. Zied Driss is Full Professor in the Department of Mechanical Engineering at National School of Engineers of Sfax (ENIS). He received his Engineering Diploma in 2001, his Master Degree in 2003, his PhD in 2008 and his HDR in 2013 in Mechanical Engineering from ENIS at University of Sfax, Tunisia. He is interested on the development of numerical and experimental techniques for solving problems in mechanical engineering and energy applications."} ]
}

// {src:"chitour.jpg",name:"Pr Chems-Eddine Chitour" , bio:"Prof. Chems-Eddine Chitour is an Algerian scholar, researcher and author. He took office as Minister of Energy Transition and Renewable Energies on June 24, 2020. He previously served as minister of Higher Education and Scientific Research from January the 4th to June 24, 2020 in Algeria.CareerHe graduated from the National Polytechnic School and the Algerian Institute of petroleum in Algiers, in the field of Chemistry. He did his doctorate Es Sciences at the Université Jean Monnet in France. He is the founder of valorization of fossil energy research laboratory. He worked as a professor and assisting professor at IGC and then ENSIACET[clarification needed] in the city of Toulouse in France. He published several scholarly articles and books.Chitour took office on 4 January 2020 as Minister of Higher Education and Scientific Research."} ,