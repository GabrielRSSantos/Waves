import React, { createContext, useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Paginas from './Paginas';

export const Contexto = createContext();

export default function Context() {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    const banco = async () => {
        try {
            const response = await fetch('https://619d1edb131c600017088d7f.mockapi.io/waves/lista/users');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        banco();
    }, []);

    return (
        <Contexto.Provider value={{ data }}>
            {
                isLoading ? <ActivityIndicator /> : <Paginas />
            }
        </Contexto.Provider>
    );
}