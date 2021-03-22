import Header from '../export/header.js';

var phone = new Header('+9176328920864','+9176328920864');
var phone01 = new Header ('+9176328920864','+9176328920864');
var email = new Header ('arthavhospital@gmail.com','arthavhospital@gmail.com');

var header_arr = [phone,phone01];

document.querySelector('header').innerHTML+=`
    <div class="container">
	      <div class="row">
		         <div class="col-md-4">
				       <div class="logo">
					         ${phone.Logo("<img src='images/logo.png' class='pad-10'>")}
					   </div>
				 </div>
				 <div class="col-md-8">
				       <div class="header_widgets">
					         <ul class="navbar-nav nav">
							     <li><a href="#"><i class="fa fa-envelope" style="font-size:24px"></i> ${email.tabName}</a></li>
							 </ul>
					   <div>
				 <div>
		  </div>
	</div>
`;

for(var i in header_arr){
	document.querySelector('.header_widgets>ul').innerHTML+=`<li><a href="tel:${header_arr[i].tabLink}"><i class="fa fa-phone" style="font-size:24px"></i> ${header_arr[i].tabName	}</a></li>`;	
}
