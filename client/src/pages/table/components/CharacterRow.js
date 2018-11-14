import React from 'react';

const CharacterRow = (props) => {
  console.log(props);
  return(
    <tr className="character">
      <td className="character__image"><img src={props.data.image} /></td>
      <td className="character__name">{props.data.name}</td>
      <td className="character__specie">{props.data.species}</td>
      <td className="character__status">{props.data.status}</td>
      <td className="character__location">{props.data.location.name}</td>
    </tr>
  );
}

export default CharacterRow;