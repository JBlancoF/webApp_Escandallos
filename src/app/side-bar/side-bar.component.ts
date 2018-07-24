import { Component, OnInit } from '@angular/core';
import { SideBarColorsService } from '../side-bar-colors.service';
import { Router } from '@angular/router';


@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private sideBarColorsService: SideBarColorsService,private router: Router) { 

    
  }

  ngOnInit() {
  }


  handleSubmit(){
    console.log('evento dando');
    localStorage.removeItem('idUser')  
    this.router.navigate(['/signIn'])
  }


}
