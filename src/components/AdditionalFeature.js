import React from 'react';
import { connect } from 'react-redux';
import { AddItem, RemoveItem} from './actions/car';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={AddItem(props.feature.id)}className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
function mapStateToProps(store) {
  return {
      car: store.car,
      additionalFeatures: store.additionalFeatures
  }
}

const mapDispatchToProps = {
  AddItem,
  RemoveItem
}
export default connect(mapStateToProps,mapDispatchToProps)(AdditionalFeature);
