


export const booksFilter=(arr,word)=>{
    if(word)
    return arr.filter(item=>item.title.includes(word))
    else{
            return arr
    }
}