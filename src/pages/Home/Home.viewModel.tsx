import React from 'react'
import { AboutMeItem } from 'views/About/About.view'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import Icon from '../../components/atoms/Icon'

const useHomeViewModel = () => {
  const aboutMeItems: AboutMeItem[] = [
    {
      icon: <AcademicCapIcon />,
      header: 'Bandung Institute of Technology',
      description: (
        <>
          I am an Informatics Engineering Graduate from{' '}
          <i>Institut Teknologi Bandung</i> (ITB) from 2017 to 2021
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
          I was head of programming for fire-extinguisher robot team (2018)
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
          I had a wonderful internship experience from Agate Studio in 2019.
          <br />
          <br /> I joined the framework team where I experienced using Unity and
          Firebase.
          <br />
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
          (Jakarta-based) in 2021 until present.
        </>
      ),
    },
  ]

  return { aboutMeItems }
}

export default useHomeViewModel
