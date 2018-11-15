import React, { Component } from 'react';

import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
class CharacterRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            data: this.props
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const {
            image,
            name,
            species, 
            status,
            location
        } = this.props.data;

        return(
            <tr className="character">
                <td className="character__image"><img src={image} /></td>
                <td className="character__name">{name}</td>
                <td className="character__specie">{species}</td>
                <td className="character__status">{status}</td>
                <td className="character__location">{location.name}</td>
                <td><button className="modalButton" onClick={this.openModal}>View details</button></td>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel={name}Modal
                    >

                    <h2 ref={subtitle => this.subtitle = subtitle}>{name}</h2>
                    <div>I am a modal</div>
                    <button onClick={this.closeModal}>close</button>
                </Modal>

            </tr>
        );
    }
}

export default CharacterRow;
