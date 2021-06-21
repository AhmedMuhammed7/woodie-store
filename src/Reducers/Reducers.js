export const SET = "SET";
export const REMOVE = "REMOVE";
export const ACTIVATE = "ACTIVATE";
export const ADMINISTRATION = "ADMINISTRATION";
export const MODIFAY = "MODIFAY";
export const PUSH = "PUSH";

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case SET:
      return action.payload;
    case REMOVE: {
      let result = [...state];
      let index = result.indexOf(
        result.filter((item) => item._id === action.payload.id)[0]
      );
      result.splice(index, 1);
      return result;
    }
    case ACTIVATE: {
      const result = [...state];
      const elem = result.filter(
        (item) => item._id === action.payload.id
      )[0];
      let index = result.indexOf(elem);
      elem.isActive = elem.isActive ? false : true;
      result.splice(index, 1, elem);
      return result;
    }
    case ADMINISTRATION: {
      const result = [...state];
      const elem = result.filter(
        (item) => item.customId === action.payload.id
      )[0];
      let index = result.indexOf(elem);
      elem.admin = elem.admin ? false : true;
      result.splice(index, 1, elem);
      return result;
    }
    default:
      return state;
  }
};

//cart reducer
export const CartReducer = (state, action) => {
  switch (action.type) {
    case SET:
      return action.payload;
    case MODIFAY: {
      if (!action.payload.data.message && !action.payload.data.deletedCount) {
        let result = [...state];
        result[action.payload.index] = action.payload.data;
        return result;
      } else return state;
    }
    case REMOVE: {
      let result = [...state];
      result.splice(action.payload.index, 1);
      return result;
    }
    case PUSH:
      const result = [...state];
      result.push(action.payload)
      return result;
    default:
      return state;
  }
};
