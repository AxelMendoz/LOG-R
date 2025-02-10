import api from '../config/axios'
import { IAuth } from '../interfaces/IAuth';

const login =(data: IAuth)=>  api.post('/auth/login', data);

const getProfile = () => api.get('/auth/profile');

const logout = () => api.post('/auth/logout');

const validateSecurityAnswer = (data: IAuth) => api.post('/auth/validate-security-answer', data);


const AuthService = {
    login, getProfile, logout, validateSecurityAnswer
}

export default AuthService;