import { useEffect, useState } from "react";
import {
    Alert,
    Breadcrumb,
    Card,
    Container,
    Form,
    InputGroup,
    Pagination,
} from "react-bootstrap";
import {
    REACT_APP_API_TOKEN,
    REACT_APP_BASE_URL,
} from "../ajax";
import { useParams } from "react-router-dom";
import PaginatedMatches from "../component/paginacionMatches";
import useDataFetch from "../ajax/fetch";

export default function KalendarLigi() {
    const params = useParams();
    const [isLoaded, error, items, ajax] = useDataFetch({url:`competitions/${params.id}/matches`});
    const [to, setto] = useState("");
    const [from, setfrom] = useState("");

    function filter({to,from}) {
        
       if (to && from) {
        ajax({url:`competitions/${params.id}/matches?dateFrom=${to}&dateTo=${from}`})
       }
    }
    useEffect(() => {
        filter({to:to,from:from})
    }, [to, from])
    
    return (
        <main className="ligi" data-bs-theme="dark">
            <Container className="ligi_box">
                <div className="ligi_menu">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">
                            Лиги
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {error ? (
                                <Alert
                                    variant="danger"
                                    dismissible
                                >
                                    <Alert.Heading>
                                        Ооо-пс! Возникла
                                        ошибка
                                    </Alert.Heading>
                                    <p>{String(error)}</p>
                                </Alert>
                            ) : !isLoaded ? (
                                "Загрузка"
                            ) : (
                                <>
                                    {items.competition.name}
                                </>
                            )}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 data-bs-theme="light">Матчи</h1>
                    <div className="ligi_date flex">
                        <div className="flex">
                            <h4>От:</h4>
                            
                            <input type="date" onChange={(event) =>setto(event.target.value)}/>
                        </div>
                        <div className="flex">
                            <h4>До:</h4>{" "}
                            <input type="date" onChange={(event) =>setfrom(event.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className=" ligi_content flex">
                    {error ? (
                        <Alert variant="danger" dismissible>
                            <Alert.Heading>
                                Ооо-пс! Возникла ошибка
                            </Alert.Heading>
                            <p>{String(error)}</p>
                        </Alert>
                    ) : !isLoaded ? (
                        <p>Загрузка</p>
                    ) : (
                        <>
                            <PaginatedMatches
                                items={items.matches}
                                itemsPerPage={9}
                            />
                        </>
                    )}
                </div>
            </Container>
        </main>
    );
}

