import axios from 'axios';
import { config } from './config';

const client = axios.create({
    baseURL: config.backendUrl,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    },
});
export const nclient = axios.create({
    baseURL: config.backendUrl,
    headers: {
        'Content-Type': 'application/json'
    },
});

const formDataClient = axios.create({
    baseURL: config.backendUrl,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': localStorage.getItem('token')
    },
  });

// course apis
export const createCourse = (data) => client.post('/course', data);
export const getCourse = (id) => client.get(`/course/${id}`);
export const updateCourse = (id, data) => client.patch(`/course/${id}`, data);

// faculty apis
export const getAllcourses = () => client.get('/faculty/courses');
export const addFacultyToCourse = (id, data) => client.post(`/faculty/add/${id}`, data);
export const removeFacultyFromCourse = (id, data) => client.post(`/faculty/remove/${id}`, data);

// assignment apis
export const getAllAssignments = (id) => client.get(`/assignment/${id}`);
export const createAssignment = (id, data) => client.post(`/assignment/${id}`, data);
export const addFile = (id, formdata) => formDataClient.post(`/assignment/add/${id}`, formdata);
export const getAssignmentFile = (id) => client.get(`/assignment/file/${id}`);
export const updateAssignment = (id, data) => client.patch(`/assignment/${id}`, data);

// student apis
export const getProfile = () => client.get('/student/profile');
export const joinCourse = (data) => client.post('/student/join', data);
export const getEnrolledCourses = () => client.get('/student/enrolled');
export const getTutoringCourses = () => client.get('/student/tutoring');
export const unenrollCourse = (id) => client.delete(`/student/unenroll/${id}`);

// submission apis
export const createSubmission = (id, data) => client.post(`/submission/${id}`, data);
export const submitFile = (id, formdata) => formDataClient.post(`/submission/add/${id}`, formdata);
export const getSubmissionFile = (id) => client.get(`/submission/file/${id}`);

// feedback apis
export const createFeedback = (id, data) => client.post(`/feedback/${id}`, data);
export const getFeedback = (id) => client.get(`/feedback/${id}`);
export const updateFeedback = (id, data) => client.patch(`/feedback/${id}`, data);