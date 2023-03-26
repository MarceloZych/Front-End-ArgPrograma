import { Component, OnInit } from '@angular/core';
import { ExpServiceService } from 'src/app/_service/exp-service.service';
import { StorageService } from 'src/app/_service/storage.service';
import { Exp } from '../model/Exp';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  expe: Exp[] = [];

  constructor(private expService: ExpServiceService, private storageService: StorageService) { }
  
  isLoggedIn = false;

  ngOnInit(): void {
    this.updateExp();
    if(this.storageService.getUser()){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
  }

  updateExp(): void{
    this.expService.lista().subscribe(data => { this.expe = data;});
  }

  delete(id: number){
    if(id != undefined){           
      this.expService.delete(id).subscribe(data => {
        this.updateExp();
        console.log();
        
      }, err => {
        alert("No se puede borrar la experiencia")
      })
    }
  }
}
