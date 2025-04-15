import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Паролите не съвпадат');
    }

    if (password.length < 6) {
      return setError('Паролата трябва да е поне 6 символа');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      navigate('/');
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('Този имейл вече е регистриран');
          break;
        case 'auth/invalid-email':
          setError('Невалиден имейл адрес');
          break;
        case 'auth/operation-not-allowed':
          setError('Регистрацията е временно спряна');
          break;
        case 'auth/weak-password':
          setError('Паролата е твърде слаба');
          break;
        default:
          setError('Грешка при регистрация. Моля, опитайте отново');
      }
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Регистрация</h2>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button disabled={loading} type="submit" className="auth-button">
            {loading ? 'Регистриране...' : 'Регистрирай се'}
          </button>
        </form>
        <div className="auth-links">
          Вече имаш акаунт? <Link to="/login">Влез</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup; 