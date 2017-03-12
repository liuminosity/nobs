import { TOGGLE_EVENT, FETCH_FB_DATA } from '../actions/actions';
import fbData from './data/fbData.js'

const initialState = {

  showEvent: false,
  fbEventData: []
};



export default (state = initialState, action) => {


  switch(action.type) {
    case TOGGLE_EVENT:
      return {
        ...state,
        showEvent: action.showEvent
      };
    case FETCH_FB_DATA:
      return {
        ...state,
        fbEventData: fbData
      }
    default:
      return state;
  }
}
