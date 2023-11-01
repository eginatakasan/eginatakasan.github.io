import React from 'react';
import tw, { styled } from 'twin.macro';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import backgroundImg from '../../assets/images/abstract-bg.png';

export type AboutMeItem = {
  icon: React.ReactNode;
  header: string;
  description: React.ReactNode;
  expanded: boolean;
  onToggle: () => void;
};
type Props = {
  items: AboutMeItem[];
};

const Container = tw.div`flex flex-col w-full min-h-screen h-max px-10 pt-6 md:(flex-row pl-20 pr-0) lg:(pl-40 pr-0) relative
  bg-frosted backdrop-blur
`;
const Title = tw.h1`text-textWhite mt-5 mb-10 text-[28px] md:(text-[72px]) font-bold`;
const LeftColumn = tw.div`flex flex-col justify-center text-left pt-20 pb-6 md:(flex-1 text-left justify-center max-w-[460px]) z-10`;
const RightColumn = tw.div`flex-[2 2] flex flex-col justify-start text-left md:(text-left justify-center px-20) lg:(pr-40) bg-frosted z-10`;
const ListContainer = tw.li`flex flex-col gap-2 mb-4 items-start relative md:(hover:cursor-pointer)`;
const ListHeadingContainer = tw.div`flex flex-row w-full mb-2 gap-4 justify-start`;
const ListContent = styled.div(({ expanded }: { expanded: boolean }) => [
  tw`max-h-0 h-auto flex flex-row justify-between overflow-hidden [transition: max-height linear 250ms]`,
  expanded && tw`max-h-screen`,
]);
const IconContainer = tw.div`inline-flex w-8 flex-[0 0 32px] text-primary-light`;
const Line = styled.div<{ last?: boolean }>(({ last }) => [
  tw`ml-4 border-0 border-l-2 border-solid border-primary-light`,
  last && tw`border-l-0`,
]);
const ExperienceList = tw.ul`max-w-[460px]`;
const ListHeading = tw.div`flex-1 mt-1 font-semibold font-nunitoSans text-textWhite md:(text-base)`;
const ListDescription = styled.div(({ expanded }: { expanded: boolean }) => [
  tw`ml-12 font-extralight text-textWhite text-justify text-sm mb-2 md:(text-base mb-6 [line-height: 1.5]) translate-x-full transition-all opacity-0 [transition-duration: 500ms] [transition-delay: 250ms]`,
  expanded && tw`opacity-100 translate-x-0`,
]);

const WorkEducation = ({ items }: Props) => {
  return (
    <Container style={{ backgroundImage: `url(${backgroundImg})` }}>
      <LeftColumn>
        <Title id="about">Work & Education History</Title>
      </LeftColumn>
      <RightColumn>
        <ExperienceList>
          {items.map(({ icon, header, description, expanded, onToggle }) => (
            <ListContainer key={header} onClick={onToggle}>
              <ListHeadingContainer>
                <IconContainer>{icon}</IconContainer>
                <ListHeading>{header}</ListHeading>
                <ChevronDownIcon
                  width={16}
                  height={32}
                  css={[tw`text-accent`, expanded && tw`rotate-180`]}
                />
              </ListHeadingContainer>
              <ListContent expanded={expanded}>
                <Line />
                <ListDescription expanded={expanded}>
                  {description}
                </ListDescription>
              </ListContent>
            </ListContainer>
          ))}
        </ExperienceList>
      </RightColumn>
    </Container>
  );
};

export default WorkEducation;
