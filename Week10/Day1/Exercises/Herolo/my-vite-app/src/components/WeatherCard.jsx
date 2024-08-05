import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{data.city}</Typography>
        <Typography variant="body1">Temperature: {data.temperature}°</Typography>
        <Typography variant="body2">Condition: {data.condition}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
