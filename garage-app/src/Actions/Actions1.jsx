//ADD FORM
export const ADD =(title,author,postDate,postCategory,content)=>{
    return{
        type:"ADD",
        title:title,
        author:author,
        postDate:postDate,
        postCategory:postCategory,
        content:content
    };
}
//Like
export const LIKE =(id)=>{
    return{
        id:id
    };
}