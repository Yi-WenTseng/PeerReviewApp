'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var answerSchema = Schema( {
  studentId: ObjectId,
  courseId: {type:ObjectId,index:true},
  psetId: ObjectId,
  problemId: {type:ObjectId,index:true},
  answer: String,
  reviewers: [Schema.Types.ObjectId],
  numReviews: Number,
  pendingReviewers: [Schema.Types.ObjectId],
  createdAt: Date,
} );

module.exports = mongoose.model( 'Answer', answerSchema );
