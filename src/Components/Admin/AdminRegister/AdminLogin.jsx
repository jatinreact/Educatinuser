import React from "react";
import { Card, TextField, Button } from "@material-ui/core";
import "../AdminRegister/AdminLogin.css";

const AdminLogin = (props) => {
  return (
    <>
      <div className="admin_card">
        <h5 className="font_change ml-2 mb-4">
          <i class="fa fa-lock"></i> Please enter your login details.
        </h5>
        <Card className="card_shadow">
          <TextField
            className="email_field m-3"
            label="User Id"
            type="text"
            autoComplete="off"
          />
          <br />
          <TextField
            className="email_field m-3"
            label="Password"
            type="password"
            autoComplete="on"
          />
          <span className="forgot_pass ml-3">Forgotten Password</span>
          <br />
          <span className="text-center mt-2">
            <Button
              color="primary"
              className="login_btn text-centre ml-2 mt-2 mb-3 mt-3"
              onClick={() => props.history.push("adminHome")}
            >
              <i class="fa fa-key pr-1"></i>Login
            </Button>
          </span>
        </Card>
      </div>
    </>
  );
};

export default AdminLogin;
