import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//custom
import { useCart } from "../../contexts/CartContextProvider";
// import { useAnimals } from "../../contexts/CartContextProvider";
import { Button, TextField, Typography } from "@mui/material";

export default function Cart() {
  const { getCart, cart, changeAnimalCount, deleteAnimalInCart } = useCart();

  // React.useEffect(() => {
  //   getCart();
  // }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
  // ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="right">Breed</StyledTableCell>
            <StyledTableCell align="right">PRICE</StyledTableCell>
            <StyledTableCell align="right">Count</StyledTableCell>
            <StyledTableCell align="right">Sub Price</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.animals.map(row => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.img} alt="" width="60" />
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.breed}</StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>
              <StyledTableCell align="right">
                <TextField
                  type="number"
                  className="count-ani"
                  value={row.count}
                  onChange={e => changeAnimalCount(e.target.value, row.item.id)}
                />
              </StyledTableCell>
              <StyledTableCell align="right">{row.subPrice}</StyledTableCell>
              <StyledTableCell align="right">
                <button
                  onClick={() => deleteAnimalInCart(row.item.id)}
                  style={{}}>
                  Delete From Cart
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Typography>
        Total Price: {cart?.totalPrice}
        <Button onClick={cartCleaner}>
          <div className="buy">Buy Now</div>
        </Button>
      </Typography>
    </TableContainer>
  );
}
