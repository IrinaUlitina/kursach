import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import ReactPaginate from "react-paginate";

function ItemsLigi({ currentItems }) {
    function date(params) {
        let a = new Date(params);

        return a.toLocaleString();
    }
    function stat(params) {
        function stat(params) {
            switch (params) {
                case "FINISHED":
                    return "ЗАВЕРШОН";
                    break;
                case "SCHEDULED":
                    return "ЗАПЛАНИРОВАН";

                    break;
                case "TIMED":
                    return "РАСЧИТАННЫЙ";

                    break;
                case "LIVE":
                    return "В ЭФИРЕ";

                    break;
                case "IN_PLAY":
                    return "В ИГРЕ";

                    break;
                case "PAUSED":
                    return "ПАУЗА";

                    break;
                case "POSTPONED":
                    return "ОТЛОЖЕН";

                    break;
                case "SUSPENDED":
                    return "ПРИОСТАНОВЛЕН";

                    break;
                case "CANCELED":
                    return "ОТМЕНЁН";

                    break;
                default:
                    break;
            }
        }
    }
    return (
        <>
            {currentItems &&
                currentItems.map((item, index) => (
                    <Card
                        className=" cart_strong"
                        key={index}
                    >
                        {item.flag && (
                            <Card.Img
                                className="ligi_card_img"
                                variant="top"
                                src={item.flag}
                            />
                        )}

                        <Card.Title>
                            {date(item.utcDate)}
                        </Card.Title>
                        <Card.Text>
                            {stat(item.status)}
                        </Card.Text>
                        <div className="flex cart_strong_name">
                            <Card.Text>
                                {item.homeTeam.name}
                            </Card.Text>
                            <Card.Text>{"-"}</Card.Text>
                            <Card.Text>
                                {item.awayTeam.name}
                            </Card.Text>
                        </div>
                        {item.score.fullTime.home !==
                        null ? (
                            <Card.Text className="end">
                                {item.score.fullTime.home}:
                                {item.score.fullTime.away}(
                                {item.score.halfTime.home}:
                                {item.score.halfTime.away})(
                                {item.score.fullTime.home +
                                    item.score.halfTime
                                        .home}
                                :
                                {item.score.fullTime.away +
                                    item.score.halfTime
                                        .away}
                                )
                            </Card.Text>
                        ) : (
                            <></>
                        )}
                    </Card>
                ))}
        </>
    );
}

export default function PaginatedMatches({
    itemsPerPage,
    items,
    itemsBlock,
}) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(
        items.length / itemsPerPage
    );

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset =
            (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Container className="ligi_strong ">
                <ItemsLigi currentItems={currentItems} />
            </Container>
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}
