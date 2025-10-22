/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type SliderProps = {
  children: React.ReactNode[];
};

const containerMaxWidth = [
  'full',
  '8rem',
  '14rem',
  '20rem',
  '26rem',
  '32rem',
  '38rem',
  '44rem',
  '50rem',
  '56rem',
  '62rem',
];

export default function Slider(props: SliderProps) {
  const { children } = props;
  const [sliderRef, keenSlider] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    slidesPerView: 3,
    breakpoints: {
      '(min-width: 460px)': {
        slidesPerView: 4,
      },
      '(min-width: 680px)': {
        slidesPerView: 6,
      },
      '(min-width: 820px)': {
        slidesPerView: 8,
      },
      '(min-width: 1024px)': {
        slidesPerView: 10,
      },
    },
  });

  React.useLayoutEffect(() => {
    if (keenSlider) {
      keenSlider.resize();
    }
  }, [keenSlider]);

  const childrenCount = React.Children.count(children);

  return (
    <Box
      p={3}
      mx="auto"
      mb={4}
      bg="gray.1"
      sx={{
        maxWidth: containerMaxWidth[childrenCount],
        borderRadius: 'default',
        border: '1px solid',
        borderColor: 'gray.3',
      }}
    >
      <Box ref={sliderRef} className="keen-slider">
        {React.Children.map(children, (child, index) => (
          <Box key={`keen-slide-${index}`} className="keen-slider__slide">
            {child}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
