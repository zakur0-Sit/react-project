import "./reset_password.css";
import Header from "../../components/header/header";
import { useState } from "react";

function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }
        
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Password reset successful");
            setIsSuccess(true);
        }
    };

    return (
        <div className="reset-password-container">
            <Header />
            
            <div className="reset-password-card">
                {isSuccess ? (
                    <div className="success-message">
                        <h1>Password Updated!</h1>
                        <p>Your password has been successfully updated.</p>
                        <a href="/login" className="login-link">Return to Login</a>
                    </div>
                ) : (
                    <>
                        <div className="reset-password-header">
                            <h1>Create New Password</h1>
                            <p className="instructions">Your new password must be different from previous used passwords.</p>
                        </div>
                        
                        <form className="reset-password-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="password">New Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter new password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={errors.password ? "error" : ""}
                                />
                                {errors.password && <span className="error-message">{errors.password}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={errors.confirmPassword ? "error" : ""}
                                />
                                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                            </div>
                            
                            <div className="password-requirements">
                                <p>Password requirements:</p>
                                <ul>
                                    <li className={password.length >= 8 ? "met" : ""}>At least 8 characters</li>
                                    <li className={/[A-Z]/.test(password) ? "met" : ""}>At least one uppercase letter</li>
                                    <li className={/[0-9]/.test(password) ? "met" : ""}>At least one number</li>
                                </ul>
                            </div>
                            
                            <button type="submit" className="reset-button">
                                Reset Password
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default ResetPassword;