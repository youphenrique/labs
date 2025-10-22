/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';

type CardProps = {
  suit: string;
  value: string;
};

export default function Card(props: CardProps) {
  const { suit, value } = props;

  return (
    <Flex
      data-testid={`card-${value}${suit}`}
      bg="white"
      sx={{
        width: '5.5rem',
        justifyContent: 'center',
        border: '1px solid',
        borderColor: 'gray.6',
        borderRadius: 'default',
        color: suit === 'H' || suit === 'D' ? 'red.6' : 'currentColor',
      }}
    >
      <Box
        sx={{ ...(value === '10' && { position: 'relative', left: 1 }) }}
      >
        <Text as="span">{value}</Text>
      </Box>
      <Flex
        sx={{
          width: '53px',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      >
        <Text as="span" sx={{ fontSize: 8 }}>
          {suit}
        </Text>
      </Flex>
      <Box
        sx={{
          ...(value === '10' && { position: 'relative', right: 1 }),
          alignSelf: 'flex-end',
        }}
      >
        <Text as="span">{value}</Text>
      </Box>
    </Flex>
  );
}
