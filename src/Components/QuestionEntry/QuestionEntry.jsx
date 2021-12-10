import React, {
  useState
} from 'react'
import "./QuestionEntry.css"
import { Grid } from "@material-ui/core";
import jsPDF from 'jspdf';


const QuestionEntry = () => {

  const details = [{ id: 1, chapter: "Physics", level: 1, type: "Long Question", book: "Physics", Question: "An object of mass 0.2kg execut....", answer: "A", solution: "Explanation" },
  { id: 2, chapter: "Physics", level: 2, type: "Short Question", book: "Physics", Question: "An object of mass 0.2kg execut....", answer: "A", solution: "Explanation" },
  { id: 3, chapter: "Chemistry", level: 3, type: "Long Question", book: "Physics", Question: "An object of mass 0.2kg execut....", answer: "A", solution: "Explanation" },
  { id: 4, chapter: "Maths", level: 4, type: "MCQ", book: "Physics", Question: "An object of mass 0.2kg execut....", answer: "A", solution: "Explanation" },
  { id: 4, chapter: "Physics", level: 5, type: "Long Question", book: "Physics", Question: "An object of mass 0.2kg execut....", answer: "A", solution: "Explanation" },
  ]


  const [chapter, setchapter] = useState("");
  const finalDetail = details.filter((e) => {
    return (
      e.chapter.toLowerCase().indexOf(chapter.toLowerCase()) != -1

    )

  })

  // const [chapter, setchapter] = useState("");
  // const filterData = details.filter((event) => {
  //     return (
  //         event.chapter.toLowerCase().indexOf(chapter.toLowerCase()) !== -1
  //     );
  // });


  const generatePdf = (item) => {
    // console.log("temp:",item)

   let temp={
      
        id:item.id,
        chapter:item.chapter,
          level:item.level,
          type:item.type,
          book:item.book,
          Question:item.Question,
          answer:item.answer,
          solution:item.solution,
    

    }
    console.log("temp:",temp)
    

    let doc = new jsPDF('p', 'pt');

    doc.text(20, 20,temp)

    // doc.setFont('helvetica')
    // doc.setFontType('normal')
    // doc.text(20, 60, 'This is the content area.')
    // doc.addPage() // this code creates new page in pdf document
    // doc.setFont('helvetica')
    // // doc.setFontType('normal')
    doc.text(20, 100,temp)


    doc.save('sample-file.pdf')
  }


  return (
    <>


      <Grid item md={4}>
        <div className="d-flex">
          <span className="p-2"><i class="fa fa-search"></i></span>
          <span><input type="text"
            class="form-control"
            placeholder="Search by Chapter Name"
            // value={chapter}
            // onChange={(e) => {
            //   setchapter(e.target.value)
            // }}
            value={chapter}
            onChange={(e) => {
              setchapter(e.target.value)
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
            {finalDetail > 0 ? finalDetail.slice() : finalDetail.map((item, index) => (

              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.chapter}</td>
                <td>{item.level}</td>
                <td>{item.type}</td>
                <td>{item.book}</td>
                <td>{item.Question}</td>
                <td>{item.answer}</td>
                <td>({item.solution}</td>

                <td className="text-center"><i class="fa fa-download" onClick={() => generatePdf(item)}></i></td>

              </tr>


            ))}






          </tbody>
        </table>



      </div>

    </>
  )
}

export default QuestionEntry
