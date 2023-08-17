import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Traingle } from 'src/app/Model/Traingle';
import { TraingleServicesService } from 'src/app/Services/traingle-services.service';

@Component({
  selector: 'app-edit-traingle',
  templateUrl: './edit-traingle.component.html',
  styleUrls: ['./edit-traingle.component.css']
})
export class EditTraingleComponent implements OnInit {
  

  updateTraingleRequest : Traingle = {
    id: '',
    sideA: 0,
    sideB: 0,
    sideC: 0,
  }
/**
 *
 */
constructor(private traingleService: TraingleServicesService,private route: ActivatedRoute, private router:Router) {
 
  
}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param)=>{
        const id = param.get('id');
        if(id){
          this.traingleService.GetTraingle(id).subscribe({
            next: (responce)=>{
               this.updateTraingleRequest = responce;
            }
          })

        }
      }
      
    })
  } 


  editTraingle(){
    this.traingleService.UpdateTraingle(this.updateTraingleRequest.id, this.updateTraingleRequest).subscribe({
         next:(traingle)=>{
          this.router.navigate(['traingles'])
      }
     
    })
   
}

deleteTraingle(id: string){
  this.traingleService.DeleteTraingle(id).subscribe({
    next:(responce)=>{
      this.router.navigate(['traingles'])
    }
  })
}

}
