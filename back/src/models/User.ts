import { Table, Column, Model, DataType, Default } from 'sequelize-typescript';

@Table({
    tableName: 'usuarios'
})
class Usuario extends Model {
    @Column({
        type: DataType.STRING(100),
    })
    declare nombre: string;

    @Column({
        type: DataType.STRING(150),
    })
    declare email: string;

    @Column({
        type: DataType.STRING(150),
    })
    declare password: string;

    @Default('user')
    @Column({
        type: DataType.STRING(10),
    })
    declare role: string;
    declare echaNacimiento: string;

    // Agregar el campo de fecha de nacimiento
    @Column({
        type: DataType.DATE,
        allowNull: false,  // Asegura que no sea nulo
    })
    declare fechaNacimiento: Date;  // Fecha de nacimiento
}

export default Usuario;
