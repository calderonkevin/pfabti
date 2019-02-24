import { Component, OnInit, TemplateRef } from '@angular/core';
//import {AngularPrint } from './lib/angular-print';
import { GLOBAL } from './services/global';
import { LoginService } from './services/login.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastrService } from 'ngx-toastr'

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  providers: [LoginService]
})
export class CatalogComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _loginService: LoginService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {
    this.title = "Identificate";
    this.verproductos();
  }
  modalRef: BsModalRef;
  modalTitle: string;
  modalCodpro: string;
  modalPunit: number;
  identity: any;  
  loading = false;
  jsonImpresion: string;

  config = {
    animated: false,
    keyboard: false,
    ignoreBackdropClick: true
  };

  ngOnInit() {
    this.identity = this._loginService.getIdentity();    
    //this.invoiceCab = [{'codcli':'5','coddir':'0001','codper':'44001713','nomcom':'otros mas'}];
    this.invoiceCab = this._loginService.getDataDef();
    console.log("entra a oninit");
    console.log(this._loginService.getDataDef());
    
  }
  openModal(template: TemplateRef<any>, item: number) {
    this.modalCodpro = this.invoice[item].codpro;
    this.modalTitle = "[" + this.invoice[item].name + "]";
    this.modalPunit = this.invoice[item].price;
    this.modalRef = this.modalService.show(template, this.config);
  }

  onSubmitUpdateModal(): void {
    //this.invoice[this.modalId].cantid = this.modalPunit;
    //console.log(this.invoice);
    //var aa = this.invoice.filter(x => x.id == this.modalId);
    //aa[0].price = this.modalPunit;
    //this.invoice.push(aa);
    var tmpLista = this.invoice.filter(obj => obj.codpro == this.modalCodpro);
    console.log(tmpLista);
    for (let item of tmpLista) {
      var objIndex = this.invoice.findIndex(obj => obj.id == item.id);
      this.invoice[objIndex].price = (this.modalPunit * 1).toFixed(2);
    }

    //console.log(objIndex);

    //console.log(this.modalPunit);
    //console.log(this.modalId);
    this.modalRef.hide();
  }

  title: string = "News";
  //items:Array<string> = ["Welcome", "Welcome #2"];
  dato: string = "1";

  codFiltroCat: number = 0;
  searchValue: string = "";

  invoiceANT = [{}];

  invoiceCab = [];
  invoice = [];
  
  
  items = [];
  itemsSinFiltro = [];
  //itemsCat = [];
  itemsCat = [
    { "code": 13, "name": "BATERIA" }, { "code": 16, "name": "FLEX" }, { "code": 1, "name": "GLASS" }, { "code": 7, "name": "HERRAMIENTA" }, { "code": 10, "name": "LCD" }, { "code": 23, "name": "MAQUINA" }, { "code": 15, "name": "MARCO\/BISEL" }, { "code": 22, "name": "OTROS-REPUESTOS" }, { "code": 3, "name": "PANTALLA" }, { "code": 4, "name": "PEGAMENTO" }, { "code": 2, "name": "TACTIL" }, { "code": 14, "name": "TAPAS" }
  ];

  
  verproductos(): void {

    this._loginService.articulos().subscribe(
      response => {


        this.itemsSinFiltro = [];
        for (var key in response.data) {
          if (response.data.hasOwnProperty(key)) {
            var element = response.data[key];
            this.itemsSinFiltro.push({ 'codpro': element.codpro, 'name': element.nompro, 'price': element.precio, 'codcol': element.codcol, 'descolor': element.descolor,'talla': element.talla, 'serpro': element.serpro, 'fecvendet': element.fecvendet, 'tipart': element.tipart});

          }
        }

        /*
        this.itemsCat = [];
        for (var key in response.datacat) {
          if (response.datacat.hasOwnProperty(key)) {
            var element = response.datacat[key];
            this.itemsCat.push({'code': element.code, 'name': element.name });            
          }
        }
        */
        this.items = this.itemsSinFiltro;
        //var passed = this.items.filter(person => person.name.toLowerCase().includes('j5-2016')); 
        //const example = source.pipe(filter(person => person.age >= 30));
        //console.log("Test Value : " + passed );
        //this.items = passed;
        console.log(response);
        //this.items = response;
        console.log(this.itemsCat);

      },
      error => {
        console.log(<any>error);
        //console.log("error 454545.");
        var errorMessage = <any>error;
        if (errorMessage != null) {
          var body = JSON.parse(error._body);

        }
      })


  }

  defaultCoin = [{
    "name": "Bitcoin",
    "address": "1JSRWccK7Lef2xZmd8B41bB481iNV9pPoy",
    "symbol": "btc"
  }];

  addresses = [
    {
      "name": "First Address",
      "address": "194AJeZCav8TUFn5WBc8cELWwJQK6ViC8x",
      "symbol": "btc"
    },
    {
      "name": "Second Address",
      "address": "194AJeZCav8TUFn5WBc8cELWwJQK6ViC8xs",
      "symbol": "btc"
    },
    {
      "name": "Third Address",
      "address": "1KW8DKTgJzvgc4MaU5HUmHqT65mU8PmzqJ",
      "symbol": "btc"
    },
    {
      "name": "Fourth Address",
      "address": "1APjoxbqRykt1JDYKoK68vYiFwQfJFb25Z",
      "symbol": "btc"
    }
  ];


  addItem(codpro: string, name: string, price: number, codcol: string, descolor: string, talla: string, serpro: string, fecvendet: string ): void {
    this.dato = (parseFloat(this.dato) + 1).toString();
    this.invoice.push({ 'id': this.dato, 'codpro': codpro, 'name': name, 'cantid': 1, 'price': price, 'codcol': codcol, 'descolor': descolor, 'talla': talla, 'serpro': serpro , 'fecvendet': fecvendet });
  }

  invoItemMas(item: number): void {
    this.invoice[item].cantid = (this.invoice[item].cantid * 1) + 1;


    //var printContents = document.getElementById('dataPrint').innerHTML;
    //var originalContents = document.body.innerHTML;        
    //document.body.innerHTML = printContents;
    //window.print();
    //document.body.innerHTML = originalContents;

  }

  invoItemMenos(item: number): void {
    if (this.invoice[item].cantid > 1) {
      this.invoice[item].cantid = this.invoice[item].cantid - 1;
    }
  }

  invoItemDelete(item: number): void {
    this.invoice.splice(item, 1);
  }

  invoGetTotal(): string {
    var total = 0;
    for (let item of this.invoice) {
      total = total + (item.cantid * item.price)
    }
    return total.toFixed(2)
  }

  consoleLog(): void {
    console.log("Imprimiendoun log estático");
  }


  onSearchChange(searchValue: string) {
    this.searchValue = searchValue;

    console.log("codFiltroCat = " + this.codFiltroCat);
    console.log("searchValue = " + this.searchValue);


    this.items = this.itemsSinFiltro;
    console.log(this.items)
    if (this.codFiltroCat > 0) {
      this.items = this.items.filter(it => it.tipart == this.codFiltroCat);
    }
    console.log(this.items)
    this.items = this.items.filter(it => it.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    //const example = source.pipe(filter(person => person.age >= 30));
    //console.log("Test Value : " + passed );


  }

  onSeleccionarCat(codFiltroCat: number) {
    console.log(codFiltroCat);
    this.codFiltroCat = codFiltroCat;
    this.items = this.itemsSinFiltro;

    if (this.codFiltroCat > 0) {
      this.items = this.items.filter(it => it.tipart == this.codFiltroCat);
    }
    console.log(this.items);
    this.items = this.items.filter(it => it.name.toLowerCase().includes(this.searchValue));
    //const example = source.pipe(filter(person => person.age >= 30));
    //console.log("Test Value : " + passed );
    console.log(this.items);

  }

  logout(): void {
    localStorage.clear();
    this._router.navigate(['/']);
  }

  crearTicket(): void {
    
    console.log(" fin creando nuevo ticket");
    this.loading = true;
    this._loginService.crearTicketPos(this.invoice, this.invoiceCab).subscribe(
      response => {
        console.log(response);
        console.log("cargar link");
        
        
        if (response.r1 == 0){          
          this.toastr.success('Nuevo registro añadido exitosamente', 'Venta');
          //var impText = [{'invoicecab':this.invoiceCab, 'invoicecab2':response, 'invoice':this.invoice,}];
          var impText = [{'invoicecab':response, 'invoice':this.invoice,}];
          var dataEnconde = btoa(JSON.stringify(impText));
          console.log("convertido");
          console.log(dataEnconde);
          this.jsonImpresion = dataEnconde;
          window.open('http://localhost:8080/ver/impresiones/escpos-php-development/escpos-php-development/example/receipt.php?imp='+ dataEnconde ,'iframeImpresion');  

        } else {
          this.toastr.error(response.r4, 'Venta');  
        }

        //finaliza
        this.invoice = [];
        this.invoiceCab = this._loginService.getDataDef();
        this.loading = false;
      },
      error => {
        console.log("ERROR ERROR ERROR ERROR ERROR ERROR ERROR .");
        console.log(<any>error);
        
        var errorMessage = <any>error;
        if (errorMessage != null) {
          var body = JSON.parse(error._body);         

        }
        this.loading = false;
        this.toastr.error(<any>error, 'Venta');
      })
  }

  onSubmitImprimir(): void {
   
    console.log(this.jsonImpresion)
  }

}