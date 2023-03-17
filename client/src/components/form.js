import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import { Snackbar } from "@mui/material";
import M from "materialize-css";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Divider,
  CardHeader,
  Box,
  Button,
  Container,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#F0F0F0",
    borderRadius: "10px",
    border: "1px solid #CCC",
  },
  inputField: {
    marginBottom: "20px",
  },
  selectField: {
    minWidth: "200px",
    marginBottom: "20px",
  },
  button: {
    marginTop: "20px",
  },
  formContainer: {
    margin: "0 auto",
    padding: theme.spacing(2),
    maxWidth: 600,
    align: "center",
  },
  formInput: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    marginTop: theme.spacing(2),
  },
}));

const Form = () => {
  const classes = useStyles();
  const [noParticipant, setnoParticipant] = React.useState("");
  const [name1, setName1] = React.useState("");
  const [name2, setName2] = React.useState("");
  const [clgname, setClgname] = React.useState("");
  const [item, setItem] = React.useState("");

  // const handleNumParticipantsChange = (event) => {
  //   setnoParticipant(event.target.value);
  // };

  // const handleFullNameChange = (event) => {
  //   setName1(event.target.value);
  // };
  // const handleFullNameChange1 = (event) => {
  //   setName2(event.target.value);
  // };

  // const handleCollegeNameChange = (event) => {
  //   setClgname(event.target.value);
  // };

  // const handleItemNameChange = (event) => {
  //   setItem(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Your submit logic here
  //   fetch("/register", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       noParticipant,
  //       name1,
  //       name2,
  //       clgname,
  //       item,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.error) {
  //         M.toast({
  //           html: data.error,
  //           classes: "#ffd600 yellow accent-4 ",
  //         });
  //       } else {
  //         console.log("User details:", data.user); // log the user data to the console
  //         M.toast({
  //           html: data.message,
  //           classes: "#33691e light-green darken-4",
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // // postData = () => {

  // // };

  // return (
  //   <Card>
  //     <CardHeader
  //       subheader="The information can be edited"
  //       title="Create sales person"
  //     />{" "}
  //     <div className={classes.formContainer}>
  //       <Typography variant="h5" component="h4" gutterBottom>
  //         Sign Up Form
  //       </Typography>
  //       <Divider />
  //       <form className={classes.form} onSubmit={handleSubmit}>
  //         <FormControl className={classes.selectField}>
  //           <InputLabel id="Number of Participants">
  //             Number of Participants
  //           </InputLabel>
  //           <Select
  //             labelId="Number of Participants"
  //             id="Number of Participants"
  //             value={noParticipant}
  //             onChange={handleNumParticipantsChange}
  //           >
  //             <MenuItem value={"Item 1"}> 1</MenuItem>
  //             <MenuItem value={"Item 2"}> 2</MenuItem>
  //           </Select>
  //         </FormControl>
  //         {/* <TextField
  //       required
  //       label="Number of Participants"
  //       className={classes.inputField}
  //       value={numParticipants}
  //       onChange={handleNumParticipantsChange}
  //     /> */}
  //         <TextField
  //           required
  //           label="Participient 1"
  //           className={classes.inputField}
  //           value={name1}
  //           onChange={handleFullNameChange}
  //         />
  //         <TextField
  //           required
  //           label="Participient  2"
  //           className={classes.inputField}
  //           value={name2}
  //           onChange={handleFullNameChange1}
  //         />
  //         <TextField
  //           required
  //           label="College Name"
  //           className={classes.inputField}
  //           value={clgname}
  //           onChange={handleCollegeNameChange}
  //         />
  //         <FormControl className={classes.selectField}>
  //           <InputLabel id="item-name-label">Item Name</InputLabel>
  //           <Select
  //             labelId="item-name-label"
  //             id="item-name"
  //             value={item}
  //             onChange={handleItemNameChange}
  //           >
  //             <MenuItem value={"Item 1"}>Item 1</MenuItem>
  //             <MenuItem value={"Item 2"}>Item 2</MenuItem>
  //             <MenuItem value={"Item 3"}>Item 3</MenuItem>
  //           </Select>
  //         </FormControl>
  //         <Button
  //           variant="contained"
  //           color="primary"
  //           type="submit"
  //           className={classes.button}
  //         >
  //           Submit
  //         </Button>
  //       </form>
  //     </div>
  //   </Card>
  // );
  const PostData = () => {
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        noParticipant,
        name1,
        name2,
        clgname,
        item,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({
            html: data.error,
            classes: "#ffd600 yellow accent-4 ",
          });
        } else {
          console.log("User details:", data.user); // log the user data to the console
          M.toast({
            html: data.message,
            classes: "#33691e light-green darken-4",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {" "}
      <div className="box">
        <h4>rules </h4>
        <form>
          <ul></ul>
          <li>this is only for the the game</li>
        </form>
      </div>
      <Box
        component=""
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form>
            <Box sx={{ my: 10 }}>
              <Typography color="textPrimary" variant="h4">
                sign up
              </Typography>
            </Box>
            <Box width="100%">
              {" "}
              <FormControl fullWidth>
                <InputLabel fullWidth id="Number of Participants">
                  Number of Participants
                </InputLabel>

                <Select
                  margin="normal"
                  labelId="Number of Participants"
                  variant="outlined"
                  id="noParticipant"
                  value={noParticipant}
                  onChange={(e) => {
                    setnoParticipant(e.target.value);
                  }}
                  style={{ width: "100%" }} // Add this line
                >
                  <MenuItem value={"Item 1"}> 1</MenuItem>
                  <MenuItem value={"Item 2"}> 2</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* <TextField
              fullWidth
              label="full_name"
              margin="normal"
              name="full_name"
              type="text"
              variant="outlined"
              value={noParticipant}
              onChange={(e) => {
                setnoParticipant(e.target.value);
              }}
            ></TextField> */}
            <TextField
              fullWidth
              label="name1"
              margin="normal"
              name="name1"
              required
              variant="outlined"
              value={name1}
              onChange={(e) => {
                setName1(e.target.value);
              }}
            ></TextField>
            <TextField
              fullWidth
              label="name2"
              margin="normal"
              name="name2"
              variant="outlined"
              value={name2}
              onChange={(e) => {
                setName2(e.target.value);
              }}
            ></TextField>
            <TextField
              fullWidth
              label="clgname"
              margin="normal"
              name="clgname"
              variant="outlined"
              value={clgname}
              onChange={(e) => {
                setClgname(e.target.value);
              }}
            ></TextField>
            <TextField
              fullWidth
              label="item"
              margin="normal"
              name="item"
              variant="outlined"
              value={item}
              onChange={(e) => {
                setItem(e.target.value);
              }}
            ></TextField>

            <Box sx={{ py: 2 }}>
              {" "}
              <Button
                color="primary"
                fullWidth
                size="large"
                variant="contained"
                type="submit"
                onClick={(e) => PostData(e.preventDefault())}
              >
                signup
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Form;
