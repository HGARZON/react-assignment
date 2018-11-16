import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/table.css';
import CharacterRow from './components/CharacterRow';
import loadingImage from './assets/loading.gif';

class TableView extends Component {
    checkData() {
        if (this.props.data !== null) {
            return (
                <table cellPadding="0" cellSpacing="0" className="character-table">
                    <thead>
                        <tr>
                            <th />
                            <th>Name</th>
                            <th>Specie</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.results.map(result =>
                                <CharacterRow data={result} key={result.name} />)
                        }
                    </tbody>
                </table>
            );
        }
        return (<img className="loading" src={loadingImage} alt="Loading data" />);
    }

    render() {
        return (
            <div>
                <h2 className="character-subtitle">Table information</h2>
                {this.checkData()}
            </div>
        );
    }
}

TableView.propTypes = {
    data: PropTypes.instanceOf(Object),
};

TableView.defaultProps = {
    data: {},
};

export default TableView;
