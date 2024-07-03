import { useEffect, useState } from "react";
import {
    Alert,
    Breadcrumb,
    Container,
} from "react-bootstrap";

import { useParams } from "react-router-dom";
import PaginatedMatchesKomand from "../component/paginacionMatchesKomand";
import useDataFetch from "../ajax/fetch";

export default function KalendarKomand() {
    const params = useParams();
    const [isLoaded, error, items, ajax] = useDataFetch({
        url: `teams/${params.id}/matches`,
    });
    const [_, __, its] = useDataFetch({
        url: `teams/${params.id}`,
    });
    const [to, setto] = useState("");
    const [from, setfrom] = useState("");
    function filter({ to, from }) {
        if (to && from) {
            ajax({
                url: `teams/${params.id}/matches?dateFrom=${to}&dateTo=${from}`,
            });
        }
    }
    useEffect(() => {
        filter({ to: to, from: from });
    }, [to, from]);
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
                                <>{its.name}</>
                            )}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 data-bs-theme="light">Матчи</h1>
                    <div className="ligi_date flex">
                        <div className="flex">
                            <h4>От:</h4>
                            <input
                                type="date"
                                onChange={(event) =>
                                    setto(
                                        event.target.value
                                    )
                                }
                            />
                        </div>
                        <div className="flex">
                            <h4>До:</h4>{" "}
                            <input
                                type="date"
                                onChange={(event) =>
                                    setfrom(
                                        event.target.value
                                    )
                                }
                            />
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
                            <PaginatedMatchesKomand
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
