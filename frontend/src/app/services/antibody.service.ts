import { ANTIBODYS_BY_SEARCH_URL, ANTIBODYS_URL, ANTIBODYS_TAGS_URL, ANTIBODYS_BY_TAG_URL, ANTIBODY_BY_ID_URL } from './../shared/constants/urls';
import { Observable } from 'rxjs';
import { sample_antibody, sample_tags } from '../../data';
import { Antibody } from '../shared/models/antibody';
import { Injectable } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AntibodyService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Antibody[]> {
    return this.http.get<Antibody[]>(ANTIBODYS_URL);
  }
  getAllantibodiesBySearchTerm(searchTerm: string) {
    return this.http.get<Antibody[]>(ANTIBODYS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(ANTIBODYS_TAGS_URL);
  }
  getAllAntibodiesByTag(tag: string): Observable<Antibody[]>{
    return tag == "All" ?
    this.getAll():
    this.http.get<Antibody[]>(ANTIBODYS_BY_TAG_URL + tag);
  }
  getAntibodyById(antibodyId: string): Observable<Antibody>{
    //?? because previous sentence are not defined
    return this.http.get<Antibody>(ANTIBODY_BY_ID_URL + antibodyId);
  }
}
