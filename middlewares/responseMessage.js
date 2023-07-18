export const SuccessHandler = (response, status, message, data) => {
  return response.status(status).json({ type: "success", message, data });
};

export const ErrorHandler = (response, status, message) => {
  return response.status(status).json({ type: "error", message });
};
