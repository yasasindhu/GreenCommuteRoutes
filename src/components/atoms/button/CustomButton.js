import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import customtheme from "../../theme";
import { Typography  } from "@material-ui/core";
import PropTypes from 'prop-types'

const Mybutton = ({variant,text,color,onClick}) => {
  console.log({color});
  return (
    <ThemeProvider theme={customtheme}>
      <Button data-testid='button' color={color} variant={variant} onClick={onClick}>
        {text}
      </Button>
     
    </ThemeProvider>
  );
};

Mybutton.propTypes = {
  variant: PropTypes.oneOf("contained","outlined")
}

export default Mybutton;