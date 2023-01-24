import PropTypes from 'prop-types';
import {ProfileWrapper, Description, Image, Name, Stats, StatsItem, StatsLabel, StatsQuantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileWrapper>
            <Description>
                <Image
                src={avatar}
                    alt="User avatar"
                    width="140"
                    height="140"
                    />
                <Name>{ username}</Name>
                <p>@{tag}</p>
                <p>{location}</p>
            </Description>

        <Stats>
            <StatsItem>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{stats.followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{stats.views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{stats.likes}</StatsQuantity>
            </StatsItem>
        </Stats>
</ProfileWrapper>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired

}
