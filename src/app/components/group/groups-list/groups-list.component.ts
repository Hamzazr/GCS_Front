import { Component, Input, OnInit } from '@angular/core';
import { GroupsService } from '../../../services/groups.service';
import { Router } from '@angular/router';
import { Group } from '../../../models/group.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Student } from '../../../models/student.model';


@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrl: './groups-list.component.scss'
})
export class GroupsListComponent implements OnInit {
  groups!: Group[];

  
  isVisible : boolean = false;

  constructor(private router : Router, private modalService: NzModalService, private groupsService: GroupsService) { }

  ngOnInit(): void {
    this.retrieveCours()
  }

  getStudentListContent(ss: Student[]): string {
    console.log("ss,", ss)
    return `
      <ul>
        ${ss.map(s => `<li>${s.firstName}  ${s.lastName}</li>`).join('')}
      </ul>
    `;
  }

  showModal(group: Group): void {
    const modal = this.modalService.create({
      nzTitle: 'Student List',
      nzContent: this.getStudentListContent(group.students ?? []),
      nzClosable: true,
      // nzComponentParams: {
      //   students: group.students ?? []
      // },
      nzOnOk: () => console.log('OK')
    ,
  
    });
  }


  showEditCour(id: number): void{
    this.router.navigate(['/EditC', id]);
  }

  retrieveCours(): void{
    this.groupsService.getAllCours()
      .subscribe({
        next: (data) => {
          this.groups = data;
          console.log("",this.groups)
        },
        error: (e) => console.error(e)
      });
  }

  deleteCours(id: number): void {
    this.groupsService.deleteCours(id)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.retrieveCours();
        },
        error: (e) => console.error(e)
      });
  }
  
}
