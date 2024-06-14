import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  StyledButton,
  StyledForm,
  CardTitle,
  ErrorMessage,
  SuccessMessage,
} from "../pages/UserInfo/UserInfoElements";
import { useUpdatePassword } from "../hooks/useUpdatePassword";
import { passwordRegex } from "../config/regex";

const UpdatePassword = () => {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const {
    mutate: updatePassword,
    data: updatePasswordData,
    isLoading: updatePasswordIsLoading,
    isError: updatePasswordIsError,
    error: updatePasswordError,
  } = useUpdatePassword();

  const validateForm = () => {
    const newErrors = {};
    if (!currentPassword) 
      newErrors.currentPassword = "Current password is required!";
    else if (!passwordRegex.test(currentPassword))
      newErrors.currentPassword = "Passwords must have at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";

    if (!newPassword)
      newErrors.newPassword = "New password is required!";
    else if (!passwordRegex.test(newPassword))
      newErrors.newPassword = "Passwords must have at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";

    if (!confirmPassword)
      newErrors.confirmPassword = "New password needs to be confirmed by re-typing!";
    else if (newPassword !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdatePassword = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const updatePasswordBody = { currentPassword: currentPassword, newPassword: newPassword };

    updatePassword( updatePasswordBody );
  };

  return (
    <>
      <CardTitle>Change Password</CardTitle>
      <StyledForm>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="currentPassword">Current Password</Form.Label>
          <Form.Control
            id="currentPassword"
            type="password"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            isInvalid={!!errors.currentPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.currentPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="newPassword">New Password</Form.Label>
          <Form.Control
            id="newPassword"
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            isInvalid={!!errors.newPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.newPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
          <Form.Control
            id="confirmPassword"
            type="password"
            placeholder="Re-enter new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isInvalid={!!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <StyledButton
          variant="primary"
          type="submit"
          onClick={handleUpdatePassword}
          disabled={updatePasswordIsLoading}
        >
          Change Password
        </StyledButton>
        {updatePasswordData ? (
          <SuccessMessage>{updatePasswordData.message}</SuccessMessage>
        ) : updatePasswordIsError ? (
          <ErrorMessage>{updatePasswordError.message}</ErrorMessage>
        ) : null}
      </StyledForm>
    </>
  );
};

export default UpdatePassword;
