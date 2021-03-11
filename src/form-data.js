 /**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
 import './shared-styles.js';
 import '@polymer/paper-input/paper-input.js';
 import '@polymer/paper-button/paper-button.js';
 import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
 import '@polymer/iron-input/iron-input.js';
 import '@polymer/app-route/app-location.js';
 import '@polymer/app-route/app-route.js';
 import './nav-page.js';
 
 class FormData extends PolymerElement {
   static get template() {
     return html`
       <style include="shared-styles">
         
         :host {
           display: block;
           padding: 10px;
         }
         .card {
         margin: 130px 190px 90px 100px;   
         width:100px;
         padding: 30px;
         color: #777575;
         border-radius: 15px;
         background-color: white;
         box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
       }
         #Register{
           width:600px;
           margin:250px;
           margin-top:50px;
           margin-bottom:50px;
           margin-left:160px;
           color:black;
           }
         span{
         padding:15px;
       }
        paper-button{
       color:white;
       background-color:black;
         } 
        .logo{
             color:Black;
             font-size:50px; 
           }
       app-header {
           color: white;
           background-color: var(--app-primary-color);
         }
         a{
             text-decoration:none;
             color:white;
           }
         @media (max-width:768px){
             .wrapper{
               margin-top:30%;
             }
             h1{
               font-size:10px;
             }
             app-toolbar{
               font-size:15px;
               margin-top:25px;
               padding:50px;
             }
             #Register{
               width:200px;
               height:450px;
               margin-left:50px;
               font-size:10px;
 
             }
             .custom{
               width:150px;
             }   
           }
           :host {
            display: block;
  
            padding: 10px;
          }   
          .content-table {
             border-collapse: collapse;
             margin: 25px 0;
             font-size: 14px;
             width: 50%;
            
             overflow: hidden;
             margin-top:50px;
            margin-left:400px;
             
           }
          .content-table thead tr {
             background-color:grey;
             color: white;
            
           }
           
           .content-table th,
           .content-table td {
             padding: 20px 10px;
             text-align:center;
           }
           
           .content-table tbody tr {
             border-bottom: 1px solid #dddddd;
           }
           
           .content-table tbody {
             background-color: #f3f3f3;
           }
           
           .content-table tbody {
             border-bottom: 2px solid #009879;
           }
           @media screen and (max-width: 600px) {
             
             .content-table {
               border-collapse: collapse;
               margin:35px 0px;
               font-size: 13px;
               width: 98%;
               border-radius: 5px 5px 0 0;
               overflow: hidden;
               margin-top:50px;
              
             }
             .content-table th,
             .content-table td {
               padding: 20px 0px;
               text-align:center;
             }
             
           }
           </style>
           <nav-page></nav-page> 
   <style is="custom-style">
     .custom-parent {
       font-size: 12px;
     }
     paper-input.custom:hover {
       border: 1px solid #29B6F6;
     }
     paper-input.custom {
       margin-bottom: 14px;
       --primary-text-color: #01579B;
       --paper-input-container-color: black;
       --paper-input-container-focus-color: black;
       --paper-input-container-invalid-color: black;
       border: 1px solid #BDBDBD;
       border-radius: 5px;
 
       /* Reset some defaults */
       --paper-input-container: { padding: 0;};
       --paper-input-container-underline: { display: none; height: 0;};
       --paper-input-container-underline-focus: { display: none; };
 
       /* New custom styles */
       --paper-input-container-input: {
         box-sizing: border-box;
         font-size: inherit;
         padding: 4px;
       };
       --paper-input-container-input-focus: {
         background: rgba(0, 0, 0, 0.1);
       };
       --paper-input-container-input-invalid: {
         background: rgba(255, 0, 0, 0.3);
       };
       --paper-input-container-label: {
         top: -8px;
         left: 4px;
         background: white;
         padding: 2px;
         font-weight: bold;
       };
       --paper-input-container-label-floating: {
         width: auto;
       };
     }
   </style>
 
 
 
 <app-location route="{{route}}"></app-location>
 
 <!----------------navigation---------------------->
 
          
 <!---------------------------Form ----------------->      
 <center>
       <div class="card" id="Register">
         <center><h1>Employee Register</h1></center>
            <br>     
            <paper-input always-float-label label="Name" value="{{username}}" auto-validate pattern="[a-zA-Z]*" error-message="Enter valid details" char-counter maxlength="10" ></paper-input>
            <paper-input always-float-label label="Designation" value="{{designation}}" auto-validate pattern="[a-zA-Z]*" error-message="Enter valid details" char-counter maxlength="10" ></paper-input>
            <paper-input always-float-label label="Email id" value="{{email}}" auto-validate pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" error-message="Enter valid details" ></paper-input>
            <paper-input always-float-label label="mobile"  value="{{mobile}}"  auto-validate error-message="enter mobile number!" auto-validate allowed-pattern="[0-9]" maxlength="10"></paper-input>
        
         <center>
             <paper-button toggles raised class="green" on-click="register">Register</paper-button>
         </center>
       </div>
 </center>
 
 <br>
      <h1 align=center>Employee Details</h1>
      <table class="content-table">
      <thead>    
        <tr>
        <th scope="col">Employee Name</th>
        <th scope="col">Designation</th>
        <th scope="col">Email ID</th>      
        <th scope="col">Phone Number</th>
        
        </tr>
      </thead>
      <tbody>
      <template is="dom-repeat" items="{{employeeInfo}}">
              <tr>
                        <td>{{item.username}}</td>
                        <td>{{item.designation}}</td>                     
                        <td>{{item.email}}</td>
                        <td>{{item.mobile}}</td>
                        
              </tr>       
      </template>      
      </tbody>
      </table>
     `;
   }
 
 
   /* Declared properties and their corresponding attributes
   */
 static get properties() {
   return {
    username: {
         type: String,
         value: '',     
       },
       designation: {
         type: String,
         value: '',
         
       },
       email:{
         type: String,
         value: '',
         
       },
       mobile: {
         type: String,
         value: '',
         
       },
      
      
       employeeInfo: {
        type: Array
      }
 };
 }
 
 
   register(){
     if(this.username.trim() == '' || this.designation.trim() == '' || this.email.trim() == '' || this.mobile.trim() == ''){
       alert('Please enter all fields');
       return false;
     }
     //------------mail Format ---------------------//
     var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
     if (this.email.trim().match(mailformat))
     {
       // return true;
     }
     else{
       alert('Please enter valid email address');
       return false;
 
     }
         //------------number Format ---------------------//
 
      var numberFormat = /^\d{10}$/;  
       if (!this. mobile.trim().match(numberFormat)){
       alert('Please enter valid phone number');
       return false;
     }
     
    
      let employee = {
        username: this.username,
        designation: this.designation,
        email: this.email,
        mobile: this.mobile
      };
      let empInfo = []
      if (this.employeeInfo) {
        empInfo = [...this.employeeInfo, employee]
        //storing employeeInfo values to empInfo
      } else {
        empInfo = [employee]
      }
      this.set('employeeInfo', empInfo);
      this.username = null;
      this.designation = null;
      this.email = null;
      this.mobile = null;
   
  } 
 }
 
 window.customElements.define('form-data',FormData );