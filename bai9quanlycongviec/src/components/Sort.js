import React, { Component } from 'react';



class Sort extends Component {
  render() {
    return (

<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
             <span className="fa fa-carot-square-o-down ml-5"></span>Sắp Xếp
          </button>
          <ul className="dropdown-menu" aria-labellady="dropdownMenu1">
            <li>
              <a role="button" className="sort-selected">
                <span className="fa fa-sort-alpha-asc pr-5">
                  Tên A-Z
          </span>
              </a>
            </li>
            <li>
              <a role="button">
                Trạng Thái Kích Hoạt
        </a>
            </li>
            <li>
              <a role="button">
                Trạng Thái Ẩn
        </a>
            </li>
          </ul>
        </div>
      </div>
    
  );
  }
}
export default Sort;