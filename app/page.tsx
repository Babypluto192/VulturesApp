"use client"
import React, { useEffect } from 'react';
import VulturesSection from '@/components/sections/VulturesSection';
import { useGetTracksQuery } from '@/api/vultures1Api';
import Link from 'next/link';
import { useGetNewsQuery } from '@/api/newsApi';
import { useGetMerchQuery } from '@/api/merchApi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { setMerch } from '@/slices//merchSlice';
import { setLoading } from '@/slices/requestSlice';
import { setNews } from '@/slices/newsSlice';
import getRandom from '@/hooks/getRandom';
import {useGetConcertsQuery} from "@/api/concertApi";
import { setConcert} from "@/slices/concertSlice";

export default function Home() {
    const loading = useSelector((state: RootState) => state.request.loading);
    const dispatch = useDispatch<AppDispatch>();

    const { data: tracks } = useGetTracksQuery();
    const { data: Merch } = useGetMerchQuery();
    const { data: news } = useGetNewsQuery();
    const {data:concert} = useGetConcertsQuery()

    useEffect(() => {
        if (!loading && Merch !== undefined && news !== undefined && concert !== undefined) {
            dispatch(setMerch(Merch));
            dispatch(setNews(news));
            dispatch(setConcert(concert))
            dispatch(setLoading(true));
        }
    }, [dispatch, loading, Merch, news, concert]);

    let musicCaption1 = '';
    let musicCaption2 = '';

    if (tracks !== undefined && tracks.length > 0) {
        let randomIndex1 = Math.floor(Math.random() * tracks.length);
        let randomIndex2 = Math.floor(Math.random() * tracks.length);
        while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.floor(Math.random() * tracks.length);
        }
        musicCaption1 = tracks[randomIndex1].fileName || '';
        musicCaption2 = tracks[randomIndex2].fileName || '';
    }

    const [caption1, caption2, image1, image2] = getRandom(news || []);
    const [caption3, caption4, image3, image4] = getRandom(Merch || []);

    return (
        <div>
            <Link lang="ru" href="/news">
                <VulturesSection
                    title={'News'}
                    imageurl1={image1 || '/placeholder.png'}
                    imageurl2={image2 || '/placeholder.png'}
                    caption2={caption2 || ''}
                    caption1={caption1 || ''}
                />
            </Link>
            <Link href="/music">
                <VulturesSection
                    title={'Music'}
                    imageurl1={'/Cover.png'}
                    imageurl2={'/Cover.png'}
                    caption2={musicCaption2 || ''}
                    caption1={musicCaption1 || ''}
                />
            </Link>
            <Link href="/merch">
                <VulturesSection
                    title={'Merch'}
                    imageurl1={image3 || '/placeholder.png'}
                    imageurl2={image4 || '/placeholder.png'}
                    caption2={caption4 || ''}
                    caption1={caption3 || ''}
                />
            </Link>
        </div>
    );
}
