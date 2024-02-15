import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/common-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class InternshipProfileService {
  public customHeader = new Subject()
  constructor(private api: ApiService) {}
  sendInternshipProfileRequest() {
    let url = '/auth/me';
    // const form_data:any = new Object();
    return this.api.ApiCallWithLocalization('', url, 'get');
  }

  EditProfile(data:any){
    console.log(data)
    const form_data:any = new Object();
    form_data.name=data.name
    form_data.email=data.email;
    form_data.image=data.image;
    form_data.phone=data.phone;
    form_data.skills=data.skills;
    form_data.location=data.location;
    form_data.description=data.description
    form_data.dob=data.dob;
    form_data.areaOfInterest=data.areaOfInterest;
    form_data.branch=data.branch;
    form_data.gender=data.gender;
    form_data.institution=data.institution;
    form_data.semester=data.semester;
    form_data.stream=data.stream;
    let url='/auth/edit-profile'
  return this.api.ApiCallWithLocalization(form_data,url,'put')
}
uploadResume(data:any){
  console.log(data);
  const form_data:any = new Object();
  form_data.resume=data
  let url="/student/user-resume";
  return this.api.ApiCallWithLocalization(form_data,url,'post')
}
}
