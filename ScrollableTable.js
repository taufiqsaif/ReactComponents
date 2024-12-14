import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Chip,
  makeStyles,
} from "@material-ui/core";
import { icons } from "./contactList/icon";

const useStyles = makeStyles({
  tableContainer: {
    maxHeight: "400px",
    overflow: "auto",
    maxWidth: "100%",
    scrollbarWidth: "thin",
    scrollbarColor: "#CBD5E1 transparent", // Change color as needed
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#CBD5E1", // Change color as needed
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555", // Change color as needed
    },
  },
  tableCellHeader: {
    minWidth: "220px",
    border: "1px solid #ddd",
    backgroundColor: "#F5F5F6",
    fontWeight: 600,
    fontSize: "16px",
    padding: "10px 20px",
    color: "#757F8E",
    textTransform: "uppercase",
  },
  tableCellActionHeader: {
    minWidth: "360px",
    border: "1px solid #ddd",
    backgroundColor: "#F5F5F6",
    fontWeight: 600,
    fontSize: "16px",
    padding: "10px 20px",
    color: "#757F8E",
    textTransform: "uppercase",
  },
  tableCellBody: {
    border: "1px solid #ddd",
    fontWeight: 500,
    fontSize: "16px",
    padding: "10px 20px",
  },
  tableCellActionBody: {
    border: "1px solid #ddd",
    padding: "10px 20px",
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    gap: 5,
  },
  customButton: {
    borderRadius: 20,
    borderColor: "#346FEF",
    padding: "5px 10px",
    lineHeight: " 1px",
    height: "25px",
    "&:hover": {
      borderColor: "#346FEF",
      backgroundColor: "white",
    },
    "&:focus": {
      borderColor: "#346FEF",
      backgroundColor: "white",
    },
  },
  chip: {
    backgroundColor: "#005F37",
    color: "#ffffff",
    height: "25px",
  },
  customIconButton: {
    "&:hover": {
      backgroundColor: "white",
    },
    "&:focus": {
      backgroundColor: "white",
    },
  },
});
const ScrollableTable = () => {
  const classes = useStyles();

  const dummyData = [
    {
      id: "1",
      label: "John Doe",
      status: "Active",
      totalContacts: 100,
      newContacts: 20,
      updatedContacts: 15,
      relatedContacts: 10,
      duplicateEmail: 2,
      duplicatePhone: 1,
      invalidContact: 5,
    },
    {
      id: "2",
      label: "Jane Smith",
      status: "Inactive",
      totalContacts: 80,
      newContacts: 15,
      updatedContacts: 12,
      relatedContacts: 8,
      duplicateEmail: 1,
      duplicatePhone: 0,
      invalidContact: 3,
    },
    {
      id: "3",
      label: "Mike Johnson",
      status: "Pending",
      totalContacts: 120,
      newContacts: 25,
      updatedContacts: 18,
      relatedContacts: 12,
      duplicateEmail: 3,
      duplicatePhone: 2,
      invalidContact: 6,
    },
    {
      id: "4",
      label: "Emily Williams",
      status: "Active",
      totalContacts: 90,
      newContacts: 18,
      updatedContacts: 14,
      relatedContacts: 9,
      duplicateEmail: 2,
      duplicatePhone: 1,
      invalidContact: 4,
    },
    {
      id: "5",
      label: "David Brown",
      status: "Inactive",
      totalContacts: 110,
      newContacts: 22,
      updatedContacts: 16,
      relatedContacts: 11,
      duplicateEmail: 3,
      duplicatePhone: 2,
      invalidContact: 5,
    },
    {
      id: "6",
      label: "Sarah Taylor",
      status: "Pending",
      totalContacts: 130,
      newContacts: 26,
      updatedContacts: 19,
      relatedContacts: 13,
      duplicateEmail: 4,
      duplicatePhone: 3,
      invalidContact: 7,
    },
    {
      id: "7",
      label: "Kevin White",
      status: "Active",
      totalContacts: 100,
      newContacts: 20,
      updatedContacts: 15,
      relatedContacts: 10,
      duplicateEmail: 2,
      duplicatePhone: 1,
      invalidContact: 5,
    },
    {
      id: "8",
      label: "Lisa Martin",
      status: "Inactive",
      totalContacts: 80,
      newContacts: 15,
      updatedContacts: 12,
      relatedContacts: 8,
      duplicateEmail: 1,
      duplicatePhone: 0,
      invalidContact: 3,
    },
  ];

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table stickyHeader aria-label='scrollable table'>
        <TableHead style={{ background: "red" }}>
          <TableRow>
            <TableCell className={classes.tableCellHeader}>File Name</TableCell>
            <TableCell className={classes.tableCellHeader}>Status</TableCell>
            <TableCell className={classes.tableCellHeader}>Total Contacts</TableCell>
            <TableCell className={classes.tableCellHeader}>New Contacts</TableCell>
            <TableCell className={classes.tableCellHeader}>Updated Contacts</TableCell>
            <TableCell className={classes.tableCellHeader}>Related Contacts</TableCell>
            <TableCell className={classes.tableCellHeader}>Duplicate Email</TableCell>
            <TableCell className={classes.tableCellHeader}>Duplicate Phone </TableCell>
            <TableCell className={classes.tableCellHeader}>Invalid Contact</TableCell>
            <TableCell className={classes.tableCellActionHeader}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.tableCellBody}>{row.label}</TableCell>
              <TableCell className={classes.tableCellBody}>
                <Chip label={row.status} className={classes.chip} />
              </TableCell>
              <TableCell className={classes.tableCellBody}>{row.totalContacts}</TableCell>
              <TableCell className={classes.tableCellBody}>{row.newContacts}</TableCell>
              <TableCell className={classes.tableCellBody}>{row.updatedContacts}</TableCell>
              <TableCell className={classes.tableCellBody}>{row.relatedContacts}</TableCell>
              <TableCell className={classes.tableCellBody}>{row.duplicateEmail}</TableCell>
              <TableCell className={classes.tableCellBody}>{row.duplicatePhone}</TableCell>
              <TableCell className={classes.tableCellBody}>{row.invalidContact}</TableCell>
              <TableCell className={classes.tableCellActionBody}>
                <div className={classes.actionContainer}>
                  <Button
                    className={classes.customButton}
                    variant='outlined'
                    size='small'
                    onClick={() => alert(`View Log for ${row.label}`)}
                  >
                    <span style={{ color: "#346FEF" }}>View Log</span>
                  </Button>
                  <Button
                    className={classes.customButton}
                    variant='outlined'
                    color='primary'
                    size='small'
                    onClick={() => alert(`Settings Details for ${row.label}`)}
                  >
                    <span style={{ color: "#346FEF" }}>Settings Details</span>
                  </Button>
                  <IconButton
                    className={classes.customIconButton}
                    variant='outlined'
                    size='small'
                    onClick={() => alert(`Download for ${row.label}`)}
                  >
                    {icons.download}
                  </IconButton>
                  <IconButton
                    className={classes.customIconButton}
                    variant='outlined'
                    size='small'
                    onClick={() => alert(`Add for ${row.label}`)}
                  >
                    {icons.add}
                  </IconButton>
                  <IconButton
                    className={classes.customIconButton}
                    variant='outlined'
                    size='small'
                    onClick={() => alert(`Delete for ${row.label}`)}
                  >
                    {icons.delete}
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ScrollableTable;
