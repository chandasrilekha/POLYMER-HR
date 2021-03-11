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
import '@polymer/app-route/app-route.js';
import '@polymer/paper-button/paper-button.js';
import './nav-page.js';

class  Emp extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
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
      <app-location route="{{route}}"></app-location>
      <nav-page></nav-page>
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
      <template is="dom-repeat" items="{{employeeList}}">
              <tr>
                        <td>{{item.username}}</td>
                        <td>{{item.designation}}</td>                     
                        <td>{{item.email}}</td>
                        <td>{{item.mobile}}</td>
                        
              </tr>       
      </template>      
      </tbody>
      </table>
  
      <footer><h2 align=center>&copy copyrights @rm</h2></footer>
    `;
  }
  static get properties() {
    return {
     //-----------------------------student name------------------>
      
      
           
     employeeData: {
      type: Object,
      value: {},
      notify: true
    },
    employeeList:{
      type:Array,
      value:[],
      notify:true
    }
    };
  
  }


}

window.customElements.define('emp-data', Emp);
