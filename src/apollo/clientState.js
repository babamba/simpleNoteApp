import { NOTE_FRAHMENT } from "./fragment";
import { GET_NOTES } from "./query";

export const defaults ={
     notes:[
          {
               __typename: "Note",
               id: 1,
               title: "First",
               content: "Second"
          }
     ]
}
export const typeDefs = [
     `
          schema {
               query:Query
               mutation: Mutation
          }
          type Query {
               notes : [Note]!
               note(id:Int!): Note
          }
          type Mutation {
               createNote(title:String!, content: String!): Note
               editNote(id:String!, title:String! , content: String!) Note
          }
          type Note {
               id: Int!
               title : String!
               content: String!
          }
     `
];

export const resolvers = {
     Query : {
          note: (_, variables, { cache }) => {
               const id = cache.config.dataIdFromObject({
                 __typename: "Note",
                 id: variables.id
               });
               console.log(id);
               
               const note = cache.readFragment({fragment: NOTE_FRAHMENT, id})
               return note
               // const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id });
               // return note;
          }
     },

     Mutation : {
          createNote : (_, variables, { cache }) => {
               const {notes} = cache.readQuery({ query: GET_NOTES});
               const { title, content } = variables;
               const newNote = {
                    __typename : "Note",
                    title,
                    content,
                    id : notes.length + 1
               };
               cache.writeData({
                    data: {
                         notes: [newNote, ...notes]
                    }
               });
               return newNote;
          },
          editNote : ( _, { id, title, content }, {cache} ) => {
               const noteId = cache.config.dataIdFromObject({
                    __typename : "Note",
                    id
               });
               //console.log(noteId)
               const note = cache.readFragment({
                    fragment:NOTE_FRAHMENT, id:noteId
               });
               const updateNote = {
                    ...note,
                    title,
                    content
               }
               cache.writeData({
                    id:noteId,
                    fragment: NOTE_FRAHMENT,
                    data: updateNote
               })
               return updateNote
               //console.log(note);
          }
     }
 };