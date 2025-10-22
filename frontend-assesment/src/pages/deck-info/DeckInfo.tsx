/** @jsx jsx */
import { jsx, Flex, Box, Text, Spinner, Divider, Badge } from 'theme-ui';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useAsync } from 'react-async';
import { CARDS_PILE_NAME } from '../../utils/constants';
import useDeckInfo from '../../hooks/useDeckInfo';
import ErrorBoundary from '../../components/ErrorBoundary';
import Layout from '../../components/layout/Layout';
import Slider from '../../components/slider/Slider';
import Card from '../../components/card/Card';
import CheckIcon from '../../components/check-icon/CheckIcon';
import { getPileCards } from '../../services/client';
import { getSuitAndValueFromCard } from '../../utils/fns';

type RouteParams = { deckId: string };
type DeckInfoProps = RouteComponentProps<RouteParams>;

export default function DeckInfo(props: DeckInfoProps) {
  const { data, isPending, isRejected } = useAsync(getPileCards, {
    deckId: props.match.params.deckId,
    pileName: CARDS_PILE_NAME,
  });
  const { cards, fullHouseCombinations } = useDeckInfo(data);

  return (
    <ErrorBoundary>
      <Layout>
        {isPending ? (
          <Flex
            sx={{
              height: 'screenHeight',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Spinner data-testid="loading" />
          </Flex>
        ) : isRejected ? (
          <Flex
            sx={{
              height: 'screenHeight',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Badge
              bg="gray.3"
              color="gray.7"
              px={3}
              py={2}
              sx={{ borderRadius: 'full', fontSize: 0 }}
              data-testid="fetch-error"
            >
              Something went wrong
            </Badge>
          </Flex>
        ) : (
          <Box my={4}>
            <Flex mb={3} sx={{ justifyContent: 'center' }}>
              <Text
                as="span"
                sx={{
                  fontSize: 3,
                  fontWeight: 'semibold',
                  display: 'inline-block',
                  margin: '0 auto',
                }}
              >
                Ordered Pile
              </Text>
            </Flex>
            <Slider>
              {cards.map(card => {
                const [cardSuit, cardValue] = getSuitAndValueFromCard(
                  card,
                );
                return (
                  <Card
                    key={`${cardSuit}-${cardValue}`}
                    suit={cardSuit}
                    value={cardValue}
                  />
                );
              })}
            </Slider>
            <Divider />
            <Flex mt={2} sx={{ alignItems: 'center' }}>
              <Text color="gray.6" sx={{ flex: 1 }} mr={2}>
                Highest card
              </Text>
              <Box sx={{ flex: 2 }}>{cards[0]}</Box>
            </Flex>
            <Divider />
            <Flex>
              <Text
                color="gray.6"
                mr={2}
                sx={{
                  flex: 1,
                  lineHeight: 'tight',
                  alignSelf: 'flex-start',
                }}
              >
                Full house combinations
              </Text>
              <Box sx={{ flex: 2, alignSelf: 'center' }}>
                {fullHouseCombinations.length === 0 ? (
                  'None'
                ) : (
                  <Box
                    sx={{
                      border: '1px solid',
                      borderColor: 'muted',
                      borderRadius: 'default',
                    }}
                  >
                    {fullHouseCombinations.map((combination, index) => (
                      <React.Fragment key={combination.toString()}>
                        {index > 0 && <Divider my={0} />}
                        <Flex
                          p={2}
                          sx={{
                            ':nth-of-type(even)': {
                              backgroundColor: 'gray.1',
                            },
                          }}
                        >
                          <CheckIcon />
                          <Box ml={2}>{combination.join(', ')}</Box>
                        </Flex>
                      </React.Fragment>
                    ))}
                  </Box>
                )}
              </Box>
            </Flex>
          </Box>
        )}
      </Layout>
    </ErrorBoundary>
  );
}
