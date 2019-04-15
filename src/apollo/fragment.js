import gql from "graphql-tag";

export const NOTE_FRAHMENT = gql`
     fragment NoteParts on Note{
          id
          title
          content
     }
`;