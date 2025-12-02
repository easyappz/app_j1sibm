import { instance } from './axios';

export const createFeedback = (data) => instance.post('/api/feedback/', data);