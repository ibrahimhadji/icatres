import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomcommitiesComponent } from '../bottomcommities/bottomcommities.component';
import { NgFor } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-bottomsheet',
  standalone: true,
  imports: [MatButtonModule,MatChipsModule,NgFor,MatBottomSheetModule ,  BottomcommitiesComponent],
  templateUrl: './bottomsheet.component.html',
  styleUrl: './bottomsheet.component.css'
})
export class BottomsheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
  
  openBottomSheet(data : any): void {
    this._bottomSheet.open(BottomcommitiesComponent ,{data});
  }
  
commities = [ 
  {
    visited:false , 
    name :"Honorary Chairs" ,members : [
      'Pr. El Hadj Ailam, Rector of Djelfa University, Algeria',
      
      'Pr. Mokhtar Fodili, Vice Rector for External Relations, Cooperation, Animation , Communication and Scientific Events in Djelfa University, Algeria',
      'Pr. Ahmed Hafaifa, Dean of Science and Technology Faculty in Djelfa University, Algeria'
      ]} , 
      {
        visited:false , 
        name :"General Chairs" ,members : [
          'Dr. Belgacem Toual, LASER Director, Djelfa University, Algeria',
          'Pr. Lakhdar Mazouz, LASER Member and Vice Rector in Charge of Higher Education, Post-Graduation, University Accreditation and Scientific Research, Djelfa University, Algeria',
          ]} ,
  {name :"Scientific Committee Chairs" ,
  visited:false , 
  members : [
    "Pr. Mohamed Boudiaf, LASER Member, Djelfa University, Algeria",
    "Pr. Kouider Rahmani,  LASER Member, Djelfa University, Algeria",
  "Dr. Tahar Benmessaoud, LASER Member, Djelfa University,Algeria",
 " Dr. Amar Kouadri, LASER Member, Djelfa University, Algeria",
  "Dr. Kouider Laroussi,  LASER Member, Djelfa University, Algeria," ,
  "Dr. Nail Bachir, LASER Member, Djelfa University,Algeria",
  "Dr. Mohamed El Bar,  LASER Member, Djelfa University, Algeria",

]},
  {
    visited:false , 
    name :"Organizing Chairs" ,members : [
      "Dr. Douroum Embarek, LASER Member, Djelfa University, Algeria" , 
     " Dr. Abdelkader Rouibah, Djelfa University, Algeria",
"Dr. Samir Kherfane, LASER Member, Djelfa University, Algeria",
"Dr. Kherfane Riad Lakhdar, LASER Member, Djelfa University, Algeria",
"Dr. Habib Saddam Hocine, LASER Member, Djelfa University, Algeria",
"Dr. Hassak Ali Soufiane, Djelfa University, Algeria" , 
"Dr. Khoudiri Said, LASER Member, Djelfa University, Algeria",
'Dr. Tahiri Antar, LASER Member, Djelfa University, Algeria',
"Dr. Khaldi Belgacem Said, Djelfa UNIV, Algeria" , 
"Dr. Mohamed El Bar,  LASER Member, Djelfa University, Algeria",

  ]} ,  

{
  visited:false , 
  name :"Technical Program Chairs" 
  ,members : [
    "Dr. Abderrahmane Amari, LASER Member, Djelfa University, Algeria",
    "Dr. Ali Teta, Djelfa University, Algeria",
    "Dr. Bakria Derradji, LASER Member, Djelfa University, Algeria" , 
    "Dr. Tahar Benaissa, LASER Member, Djelfa University, Algeria",
  ]}, 
    {
      visited:false , 
      name :"Publication Chairs" ,members : [
        "Pr. Hatti Mustapha, UDES , Algeria",
      "Dr. Amar Kouadri, LASER Member, Djelfa University, Algeria",
      "Dr. Bachir NAIL, LASER Member, Djelfa University, Algeria"
     ]},
     {
      visited:false , 
      name :"Finance Chairs" ,members : [
        "Dr. Djaidir Berrabeh, LASER Member, Djelfa University, Algeria" , 
      "Dr. Allal Abdelali, LASER Member, Djelfa University, Algeria",
     ]},
     {
      visited:false , 
      name :"Registration Chairs" ,members : [
      "Dr. Naas Djeddaoui, LASER Member, Djelfa University, Algeria",
      "Dr. Rachida Senni, LASER Member, Djelfa University, Algeria",
      "Dr. Naas Toufik Tayeb, LASER Member, Djelfa University, Algeria" ,
    "Dr. Hakim Azizi, LASER Member, Djelfa University, Algeria"
     ]} ,
     {
      visited:false , 
      name :"Website Chair" ,members : [
     " Mr. Ibrahim Hadji, Djelfa University, Algeria"
     ]} , 
     {
      visited:false , 
      name :"Scientific committee" ,members : [
      'Dr. Laaroussi Kouider, Djelfa UNIV, Algeria',
      "Pr. Abdelmoneim Ayadi, ENIS, Tunisia"  ,
      "Pr. Allaoui Tayeb, Tiaret, UNIV, Algeria",
      "Pr. Ameur Aissa, Laghouat UNIV, Algeria",
      "Pr. Belhadj Jamel, ENSIT, Tunisia",
      "Pr. Bachir Bendjedia univ Laghouat",
      "Pr. Benaissa Amar, , Djelfa UNIV Algeria",
      "Pr. Benazza Abdelylah, Sidi bel Abbes UNIV, Algeria",
      "Pr. Bessissa Lakhdar, Djelfa UNIV, Algeria",
      "Pr. Bot Youcef , Khemis Miliana UNIV, Algeria",
      "Pr. Boudiaf Mohamed, Djelfa UNIV, Algeria",
      "Pr. Chelali Farouk, Djelfa UNIV, Algeria",
      "Pr. Cherroun Lekhmissi, Djelfa UNIV, Algeria",
      "Pr. Ghibeche Youcef, Djelfa UNIV, Algeria",
      "Pr. Fakhreddine Dammak, ENIS, Tunisia",
      "Pr. Férid kourda, ENIT, Tunisia",
      "Pr. Gueddim Ahmed, Djelfa UNIV, Algeria",
      'Pr Saadi Slami , Djelfa UNIV, Algeria' , 
      "Pr. Guerraiche Khelifa, Batna 2 UNIV, Algeria",
      "Pr. Guettaf Yassine, El Bayhad UNIV , Algeria",
      "Pr. Hadjaj Abdechafik, Laghouat UNIV, Algeria",
      "Pr. Hasnaoui Othman, ENSIT, Tunisia",
      "Pr. Kezrane Cheikh, Djelfa UNIV, Algeria",
      "Pr. Khelladi Sofiane, Arts and Crafts Institute of",
      "Technology, Paris, France",
      "Pr. Kherris Sahraoui, Tissemsilt UNIV, Algeria",
      "Pr. Korhan kayisli, Gazi Turkish UNIV, Algeria",
      "Pr. Laouedj Samir, Sidi bel Abbes UNIV, Algeria",
      "Pr. Lotfi Hammami, ENIS, Tunisia",
      "Pr. Makhlouf Mohamed, Sidi bel Abbes UNIV, Algeria",
      "Pr. Mazouz Lakhdar, Djelfa UNIV, Algeria",
      "Pr. Mitiche Lahcene, Djelfa UNIV, Algeria",
      "Pr. Mohammedi Kamal, Boumerdess UNIV, Algeria",
      "Pr. Mokrani Lakhdar, Laghouat UNIV, Algeria",
      "Pr. Mounir Baccar, ENIS, Tunisia",
      "Pr. Negadi Karim, Tiaret UNIV, Algeria",
      "Pr. Nour Mohamed, El Bayhad UNIV , Algeria",
      "Pr. Retiel Noureddine, Mostaganem UNIV, Algeria",
      "Pr. Saim Rachid, Tlemcen UNIV, Algeria",
      "Pr. Sbaa Morsli, Tiaret UNIV, Algeria",
      "Pr. Smaili Attalah, Tiaret UNIV, Algeria",
      'Dr. Nail Bachir, Djelfa UNIV, Algeria',
      'Dr. Naouri Nabil, Djelfa UNIV, Algeria',
      "Pr. Tedjini Hamza, El Bayhad UNIV , Algeria",
      "Pr. Teggar Mohamed, Laghouat UNIV, Algeria",
      "Dr. Dif Ismail, Djelfa UNIV, Algeria",
      "Pr. Bendjedia Bachir, Laghouat UNIV, Algeria",
      "Pr. Zaafouri Abderrahmen, ENSIT, Tunisia",
      "Pr. Zebbar Djallel, Tissemsilt UNIV, Algeria",
      "Pr. Zied Driss, ENIS, Tunisia",
      "Dr. Ahmed Ridha EL Ouederni, Faculty of Sciences of Tunis, Tunisia",
"Dr. Amari Abderrehmane, Djelfa UNIV, Algeria",
"Dr. Bourenane Mohamed, Djelfa UNIV, Algeria",
"Dr. Bakria Derradji, Djelfa UNIV, Algeria",
"Dr. Benaissa Tahar, Djelfa UNIV, Algeria",
"Dr. Benmessaoud Tahar, Djelfa UNIV, Algeria",
"Dr. Benrahmoune Mohamed, Tamanrasset UNIV,Algeria",
"Dr. Birane Mouhoub, Laghouat UNIV, Algeria",
"Dr. Chadouli Rachid, Khemis Meliana UNIV, Algeria",
'Dr. Cherrak Naas, Djelfa UNIV, Algeria',
'Dr. Djaidir Berrabeh, Djelfa UNIV, Algeria',
'Dr. Djeddaoui Naas, Djelfa UNIV, Algeria',
'Dr. Djeddi Ahmed Zouhir, Djelfa UNIV, Algeria',
'Dr. Dourroum Embarek, Djelfa UNIV, Algeria',
'Dr. Elbar Mohamed, Djelfa UNIV, Algeria',
'Dr. Habib Moustafa, Royal Institute of Technology,Stockholm, Sweden',
'Dr. Habib Saddam Hocine, Djelfa UNIV, Algeria',
'Dr. Hameurlaine Abdelhadi, Djelfa UNIV, Algeria',
'Dr. Kamla Youcef, Chlef UNIV, Algeria',
'Dr. Kherfane Riad Lakhdar, Djelfa UNIV, Algeria',
'Dr. Kherfane Samir, Djelfa UNIV, Algeria',
'Dr. Khoudiri Said, Djelfa UNIV, Algeria',
'Dr. Khoudiri Abdelkader, Djelfa UNIV, Algeria',
'Dr. Kouadri Amar, Djelfa UNIV, Algeria',
'Dr. Lahoual Mohammed, Djelfa UNIV, Algeria',
'Pr. Hafaifa Ahmed, Djelfa UNIV, Algeria',
'Dr. Laouari Azzedine, Bouira UNIV, Algeria',
'Dr. Laouid Abdelkader Azzeddine, Djelfa UNIV,Algeria',
'Dr. Medebber Mohamed Amine, Mascara UNIV,Algeria',
'Dr. Merzouk Imad, Djelfa UNIV, Algeria',
'Dr. Bagua Hakim, Djelfa UNIV, Algeria',
'Dr. Bekhiti Belkacem, Blida UNIV, Algeria',
'Pr. Belkhiri Mohammed, Laghouat UNIV, Algeria',
'Dr. Abdelhafid Benyounes, Msila UNIV, Algeria',
'Dr. Mosbah Laouamer, El oued UNIV, Algeria',
'Dr. Nadji Hadroug, Djelfa UNIV, Algeria',
'Dr. Kaid Imad Eddine, El oued UNIV, Algeria',
'Dr. Douara Abdelmalek, Tissemsilt UNIV, Algeria',
'Dr. Rabehi Abdelaziz, Djelfa UNIV, Algeria',
'Dr. Douara Taha Hocine, Djelfa UNIV, Algeria',
'Dr. Mhamedi Benalia, Djelfa UNIV, Algeria',
'Dr. Nadour Mohammed, Djelfa UNIV, Algeria',
'Dr. Mohammedi Abdelkader, Djelfa UNIV, Algeria',
'Dr. Nayef Ali Mutlaq Al-Maliki, University, Umm Al-Qura, Saudi Arabia',
'Dr. Ouai Attallah, Laghouat UNIV, Algeria',
'Dr. Rouibah Abdelkader, Djelfa UNIV, Algeria',
'Dr. Khaldi Belgacem Said, Djelfa UNIV, Algeria',
'Dr. Rouini Abdelghani, Djelfa UNIV, Algeria',
'Dr. Allout Naas, Djelfa UNIV, Algeria',
'Dr. Harzallah Salaheddine Djelfa UNIV, Algeria',
'Dr. Dif Fodil, Djelfa UNIV, Algeria',
'Dr. Sahra Atia, Djelfa UNIV, Algeria',
'Dr. Senni Rachida, Djelfa UNIV, Algeria',
'Dr. Tahiri Antar, Djelfa UNIV, Algeria',
'Dr. Teta Ali, Djelfa UNIV, Algeria',
'Dr. Toual Belgacem, Djelfa UNIV, Algeria',
'Dr. Korich Belkacem, Djelfa UNIV, Algeria',
'Dr. Beladel Abdelkader, Djelfa UNIV, Algeria',
'Dr. Toufik Naas Tayeb, Djelfa UNIV, Algeria',
'Dr. Zemit Abderrahim, Msila UNIV, Algeria',
'Dr. Ziane Khaled, Department of Mathematics,Computer Science and Engineering, Rimouski, Canada',
'Dr. Zouggar Kamel, Sidi bel Abbes UNIV, Algeria',
     ]} , 
      
      

]

} 
