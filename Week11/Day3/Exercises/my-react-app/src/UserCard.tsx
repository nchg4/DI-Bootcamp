import React from 'react';

interface UserCardProps {
  name?: string;
  age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div className="user-card">
      {name ? <h2>Name: {name}</h2> : <h2>Name: Not provided</h2>}
      {age !== undefined ? <p>Age: {age}</p> : <p>Age: Not provided</p>}
    </div>
  );
};

export default UserCard;
