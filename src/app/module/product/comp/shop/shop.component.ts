import { Component, OnInit } from '@angular/core';
import Swal from'sweetalert2';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productLst:any = [
    {
      id:1,
      name:"Maceta",
      details:"mesa,dormir,economica",
      seller:"Juan Gabriel",
      cost:"1.200.000",
    },
    {
      id:2,
      name:"Tarjeta Grafica",
      details:"computador,tecnologia,avances,fuentes",
      seller:"Juan Gabriel",
      cost:"500.000",
    },
    {
      id:3,
      name:"Audifonos",
      details:"pequeños,manoslibres,alambricos",
      seller:"Pedro Escamilla",
      cost:"25.000",
    },
  ]
  myCart:any = [

  ]
  constructor() { }

  ngOnInit(): void {
    /*Swal.fire({
      icon: 'error',
      title: 'Lo sentimos',
      text: 'No te registraste bien',
      footer: 'test'
    }).then((res)=>{
      console.log("salir");
    })*/
  }
  appendElement(e:any){
    this.myCart.push(e);
  }
  removeElement(e:any){
    let myCartPos = this.myCart.map((item:any)=>item.id).indexOf(e.id);
    let delEl = true;
    this.myCart = this.myCart.filter((val:any,i:any,arr:any)=>{
      return i != myCartPos;    
    })
  }

}
