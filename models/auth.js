module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define('auth' , {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updateAt: DataTypes.DATE,
        allowNull: false
    }, {
        tableName: 'auth'
    });

    return Auth;
}