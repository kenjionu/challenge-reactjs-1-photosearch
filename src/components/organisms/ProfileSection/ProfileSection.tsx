import { useFetchSinglePhoto } from '../../../hooks/useApi';
import './ProfileSection.css'
import camera from './../../../assets/images/dslr-camera.svg'
import likes from './../../../assets/images/likes.svg';
import followers from './../../../assets/images/followers.svg';
import { Button } from '../../atom/Button/Button';
export const ProfileSection = () => {
    const { photo, loading, error } = useFetchSinglePhoto('maria_shalabaieva');
    const profileName = photo?.user?.name || ''; // Ajusta según la estructura real de `photo`
    const profileUsername = photo?.user?.username || ''; // Ajusta según la estructura real de `photo`
    const profileImageUrl = photo?.user?.profile_image.large || ''; // Ajusta según la estructura real de `photo`
    const profileTotalPhotos = photo?.user?.total_photos || ''; // Ajusta según la estructura real de `photo`
    const profileTotalLikes = photo?.user?.total_likes || ''; // Ajusta según la estructura real de `photo`
    const profileTotalFollowers = photo?.user?.followers_count || ''; // Ajusta según la estructura real de `photo`

    return (
        <div>
            <div className='profile-info'>
                {loading && <p>Cargando...</p>}
                {error && <p>{error}</p>}
                <div className='avatar-profile'>
                    <img src={profileImageUrl}></img>
                </div>
                <div className='profile-username'>
                    <p>{profileName}</p>
                    <p>@{profileUsername}</p>
                </div>
            </div>
            <div className='socials-data'>
                <div className='info-socials'>
                    <div>
                        <p>Photos</p>
                        <div className='photos'>
                            <div>                            
                                <img src={camera}></img>
                            </div>
                            <div>
                                {profileTotalPhotos}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Score</p>
                        <div className='score'>
                            <div>
                                <img src={likes}></img>
                            </div>
                            <div>
                                {profileTotalLikes}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Followers</p>
                        <div className='followers'>
                            <div>
                                <img src={followers}></img>
                            </div>
                            <div>
                                {profileTotalFollowers}
                            </div>
                        </div>
                    </div>
                </div>
                <button className='button-profile'>Edit Profile</button>
            </div>
        </div>
    )

}
