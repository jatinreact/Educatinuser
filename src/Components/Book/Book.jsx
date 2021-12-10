import React, {
    useState
  } from 'react'
  
  import { Grid } from "@material-ui/core";
  import jsPDF from 'jspdf';
  
  
  const Book = () => {
  
    const details = [{ id: 1, chapter: "Physics", level: 1, type: "Long Question", book: "Physics", Question: "An object of mass 0.2kg execut....", answer: "A", solution: "Explanation" },
    { id: 2, chapter: "Physics", level: 2, type: "Short Question", book: "Physics", Question: "An object of mass 0.2kg execut....", answer: "A", solution: "Explanation" },
    { id: 3, chapter: "Chemistry", level: 3, type: "Long Question", book: "Physics", Question: "An object of mass 0.2kg execut....", answer: "A", solution: "Explanation" },
    { id: 4, chapter: "Maths", level: 4, type: "MCQ", book: "chemistry", Question: "An object of mass 0.2kg execut....", answer: "A", solution: "Explanation" },
    { id: 4, chapter: "Physics", level: 5, type: "Long Question", book: "Physics", Question: "An object of mass 0.2kg execut....", answer: "A", solution: "Explanation" },
    ]
  
  
    const [chapter, setchapter] = useState("");
    const finalDetail = details.filter((e) => {
      return (
        e.chapter.toLowerCase().indexOf(chapter.toLowerCase()) != -1
  
      )
  
    })

    const [book, setbook] = useState("");
    const bookdetail =details.filter((e) =>{
        return(
            e.book.toLowerCase().indexOf(book.toLowerCase()) != -1

        )
       
    
    })
  
 
  
  
   
  
  
  
    return (
      <>
  
  
        <Grid item md={4}>
          <div className="d-flex">
            <span className="p-2"><i class="fa fa-search"></i></span>
            <span><input type="text"
              class="form-control"
              placeholder="Search by Book Name"
              // value={chapter}
              // onChange={(e) => {
              //   setchapter(e.target.value)
              // }}
              value={book}
              onChange={(e) => {
                setbook(e.target.value)
              }}
            /></span>
          </div></Grid>
        <div className="content_table">
  
  
          <table class="table">
            <thead class="thead-dark">
  
              <tr>
                <th scope="col">S.NO.</th>
                <th scope="col">Chapter</th>
                <th scope="col">Level</th>
                <th scope="col">Ques. Type</th>
                <th scope="col">Book</th>
                <th scope="col">Quesestion</th>
                <th scope="col">Answer</th>
                <th scope="col">Solution</th>
                <th scope="col">Download</th>
              </tr>
            </thead>
            <tbody>
              {bookdetail > 0 ? bookdetail.slice() : bookdetail.map((item, index) => (
  
  
  
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.chapter}</td>
                  <td>{item.level}</td>
                  <td>{item.type}</td>
                  <td>{item.book}</td>
                  <td>{item.Question}</td>
                  <td>{item.answer}</td>
                  <td>({item.solution}</td>
  
                  <td className="text-center"><i class="fa fa-download" ></i></td>
  
                </tr>
  
  
              ))}
  
  
  
  
  
  
            </tbody>
          </table>
  
  
  
        </div>
  
      </>
    )
  }
  
  export default Book
  