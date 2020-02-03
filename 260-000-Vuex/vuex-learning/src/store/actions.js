//here we are using named exports. We can export every action function. Just repeat this process

export const updateValue = ({commit}, payload) => {
  commit('updateValue', payload);
}

/*
export const action2 = () => {};//this is just an example for a nonexistent action function exporting
*/