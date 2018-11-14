import React from 'react';

import './styles/table.css';
import CharacterRow from './components/CharacterRow';

const TableView = (props) => {
  return(
    <div>
      <h2 className="character-subtitle">Table information</h2>
      <table cellPadding="0" cellSpacing="0" className="character-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Specie</th>
            <th>Status</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {props.data != null ? props.data.results.map((result, key) => <CharacterRow data={result} key={key} />):null}
        </tbody>
      </table>
    </div>
  )
}

export default TableView;