import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public accounts:any;
  public userData:any;

  constructor(
    public router: Router,
    public toast: ToastrService) { }

  ngOnInit(): void {

  }
}
