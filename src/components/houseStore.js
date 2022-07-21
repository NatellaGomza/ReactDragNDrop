const initState = {
  allHouses: [
    { id: 1, name: "Дом 1", build:"false"},
    { id: 2, name: "Дом 2", build:"false"},
    { id: 3, name: "Дом 3", build:"false"},
    { id: 4, name: "Дом 4", build:"false"},
  ],
};

function houseStore(state = initState, action) {
  const item = action.payload;

  switch (action.type) {

    case "changeInitList": {
      const newState = {...state};
     const newArr = newState.allHouses.map((el) =>{
      if(el.id === item.id) {
        return item;
      }
      return el;
     })

     newState.allHouses = newArr

      return newState;
    }

    default:
      return state;
  }
}

export default houseStore;
