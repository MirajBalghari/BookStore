import bookModul from '../modules/bookModul.js';
export const getBook =async (req, resp)=>{
    try {
        const book =await bookModul.find({});
    
        resp.status(200).json(book)

    } catch (error) {
        console.log(error)
    }
}