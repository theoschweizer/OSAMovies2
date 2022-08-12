import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type UserID {
    id: ID
    user_name: String
  }

  type MovieID {
    id: ID
    movie_name: String
  }

  type Query {
    getAllUsers: [UserID]
    getAllMovies: [MovieID]
    getUser(id: ID): UserID
    getMovie(id: ID): MovieID
  }

  type Mutation {
    addUser(id: ID, user_name: String): UserID
    addMovie(id: ID, movie_name: String): MovieID
    deleteUser(id: ID): UserID
    deleteMovie(id: ID): MovieID
  }
`;