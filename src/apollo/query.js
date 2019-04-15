import gql from "graphql-tag";
import { NOTE_FRAHMENT } from "./fragment";

export const GET_NOTES = gql`
     {
          notes @client {
               ...NoteParts
          }
     }
     ${NOTE_FRAHMENT}
`;


export const GET_NOTE = gql`
     query getNote($id: Int!){
          note(id: $id) @client{
               ...NoteParts
          }
     }
     ${NOTE_FRAHMENT}
`;