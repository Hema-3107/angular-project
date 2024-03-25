import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient){}
  products:any;
  getProducts(){
    this.http.get("https://fakestoreapi.com/products").subscribe(
      (allProducts:any)=>{
        this.products=allProducts
      }
    )
  }
  title:string=' ';
  price:number=0;
  description:string=' ';
  image:string='';
  category:string=' ';
  updateProduct(){
    let json={
      title:this.title,
      price:this.price,
      description:this.description,
      image:this.image,
      category:this.category
    }
    this.http.post("https://fakestoreapi.com/products",JSON.stringify(json)).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }


}
