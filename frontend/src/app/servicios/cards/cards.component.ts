import {Component, OnInit} from "@angular/core";
import {PreusService} from "../preus.service";

interface Producto {
  productId: number;
  price: number;
  url: string;
  codi: string;
  data: Date;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  productos: Producto[] = [];

  myProtein?: Producto;
  prozis?: Producto;
  amazon?: Producto;

  constructor(private service: PreusService) {
  }

  ngOnInit(): void {

    this.service.get().subscribe(value => {

      this.myProtein = value.find((producto: any) => producto.productId === 1);
      this.prozis = value.find((producto: any) => producto.productId === 2);
      this.amazon = value.find((producto: any) => producto.productId === 3);
    })

  }

}
