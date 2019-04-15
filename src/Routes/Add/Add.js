import React from "react"
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Editor from "../../Components/Editor"

const ADD_NOTE = gql`
     mutation createNote($title: String!, $content:String!) @client {
          createNote(title:$title, content:$content){
               id
          }
     }
`;

export default class Add extends React.Component {
     render() {
       return ( 
          <Mutation mutation={ADD_NOTE}>
     
          {createNote => {
               // mutation을 가지고 나온다 mutation이 처리되기전에 체크하기위해
               this.createNote = createNote;  
               return <Editor onSave={this._onSave}/>;
          }}
          </Mutation>
       );
     }
     _onSave = (title, content) => {
          //console.log(title, content)
          const { history : { push } } = this.props;
          console.log(this.props);
          if(title !== '' && content !== ''){
               this.createNote({variables: { title , content}});
               push("/")
          }else{
               alert("field Required ")
          }
     }
   }