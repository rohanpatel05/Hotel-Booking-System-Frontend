export const nameRegex = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
export const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,16}$/;
export const phoneRegex = /^\d{10}$/;
export const streetRegex = /^[a-zA-Z0-9\s,'-]*$/;
export const cityRegex = /^[a-zA-Z\s]{1,50}$/;
export const stateRegex = /^[A-Z]{2}$/;
export const zipCodeRegex = /^\d{5}(-\d{4})?$/;
