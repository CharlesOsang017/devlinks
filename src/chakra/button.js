
export const Button = {
  baseStyle: {
    borderRadius: "5px",
    fontSize: "10pt",
    padding:' 3px 5px',
    fontWeight: 600,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "#5D3FD3",
      
      _hover: {
        bg: "#5D3FD3",
      },
    },
    outline: {
      color: "#5D3FD3",
      border: "1px solid",
      borderColor: "#5D3FD3",
    },
  },
};