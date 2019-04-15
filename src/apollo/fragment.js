import gql from "graphql-tag";

export const NOTE_FRAHMENT = gql`
     fragment NotePars on Note{
          id
          title
          content
     }
`;