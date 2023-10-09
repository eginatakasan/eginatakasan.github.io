import Text from '../../components/atoms/Text/Text.atom';
import React from 'react';
import tw, { styled } from 'twin.macro';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import TextAtom from '../../components/atoms/Text/Text.atom';

export type ProjectsItem = {
  title: string;
  link: string;
};
type Props = {
  items: ProjectsItem[];
};

const Container = tw.div`flex flex-col w-full min-h-screen h-auto md:(pt-40 pl-20 pr-20 pb-6) lg:(pt-40 pl-40 pr-40 pb-6) relative snap-center`;
const Grid = tw.div`grid grid-cols-2 w-full gap-6 mt-10 md:(grid-cols-3) lg:(justify-between) relative snap-end`;
const Project = tw.a`flex h-[160px] items-center justify-center bg-accent`;

const ProjectsView = ({ items }: Props) => {
  return (
    <Container>
      <TextAtom.HeadingOne tw="text-textWhite">
        Past Projects
      </TextAtom.HeadingOne>
      <Grid>
        {items.map(({ title, link }) => (
          <Project href={link}>
            <div tw="">{title}</div>
          </Project>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsView;
