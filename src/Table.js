import React, {Component} from 'react'

const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () =>{
    return (
        <tbody>
            <tr>
                <td>Yash</td>
                <td>Software Engineer</td>
            </tr>
            <tr>
                <td>Virika</td>
                <td>Doctor</td>
            </tr>
        </tbody>
    )
}


class Table extends Component{
    render(){
        const {characterData} = this.props
        return (
            <table>
            <TableHeader/>
            <TableBody characterData = {characterData}/>   
            </table>
        )
    }
}

export default Table