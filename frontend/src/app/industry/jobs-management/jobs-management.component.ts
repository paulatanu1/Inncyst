import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LeftMenuHandelService } from '../left-menu-handel.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common-service/api.service';
import { JobPostListService } from './jobs-management-service/job-post-list.service';
import { JobListApiService } from './posts/job-list-api.service';
import { ToastServiceService } from 'src/app/service/toast-service.service';
interface City {
  name: string;
  value: string;
}
@Component({
  selector: 'app-jobs-management',
  templateUrl: './jobs-management.component.html',
  styleUrls: ['./jobs-management.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JobsManagementComponent implements OnInit {
  postList: any = [];
  visible: boolean = false;
  status!: City[];
editedJobId!:any
  selectedStatus!: City ;

  constructor(
    private _menuHandel: LeftMenuHandelService,
    private router: Router,
    private post: JobPostListService,
    private _JobListApiService: JobListApiService,
    private _toast: ToastServiceService,
    
  ) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this._menuHandel.leftMenuActive.next(1);
    this.getJobList();
    window.scrollTo(0, 0);

    this.status = [
      { name: 'pending', value: 'NY' },
      { name: 'complete', value: 'RM' },
      { name: 'rejected', value: 'LDN' },
     

  ];
  }

  getJobList() {
    this.post.getPostList().subscribe({
      next: (res) => {
        this.postList = res.data.items;
        console.log(this.postList, this.postList.length);
      },
    });
  }

  addJobs() {
    this.router.navigate(['/industry/jobs/add-job']);
  }
  edit(id: number) {
    // alert(id)
    // console.log(data)
    this.router.navigate(['/industry/jobs/add-job'], {
      queryParams: { id: id },
    });
  }
  delete(id: any) {
    console.log(id);
    this.post.deletePortFolio(id).subscribe({
      next: (res) => {
        this.getJobList()
        this._toast.showToaster.next({
          severity: 'success',
          summary: 'success',
          detail: res.message,
        });
      },
      error: (err) => {
        this._toast.showToaster.next({
          severity: 'Error',
          summary: 'Error',
          detail: err.error.message,
        });
      },
    });
  }
  onScroll(){
    
  }
  editStatus(id:any){
    this.visible=true
   this.editedJobId=id
  
  }
  statusChange(e:any){
    this.selectedStatus=e.value.name
    console.log(this.editedJobId,this.selectedStatus)
    const formData:any = new Object()
    formData.applicationStatus=this.selectedStatus
    this.post.editStatus(formData,this.editedJobId).subscribe({
      next:(res=>{

      console.log(res)  
      this._toast.showToaster.next({
        severity: 'success',
        summary: 'success',
        detail: res.message,
      });
    
    
    }),
    error: (err) => {
      this._toast.showToaster.next({
        severity: 'Error',
        summary: 'Error',
        detail: err.error.message,
      });
    },
    })
  }

  studentList(industryId:any,id:any){
console.log(industryId,id)
this.router.navigate(['/industry/appliedStudentList'],{queryParams:{industryId:industryId,id:id}})
  }
}
