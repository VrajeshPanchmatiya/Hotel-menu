import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import Menu from "../Menu.json";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./Hotel.style";
import { useDispatch, useSelector } from "react-redux";
import { orderAction } from "../Actions/orderAction";
import { addItemAction } from "../Actions/addItemAction";
import { removeItemAction } from "../Actions/removeItemAction";
const HotelMenu = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  // Min Quantity added when user click on add button
  var quantity = 1;
  // Total Bill Initial Value
  var total = 0;
  // order is onClick event for dispatch
  const order = (item) => {
    dispatch(orderAction(item.name, item.price, quantity, item.price));
  };
  // useSelector for fetching data of cart
  const list = useSelector((state) => {
    return state.data;
  });
  // forEach to calculate grand total
  list.forEach(({ price }) => {
    return (total += price);
  });
  // Hotel Menu Render
  return (
    <div>
      <Grid item container className={classes.gridBackground}>
        <Grid item lg={12}>
          <Typography className={classes.Header}>
            <u>Hotel GreenLand</u>
          </Typography>
        </Grid>
        {/* Hotel Menu With Price and Decription */}
        <Grid item lg={8}>
          {Menu.menu.map(({ name, items }) => {
            return (
              <Paper className={classes.paper}>
                <Paper>
                  <Typography className={classes.ItemName}>{name}</Typography>
                </Paper>
                <Paper>
                  {items.map(({ name, description, price }) => {
                    return (
                      <List>
                        <ListItem>
                          <ListItemText
                            primary={name}
                            secondary={description}
                          />
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => order({ name, description, price })}
                          >
                            {price} Rs <AddIcon />
                          </Button>
                        </ListItem>
                        <Divider />
                      </List>
                    );
                  })}
                </Paper>
              </Paper>
            );
          })}
        </Grid>
        {/* Cart Values with price and Quantity */}
        <Grid item lg={4}>
          <Paper className={classes.orderlist}>
            <Paper>
              <Typography className={classes.order}>Your Order</Typography>
            </Paper>
            <List>
              {list.map(({ name, price, quantity, productprice }) => {
                return (
                  <Grid item>
                    <ListItem>
                      <Grid item lg={1}>
                        <AddIcon
                          onClick={() => {
                            dispatch(
                              addItemAction(name, price, quantity, productprice)
                            );
                          }}
                        />
                      </Grid>
                      <Grid item lg={1}>
                        {quantity}
                      </Grid>
                      <Grid item lg={1}>
                        <RemoveIcon
                          onClick={() => {
                            dispatch(
                              removeItemAction(
                                name,
                                price,
                                quantity,
                                productprice
                              )
                            );
                          }}
                        />
                      </Grid>

                      <Grid item lg={6}>
                        <ListItemText>{name}</ListItemText>
                      </Grid>
                      <Grid item lg={3}>
                        <ListItemText>{price}</ListItemText>
                      </Grid>
                    </ListItem>
                  </Grid>
                );
              })}
              {/* Grand Total */}
              <Card>
                <CardContent>
                  <Typography>Your Bill: {total}</Typography>
                </CardContent>
              </Card>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(useStyles)(HotelMenu);
