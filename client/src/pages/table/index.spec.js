import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import TableView from'./index';
Enzyme.configure({ adapter: new Adapter() })

// const data = {
//     results: [{
//         name: 'Toxic Rick',
//         status: 'dead',
//         species: 'humanoid',
//         origin: {
//             name: 'earth',
//         },
//         location: {
//             name: 'Planet 5',
//         },
//         image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg'
//     }]
// }

describe('<TableView />', () => {
    const wrapper = shallow(<TableView />);

    it('should render a class `.local-pickup__carriers-error`', () => {
      expect(wrapper.find('.local-pickup__carriers-error'));
    });

    /* Snapshot */
    it('renders correctly', () => {
        const component = renderer.create(<TableView />);
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});