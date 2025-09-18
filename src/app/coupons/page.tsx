"use client";

import { ClaimForm, CouponList } from "@/components";
import { EServer, TClaimForm } from "@/types/coupon";
import { Grid } from "@mui/material";
import { useState } from "react";

type TOwnProps = {};
const Coupons = (props: TOwnProps) => {
  const {} = props;
  const [formValues, setFormValues] = useState<TClaimForm>({
    server: EServer.ASIA,
    hiveId: "",
  });

  return (
    <Grid container flexDirection={"column"} gap={2} size={10}>
      <ClaimForm values={formValues} setFormValues={setFormValues} />
      <CouponList {...formValues} />
    </Grid>
  );
};
export default Coupons;
