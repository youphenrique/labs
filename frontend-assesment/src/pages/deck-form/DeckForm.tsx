/** @jsx jsx */
import {
  jsx,
  Box,
  Grid,
  Flex,
  Text,
  Button,
  Input,
  Divider,
  Spinner,
  Badge,
  useThemeUI,
} from 'theme-ui';
import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikErrors,
} from 'formik';
import * as React from 'react';
import { toast } from 'react-toastify';
import { RouteComponentProps } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import AlertIcon from '../../components/alert-icon/AlertIcon';
import ErrorBoundary from '../../components/ErrorBoundary';
import { CARDS_PILE_NAME } from '../../utils/constants';
import { getSuitAndValueFromCard } from '../../utils/fns';
import { createDeck, createPile, drawCards } from '../../services/client';
import {
  cards,
  initialCards,
  suits,
  SUITS_TOTAL,
  values,
  VALUES_TOTAL,
} from './DeckForm.content';

type DeckFormProps = RouteComponentProps;

type FormValues = {
  cards: string[];
  rotationCard: string;
  cardFieldsValidation: boolean;
};

function generateSuitRank(rotationCardSuit: string) {
  const suitIndex = suits.indexOf(rotationCardSuit);
  const suitRankMap = new Map<string, number>();
  let rankValue = SUITS_TOTAL;

  for (let it = suitIndex; it < SUITS_TOTAL + suitIndex; it += 1) {
    const suit = suits[it % SUITS_TOTAL];
    suitRankMap.set(suit, rankValue--);
  }

  return suitRankMap;
}

function generateValueRank(rotationCardValue: string) {
  const valueIndex = values.indexOf(rotationCardValue);
  const valueRankMap = new Map<string, number>();
  let rankValue = VALUES_TOTAL;

  for (let it = valueIndex; it < VALUES_TOTAL + valueIndex; it += 1) {
    const value = values[it % VALUES_TOTAL];
    valueRankMap.set(value, rankValue--);
  }

  return valueRankMap;
}

function sortCards(cards: string[], rotationCard: string) {
  const [rotationCardSuit, rotationCardValue] = getSuitAndValueFromCard(
    rotationCard,
  );
  const suitRankMap = generateSuitRank(rotationCardSuit);
  const valueRankMap = generateValueRank(rotationCardValue);

  function compare(a: string, b: string) {
    const [suitA, valueA] = getSuitAndValueFromCard(a);
    const [suitB, valueB] = getSuitAndValueFromCard(b);
    const suitRankA = suitRankMap.get(suitA) ?? 0;
    const suitRankB = suitRankMap.get(suitB) ?? 0;
    const valueRankA = valueRankMap.get(valueA) ?? 0;
    const valueRankB = valueRankMap.get(valueB) ?? 0;

    if (suitRankA === suitRankB) {
      if (valueRankA < valueRankB) {
        return 1;
      }

      if (valueRankA > valueRankB) {
        return -1;
      }

      return 0;
    }

    if (suitRankA < suitRankB) {
      return 1;
    }

    if (suitRankA > suitRankB) {
      return -1;
    }

    return 0;
  }

  return cards.sort(compare);
}

const ToastError = () => (
  <Flex>
    <AlertIcon />
    <Text ml={1} data-testid="error-toast">
      Something went wrong creating deck
    </Text>
  </Flex>
);

export default function DeckForm(props: DeckFormProps) {
  const { theme } = useThemeUI();

  React.useEffect(() => {
    document.title = 'Form • Deck Analyzer';
  }, []);

  function onValidate(values: FormValues): FormikErrors<FormValues> {
    const errors = {
      cards: initialCards,
      rotationCard: '',
      cardFieldsValidation: '',
    };
    const set = new Set<string>();
    let hasCardFieldsError = true;
    let hasFieldError = false;

    values.cards.forEach((card, index) => {
      if (card) {
        hasCardFieldsError = false;
        if (set.has(card)) {
          errors.cards[index] = `${card} has already been inserted`;
          hasFieldError = true;
        } else if (cards.indexOf(card) === -1) {
          errors.cards[index] = `${card} is not a valid card`;
          hasFieldError = true;
        } else {
          errors.cards[index] = '';
        }
        set.add(card);
      }
    });

    if (hasCardFieldsError) {
      errors.cardFieldsValidation = 'Insert at least one valid card';
    } else {
      errors.cardFieldsValidation = '';
    }

    if (values.rotationCard) {
      if (cards.indexOf(values.rotationCard) === -1) {
        errors.rotationCard = `${values.rotationCard} is not a valid card`;
        hasFieldError = true;
      } else {
        errors.rotationCard = '';
      }
    } else {
      errors.rotationCard = 'Rotation card is required';
      hasFieldError = true;
    }

    return hasFieldError || hasCardFieldsError ? errors : {};
  }

  async function onSubmit(values: FormValues) {
    const cards = values.cards.filter(card => Boolean(card.trim()));
    const rotationCard = values.rotationCard;

    try {
      const data = await createDeck(cards);
      await drawCards(data.deck_id, data.remaining);
      const orderedCards = sortCards(cards, rotationCard);
      await createPile(data.deck_id, CARDS_PILE_NAME, orderedCards);

      props.history.push(`/deck/${data.deck_id}`);
    } catch (e) {
      toast.error(ToastError);
    }
  }

  return (
    <ErrorBoundary>
      <Layout>
        <Box
          my={4}
          p={4}
          sx={{
            border: '1px solid',
            borderColor: 'gray.3',
            borderRadius: 'default',
          }}
        >
          <Box mb={4}>
            <Text sx={{ fontSize: 2 }}>Cards</Text>
            <Text color="gray.6" sx={{ fontSize: 0 }} mt={-1}>
              These should be 10 valid cards, at most, from a common deck
            </Text>
          </Box>
          <Formik
            initialValues={{
              cards: initialCards,
              rotationCard: '',
              cardFieldsValidation: true,
            }}
            validate={onValidate}
            onSubmit={onSubmit}
          >
            {formikBag => (
              <Form>
                <Grid gap={[3, 4]} columns={[1, 3, 4, 5]} mb={4}>
                  {formikBag.values.cards.map((_, index) => (
                    <Box key={`card-${index}`}>
                      <label>
                        <Field name={`cards[${index}]`}>
                          {({ field }: FieldProps) => (
                            <label>
                              <Input
                                type="text"
                                data-testid="card-input"
                                placeholder={`Card ${index + 1}`}
                                sx={{
                                  fontFamily: 'Inter',
                                  '::placeholder': {
                                    fontSize: 0,
                                  },
                                }}
                                {...field}
                              />
                            </label>
                          )}
                        </Field>
                      </label>
                      <ErrorMessage name={`cards[${index}]`}>
                        {message => (
                          <Text
                            color="red.7"
                            sx={{ fontSize: 0 }}
                            data-testid={`card-${index + 1}-error-message`}
                          >
                            {message}
                          </Text>
                        )}
                      </ErrorMessage>
                    </Box>
                  ))}
                </Grid>
                <ErrorMessage name="cardFieldsValidation">
                  {message => (
                    <Badge
                      bg="red.1"
                      color="red.6"
                      px={3}
                      py={1}
                      sx={{
                        borderRadius: 'full',
                        fontSize: 0,
                        display: 'inline-flex',
                      }}
                    >
                      <AlertIcon />
                      <Text ml={2} data-testid="card-fields-error-message">
                        {message}
                      </Text>
                    </Badge>
                  )}
                </ErrorMessage>
                <Divider />
                <Box mb={4}>
                  <Text sx={{ fontSize: 2 }}>Rotation Card</Text>
                  <Text color="gray.6" sx={{ fontSize: 0 }} mt={-1}>
                    This card defines the highest value card in the deck
                  </Text>
                </Box>
                <Box
                  pt={1}
                  mb={4}
                  sx={{ width: ['100%', '50%', '40%', '30%'] }}
                >
                  <Field name="rotationCard">
                    {({ field }: FieldProps) => (
                      <label>
                        <Input
                          type="text"
                          placeholder="Rotation card"
                          sx={{
                            fontFamily: 'Inter',
                            '::placeholder': {
                              fontSize: 0,
                            },
                          }}
                          {...field}
                        />
                      </label>
                    )}
                  </Field>
                  <ErrorMessage name="rotationCard">
                    {message => (
                      <Text
                        color="red.7"
                        sx={{ fontSize: 0 }}
                        data-testid="rotation-card-error-message"
                      >
                        {message}
                      </Text>
                    )}
                  </ErrorMessage>
                </Box>
                <Divider />
                <Box pt={2}>
                  <Button
                    type="submit"
                    disabled={formikBag.isSubmitting}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: ['full', 32],
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
                    {formikBag.isSubmitting ? (
                      <Spinner color="white" size={26} />
                    ) : (
                      <Text as="span" sx={{ fontFamily: 'Inter' }}>
                        Submit
                      </Text>
                    )}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Layout>
    </ErrorBoundary>
  );
}
