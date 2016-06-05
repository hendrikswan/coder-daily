import CircularProgress from 'material-ui/CircularProgress';
import Card from 'material-ui/Card/Card';
import React from 'react';

const Loader = () => {
    return (
        <Card style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
            <CircularProgress />
        </Card>
    );
};

export default Loader;
