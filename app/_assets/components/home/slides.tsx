import { Slide } from '../../../../types';
import slideOne from '../../images/home/slider-1.webp';
import slideTwo from '../../images/home/slider-2.webp';
import slideThree from '../../images/home/slider-3.webp';
import slideFour from '../../images/home/slider-4.webp';
import slideFive from '../../images/home/slider-5.webp';
import slideSix from '../../images/home/slider-6.webp';

export const sliderOne: Slide[] = [
  { src: slideOne, slideTitle: 'Routines', href: '/posts' },
  { src: slideTwo, slideTitle: 'Nutrition', href: '/posts' },
  { src: slideThree, slideTitle: 'Motivation', href: '/posts' },
];

export const sliderTwo: Slide[] = [
  { src: slideFour, slideTitle: 'Strength Training', href: '/posts' },
  { src: slideFive, slideTitle: 'Planning', href: '/posts' },
  { src: slideSix, slideTitle: 'Recovery', href: '/posts' },
];
