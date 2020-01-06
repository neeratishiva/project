import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

 d_start;
 d_end;
 m_start;
 m_end;
 w_start;
 w_end;
 y_start;
 y_end;
 noOfDaysToAdd;
 count;
 d_dueDate;
 w_dueDate;
 m_dueDate;
 y_dueDate;

  constructor() { }
  ngOnInit() {
  }

  form = new FormGroup({
    d_start: new FormControl('', Validators.required),
    d_end: new FormControl('', Validators.required),
    m_start: new FormControl('', Validators.required),
    m_end: new FormControl('', Validators.required),
    w_start: new FormControl('', Validators.required),
    w_end: new FormControl('', Validators.required),
    y_start: new FormControl('', Validators.required),
    y_end: new FormControl('', Validators.required),
     
    });

  formatDate(date) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + '-' + monthNames[monthIndex] + '-' + year;
  }
 
dailyDue(event){
  this.d_start = this.formatDate(new Date(event.target.value));
  this.d_start = new Date(this.d_start.replace(/-/g, "/"));
  
  this.d_end = this.d_start;

       if(this.d_end.getDay() === 0) {

       this.d_end.setDate(this.d_end.getDate() + 1);
       console.log(this.m_end); 
      
      }
      else if(this.d_end.getDay() === 6){

        this.d_end.setDate(this.d_end.getDate() + 2);
        console.log(this.d_end);
      
      }
      else{

            console.log(this.d_end.toLocaleDateString()); 
      
      }

    this.d_dueDate=  this.d_end.toLocaleDateString()
         
 }

  weeklyDue(event){
  
    console.log(this.formatDate(new Date(event.target.value)))
    this.w_start = this.formatDate(new Date(event.target.value));
    this.w_start = new Date(this.w_start.replace(/-/g, "/")); 
    this.w_end = new Date(), this.noOfDaysToAdd = 6, this.count = 0;
  
     if(this.w_start.getDay() != 0 && this.w_start.getDay() != 6){
        this.noOfDaysToAdd = 5;
     }
     while(this.count < this.noOfDaysToAdd){
           this.w_end = new Date(this.w_start.setDate(this.w_start.getDate() + 1));
           if(this.w_end.getDay() != 0 && this.w_end.getDay() != 6){
          this.count++;
           }
    
     }
     this.w_dueDate=  this.w_end.toLocaleDateString();
   console.log(this.w_end.toLocaleDateString())
   console.log(this.w_start)
 }

  monthlyDue(event){
  
      this.m_start = this.formatDate(new Date(event.target.value));
      this.m_start = new Date(this.m_start.replace(/-/g, "/"));
      this.m_end = new Date(), this.noOfDaysToAdd = 31, this.count = 0;

  while(this.count < this.noOfDaysToAdd){
 
    this.m_end = new Date(this.m_start.setDate(this.m_start.getDate() + 1));
    this.count++;
    if(this.m_end.getDay() === 0 ){
       this.m_end.setDate(this.m_end.getDate() + 1);
       console.log(this.m_end.toLocaleDateString()); 
    }
    else if(this.m_end.getDay() === 6){
      this.m_end.setDate(this.m_end.getDate() + 2);
      console.log(this.m_end.toLocaleDateString()); 
    }
    else{
      console.log(this.m_end.toLocaleDateString()); 
    }   
  }
  this.m_dueDate=  this.m_end.toLocaleDateString();

}

 yearlyDue(event){   
      this.y_start = this.formatDate(new Date(event.target.value));
      this.y_start = new Date(this.y_start.replace(/-/g, "/"));
      this.y_end = new Date(), this.noOfDaysToAdd =365, this.count = 0;
   while(this.count < this.noOfDaysToAdd){
        this.y_end = new Date(this.y_start.setDate(this.y_start.getDate() + 1));
        this.count++;
     if(this.y_end.getDay() === 0 ){
    
        this.y_end.setDate(this.y_end.getDate() + 1);
        console.log(this.y_end); 
     }
     else if(this.y_end.getDay() === 6){
      this.y_end.setDate(this.y_end.getDate() + 2);
        console.log(this.y_end);
     }
    else{
      console.log(this.y_end); 
    }   
   }
   this.y_dueDate=  this.y_end.toLocaleDateString();

 }




}
