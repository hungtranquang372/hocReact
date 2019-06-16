import React, { Component } from 'react';



class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            status:false
        }
    }
    onChange=(e)=>{
     var target= e.target;
     var name= target.name;
     var value= target.value;
        this.setState({
            [name]:value
        })
    }
    onSubmit=()=>{
        console.log(this.state);
      this.props.onSubmit(this.state)  
    }
    
    render() {
        return (

            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Thêm Công Việc
                    <span className="fa fa-time-circle text-right"></span>
                    </h3>
                </div>
                <div class="panel-body">

                    <form onSubmit={this.onSubmit}>


                        <div class="form-group">
                            <label >Tên</label>
                            <input
                                type="text"
                                class="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái</label>

                        <select name="status"
                            class="form-control">
                                 value={this.state.status}
                                onChange={this.onChange}
                            <option value={true}>Kích Hoạc</option>
                            <option value={false}>Ẩn</option>
                        </select><br />
                        <div className="text-center">
                            <button type="submit" class="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Lưu</button>
                            <button type="submit" class="btn btn-danger">
                                <span className="fa fa-close mr-5"></span>Hủy</button>
                        </div>
                    </form>

                </div>
            </div>

        );
    }
}
export default TaskForm;