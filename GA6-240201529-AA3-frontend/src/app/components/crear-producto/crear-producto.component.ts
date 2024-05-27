import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto = new Producto();

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {

  }

  GuardarProducto(producto:Producto){

    if(producto.nombre == "" || producto.nombre == null){
      alert("Por favor llene el campo nombre");
    }
    else if(producto.categoria == "" || producto.categoria == null){
      alert("Por favor llene el campo categoria");
    }
    else if(producto.precio == null){
      alert("Por favor llene el campo precio");
    }
    else if(producto.stock == null){
      alert("Por favor llene el campo stock");
    }
    else{
      this.servicio.CrearProducto(this.producto).subscribe(data =>{
        alert("Producto creado");
        this.ListarPorductos();
        this.producto = new Producto();
      },(error)=>{
        alert(error);
      });      
    }


    
  }

  ListarPorductos(){
    this.servicio.ListarProductos().subscribe(data =>{
      this.servicio.productos = data;
    },(error)=>{
      alert(error);
    });
  }

}
