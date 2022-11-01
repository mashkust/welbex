import { FC } from "react";
import { ITableRow } from "./App";

interface TableProps {
   tableRows: ITableRow[]
}

const Table:FC<TableProps> = ({tableRows}) => {
     return <table style={{ border: "1px solid black", width: "100%",padding: '10px',  borderCollapse: 'collapse'}}>
        <thead >
           <tr> 
              <td style={{ border: "1px solid black"}}>Дата</td>
              <td style={{ border: "1px solid black"}}>Название</td>
              <td style={{ border: "1px solid black"}}>Количество</td>
              <td style={{ border: "1px solid black"}}>Расстояние</td>
           </tr>
        </thead>
        <tbody >
          {
            tableRows.map((item: ITableRow) =>  
             <tr key={item.id} style={{height: "70px"}}>
                  <td style={{ border: "1px solid black"}}>{item.date}</td>
                  <td style={{ border: "1px solid black"}}>{item.name}</td>
                  <td style={{ border: "1px solid black"}}>{item.count}</td>
                  <td style={{ border: "1px solid black"}}>{item.distance}</td> 
               </tr>
            )
          }
        </tbody>
     </table>;
}

export default Table;