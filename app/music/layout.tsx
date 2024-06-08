"use client"
import React from "react";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";

export default function MusicLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <ReduxProvider>
        {children}
        </ReduxProvider>

    );
}