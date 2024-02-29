import { SET_DATASETS, SET_LABELS } from "../types/chart.types";

export const setDatasets = <T extends object>(datasets: T[]) => ({
  type: SET_DATASETS,
  payload: datasets
});

export const setLabels = (labels: string[]) => ({
  type: SET_LABELS,
  payload: labels
});

export default { setDatasets, setLabels };
