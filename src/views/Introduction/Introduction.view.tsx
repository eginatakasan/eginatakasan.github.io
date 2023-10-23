import Vectors from '../../assets/vectors';
import React from 'react';
import tw from 'twin.macro';
import Text from '../../components/atoms/Text.atom';
import Button from '../../components/atoms/Button.atom';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import {
  ArrowDownTrayIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import Icon from '../../components/atoms/Icon';
import url from '../../constants/url.constant';

// #region STYLED
const Container = tw.div`min-h-full `;
// #endregion

const IntroductionView = () => {
  return <Container>Introduction</Container>;
};

export default IntroductionView;
