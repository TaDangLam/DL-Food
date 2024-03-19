'use client'
import { usePathname } from "next/navigation";

import HeaderInfo from "./components/HeaderInfo";
import NavbarInfo from "./components/NavbarInfo";
import NavbarOrderDetail from './components/NavbarOrderDetail'

const InformationLayout = ({ children }) => {
    const pathname = usePathname();
    const isAuthOrDashboardPage = pathname.startsWith('/information/detailOrder');
    const showHeaderAndFooter = !isAuthOrDashboardPage;

    return ( 
        <div className="margin-component mt-[31px] flex flex-col gap-5 py-5">
            <div className=""><HeaderInfo /></div>
            <div className="flex w-full gap-5">
                <div className="w-3/12">
                    {showHeaderAndFooter ? (
                            <NavbarInfo />
                        ) : (
                            <NavbarOrderDetail />
                        )}
                </div>
                <div className={showHeaderAndFooter ? 'w-9/12 bg-slate-50 rounded-xl  px-2 py-5' : 'w-9/12'}>{children}</div>
            </div>
        </div>
    );
}
 
export default InformationLayout;