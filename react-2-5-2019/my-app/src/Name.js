import React, {Component} from 'react';

class Name extends Component {
    
    printName(name){
        return "My name is: " + name.fName + " " + name.lName
    }
    render(){
        let userName= {fName: 'Phong', lName: 'Mach' }
     
        return(
            <div> 
                {this.printName(userName)}
            </div>
        )
    }
}

export default Name;