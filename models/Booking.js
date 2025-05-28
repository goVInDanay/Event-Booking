module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {

    })
    Booking.associate = models =>{
        Booking.belongsTo(models.User, {foreignKey:'userId'})
        Booking.belongsTo(models.Event, {foreignKey:'eventId'});
    }
    return Booking;
}