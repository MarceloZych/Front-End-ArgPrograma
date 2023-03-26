import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpServiceService } from 'src/app/_service/exp-service.service';
import { Exp } from '../model/Exp';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  expJob : Exp = null;

  constructor(private expService : ExpServiceService, private activatedRouter : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expService.details(id).subscribe(
      data =>{
        this.expJob = data;
      }, err =>{
        alert("Error al modificar la experiencia");
        this.router.navigate(['skills'])
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.expService.update(id, this.expJob).subscribe(data => {
      this.router.navigate(['skills'])
    }, err =>{
      alert("Error al modificar la experiencia"),
      this.router.navigate(['skills'])
    })
  }

}
