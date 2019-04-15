import gql from "graphql-tag";
import { NOTE_FRAHMENT } from "./fragment";

//client는 없을경우에는 무조건 외부 http api로 인식하고 
// @client가 붙었을때는 가로채서 내부 로컬에서 돌린다.(cache)
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