import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Traingle } from 'src/app/Model/Traingle';
import { TraingleServicesService } from 'src/app/Services/traingle-services.service';

@Component({
  selector: 'app-add-traingle',
  templateUrl: './add-traingle.component.html',
  styleUrls: ['./add-traingle.component.css']
})
export class AddTraingleComponent implements OnInit{

  addTraingleDetails : Traingle = {
    id: '',
    sideA: 0,
    sideB: 0,
    sideC: 0,
  
  }

  constructor(private traingleService: TraingleServicesService , private router : Router) {
  
    
  }
  ngOnInit(): void {
    
  }

  addTraingle(){
    this.traingleService.AddTraingle(this.addTraingleDetails).subscribe({
      next:(traingle)=>{
           
            this.router.navigate(['traingles']) ;  
      }
    })

  }

 
   
  

}
