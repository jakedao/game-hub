"use client";

import instance from "@/helpers/api";
import { EStatus, ICoupon, TClaimForm, TReward } from "@/types/coupon";
import { Box, Button, TableCell } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import RewardItem from "./RewardItem";

const LIST_COUPONS: GridRowsProp<ICoupon> = [
  {
    id: "SWSA100RUSH",
    code: "SWSA100RUSH",
    rewards: { mysticScrolls: 5, crystals: 100 },
    status: EStatus.Active,
    expiry: "2024-09-30",
  },
  {
    id: "SW2025SEPJ6Z",
    code: "SW2025SEPJ6Z",
    rewards: { waterScrolls: 3, manaStone: 300000 },
    status: EStatus.Active,
    expiry: "2024-09-30",
  },
  {
    id: "GETUR5STAR",
    code: "GETUR5STAR",
    rewards: {
      manaStone: 1000000,
      energies: 100,
      fireScrolls: 5,
      summonStones: 10,
      legendaryScrolls: 20,
    },
    status: EStatus.Active,
    expiry: "2024-09-30",
  },
];

const CouponList = (formValues: TClaimForm) => {
  const { hiveId, server } = formValues;

  const onClaim = async (code: string) => {
    const userRegion = navigator.language.split("-");

    const response = await instance.post("/coupon", {
      code,
      hiveId,
      server,
      lang: userRegion[0] || "en",
      country: userRegion[1] || "EN",
    });
    alert(response.data.data.retMsg);
  };

  const columns: GridColDef<ICoupon>[] = [
    {
      field: "code",
      headerName: "Code",
      width: 200,
      align: "left",
      headerAlign: "center",
    },

    {
      field: "status",
      headerName: "Status",
      align: "center",
      width: 150,
      headerAlign: "center",
      renderCell: (params) => (
        <Box>{params.value === EStatus.Active ? "Active" : "Inactive"}</Box>
      ),
    },
    {
      field: "rewards",
      headerName: "Rewards",
      width: 400,
      flex: 1,
      align: "left",
      headerAlign: "center",
      renderCell: (params) => {
        const rewards = params.value as TReward;

        const rewardKeys = Object.keys(rewards) as (keyof TReward)[];
        if (!rewardKeys.length) return <TableCell>No Rewards</TableCell>;

        return (
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {rewardKeys.map((key) => {
              return (
                <RewardItem key={key} quantity={rewards[key]!} type={key} />
              );
            })}
          </Box>
        );
      },
    },
    {
      field: "expiry",
      headerName: "Expiry Date",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "",
      renderCell: (params) => (
        <Button
          disabled={Boolean(!formValues.hiveId)}
          variant="contained"
          onClick={() => {
            onClaim(params.row.code);
          }}
        >
          Claim
        </Button>
      ),
    },
  ];

  return (
    <DataGrid rows={LIST_COUPONS} columns={columns} rowSelection={false} />
  );
};

export default CouponList;
