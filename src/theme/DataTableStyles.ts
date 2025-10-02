import { NEON_PURPLE, NEON_BLUE, NEON_GREEN } from "./ColorTheme";

// =========================================================
// TABLE STYLES
// =========================================================

export const paperProps = {
  sx: {
    backgroundColor: "black",
    boxShadow: "none",
    color: NEON_BLUE,
    border: `1px solid ${NEON_PURPLE}`,
    borderRadius: "10px",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },
};

export const topToolbarProps = {
  sx: {
    border: `1px solid ${NEON_PURPLE}`,
    backgroundColor: "black",
    "& .MuiSvgIcon-root": { color: NEON_BLUE },
  },
};

export const searchTextFieldProps = {
  inputProps: { style: { color: NEON_BLUE } },
  InputProps: {
    sx: {
      "& .MuiInputBase-input": { color: NEON_BLUE + " !important" },
    },
  },
  sx: {
    "& .MuiInputBase-root": {
      backgroundColor: "black",
    },
    "& input": {
      color: NEON_BLUE + " !important",
    },
    "& input::placeholder": {
      color: NEON_BLUE + " !important",
      opacity: 0.6,
    },
    "& .MuiInputLabel-root": { color: NEON_BLUE },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: NEON_BLUE,
    },
  },
};

export const tableContainerProps = {
  sx: {
    backgroundColor: "black",
    flex: 1,
    minHeight: 0,
    overflow: "auto",
    "&::-webkit-scrollbar": { width: "8px", height: "8px" },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: NEON_PURPLE,
      borderRadius: "4px",
    },
  },
};

export const tableHeadProps = {
  sx: { backgroundColor: "black" },
};

export const tableHeadCellProps = {
  sx: {
    color: NEON_BLUE,
    fontFamily: "orbitron",
    fontSize: "1rem",
    borderBottom: `3px solid ${NEON_PURPLE}`,
    backgroundColor: "black",
    "& .MuiSvgIcon-root": { color: NEON_BLUE },
  },
};

export const tableBodyRowProps = {
  sx: {
    backgroundColor: "black",
    "&:hover": { backgroundColor: `${NEON_PURPLE}15` },
  },
};

export const tableBodyCellProps = {
  sx: {
    color: NEON_GREEN,
    fontFamily: "monospace",
    fontSize: "0.95rem",
    borderBottom: `1px solid ${NEON_PURPLE}30`,
    backgroundColor: "black",
    "& .MuiSvgIcon-root": { color: NEON_BLUE },
  },
};

export const bottomToolbarProps = {
  sx: {
    backgroundColor: "black",
    borderTop: `1px solid ${NEON_PURPLE}`,
    "& .MuiTablePagination-caption": { color: NEON_BLUE + " !important" },
    "& .MuiTablePagination-selectLabel": { color: NEON_BLUE + " !important" },
    "& .MuiTablePagination-displayedRows": {
      color: NEON_BLUE + " !important",
    },
    "& .MuiTypography-root": { color: NEON_BLUE },
    "& .MuiSelect-select": { color: NEON_BLUE },
    "& .MuiSvgIcon-root": { color: NEON_BLUE },
    "& .MuiMenu-paper": {
      backgroundColor: "black",
      "& .MuiMenuItem-root": { color: NEON_BLUE },
    },
  },
};
