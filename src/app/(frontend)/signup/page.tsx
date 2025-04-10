"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import '../forms.css';

interface SignupFormData {
  email: string;
  username: string;
  password: string;
  name: string;
  uri: string;
}

interface UriData {
  username: string;
  uri: string;
}

interface SignupResponse {
  doc: {
    id: string;
    email: string;
    username: string;
  };
  errors?: Array<{ message: string }>;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    username: '',
    password: '',
    name: '',
    uri: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // First, create the user in Payload CMS
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
          name: formData.name,
        }),
        credentials: 'include',
      });

      const data: SignupResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.errors?.[0]?.message || 'Signup failed');
      }

      // Store the URI locally with the username
      const { username, uri } = formData;

      setSuccess('Account created successfully! You can now login.');
            setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Create a New Account</h2>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={2}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="uri">Database URI</label>
          <input
            type="text"
            id="uri"
            name="uri"
            value={formData.uri}
            onChange={handleChange}
            required
            placeholder="mongodb://username:password@host:port/database"
          />
          <small className="form-hint">This will be stored locally for your portfolio.</small>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
      
      <p className="auth-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignupForm;
