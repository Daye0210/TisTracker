import React from 'react';
import { Container, Typography, Card, CardContent, Grid2 as Grid } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                Bienvenido a Web
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Información Interesante 1
                            </Typography>
                            <Typography variant="body2" component="p">
                                Aquí puedes agregar una descripción interesante sobre el tema 1.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Información Interesante 2
                            </Typography>
                            <Typography variant="body2" component="p">
                                Aquí puedes agregar una descripción interesante sobre el tema 2.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Información Interesante 3
                            </Typography>
                            <Typography variant="body2" component="p">
                                Aquí puedes agregar una descripción interesante sobre el tema 3.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;