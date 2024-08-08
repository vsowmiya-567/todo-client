export const validation = (data)=>{
    const errors ={}

    if(data.title === '')
        return errors.title = 'Title is required'
    if(data.description === '')
        return errors.description = 'Description is required'
    return errors;

}