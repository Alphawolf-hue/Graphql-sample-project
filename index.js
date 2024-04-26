import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";
import { typeDefs } from "./schema.js";

const resolvers={
    Query:{
        games(){
            return db.games;
        },
        authors(){
            return db.authors;
        },
        reviews(){
            return db.reviews;
        },
        review(_,args){
            return db.reviews.find(()=>{
                return review.id===args.id
            })
        }
    }
}
const server=new ApolloServer({
   typeDefs,
   resolvers,
})

const {url} = await startStandaloneServer (server, {
    listen: {port: 4000}
})

console.log('Server ready at Port',4000)