'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    title: DataTypes.STRING,
    comments: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  review.associate = function(models) {
    // associations can be defined here
  };
  return review;
};