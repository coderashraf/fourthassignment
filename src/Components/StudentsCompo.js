import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

const StudentsCompo = () => {
  function createData(name, course, age, batch,change) {
    return { name, course, age, batch,change};
  }
  const ChangeData=(e) =>{
    console.log(e.target);
  }
  
  const rows = [
    createData('Md Ashraful Huda', 35, "MERN", "Jan",<NavLink to='#'>Edit</NavLink>),
    createData('Ravi', 23, "MERN", "Jan",<NavLink to='#'>Edit</NavLink>),
    createData('Suraj', 26, "MERN", "Jan",<NavLink to='#'>Edit</NavLink>),
    createData('Cupcake', 30,"MERN", "Jan",<NavLink to='#'>Edit</NavLink>),
    createData('Gingerbread', 36, "MERN", "Jan",<NavLink to='#'>Edit</NavLink>),
  ];
  return (
    <div id='studentCompo'>
      <div className='flex'>
        <h1>StudentsCompo</h1>
        <button>Add new student</button>
      </div>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default StudentsCompo
