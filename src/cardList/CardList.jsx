// Libraries and Packages
import React from 'react';

// Styles Files
import './cardList.styles.css';

// Components Imports
import { Card } from '../card/Card';

export const CardList = (props) => {
  return (
    <div className="grid">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};

// export default CardList;
