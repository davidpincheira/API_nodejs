module.exports = (sequelize, Datatype) => {
    const Users = sequelize.define('Users', {
        id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: Datatype.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    
    Users.associate = (models) => {
        //los usuarios poseen muchas tareas
        Users.hasMany(models.Tasks);
    }

    return Users;
}