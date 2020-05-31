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

import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    height: 420,
    marginTop: 50,
    marginLeft: 250,
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: 30,
  },

  login: {
    marginLeft: 50,
  },

  content: {
    textAlign: "center",
  },

  button: {
    marginTop: 20,
    marginLeft: 60,
    width: 380,
  },

  account: {
    textAlign: "center",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <Box bgcolor="primary.main" color="primary.contrastText" fullscreen p={9}>
        <SEO title="Home" />
        <CssBaseline />
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.login}>
            <Typography
              variant="h4"
              color="primary"
              component="h4"
              gutterBottom
            >
              Login
            </Typography>
          </CardContent>
          <CardContent className={classes.content}>
            <TextField id="standard-basic" label="E-mail" />

            <pre />
            <TextField
              id="password"
              type="password"
              align="center"
              label="Password"
            />
          </CardContent>

          <CardActions>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="large"
            >
              Sign In
            </Button>
          </CardActions>
          <CardContent className={classes.account}>
            <Typography variant="h6" color="textSecondary">
              Don't have an account yet?
            </Typography>
            <Link href="signUp" variant="h7">
              Create an account
            </Link>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default IndexPage
