import { FormControl, InputLabel, Select } from "@mui/material";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { motion } from "framer-motion";

export default function SelectField({
  width = "100%",
  select,
  variant,
  register,
  errors,
}) {
  const selectData = select.data;
  const menuItems = selectData.menuItems;
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl variant={variant} sx={{ minWidth: 120, width }}>
        <InputLabel id={selectData.label}>{selectData.label}</InputLabel>
        <Select
          {...register(selectData.id, select.pattern)}
          labelId={selectData.label}
          id={selectData.id}
          value={value}
          onChange={handleChange}
        >
          {menuItems.map((item) => {
            return (
              <MenuItem value={item.value} key={item.label}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <motion.p layout className="field_error">
        {errors[selectData.id]?.message}
      </motion.p>
    </div>
  );
}
