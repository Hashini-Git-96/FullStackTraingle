import { Component, OnInit } from '@angular/core';
import { Traingle } from 'src/app/Model/Traingle';
import { TraingleServicesService } from 'src/app/Services/traingle-services.service';

@Component({
  selector: 'app-list-traingles',
  templateUrl: './list-traingles.component.html',
  styleUrls: ['./list-traingles.component.css']
})
export class ListTrainglesComponent implements OnInit {


  traingles: Traingle[]=[]
 

/**
 *
 */
constructor(private traingleService: TraingleServicesService) {
  
}

ngOnInit(): void {
  this.traingleService.GetAllTraingles().subscribe({
    next: (traingle) => {
      this.traingles=traingle;
    },
    error: (response) =>{
      console.log(response);
    }
  })
}

checkTraingleType(traingle:Traingle){
  let IsRightTraingle = false;
  
    if(Math.sqrt(traingle.sideA ^2 + traingle.sideB ^2) == Math.sqrt(traingle.sideC ) ||
     (Math.sqrt(traingle.sideA ^2 + traingle.sideC ^2 )== Math.sqrt(traingle.sideB)) ||
     (Math.sqrt(traingle.sideB ^2 + traingle.sideC ^2) == Math.sqrt(traingle.sideA))){
       return IsRightTraingle = true;
    

    }
    else{
      return IsRightTraingle ;
    }
  }


}
