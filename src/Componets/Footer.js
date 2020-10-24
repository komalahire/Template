import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';





export default function Footer() {
    return (
        <React.Fragment>
            <div className="Footer">
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <SocialIcon url="https://x.facebook.com/navgurukul/" />
                </Grid>
                    <Grid item xs={12} md={4}>
                    <SocialIcon url="https://www.instagram.com/navgurukul.bangalore/?hl" />
                </Grid>
                    <Grid item xs={12} md={4}>
                    <SocialIcon url="https://www.youtube.com/channel/UC9yaihhuBLgke9O6IVC-Gsw" />
                </Grid>
                </Grid>

                <p> Made with love from NavGurukul   </p>
               
            </Container>
            
                
            
            </div>
        </React.Fragment>
    );
}
