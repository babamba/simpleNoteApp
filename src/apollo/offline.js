import { GET_NOTES } from "./query";

// cache에 저장하는 부분

//알아야될점은 cache와 로컬스토리지가 하나가 아니라 
//캐쉬로 저장한 후 로컬스토리지에도 저장하여 해당 로컬스토리지에 저장된 값을 갖고오는것 

export const saveNotes = (cache) => {
     // resolver에서 cache를 String변환후 로컬스토리지 저장
     const {notes} = cache.readQuery({ query: GET_NOTES});
     const jsonNotes = JSON.stringify(notes);
     console.log(jsonNotes);

     try{
          localStorage.setItem("notes", jsonNotes);
     }catch(error){
          console.log(error)
     }
}

export const restoreNotes = () => {
     const notes = localStorage.getItem("notes");
     // localstring에 들어간 cache가  String 값으로 저장되어있으니 json으로 다시 파싱처리후 리턴 
     if(notes){
          try {
               const parsedNotes = JSON.parse(notes);
               console.log(parsedNotes)
               return parsedNotes;
          } catch (error) {
               console.log(error)
               return [];
          }
     }
     return [];
}