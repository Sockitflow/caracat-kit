import { Dimensions } from 'react-native';
import type { Contact, Location } from '../types';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

const randomString = () => Math.random().toString(36).substring(7);

export const createContactListMockData = (count: number = 20): Contact[] => {
  return new Array(count).fill(0).map(() => ({
    name: `${randomString()} ${randomString()}`,
    address: `${randomString()}, ${randomString()}`,
    jobTitle: randomString(),
  }));
};

export const createContactSectionsMockData = (count: number = 20) => {
  return new Array(Math.round(count / 4)).fill(0).map(() => ({
    title: randomString(),
    data: new Array(Math.round(count / 4)).fill(0).map(() => ({
      name: `${randomString()} ${randomString()}`,
      address: `${randomString()}, ${randomString()}`,
      jobTitle: randomString(),
    })),
  }));
};

export const createLocationListMockData = (count: number = 50): Location[] => {
  return [
    {
      id: 'ams',
      name: 'Amsterdam',
      address: 'North Holland, Netherlands',
      photos: [
        'https://www.infocusclinical.com/wp-content/uploads/2020/02/summer-amsterdam-FP.jpg',
        'https://images.theconversation.com/files/162459/original/image-20170325-12162-1tfrmbb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=200&fit=clip',
        'https://www.kevinandamanda.com/wp-content/uploads/2014/09/amsterdam-2014-03.jpg',
        'https://specials-images.forbesimg.com/imageserve/5de4a1db755ebf0006fbea42/960x0.jpg?cropX1=0&cropX2=2121&cropY1=0&cropY2=1414',
      ],
    },
    ...new Array(count).fill(0).map((_, index) => ({
      id: Math.random().toString(36).substring(7),
      name: `${randomString()}`,
      address: `${randomString()}, ${randomString()}`,
      photos: Array(5)
        .fill(0)
        .map((__, _index) => `https://source.unsplash.com/random/${SCREEN_WIDTH + index + _index}`),
    })),
  ];
};
