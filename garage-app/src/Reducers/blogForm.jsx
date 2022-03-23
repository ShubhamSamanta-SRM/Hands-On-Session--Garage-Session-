const initState=[
    {
        title:"T0",
        author:"A0",
        postDate:"PD0",
        postCategory:"PC0",
        content:"C0",
        id:0,
        likes:0
    },
    {
        title:"T1",
        author:"A1",
        postDate:"PD1",
        postCategory:"PC1",
        content:"C1",
        id:1,
        likes:0
    },
    {
        title:"T2",
        author:"A2",
        postDate:"PD2",
        postCategory:"PC2",
        content:"C2",
        id:2,
        likes:0
    },
    {
        title:"T3",
        author:"A3",
        postDate:"PD3",
        postCategory:"PC3",
        content:"C3",
        id:3,
        likes:0
    },
    {
        title:"T4",
        author:"A4",
        postDate:"PD4",
        postCategory:"PC4",
        content:"C4",
        id:4,
        likes:0
    },
    {
        title:"T5",
        author:"A5",
        postDate:"PD5",
        postCategory:"PC5",
        content:"C5",
        id:5,
        likes:0
    },
];

const blogForm=(state=initState,action)=>{
    let newID=1;
    if(state.length!==0){
        newID=state[state.length-1].id+1;
    }

    let index=-1;
    if(action.type==="LIKE"){
        index=state.findIndex(el=>el.id===action.id);
        state[index].likes=state[index].likes+1;
        // console.log(action.id);
    }
    if(action.type==="DIS"){
        index=state.findIndex(el=>el.id===action.id);
        state[index].likes=state[index].likes-1;
        // console.log(action.id);
    }

    switch(action.type){
        case "ADD":
            return[...state,{title:action.title,author:action.author,postDate:action.postDate,postCategory:action.postCategory,content:action.content,id:newID,likes:0}];
        case "LIKE":
            return[...state];
        case "DIS":
            return[...state];
        default:
            return [...state];
    }
}

export default blogForm;