import api from "../config/axios";
import { IUser } from "../interfaces/IUser";


const create =(data : IUser)=>  api.post('/user/create', data);

const changeStatus = (id : number, data : IUser) => api.put(`/user/changeStatus/${id}`, data);

const update = (data : IUser, id : number) => api.patch(`/user/edit/${id}`, data);

const findAll =()=> api.get('/user/all');

const deleteUser =(id : number)=>api.delete(`/user/delete/${id}`)
const UserService = {
    create, changeStatus, update, findAll, deleteUser
}

export default UserService;