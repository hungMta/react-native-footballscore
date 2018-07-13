const competition = [];

const wcReducer = (state = competition, action) => {
    console.log("wcReducer")
    console.log("action = ", action.competition)
    if(action.type === 'COMPETITION'){
        return action.competition;
    }
    return state;
}

export default wcReducer;