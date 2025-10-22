/** @jsx jsx */
import { jsx, Box, Flex, Text, Button, useThemeUI } from 'theme-ui';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

export default function PageNotFound() {
  const { theme } = useThemeUI();

  React.useEffect(() => {
    document.title = 'Page Not Found • Deck Analyzer';
  }, []);

  return (
    <Layout>
      <Box m={3} pt={6}>
        <Text sx={{ fontSize: 3, textAlign: 'center' }}>
          404. Oops! Page not found!
        </Text>
        <Text
          color="gray.6"
          sx={{
            margin: '0 auto',
            textAlign: 'center',
            maxWidth: 'lg',
            lineHeight: 'tight',
          }}
        >
          The page you are looking for may have been removed, not exists or
          is temporarily unavailable.
        </Text>
        <Flex mt={4} sx={{ justifyContent: 'center' }}>
          <Link
            to="/"
            sx={{
              margin: '0 auto',
              textDecoration: 'none',
            }}
          >
            <Button
              sx={{
                fontFamily: 'Inter',
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: 'primaryHover',
                  boxShadow: 'lg',
                },
                ':focus': {
                  outline: 'none',
                  boxShadow: `0 0 0 3px ${
                    (theme.colors as typeof theme.colors & {
                      blue: string[];
                    }).blue[2]
                  }`,
                  borderColor: 'gray.2',
                },
              }}
            >
              Página inicial
            </Button>
          </Link>
        </Flex>
      </Box>
    </Layout>
  );
}
