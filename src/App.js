import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { AddItem, RemoveItem} from './components/actions/car';


const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.RemoveItem(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.AddItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
function mapStateToProps(store) {
  return {
      additionalPrice: store.additionalPrice,
      car: store.car,
      additionalFeatures: store.additionalFeatures
  }
}

const mapDispatchToProps = {
  AddItem,
  RemoveItem
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
