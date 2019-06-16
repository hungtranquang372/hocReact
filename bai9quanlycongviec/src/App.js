import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/Tasklist';
import Control from './components/Control';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      tasks:[],
      isDisplayForm:false
    }
  }
  
  onSubmit = () => {
    this.setState({

    })
  }
  render() {
    return (

      <div class="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>

        </div>
        <div class="row">


          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* form */}
            <TaskForm onSubmit={this.onSubmit}></TaskForm>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5">Thêm Công Việc</span>
            </button>
            {/* Search-Sort */}
            <Control />
            {/* List */}
            <TaskList />
          </div>
        </div>



        <div class="row">

        </div>

      </div>

    );
  }
}
export default App;
