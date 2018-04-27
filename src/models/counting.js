import { fakeAccountLogin, fakeCount } from '../services/api';

export default {
  namespace: 'counting',

  state: {
    count: 0,
  },

  effects: {
    *getCount(_, { put, call }) {
      const response = yield call(fakeCount);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *addBtnClick(_, { put, select }) {
      const count = yield select(state => state.counting.count);
      yield put({
        type: 'add',
        payload: {
          count: count + 1,
        },
      });
    },
    *reduceBtnClick(_, { put, select }) {
      const count = yield select(state => state.counting.count);
      yield put({
        type: 'reduce',
        payload: {
          count: count - 1,
        },
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    add(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    reduce(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
