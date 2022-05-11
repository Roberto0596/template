import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MovementService } from 'src/app/services/movement.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService, 
    private router: Router,
    private route: ActivatedRoute,
    public toast: ToastrService
  ) { 
    
  }

  ngOnInit(): void {
  }

}
