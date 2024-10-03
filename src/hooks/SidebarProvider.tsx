'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface SidebarContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    forceChangeSidebar: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const forceChangeSidebar = (value: boolean) => {
        setIsSidebarOpen(value)
    }

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, forceChangeSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};
