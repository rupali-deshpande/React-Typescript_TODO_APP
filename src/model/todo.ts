// class ToDo {
//     id:number;
//     text:string;
//     completed:boolean;
//     userId:number
//     constructor(todoText:string , todoID:number , toDovalue:boolean , todouserID:number) {
//         this.text=todoText;
//         this.completed=toDovalue;
//         this.id=todoID;
//         this.userId=todouserID

        
        
//         //this.id=new Date().toString();
//     }
// }
export interface ToDo {
    id:number;
    title:string;
    completed:boolean;
    userId:number
}
export interface newlyaddedTodo{
    id:number;
    title:string;
    completed:boolean;
    userId:number
}


