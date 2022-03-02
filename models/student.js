module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('student' , {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        rombel: {
            type: DataTypes.STRING,
            allowNull:false
        },
        rayon: {
            type: DataTypes.STRING,
            allowNull:false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName:'students'
    });

    return Student;
}
