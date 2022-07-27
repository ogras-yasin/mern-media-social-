import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
// this method is deprecated
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import memories from "./components/images/memories.png";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import useStyles from "./styles";
import { useEffect } from "react";
// .js a la fin ??
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    // <div>yo</div>
    <div>
      <Container maxidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
            <img
              className={classes.image}
              src={memories}
              alt="memories"
              height="60"
            />
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              {/* grid pour les devices grandeur des telephoens  */}
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
