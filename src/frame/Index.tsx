import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import {Table} from "antd";
import './App.css';

ReactDOM.render(<App mykey={7}/>,document.getElementById("root1"));




const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: '40%',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: '30%',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];

var data :Array<any>;
data = [{
  key: 1,
  name: 'John Brown sr.',
  age: 60,
  address: 'New York No. 1 Lake Park',
  children: [{
    key: 11,
    name: 'John Brown',
    age: 42,
    address: 'New York No. 2 Lake Park',
  }, {
    key: 12,
    name: 'John Brown jr.',
    age: 30,
    address: 'New York No. 3 Lake Park',
    children: [{
      key: 121,
      name: 'Jimmy Brown',
      age: 16,
      address: 'New York No. 3 Lake Park',
    }],
  }, {
    key: 13,
    name: 'Jim Green sr.',
    age: 72,
    address: 'London No. 1 Lake Park',
    children: [{
      key: 131,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 2 Lake Park',
      children: [{
        key: 1311,
        name: 'Jim Green jr.',
        age: 25,
        address: 'London No. 3 Lake Park',
      }, {
        key: 1312,
        name: 'Jimmy Green sr.',
        age: 18,
        address: 'London No. 4 Lake Park',
      }],
    }],
  }],
}, {
  key: 2,
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

ReactDOM.render(
  <Table columns={columns} rowSelection={rowSelection} dataSource={data} />
, document.getElementById("root"));



// console.log("hello world");
// interface APPProps{
//   cat:number,
//   txt?:string
// }
// class APP extends React.Component<APPProps,any>{
//   public static defaultProps:Partial<APPProps> = {
//     txt:"some string"
//   }
//   render(){
//     return (
//       <div>
//         <h1>cat: {this.props.cat}</h1>
//         <h1>txt: {this.props.txt}</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<APP cat={5} />,document.getElementById("root1"));
