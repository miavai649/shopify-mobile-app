export const initialState = {
  currentIndex: 0
}

interface Action {
  type: 'NEXT_SLIDE' | 'PREV_SLIDE'
  payload?: any
}

export const slideShowReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'NEXT_SLIDE':
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % action.payload
      }
    case 'PREV_SLIDE':
      return {
        ...state,
        currentIndex:
          state.currentIndex === 0 ? action.payload - 1 : state.currentIndex - 1
      }
    default:
      return state
  }
}
