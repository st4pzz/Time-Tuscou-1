import { useContext, useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import AuthContext from "../context/AuthContext";
import Cabecalho from "../components/Cabecalho";
import DashBoard from "../components/DashBoard";
import BotoesInserir from "../components/BotoesInserir";
import RegistroTransacao from "../components/RegistroTransacao";
import { Button } from "@mui/material";

function ProtectedPage() {
    const [res, setRes] = useState("");
    const api = useAxios();
    const { logoutUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/test/");
                console.log(response.data.response);
                setRes(response.data.response);
            } catch {
                setRes("Something went wrong");
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (res) {
        return (
            <div className="div-main-page">
                <Cabecalho nome={res.nome} meses={res.meses} />
                <DashBoard />
                <BotoesInserir />
                {res.transacoes.map((transacao) => {
                    return (
                        <RegistroTransacao
                            id={transacao.id}
                            amount={transacao.valor}
                            date={transacao.data}
                            description={transacao.nome}
                            category={transacao.categoria}
                        />
                    );
                })}

                <Button
                    variant="contained"
                    color="primary"
                    onClick={logoutUser}
                >
                    Log out
                </Button>
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
}

export default ProtectedPage;
