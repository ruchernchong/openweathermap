import { SET_DATASETS, SET_LABELS } from "../types/chart.types";

export const setDatasets = datasets => ({
  type: SET_DATASETS,
  payload: datasets
});

export const setLabels = labels => ({
  type: SET_LABELS,
  payload: labels
});

export default { setDatasets, setLabels };
