import * as React from "react";
import { Box, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function App() {
  const [value, setValue] = React.useState(null);

  return (
    <Box
      sx={{
        p: 4,
        color: "white",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Wybierz datę"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            textField: {
              sx: {
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              },
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
