module.exports = (sequelize, Datatype) => {
    const Tasks = sequelize.define('Tasks', {
        id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        title: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: Datatype.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    
    Tasks.associate = (models) => {
        //las tareas pertenecen a un usuario
        Tasks.belongsTo(models.Users);
    }

    return Tasks;
}