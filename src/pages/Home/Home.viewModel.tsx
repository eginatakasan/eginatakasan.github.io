import React from 'react'
import { AboutMeItem } from 'views/About/About.view'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import Icon from '../../components/atoms/Icon'
import tw from 'twin.macro'
import { PlaygroundItems } from 'views/Playground/Playground.view'
import AnimationsRoute from '../../pages/Animations/Animations.route'

const useHomeViewModel = () => {
  const aboutMeItems: AboutMeItem[] = [
    {
      icon: <AcademicCapIcon />,
      header: 'Bandung Institute of Technology',
      description: (
        <>
          I am an Informatics Engineering Graduate from{' '}
          <i>Institut Teknologi Bandung</i> (ITB) from{' '}
          <span css={tw`text-primary-light`}>2017</span> to{' '}
          <span css={tw`text-primary-light`}>2021</span>
          <br />
          <br />I wrote my dissertation on metrics to measure UX quality of
          e-commerce platforms
        </>
      ),
    },
    {
      icon: <Icon.Organization />,
      header: 'Member of ITB Robotics Unit',
      description: (
        <>
          I was head of programming for fire-extinguisher robot team{' '}
          <span css={tw`text-primary-light`}>(2018)</span>
          <br />
          <br />I worked on maze-solving and fire-finding algorithms for the
          robot. I experienced programming with robotic sensors and Arduino. I
          was also involved in the recruitment & teaching of new members
        </>
      ),
    },
    {
      icon: <Icon.Internship />,
      header: 'Game Programmer Intern at Agate Studios',
      description: (
        <>
          I had a wonderful internship experience from Agate Studio in{' '}
          <span css={tw`text-primary-light`}>2019</span>.
          <br />
          <br /> I joined the framework team where I experienced using Unity and
          Firebase.
          <br /> I was awarded a golden ticket at the end of the internship.
        </>
      ),
    },
    {
      icon: <BriefcaseIcon />,
      header: 'UX Engineer at Nomura Research Institute (NRI) Indonesia',
      description: (
        <>
          I worked multiple projects remotely as a UX Engineer at NRI Indonesia
          (Jakarta-based) in <span css={tw`text-primary-light`}>2021</span>{' '}
          until present.
        </>
      ),
    },
  ]

  const playgroundItems: PlaygroundItems[] = [
    {
      header: 'CSS Animation',
      description:
        'An experiment consisting smooth transitions and moving SVG animations',
      tags: ['#CSS', '#HTML'],
      link: AnimationsRoute.path ?? '',
    },
  ]

  return { aboutMeItems, playgroundItems }
}

export default useHomeViewModel
