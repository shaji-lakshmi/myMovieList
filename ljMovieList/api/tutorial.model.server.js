module.exports = (sequelize, Sequelize) => {
    const media = sequelize.define("media", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      picName: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.INTEGER
      },
      Genre: {
        type: Sequelize.STRING
      },
      typeOfMedia: {
        type: Sequelize.STRING
      },
      Rating: {
        type: Sequelize.DOUBLE
      }
    });
  
    return media;
  };