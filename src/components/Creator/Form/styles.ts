import { CSSProperties } from "react";

const boxStyle: CSSProperties = {
  borderRadius: "10px",
  backgroundImage:
    "url(https://static2-living.corriereobjects.it/wp-content/uploads/2018/11/villeroy3-660x440.jpg)",
  overflow: "hidden",
};

const buttonsContainer: CSSProperties = {
  display: "flex",
};

const buttonStyle: CSSProperties = {
  cursor: "pointer",
  backgroundColor: "#F365B5",
};

export const styles = {
  boxStyle,
  buttonStyle,
  buttonsContainer,
};
