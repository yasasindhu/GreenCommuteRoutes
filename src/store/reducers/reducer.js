import jobCardDetails from '../../components/Organism/RenderJobCard/jobCardDetails'
import { SAVEJOB, ASSIGNJOBCARDDETAILS, UNSAVEJOB } from '../types';

const initialState = {
    jobsInFindJobs: [],
    jobsInSavedJobs: [],
};

const jobReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVEJOB:
            // Array.isArray(state.jobsInSavedJobs) && Array.from(state.jobsInSavedJobs).length ===0 ? [action.job] : 
            return{
                ...state,
                jobsInSavedJobs: [...state.jobsInSavedJobs, action.job],
            }
        case UNSAVEJOB:
            const temp = state.jobsInSavedJobs.filter((job) => job.id !== action.job.id);
            return{
                ...state,
                jobsInSavedJobs: temp,
            }
        case ASSIGNJOBCARDDETAILS: 
            console.log("in assign job reducer",action)
            return{
                ...state,
                jobsInFindJobs: [...state.jobsInFindJobs, ...action.job]

            }
        default:
            return state;
    }
};

export default jobReducer;