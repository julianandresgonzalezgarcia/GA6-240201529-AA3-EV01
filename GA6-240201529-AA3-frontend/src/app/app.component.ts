import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';
import { Producto } from './models/producto';
import { MatDialog } from '@angular/material/dialog';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GA6-240201529-AA3-frontend';

  //productos: Producto[] = [];

  textoBusqueda:String;

  producto = new Producto();

  constructor(public servicio:ServiceService, private modal:MatDialog){}


  ngOnInit(): void {
    this.ListarProducto();
  }

  ListarProducto(){

    this.textoBusqueda = "";

    this.producto = new Producto();

    this.servicio.ListarProductos().subscribe(data =>{
      this.servicio.productos = data;
    },(error)=>{
      alert(error);   
    });
  }

  BuscarProducto(_id:any){
    this.servicio.BuscarProductoPorId(_id).subscribe(data =>{

      this.servicio.productos = [];

      this.servicio.productos[0] = data;

      this.producto = data;

    },(error)=>{
      alert(error);   
    });
  }

  ActualizarProduct(_id:any, producto:Producto){
    /*console.log(producto);*/

    if(producto.nombre == ""){
      alert("Por favor llene el campo nombre");
    }
    else if(producto.categoria == ""){
      alert("Por favor llene el campo categoria");
    }
    else if(producto.precio == null){
      alert("Por favor llene el campo precio");
    }
    else if(producto.stock == null){
      alert("Por favor llene el campo stock");
    }
    else{
      this.servicio.ActualizarProducto(_id, producto).subscribe(data =>{
        console.log(data);
        alert("Atualizado");
      },(error)=>{
        alert(error);   
      });
    }

    
  }


  EliminarProducto(_id:any){
    
    this.servicio.BorrarProducto(_id).subscribe(data =>{
      this.ListarProducto();
    },(error)=>{
      alert(error);
    });
    
  }

  ModalCrearProducto(){
    this.modal.open(CrearProductoComponent);
  }




}
