import React from "react";
import {Grid} from "@mui/material";
import {useAppSelector} from "app/state/hooks";
import {selectBloxx} from "domain/bloxx/state/bloxxSlice";
import {Bloxx} from "common/types/commonTypes";
import BloxxCard from "domain/bloxx/components/BloxxCard";

const BloxxView = () => {
    const {bloxx: allBloxx} = useAppSelector(selectBloxx)

    return (
        <Grid sx={{flexGrow: 1}} container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 1, md: 1}}>
            {allBloxx.map((bloxx: Bloxx) => {
                return (
                    <Grid item key={bloxx.key}>
                        <BloxxCard bloxx={bloxx}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default BloxxView