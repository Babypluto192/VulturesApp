"use client"
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllMerchItems, updateMerch, deleteMerch } from '@/slices/merchSlice';
import { AppDispatch, RootState } from '@/app/store';
import styles from './admin.module.scss';
import Image from "next/image";
import {deleteNews, selectAllNewsItems, updateNews} from "@/slices/newsSlice";
import {deleteConcert, selectAllConcertItems, updateConcert} from "@/slices/concertSlice";

const AdminPanel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const localMerch = useSelector((state: RootState) => selectAllMerchItems(state));
    const LocalNews = useSelector((state: RootState) => selectAllNewsItems(state));
    const concerts = useSelector((state: RootState) => selectAllConcertItems(state))
    const handleTitleChangeMerch = (id: number, title: string) => {
        dispatch(updateMerch({ id, changes: { title } }));
    };
    const handleTitleChangeNews = (id: number, title: string) => {
        dispatch(updateNews({ id, changes: { title } }));
    };

    const handleTitleChangeConcert = (id: number, title: string) => {
        dispatch(updateConcert({ id, changes: { title } }));
    };
    const handleDeleteMerch = (id: number) => {
        dispatch(deleteMerch(id));
    };
    const handleDeleteNews= (id: number) => {
        dispatch(deleteNews(id));
    };
    const handleDeleteConcert = (id: number) => {
        dispatch(deleteConcert(id));
    };

    const handleDateChange = (id: number, data: string) => {
        dispatch(updateConcert({ id, changes: { data } }));
    };


    const handleFinishedChange = (id: number, finished: boolean) => {
        dispatch(updateConcert({ id, changes: { finished } }));
    };

    const handleBuyTicketsChange = (id: number, buyTickets: string) => {
        dispatch(updateConcert({ id, changes: { buyTickets } }));
    };
    const [password, setPassword] = useState('');
    const [passwordMatched, setPasswordMatched] = useState(false);


    const correctPassword = 'Vultures';

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (password === correctPassword) {
            setPasswordMatched(true);
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    const handleLogout = () => {
        setPasswordMatched(false);
        setPassword('');
    };

    // If password is not matched, show password input and submit button
    if (!passwordMatched) {
        return (
            <div className={styles.adminPanel}>
                <h2>Admin Panel</h2>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        );
    }

    // If password is matched, show admin content
    return (
        <div className={styles.adminPanel}>
            <h2>Admin Panel</h2>
            {localMerch.map((el) => (
                <div key={el.id} className={styles.merchItem}>
                    <div className={styles.merchItemContent}>
                        <Image className={styles.merchItemImage} src={"http:/localhost:4000" + el.image} alt={el.title} width={200} height={100} />
                        <input
                            type="text"
                            value={el.title}
                            onChange={(e) => handleTitleChangeMerch(el.id, e.target.value)}
                        />
                        <button onClick={() => handleDeleteMerch(el.id)}>Delete</button>
                    </div>
                </div>
            ))}

            {LocalNews.map((el) => (
                <div key={el.id} className={styles.merchItem} lang={'ru'}>
                    <div className={styles.merchItemContent}>
                        <Image className={styles.merchItemImage} src={"http:/localhost:4000" + el.image} alt={el.title} width={200} height={100} />
                        <input
                            type="text"
                            value={el.title}
                            onChange={(e) => handleTitleChangeNews(el.id, e.target.value)}
                        />
                        <button onClick={() => handleDeleteNews(el.id)}>Delete</button>
                    </div>
                </div>
            ))}

            {concerts.map((concert) => (
                <div key={concert.id} className={styles.merchItem}>
                    <div className={styles.merchItemContent}>
                        <div className={styles.merchItemImage}>
                            <Image
                                src={`http://localhost:4000${concert.image}`}
                                alt={concert.title}
                                width={200}
                                height={100}
                            />
                        </div>
                        <div className={styles.concertDetails}>
                            <input
                                type="text"
                                value={concert.title}
                                onChange={(e) => handleTitleChangeConcert(concert.id, e.target.value)}
                            />
                            <input
                                type="date"
                                value={concert.data}
                                onChange={(e) => handleDateChange(concert.id, e.target.value)}
                            />
                            <input
                                type="checkbox"
                                checked={concert.finished}
                                onChange={(e) => handleFinishedChange(concert.id, e.target.checked)}
                            />
                            <input
                                type="text"
                                value={concert.buyTickets}
                                onChange={(e) => handleBuyTicketsChange(concert.id, e.target.value)}
                            />
                            <button onClick={() => handleDeleteConcert(concert.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            <button onClick={handleLogout}></button>
        </div>
    );
};

export default AdminPanel;

