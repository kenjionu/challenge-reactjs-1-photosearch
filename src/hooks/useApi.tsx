import { useState, useEffect } from 'react';
import axios from 'axios';
import { Photos } from '../models/photos.model';

const API_URL = 'https://api.unsplash.com/photos/random';
const ACCESS_KEY = 'Tja6aqE2bhqxHCiKH5cGiGCALmcjob7ka3lKnRdxrB4'; // Reemplaza con tu clave de acceso

export const useFetchPhotos = (categories: string[]) => {
    const [photos, setPhotos] = useState<{ category: string; images: any[] }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPhotos = async (category: string) => {
        try {
            const response = await axios.get(API_URL, {
                params: {
                    query: category,
                    count: 1,
                    client_id: ACCESS_KEY,
                },
            });
            return response.data;
        } catch (error) {
            console.error(`Error fetching ${category} images:`, error);
            setError(`Error fetching ${category} images.`);
            return [];
        }
    };

    const fetchAllPhotos = async () => {
        setLoading(true);
        const fetchedPhotos = await Promise.all(
            categories.map(async (category) => {
                const images = await fetchPhotos(category);
                return { category, images };
            })
        );
        setPhotos(fetchedPhotos);
        setLoading(false);
    };

    useEffect(() => {
        fetchAllPhotos();
    }, [categories]);

    return { photos, loading, error };
};


export const useFetchSinglePhoto = (username?: string) => {
  const [photo, setPhoto] = useState<Photos | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    const fetchPhoto = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Photos>(API_URL, {
          params: {
            username: username,
            client_id: ACCESS_KEY,
          },
        });
        setPhoto(response.data);
      } catch (error) {
        console.error('Error fetching photo:', error);
        setError('Error fetching photo.');
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [username]);

  return { photo, loading, error };
};