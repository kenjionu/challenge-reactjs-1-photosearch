import { createContext } from "react";
import { useState } from "react";
import { PageContextType } from "../models/page.models";
const PageContext = createContext<PageContextType | undefined>(undefined);

export function PageProvider({ children }: { children: React.ReactNode }) {
    const [pageCurrent, setPageCurrent] = useState(1);

    function changePage(page: number) {
        setPageCurrent(page);
    }

    return (
        <PageContext.Provider value={{ pageCurrent, changePage }}>
            {children}
        </PageContext.Provider>
    );
}

export default PageContext;