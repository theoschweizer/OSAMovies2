import { gql } from "apollo-server-express";

export const typeDefs = gql`
   type Movie {
    id: ID
    image_url: String
    id_list: [ID]
  }

  type Query {
    getAllMovies: [Movie]
    getMovie(id: ID): Movie
  }

  type Mutation {
    addMovie(id: ID, image_url: String): Movie
    deleteMovie(id: ID): Movie
  }
`;