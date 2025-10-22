import { sva } from "styled-system/css";

export const iconButtonSva = sva({
  slots: ["root", "icon"],
  base: {
    root: {
      width: "auto",
      border: "none",
      cursor: "pointer",
      borderRadius: "md",
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "center",
      _focus: {
        outline: "2px solid rgb(10, 13, 39)",
      },
    },
    icon: {
      alignItems: "center",
      display: "inline-flex",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          padding: 1,
        },
        icon: {
          width: 5,
          height: 5,
        },
      },
      md: {
        root: {
          padding: 1,
        },
        icon: {
          width: 6,
          height: 6,
        },
      },
      lg: {
        root: {
          padding: 1.5,
        },
        icon: {
          width: 7,
          height: 7,
        },
      },
    },
    variant: {
      solid: {
        root: {
          background: "linear-gradient(#3F3FFE, #5299F1)",
          _hover: {
            background: "linear-gradient(#1414FB, #2788FF)",
          },
        },
      },
      ghost: {
        root: {
          background: "transparent",
        },
        icon: {
          display: "flex",
          color: "db_white",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});
