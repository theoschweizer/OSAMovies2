import { UserID } from "./models/userid";
import { MovieID } from "./models/movieid";

export const resolvers = {
    Query: {
        getAllUsers: async () => await UserID.find({}),
        getAllMovies: async () => await MovieID.find({}),
        getUser: async (_, { id }) => await UserID.find(id),
        getMovie: async (_, { id }) => await MovieID.find(id),
    },
    Mutation: {
        addUser: async ({ id, user_name }) => {
            const newUserID = new UserID({ id: id, user_name: user_name });
            await newUserIDsave();
            return newUserID;
        },
        addMovie: async ({ id, movie_name }) => {
            const newMovieID = new MovieID({ id: id, movie_name: movie_name });
            await newMovieID.save();
            return newMovieID;
        },
        deleteUser: async (_, { id }) => {
            const newUserID = await UserID.findByIdAndDelete(id);
            return newUserID;
        },
        deleteMovie: async (_, { id }) => {
            const newMovieID = await MovieID.findByIdAndDelete(id);
            return newMovieID;
        },
    }
};