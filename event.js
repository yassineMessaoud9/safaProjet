import { Schema, model } from 'mongoose';

const EventSchema = new Schema({
    Titre: {
        type: String,
        required: true,
    
    },
    Description: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    },
    Location: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    
    }
}, {
    timestamps: true,
});

export default model('Event', EventSchema);
