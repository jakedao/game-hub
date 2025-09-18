"use client";

import { Grid, List, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

import { HEADER_HEIGHT } from "@/constants/config";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Marketplace", path: "/market" },
    { name: "Coupons", path: "/coupons" },
  ];

  return (
    <Grid
      container
      size={12}
      height={HEADER_HEIGHT}
      justifyContent="space-between"
      alignItems="center"
      paddingX={2}
      position="sticky"
      bgcolor="#312014"
    >
      <Grid>
        <Image src="/images/logo.png" alt="main_logo" width={40} height={40} />
      </Grid>
      <List sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        {navLinks.map((l) => (
          <Link key={l.name} href={l.path}>
            <ListItemButton
              selected={l.path === pathname}
              sx={{
                "&.Mui-selected": {
                  fontStyle: "italic",
                  borderBottom: "2px solid #FEF5D5",
                },
              }}
            >
              <ListItemText>{l.name.toUpperCase()}</ListItemText>
            </ListItemButton>
          </Link>
        ))}
        <ListItemText />
      </List>

      <Grid>USER PANEL</Grid>
    </Grid>
  );
};
export default Header;
