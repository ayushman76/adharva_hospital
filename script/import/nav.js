import Nav from "../export/nav.js";

var n01 = new Nav('Home','index.html');
var n02 = new Nav('About','about.html');
var n03 = new Nav('Treatments','treatment.html');
var n04 = new Nav('Gallery','gallery,html');
var n05 = new Nav('Conatct','contact.html');

var nav_arr = [n01,n02,n03,n04,n05];

document.querySelector('nav').innerHTML+=`
     <div class="container">
	      <div class="row">
		       <div class="col-md-8">
			         <div class="myNav_item">
				          <ul class="navbar-nav nav"></ul>
				     </div>
			   </div>
			    <div class="col-md-4">
			         <div class="myNav_item">
				          <ul class="navbar-nav nav">
						       <li><a href="#contact">${n01.Button('Get Appointment')}</a></li>
						  </ul>
				     </div>
			   </div>
		  </div>
		 
		   
	 </div>
`;

for(var i in nav_arr){
	document.querySelector('.myNav_item>ul').innerHTML+=`
	   <li><a href="${nav_arr[i].tabLink}">${nav_arr[i].tabName}</a></li>
	`;
}