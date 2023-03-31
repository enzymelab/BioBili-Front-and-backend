import { AntibodyService } from './../../../services/antibody.service';
import { Component } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?: Tag[];
  constructor(antibodyService: AntibodyService) {
    antibodyService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }
}
