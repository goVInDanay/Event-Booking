module.exports = (sequelize, DataTypes) =>{
    const Event = sequelize.define(
        'Event',
        {
            // Model attributes are defined here
            title: {
            type: DataTypes.STRING,
            allowNull: false,
            },
            description: {
            type: DataTypes.TEXT,
            // allowNull defaults to true
            },
            date:{
                type: DataTypes.DATE,
            },
            location:{
                type: DataTypes.STRING,
            },
            totalSeats:{
                type: DataTypes.INTEGER,
            },
            availableSeats:{
                type: DataTypes.INTEGER,
            }
        }
    )
    Event.associate = models =>{
        Event.hasMany(models.Booking, {foreignKey:'eventId'});
    }
    return Event;
}