import { Component } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public data: any = [];

  constructor(private service: CommonServiceService) {
    this.getPlanos();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getPlanos(){
    this.service.getPlanos().then(rs=>{
      rs.subscribe((response) => {
        console.log(response)
        this.data = response;
      });
    }).catch(err=>{
      console.log(err);
    })
  }

}
