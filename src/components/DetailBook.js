import { useSelector,useDispatch } from "react-redux";
import { deleteBook } from "../Features/books/booksSlice";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

const DetailBook=()=>{

const [book, setBook] = useState({

    title:"",
    description:"",

});

    const books= useSelector((state)=>state.books)
    const dispatch = useDispatch();
    // const navigate=useNavigate();
    const {id}=useParams();
    const handleDelete=(id)=>{ 
        dispatch(deleteBook(id));
    }    
    

    useEffect(() => {
        if(id){
         setBook(books.find((book)=>book.id==id));
            
        }
    
    }, [id]);


    return(

        <div>
            {
                books.map(book=>(
        <div key={id}>
        <h1>{book.title}</h1>              
        <img src={book.image}></img>
        
        <button onClick={()=>handleDelete(book.id)}>Delete</button>
        </div>
                ))
            }
            
        </div>
        );
    }

export default DetailBook;