import { Button, ButtonGroup } from "@mui/material";
import DialogForm from "./Dialog";
import { useState } from "react";

// import react
import React from "react";

export default function BotoesInserir({ adicionarTransacao }) {
    const [open, setOpen] = React.useState(false);

    // const criarTransacao = ({ amount, description, date, category }) => {
    //     adicionarTransacao({ amount, description, date, category });
    //     // Fazer request para o banco

    //     setOpen(false);
    // };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <p>Registre suas transações</p>
            <ButtonGroup
                variant="outlined"
                fullWidth
                aria-label="outlined button group"
            >
                <Button>Fatura</Button>

                <Button onClick={handleClickOpen}>Manualmente</Button>
                <DialogForm
                    open={open}
                    handleClose={handleClose}
                    adicionarTransacao={adicionarTransacao}
                />

                <Button>Extrato</Button>
            </ButtonGroup>
        </div>
    );
}
