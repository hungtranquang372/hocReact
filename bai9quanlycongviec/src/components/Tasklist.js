import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';



class Tasklist extends Component {
    render() {
        return (



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
                    <tr>
                        <td> </td>
                        <td>
                        <input    
                            type="text"
                            className="form-control"
                            name="filter-name"
                        />
                            </td>
                        <td>
                            
                            <select 
                            name="flterStatus"  
                            class="form-control" >
                                <option value={-1}>Tắt</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kich Hoạt</option>
                            </select>
                            
                            </td>    
                            <td> </td>
                    </tr>
                    <tr>
                    <td> 1</td>
                    <td>Học Angular </td>
                    <td className="text-center">
                        <span className="label label-danger">Kich Hoạt</span>
                         </td>
                         <td className="text-center">
                            
                            <button type="button" class="btn btn-warning">
                                button</button>
                            
                         </td>
                    </tr>
                </tbody>
            </table>
               
               
           
          
        
    
    


        )
    }
}
export default Tasklist;