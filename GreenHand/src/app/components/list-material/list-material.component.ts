import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Material } from 'src/app/model/material';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-list-material',
  templateUrl: './list-material.component.html',
  styleUrls: ['./list-material.component.css']
})
export class ListMaterialComponent implements OnInit {

  materialSet: Material[];
  idMaterial: string;
  collectionSize: number;
  closeModal: string;
  msgError = '';
  currentMaterial = null;
  currentIndex = -1;

  constructor(private materialService: MaterialService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.refreshList();
  }

  triggerModal(content: any, val: Material) {
    this.currentMaterial = val
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  retrieveMaterials(): void {
    this.materialService.getAll()
      .subscribe(
        data => {
          this.materialSet = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateMaterial(): void {
    this.materialService.update(this.currentMaterial.id, this.currentMaterial)
      .subscribe(
        data => {
          this.refreshList();
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteMaterial(val1: string): void {
    this.materialService.delete(val1)
      .subscribe(
        data => {
          this.refreshList();
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveMaterial(material: Material, index: number): void {
    this.currentMaterial = material;
    this.currentIndex = index
  }

  refreshList(): void {
    this.retrieveMaterials();
  }

}
