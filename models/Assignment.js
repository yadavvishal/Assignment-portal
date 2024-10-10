const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    admin: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending',
    },
});

const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;
