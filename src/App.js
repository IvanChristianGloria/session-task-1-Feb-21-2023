import React, { Component } from 'react'
import Display from './Display'
import pic_1 from './img/img-1.png'
import pic_2 from './img/img-2.jfif'
import pic_3 from './img/img-3.jpg'

class App extends Component {
  
  state = {
    id: 0,
    employees:[
    {
      id : 1,
      name : 'Ivan Christian Gloria',
      age : 24,
      dob : 'April 08, 1998',
      salary : '1,000,000',
      designation : 'Developer',
      image : pic_1,
      department : 'IT'
    },
    {
      id : 2,
      name : 'Mark Zuckerberg',
      age : 38,
      dob : 'May 14, 1984',
      salary : '20,000',
      designation : 'CEO',
      image : pic_2,
      department : 'Facebook'
    },
    {
      id : 3,
      name : 'Bill Gates',
      age : 67,
      dob : 'October 28, 1955',
      salary : '22,000',
      designation : 'CEO',
      image : pic_3,
      department : 'Microsoft'
    }
  ]}

  render() {
    return (
      <div>
        <p>
        </p>
        <Display d={this.state.employees} />
      </div>
    )
  }
}

export default App