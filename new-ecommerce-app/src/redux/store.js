import { createStore, combineReducers, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';


const rootReducer = combineReducers({
  cartReducer,
//   products: productsReducer,
  // Add more reducers if needed
});

const composedEnhancer =compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

const store = createStore(rootReducer,composedEnhancer);

export default store;
