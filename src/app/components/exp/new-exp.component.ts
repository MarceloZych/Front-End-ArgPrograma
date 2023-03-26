import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpServiceService } from 'src/app/_service/exp-service.service';
import { Exp } from '../model/Exp';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {
  nameE: string = '';
  desc_exp: string = '';

  constructor(private expService: ExpServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exper = new Exp(this.nameE, this.desc_exp);
    this.expService.save(exper).subscribe(data=>{
      console.log(exper);
      
      alert("Se ha añadido la experiencia");
      this.router.navigate(['skills']);
    }, err =>{
      alert("Error al agregar experiencia");
      this.router.navigate(['skills']);
    })
  }

}
