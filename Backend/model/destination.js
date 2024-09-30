import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    imageUrl: { type: String },
    category: { type: String }
}, {
    timestamps: true
});

export default mongoose.model('Destination', destinationSchema);