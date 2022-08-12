import { ApolloServer, gql } from require("apollo-server-express");
import express from require("express");
import mongoose from require("mongoose");
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const movies = [
    {
        id: 'Gone Girl',
        image_url: 'https://www.imdb.com/title/tt2267998/',
        id_list: ['alldo5517', 'allendong'],
    },
    {
        id: 'Ladybird', 
        image_url: 'https://www.imdb.com/title/tt4925292/',
        id_list: ['alldo5517', 'allendong'],
    },
    {
        id: 'The Matrix', 
        image_url: 'https://www.imdb.com/title/tt0133093/',
        id_list: ['alldo5517', 'allendong'],
    },
    {
        id: 'The Hunger Games', 
        image_url: 'https://www.imdb.com/title/tt1392170/',
        id_list: ['alldo5517', 'allendong'],
    },
    {
        id: 'Interstellar', 
        image_url: 'https://www.imdb.com/title/tt0816692/',
        id_list: ['alldo5517', 'allendong'],
    },
];

const userids = [
  {
      id: 'alldo5517',
      user_name: 'Allen Dong',
  },
];

const app = express();
server.start().then((res) => {
  server.applyMiddleware({ app });
  
  // unsure what to put here
  const url = "....";
  mongoose.connect(url);
  mongoose.connection.on("connected", function () {
      console.log("Mongoose connected");
      // console.log("Mongoose connected to " + url);
  });

  app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});