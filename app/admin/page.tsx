"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  updateMerch } from './songsSlice';
import {AppDispatch, RootState} from "@/app/store";

const AdminPanel = () => {
    const dispatch = useDispatch<AppDispatch>();

    const localMerch = useSelector((state:RootState) => state.merch);



    const handleTitleChange = (id:number, title:string) => {
        dispatch(updateMerch({ id, title }));
    };



    return (
        <div>
            <h2>Admin Panel</h2>
            {localMerch.map((el) => (
                <div key={Number(el.id)}>
                    <input
                        type="text"
                        value={el.title.toString()}
                        onChange={(e) => handleTitleChange(Number(el.id), e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
};

export default AdminPanel;
