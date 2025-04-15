import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          setError('Потребител с този имейл не съществува');
          break;
        case 'auth/wrong-password':
          setError('Грешна парола');
          break;
        case 'auth/invalid-email':
          setError('Невалиден имейл адрес');
          break;
        case 'auth/too-many-requests':
          setError('Твърде много опити. Моля, опитайте по-късно');
          break;
        default:
          setError('Грешка при влизане. Моля, опитайте отново');
      }
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Влез</h2>
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
          <button disabled={loading} type="submit" className="auth-button">
            {loading ? 'Влизане...' : 'Влез'}
          </button>
        </form>
        <div className="auth-links">
          Нямаш акаунт? <Link to="/signup">Регистрирай се</Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 