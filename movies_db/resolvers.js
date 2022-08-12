import { Movie } from "./models/movie";

export const resolvers = {
    Query: {
        getAllMovies: async () => await Movie.find({}),
        getMovie: async (_, { id }) => await Movie.find(id),
    },
    Mutation: {
        addMovie: async (_, { id, image_url}) => {
            const newMovie = new Movie({ id: id, image_url: image_url});
            await newMovie.save();
            return newMovie;
        },
        deleteMovie: async (_, { id }) => {
            const newMovie = await Movie.findByIdAndDelete(id);
            return newMovie;
        },
    }
};