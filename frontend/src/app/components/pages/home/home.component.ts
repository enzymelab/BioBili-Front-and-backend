import { Observable } from 'rxjs';
import { AntibodyService } from '../../../services/antibody.service';
import { Antibody } from '../../../shared/models/antibody';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  antibodies: Antibody[] = [];
  constructor(private antibodyService: AntibodyService, activatedRoute: ActivatedRoute) {
    let antibodiesObservable: Observable<Antibody[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        antibodiesObservable = this.antibodyService.getAllantibodiesBySearchTerm(params.searchTerm);
      else if (params.tag)
        antibodiesObservable = this.antibodyService.getAllAntibodiesByTag(params.tag);
      else
        antibodiesObservable = antibodyService.getAll();

      antibodiesObservable.subscribe((serverAntibodies) => {
        this.antibodies = serverAntibodies;
        })
    })

  }

}
