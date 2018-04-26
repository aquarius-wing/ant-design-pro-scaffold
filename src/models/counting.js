export default {
  namespace: 'counting',

  state: {
    count: 0,
  },

  effects: {
    *addBtnClick(_, {  put ,select}) {
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
        }
      });
    },
  },

  reducers: {
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
