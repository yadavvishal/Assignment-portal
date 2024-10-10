const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Assignment = require('../models/Assignment');

exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ username, password: hashedPassword });
        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAssignments = async (req, res) => {
    const adminId = req.admin.id;

    try {
        const assignments = await Assignment.find({ admin: adminId });
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.acceptAssignment = async (req, res) => {
    const { id } = req.params;

    try {
        await Assignment.findByIdAndUpdate(id, { status: 'accepted' });
        res.json({ message: 'Assignment accepted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.rejectAssignment = async (req, res) => {
    const { id } = req.params;

    try {
        await Assignment.findByIdAndUpdate(id, { status: 'rejected' });
        res.json({ message: 'Assignment rejected' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
