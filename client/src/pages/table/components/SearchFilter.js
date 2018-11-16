import React, { Component } from 'react';
import PropTypes from 'prop-types';

// High Order function that return a function. Does not have access to out state.
function searchingFor(term) {
    // make sure that what we are filtering meets the condition setup here
    return x => x.name.toLowerCase().includes(term.toLowerCase()) || !term;
}

class SearchFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        onChange={this.searchHandler}
                        value={this.state.term}
                    />
                </form>
                {
                    this.props.data.filter(searchingFor(this.state.term)).map(person => (
                        <div key={person.id}>
                            <h1>{person.name}</h1>
                        </div>
                    ))
                }
            </div>
        );
    }
}

SearchFilter.propTypes = {
    data: PropTypes.instanceOf(Object),
};

SearchFilter.defaultProps = {
    data: {},
};

export default SearchFilter;
