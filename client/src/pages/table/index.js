import React, { Component } from 'react';

import './styles/table.css';
import CharacterRow from './components/CharacterRow';
import loadingImage from './assets/loading.gif';

class TableView extends Component {
  constructor(props) {
    super(props);
  }

  checkData() {
    if(this.props.data !== null) {
     return (<table cellPadding="0" cellSpacing="0" className="character-table">
     <thead>
       <tr>
         <th></th>
         <th>Name</th>
         <th>Specie</th>
         <th>Status</th>
         <th>Location</th>
         <th></th>
       </tr>
     </thead>
     <tbody>
       {this.props.data.results.map((result, key) => <CharacterRow data={result} key={key} />)}
     </tbody>
    </table>)
    } else {
      return (<img className="loading" src={loadingImage} alt="Loading data"/>);
    }
  }

  render() {
    return(
      <div>
      <h2 className="character-subtitle">Table information</h2>
        {this.checkData()}
    </div>
    )
  }
}

export default TableView;