import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.props;

        return (
            <div className="Pokemon-card">
            <img src={image} alt={`Nome do Pokemon: ${name}`} className="Pokemon-image" />
            <p className="Pokemon-Name">
              Name:
              {' '}
              {name}
            </p>
            <p className="Pokemon-Type">
              Type:
              {' '}
              {type}
            </p>
            <p className="Pokemon-Weight">{`Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>
        );
    }
}

export default Pokemon;