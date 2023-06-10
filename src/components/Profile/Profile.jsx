import { ProfileWrapper } from './ProfileWrapper.styled';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStats } from './ProfileStats/ProfileStats';

export const Profile = ({
  user: {
    username,
    avatar,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileWrapper>
      <ProfileDescription
        userName={username}
        userAvatar={avatar}
        userTag={tag}
        userLocation={location}
      />
      <ProfileStats followers={followers} views={views} likes={likes} />
    </ProfileWrapper>
  );
};
