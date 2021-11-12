import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/model/material';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  material = new Material();
  submitted = false;
  msgError = '';

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
  }

  existPK (val:String): void {
    this.materialService.get(val)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  saveMaterial(): void {
    const data = {
      id: this.material.id,
      categoria: this.material.categoria,
      nombre: this.material.nombre,
      reciclable: this.material.reciclable
    };

    this.materialService.create(data)
      .subscribe(
        data => {
          this.submitted=true;
          console.log(data);
        },
        error =>{
          this.msgError = error.message + '\n ' + error.error.message;
          console.log(error);
        });
  }

  newMaterial() {
    this.submitted = false;
    this.material.id = null;
    this.material.categoria = null;
    this.material.nombre = null;
    this.material.reciclable = false;

  }

}
