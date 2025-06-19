import mongoose from 'mongoose';

const filmeSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    ageRating: Number,
    director: String,
    language: String,
    synopsis: String,
    duration: Number // Será definida em Minutos!
});

const Filme = mongoose.model('Filme', filmeSchema);
export default Filme;