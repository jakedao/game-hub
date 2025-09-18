import { Dispatch, SetStateAction } from "react";

import { EServer, TClaimForm } from "@/types/coupon";
import { Grid, MenuItem, Select, TextField } from "@mui/material";

type TOwnProps = {
  values: TClaimForm;
  setFormValues: Dispatch<SetStateAction<TClaimForm>>;
};

const ClaimForm = (props: TOwnProps) => {
  const { values, setFormValues } = props;

  const SERVER_OPTIONS = Object.keys(EServer).map((key) => ({
    label: key,
    value: EServer[key as keyof typeof EServer],
  }));

  return (
    <Grid container size={12} columnGap={4}>
      <Grid size={2}>
        <Select
          fullWidth
          label="Select server"
          value={values.server}
          onChange={(e) => {
            setFormValues((prev) => ({
              ...prev,
              server: e.target.value as EServer,
            }));
          }}
        >
          {SERVER_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid size={3}>
        <TextField
          fullWidth
          label="Enter your Hive ID"
          value={values.hiveId}
          onChange={(e) => {
            setFormValues((prev) => ({ ...prev, hiveId: e.target.value }));
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ClaimForm;
