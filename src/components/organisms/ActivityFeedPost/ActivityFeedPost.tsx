import './ActivityFeedPost.css';
import dots from '../../../assets/images/dots-feed.svg';
import { useFetchSinglePhoto } from '../../../hooks/useApi';
import { Photos } from '../../../models/photos.model';

export const ActivityFeedPost = () => {
  const { photo, loading, error } = useFetchSinglePhoto('maria_shalabaieva');
  const profileName = photo?.user?.username || ''; // Ajusta según la estructura real de `photo`
  const profileImageUrl = photo?.user?.profile_image.small || ''; // Ajusta según la estructura real de `photo`

  return (
    <div>
      <div className="activity-feed-post-header">
        <div className="activity-feed">
          {loading ? (
            'Cargando...'
          ) : error ? (
            <p>Error loading image</p>
          ) : (
            <img className='avatar' src={profileImageUrl} alt='Profile' />
          )}
          <div className='activity-feed-content'>
            <h4>Ana Rojas {profileName}</h4>
            <p>8 hours in cerro nutibar</p>
          </div>
          <div className='activity-feed-end'>
          <img src={dots} alt='dot' />

          </div>
        </div>
        
        {/* Asegúrate de definir correctamente la fuente de esta imagen o removerla si no se requiere */}
        <div className='activity-feed-post-image'>
          <img src='' alt='feed post' /> 
        </div>
      </div>
    </div>
  );
};