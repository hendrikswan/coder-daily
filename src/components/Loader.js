import CircularProgress from 'material-ui/lib/circular-progress';
import Card from 'material-ui/lib/card/card';
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
