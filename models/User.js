module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            // Model attributes are defined here
            email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            },
            password: {
            type: DataTypes.STRING,
            allowNull: false,
            // allowNull defaults to true
            },
            role:{
                type: DataTypes.ENUM('user', 'admin'),
                defaultValue: 'user'
            }
        }
    );
    User.assossiate = models => {
        User.hasMany(models.Booking, {foreignKey:'userId'})
    }
    return User;
}
