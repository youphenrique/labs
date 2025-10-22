import MockAdapter from 'axios-mock-adapter';
import api from '../services/api';

export default new MockAdapter(api, {
  delayResponse: process.env.NODE_ENV === 'development' ? 1000 : 0,
});
