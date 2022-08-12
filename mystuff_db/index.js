import { ApolloServer, gql } from require("apollo-server-express");
import express from require("express");
import mongoose from require("mongoose");
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const movieids = [
    {
        id: 'tt2267998',
        movie_name: 'Gone Girl',
    },
    {
        id: 'tt4925292',
        movie_name: 'Ladybird',
    },
    {
        id: 'tt0133093',
        movie_name: 'The Matrix',
    },
    {
        id: 'tt1392170',
        movie_name: 'The Hunger Games',
    },
    {
        id: 'tt0816692',
        movie_name: 'Interstellar',
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