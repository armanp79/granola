import { connect } from 'react-redux';
import Shop from '../components/shop.jsx';
import { getProducts } from '../actions/actions.js';



const mapStateToProps = state => ({
  products: state.dbItems
});



const mapDispatchToProps = (dispatch) => (
  {
    idk: (q) => dispatch(getProducts(q)),
  }
);

const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);



//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default ShopContainer;
