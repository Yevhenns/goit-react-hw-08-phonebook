import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { getItems, getIsLoading, getError } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsApi';
import {
  Container,
  Typography,
  Stack,
  CircularProgress,
  Box,
} from '@mui/material';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const array = useSelector(getItems);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="xs">
      {error ? (
        <b>{error}</b>
      ) : (
        <>
          <Typography align="center" variant="h6" marginBottom={3}>
            Add new contact
          </Typography>
          <Form />
          <Typography align="center" variant="h6" margin={3}>
            All your contacts
          </Typography>

          {loading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          ) : array.length === 0 ? (
            <Typography variant="h7" margin={3}>
              Please, enter your first contact!
            </Typography>
          ) : (
            <>
              <Stack spacing={2}>
                <Filter />
                <Contacts />
              </Stack>
            </>
          )}
        </>
      )}
    </Container>
  );
};
