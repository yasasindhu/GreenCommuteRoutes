
import { SHOWSKILLS} from '../types'

const defaultLocation=[
]
const initialState = {
   activeSkills: defaultLocation
    
}

const ShowSkillsReducer = (state = initialState, action) => {
   
    switch(action.type){
        case SHOWSKILLS:
            console.log(action.location+ "this is location");
            console.log("this render one",state);
            console.log("this render two",action);
           return {
               activeSkills:action.location
           }
        default:
            return state;
    }
}

export default ShowSkillsReducer;