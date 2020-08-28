import React from 'react';
import Grid from '@material-ui/core/Grid';
import BoxAccordion from '../../../common/components/BoxAccordion';
import UserProfileAvatar from './UserProfileAvatar';
import UserProfileInfo from './UserProfileInfo';
import UserProfileSocialMedia from './UserProfileSocialMedia';

export default function UserProfile(props) {
  return (
    <BoxAccordion title="Your profile">
      <Grid container spacing={5}>
        <Grid sm={4} item>
          <Grid container spacing={5}>
            <Grid xs={12} item>
              <UserProfileAvatar />
            </Grid>
            <Grid xs={12} item>
              <UserProfileSocialMedia />
            </Grid>
          </Grid>
        </Grid>
        <Grid sm={8} item>
          <UserProfileInfo />
        </Grid>
      </Grid>
    </BoxAccordion>
  )
}