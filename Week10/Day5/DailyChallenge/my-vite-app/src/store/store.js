import { createStore, combineReducers } from 'redux';
import categoryReducer from '../redux/categoryReducer';

   const rootReducer = combineReducers({
       categories: categoryReducer,
       // ... other reducers
   });

   const store = createStore(rootReducer);

   export default store;