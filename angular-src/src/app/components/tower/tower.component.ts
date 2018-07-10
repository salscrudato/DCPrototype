import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-info',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css'
]
})
export class TowerComponent implements OnInit {

  items:any[];
  ul:UnderlyingLayer;
  towerId:number;
  tempName:string;
  tempPolicyPremium:number;
  tempFullLayerLimit:number;
  tempAttachmentPoint:number;
  showDetailsBool:boolean;
  editPolicyPremium:number;
  editId:number;
  editCarrierName:string;

  constructor(
    private router:Router,
    private dragulaService:DragulaService
  ) {
    dragulaService.drop.subscribe((value) => {
      //console.log(`drop: ${value[0]}`);
      console.log(value);
      this.onDrop(value.slice(1));
    });
  }

  ngOnInit() {
    this.items=[];
    this.towerId = 1;
    this.tempAttachmentPoint = 0;
  }

  addItem(){
    this.ul = new UnderlyingLayer(this.towerId, 'primary', this.tempName, this.tempPolicyPremium, this.tempFullLayerLimit, this.tempAttachmentPoint);
    this.towerId = this.towerId + 1;
    this.items.unshift(this.ul);
    this.tempName='';
    this.tempPolicyPremium = null;
    this.tempFullLayerLimit = null;
    const numItems = this.items.length;
    if(numItems > 1){
      this.tempAttachmentPoint = parseInt(this.items[0].attachmentPoint) + parseInt(this.items[0].fullLayerLimit);
    } else {
      this.tempAttachmentPoint = this.items[0].fullLayerLimit;
    }
  }

  showDetails(layer){
    this.showDetailsBool = true;
    this.editPolicyPremium = layer.policyPremium;
    this.editId = layer.id;
    this.editCarrierName = layer.carrier;
    console.log(layer);
  }

  editLayerDetails(){
    this.showDetailsBool = false;
    for(var i = 0; i < this.items.length; i++){
      if(this.editId == this.items[i].id){
        console.log('item id');
        console.log(this.items[i].id);
        console.log('edit item id');
        console.log(this.editId)
        this.items[i].policyPremium = this.editPolicyPremium;
      }
    }
    this.editPolicyPremium = null;
  }

  test(item){
    console.log(item);
  }

  private onDrop(args) {
    let [e, el] = args;
    //console.log(args[0].parentNode.children);
    console.log('Length');
    console.log(args[1].children.length);
    console.log('Top ID');
    console.log(args[1].children[0].id);
    //console.log(args);

  }

}

class UnderlyingLayer {
  id:string;
  type:string;
  carrier:string;
  policyPremium:number;
  fullLayerLimit:number;
  attachmentPoint:number;

  constructor(id, type, carrier, policyPremium, fullLayerLimit, attachmentPoint){
    this.id = id;
    this.type = type;
    this.carrier = carrier;
    this.policyPremium = policyPremium;
    this.fullLayerLimit = fullLayerLimit;
    this.attachmentPoint = attachmentPoint;
  }
}
