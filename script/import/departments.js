import Departments from '../export/departments.js';

var depart01 = new Departments();
var list01 = new Departments();
var list02 = new Departments();
var list03 = new Departments();
var list04 = new Departments();
var list05 = new Departments();

depart01.setHeading("Eye Treatments");
list01.setlist("Qualified Doctors");
list02.setlist("24×7 Emergency Services");
list03.setlist("General Medical");
list04.setlist("Feel like Home Services");
list05.setlist("Easy and Affordable Billing");

var list_arr = [list01,list02,list03,list04,list05];


document.querySelector('.department').innerHTML+=`
     <div class="container">
	       <div class="row">
                 <h5 class="text-center">We Are The</h5>
                  <h6 class="text-center"><strong>Best Our Departments Centers</strong></h6>
		          <div class="col-md-6">
				        <div class="my_department">
						    <h1>${depart01.getHeading()}</h1>
						     <ul class="nav"></ul>
						</div>
                    </div>
                        <div class="col-md-6">
							 <div class="slide_img">
								   <img src="${depart01.SlideImage('images/eye_treatment.jpg')}" class="img-thumbnail">
							 </div>
				       </div>
                  
			</div>
	 </div>
`; 

for(var i in list_arr){
	document.querySelector('.my_department>ul').innerHTML+=`
	  <li><a><i class="fa fa-check" style="font-size:24px"></i> ${list_arr[i].getlist()}</a></li>
	`;
}

document.querySelector('.department01').innerHTML+=`
     <div class="container">
	       <div class="row">
               
		          <div class="col-md-6">
				        <div class="my_department secondDepartment">
						    <h2>${depart01.Head("Child Care")}</h2>
						     <ul class="nav"></ul>
						</div>
                    </div>
                        <div class="col-md-6">
							 <div class="slide_img">
								   <img src="${depart01.SlideImage('images/child_care.jpg')}" class="img-thumbnail">
							 </div>
				       </div>
                  
			</div>
	 </div>
`; 
for(var i in list_arr){
	document.querySelector('.secondDepartment>ul').innerHTML+=`
	  <li><a><i class="fa fa-check" style="font-size:24px"></i> ${list_arr[i].getlist()}</a></li>
	`;
}
