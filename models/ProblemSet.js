'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var problemSetSchema = Schema( {
  courseId: ObjectId,
  name: String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'ProblemSet', problemSetSchema );
