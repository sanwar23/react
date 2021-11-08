import React, {Component} from 'react'




const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) =>{
    console.log(props);
    const rows = props.characterData.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                {<td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>}
            </tr>
        )
    })
    
    return(
        <tbody>{rows}</tbody>
    )
}

/* const Table = (props) =>{
    const {characterData, removeCharacter } = props
    return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
      )
} */


class Table extends Component{

    componentWillReceiveProps(nextProp){
        console.log(nextProp);
        console.log('componentWillReceiveProps')
    }
  
    
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
      /*   return (
           (this.props.id !== nextProps.id) || 
           (this.state.input !== nextState.input)
        ) */
     }

    render() {
        const { characterData} = this.props;

        return(
            <table>
                <TableHeader/>
                <TableBody characterData={characterData}/>
        
      </table>
        )
    }
}

export default Table