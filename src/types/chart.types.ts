export const SET_DATASETS = "SET_DATASETS";
export const SET_LABELS = "SET_LABELS";

export interface ChartState {
  datasets: object[];
  labels: string[];
}

interface setDatasets {
  type: typeof SET_DATASETS;
  payload: object[];
}

interface setLabels {
  type: typeof SET_LABELS;
  payload: string[];
}

export type ChartActionTypes = setDatasets | setLabels;
