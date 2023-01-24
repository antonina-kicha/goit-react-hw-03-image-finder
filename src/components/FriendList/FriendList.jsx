import PropTypes from 'prop-types';
import {Friends, FriendCard, Status, Name} from './FriendList.styled'

export const FriendList = ({ friends }) => {
    return (
        <Friends>
            {friends.map(friend => (
                <FriendCard key={friend.id}>
                    <Status isOnline={friend.isOnline}></Status>
                    <img src={friend.avatar} alt="User avatar" width="120" />
                    <Name>{friend.name}</Name>
                </FriendCard>
            ))}
            
        </Friends>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool,
            id: PropTypes.number.isRequired,
        })
    ).isRequired
}
    

    