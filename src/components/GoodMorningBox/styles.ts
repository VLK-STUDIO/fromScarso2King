import { CSSProperties } from "react";

export const useStyles = (
  imgUrl: string
): Record<"container" | "ctaContainer" | "editButton", CSSProperties> => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundImage: `url(${imgUrl})`,
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  ctaContainer: {
    display: "flex",
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  editButton: {
    marginRight: "5px",
  },
});
