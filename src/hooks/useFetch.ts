/**
 * useFetch crearemos un custom Hook
 *  es un hook que nos permite hacer fetch a una API
 * y nos devuelve un objeto con los datos, el loading y el error
 */

import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error| null;

interface Params<T> {
    data: T | null; //los genericos de typescript 
    //nos permite pasarle un tipo y ese tipo usarlo usarlo
    //dentro del interfaz de nuestro componente 
    loading: boolean;
    error: Error | null;
}
//creamos nuestro hooks
//useFetch es una key -> hace referencia a
//-> espacio de emoria
///-> funcion
export const useFetch = <T>(url:string): Params<T> =>{ 
const [data, setData] = useState<Data<T>>(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState<ErrorType>(null)

//se puede interrumpir un endpoint
    useEffect(() => {
        //Este ccontroller es un método que nos permite abortar una petición y es signal
        //es un método que nos permite abortar una petición
        const controller = new AbortController();
        setLoading(true)
        const fetchData = async () => {
            try{
                const response = await fetch(url, controller);
                if(!response.ok){
                    throw new Error("Error al obtener datos")
                }
                const jsonData: T = await response.json();
                setData(jsonData)
                setError(null)
            } catch (err) {
                setError(err as Error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
        //siempre recordemos en useEffect este return es cuando se desmonte el componente
        //y es para abortar la petición
        return () => {
            controller.abort()
        }

    }, [url])
    //este return es para que el hook se pueda usar en cualquier componente
    //y nos devuelva los datos, el loading y el error
    return {data, loading, error}
}

