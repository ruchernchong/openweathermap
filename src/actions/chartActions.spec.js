import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { setDatasets, setLabels } from "./chartActions";
import { SET_DATASETS, SET_LABELS } from "../types/chart.types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockDatasets = [1, 2, 3];
const mockLabels = ["A", "B", "C"];

describe("chartActions", () => {
  test("should set the datasets correctly", () => {
    const expectedActions = [
      {
        payload: mockDatasets,
        type: SET_DATASETS
      }
    ];
    const { dispatch, getActions } = mockStore({});
    dispatch(setDatasets(mockDatasets));
    expect(getActions()).toEqual(expectedActions);
  });

  test("should set the labels correctly", () => {
    const expectedActions = [
      {
        payload: mockLabels,
        type: SET_LABELS
      }
    ];
    const { dispatch, getActions } = mockStore({});
    dispatch(setLabels(mockLabels));
    expect(getActions()).toEqual(expectedActions);
  });
});
