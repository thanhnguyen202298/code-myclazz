import { combineReducers } from 'redux';

import entities from 'src/store/entities/reducer'
import pageFlow from 'src/store/features/pageFlow/reducer';
import project from 'src/store/features/project/reducer';

const rootReducer = combineReducers({
  entities,
  pageFlow,
  project,
});
export default rootReducer;
