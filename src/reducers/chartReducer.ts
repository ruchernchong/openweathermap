import {
  ChartActionTypes,
  ChartState,
  SET_DATASETS,
  SET_LABELS
} from "../types/chart.types";

const initialState: ChartState = {
  datasets: [],
  labels: []
};

const chartReducer = (
  state = initialState,
  action: ChartActionTypes
): ChartState => {
  switch (action.type) {
    case SET_DATASETS:
      return { ...state, datasets: action.payload };
    case SET_LABELS:
      return { ...state, labels: action.payload };
    default:
      return state;
  }
};

export default chartReducer;
