import { ProductsComponent } from './../products/products.component';
import { DataService } from './../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProductObj: any;
  errMsg: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _dataService: DataService) { }

  ngOnInit() {
    this.newProductObj = { title: "", price: "", imgUrl: "" };
    this.errMsg = "";
  }
  goToProducts() {
    console.log('goto products func clicked');
    return this._router.navigate(['/products']);
  }
  // createNew(){
  //   this._dataService.createNew(this.newProductObj)
  //   .subscribe(
  //     (response)=>{
  //       // this.getProducts()
  //       //not working
  //       console.log('create new response hi :', response);
  //       this.errMsg = response;

  //     },
  //     (err) => { 
  //       console.log('createNew fun in new component ts :', err); 
  //       this.errMsg = err;

  //     }

  //   )
  // }

  createNew() {
    const tempObservable = this._dataService.createNew(this.newProductObj);
    tempObservable.subscribe(
      (response) => {
        console.log('res in createNew()',response);
        this.goToProducts();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
