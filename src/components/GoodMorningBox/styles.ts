import { CSSProperties } from "react";

const container = (imgUrl: string): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundImage: `url(${imgUrl})`,
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

const ctaContainer: CSSProperties = {
  display: "flex",
  alignSelf: "flex-end",
  justifyContent: "center",
};

const text: CSSProperties = {
  textShadow: "1px 1px 5px rgba(0,0,0,1)",
};

const button: CSSProperties = {
  cursor: "pointer",
};

const editButton: CSSProperties = {
  ...button,
  marginRight: "5px",
};

export const useStyles = (imgUrl: string) => ({
  container: container(imgUrl),
  ctaContainer,
  text,
  button,
  editButton,
});
