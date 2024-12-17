import { useState } from "react";

const usePage = () => {
    const [pageCurrent, setPageCurrent] = useState<number>(1);

    const changePage = (page: number) => {
        setPageCurrent(page);
    };

    return { pageCurrent, changePage };
};

export default usePage;