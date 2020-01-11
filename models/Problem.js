'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var problemSchema = Schema( {
  courseId: {type:ObjectId,index:true},
  psetId: {type:ObjectId,index:true},
  description: String,
  problemText: String,
  points: Number,
  rubric: String,
  pendingReviews: mongoose.Schema.Types.Mixed,
  createdAt: Date,
} );
/*
  pendingReviews is a list of JSON objects of the form:
   {answerId,reviewerId,timeSent}
  before saving changes we need to run the command:
    problem.markModified(pendingReviews)
  or Mongoose won't update the change...
*/

module.exports = mongoose.model( 'Problem', problemSchema );
