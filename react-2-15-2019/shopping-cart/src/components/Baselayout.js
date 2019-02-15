import React from 'react';
import {Link} from 'react-router-dom'

class Baselayout extends React.Component {

    render() {
        return (
            <div>
                header
                <table>
                    <tbody>
                    <tr>
                        <td style={{width: 300}}>
                            Menu Items

                            <ul>
                                <li>
                                    <Link to='/' >Home</Link>
                                </li>
                            </ul>
                        </td>
                        <td>
                            Content
                            {this.props.children}
                        </td>
                    </tr>
                    </tbody>
                </table>    
                <br />
                footer
            </div>
        );
    }
}




export default Baselayout
