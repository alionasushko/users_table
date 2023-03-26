import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import {
  getUsers,
  selectUsers,
  selectUsersStatus,
} from "../../store/userSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

const UsersTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const usersStatus = useAppSelector(selectUsersStatus);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 900, mx: "auto", position: "relative" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">First name</TableCell>
            <TableCell align="center">Last name</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersStatus !== "loading" &&
            users.map((user) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.firstName}
                </TableCell>
                <TableCell align="center">{user.firstName}</TableCell>
                <TableCell align="center">{user.lastName}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell align="center">
                  {user.gender ? <FemaleIcon /> : <MaleIcon />}
                </TableCell>
                <TableCell align="center">{user.age}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {usersStatus === "loading" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            py: 2,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </TableContainer>
  );
};

export default UsersTable;
