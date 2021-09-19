/* eslint-disable linebreak-style */
import { axiosClient, uploadClient } from './base';

export const getFiles = (projectId) => axiosClient.get(`files/?project_id=${projectId}`);
export const getFile = (id) => axiosClient.get(`files/${id}`);
export const deleteFile = (id) => axiosClient.delete(`files/${id}`);

export const uploadFile = (file, projectId) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('project_id', projectId);

  return uploadClient.post('files/', formData);
};
