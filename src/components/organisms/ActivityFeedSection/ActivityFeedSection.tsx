import { ActivityFeedPost } from '../ActivityFeedPost/ActivityFeedPost';
import './ActivityFeedSection.css';

export const ActivityFeedSection = () => {
  return (
    <div className="activity-feed-section">
      <p>Activity Feed</p>
      <div className='activity-feed-section-level-2'>
        <ActivityFeedPost />
      </div>
    </div>
  );
};