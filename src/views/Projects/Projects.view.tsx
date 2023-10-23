import Text from '../../components/atoms/Text.atom';
import React from 'react';
import tw, { styled } from 'twin.macro';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import TextAtom from '../../components/atoms/Text.atom';

export type ProjectsItem = {
  title: string;
  link?: string;
  linkDesc?: string;
};
type Props = {
  items: ProjectsItem[];
};

const Container = tw.div`flex flex-col w-full min-h-screen h-auto pt-10 px-10 md:(pt-40 pl-20 pr-20 pb-6) lg:(pt-40 pl-40 pr-40 pb-6) relative snap-center`;
const Title = tw(TextAtom.HeadingOne)`text-textWhite`;
const Grid = tw.div`grid grid-cols-2 w-full mt-10 md:(grid-cols-3 gap-6) relative`;
const Project = tw.div`flex flex-col h-[160px] items-center justify-center space-y-5 px-5 py-10 md:(py-10 px-10) text-xl border even:(bg-accent-dark text-accent bg-opacity-60 border-accent-dark) odd:(bg-primary-light text-accent bg-opacity-60 border-primary-light)`;
const ProjectTitle = tw(Text.Small)`font-semibold text-textWhite`;
const Link = styled.a(({ href }: { href?: string }) => [
  tw`text-current underline text-sm font-light hover:text-textWhite`,
  !href && tw`hidden`,
]);

const ProjectsView = ({ items }: Props) => {
  return (
    <Container>
      <Title>Projects</Title>
      <Grid>
        {items.map(({ title, link, linkDesc }) => (
          <Project>
            <ProjectTitle>{title}</ProjectTitle>
            <Link href={link}>{linkDesc ?? link}</Link>
          </Project>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsView;
