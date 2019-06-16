import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';



class TaskItem extends Component {
    render() {
        return (

<div class="container">
<div class="text-center">
    <h1>Bussiness Management</h1>  
</div>

<div class="row">
    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <TaskForm></TaskForm>
    </div>
    
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        
        <button type="button" class="btn btn-primary">
            <span className="fa fa-plus mr-5" >Thêm vệc làm</span>
            </button>
       <Control></Control>  
       <div className="row mt-15">
           
           <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               
               <table class="table table-bordered table-hover">
                   <thead>
                       <tr>
                           <th className="text-center">ID</th>
                           <th className="text-center">Name</th>
                           <th className="text-center">Status</th>
                           <th className="text-center">Actve</th>
                       </tr>
                   </thead>
                   <tbody>
                      
                   </tbody>
               </table>
               
               
           </div>
         </div>   
        </div>
    </div>
    
</div>

        )
    }
}
        export default TaskItem;