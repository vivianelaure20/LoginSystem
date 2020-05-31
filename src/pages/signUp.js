import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link"
import Box from "@material-ui/core/Box"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    height: 570,
    marginTop: 10,
    marginLeft: 250,
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: 30,
  },

  login: {
    marginLeft: 50,
  },

  content: {
    marginLeft: 50,
  },

  button: {
    marginLeft: 40,
    width: 400,
  },

  account: {
    marginLeft: 200,
  },
}))

const SignUp = () => {
  const classes = useStyles()

  return (
    <>
      <Box bgcolor="primary.main" color="primary.contrastText" fullscreen p={7}>
        <CssBaseline />
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.login}>
            <Typography
              variant="h4"
              color="primary"
              component="h4"
              gutterBottom
            >
              Sign Up
            </Typography>
            <br />
            <Typography variant="h7" color="textSecondary">
              Please fill in this form to create an account
            </Typography>

            <CardContent className={classes.content}>
              <TextField id="standard-basic" label="First Name*" />
              <pre />
              <TextField id="standard-basic" label="Last Name*" />
              <pre />
              <TextField id="standard-basic" label="E-mail address*" />
              <pre />
              <TextField
                id="password"
                type="password"
                align="center"
                label="Password*"
              />

              <pre />
              <TextField
                id="password"
                type="password"
                align="center"
                label="Confirm Password*"
              />
            </CardContent>
          </CardContent>

          <CardActions>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="large"
            >
              Sign Up
            </Button>
          </CardActions>
          <CardContent className={classes.account}>
            <Link href="/" variant="h7">
              Already have an account? Sign In
            </Link>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default SignUp
