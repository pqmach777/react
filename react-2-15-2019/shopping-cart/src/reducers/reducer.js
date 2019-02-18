var state =  {
    school: {
      name: "Hogwarts",
      house: {
        name: "Ravenclaw",
        points: 17
      }
    }
}
var newState = {
    ...state, // copy the state (level 0)
    school: {
      ...state.school, // copy level 1
      house: {         // replace state.school.house...
        ...state.school.house, // copy existing house properties
        points: state.school.house.points + 2  // change a property
      }
    }
}
console.log(newState)